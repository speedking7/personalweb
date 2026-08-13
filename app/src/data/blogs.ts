/**
 * [INPUT]: 依赖 @/lib/feishu 的 feishuBlogClient 取远端数据，依赖 @/types/blog 的 BlogPost 契约
 * [OUTPUT]: 对外提供 getBlogPosts/getBlogPost 读取、getCategories/getTags 聚合、
 *           getPostsByCategory/getPostsByTag/searchPosts 筛选、setDataSourceMode 与 clearCache 控制
 * [POS]: data/ 层的博客数据唯一入口，横在 pages/Blog·BlogDetail·Home 与飞书之间。
 *        持有 feishu/static/auto 三态降级决策：auto 下飞书失败会静默回落静态兜底，
 *        故障因此不会在页面上显形——排查数据问题应从这里的降级分支看起
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { feishuBlogClient } from '@/lib/feishu';
import type { BlogPost } from '@/types/blog';

// 重新导出类型
export type { BlogPost };

// 静态兜底数据。此前的占位假文章已清空——数据源不通时宁可空着，
// 也不拿假内容冒充真实博客，否则"数据源已死"与"一切正常"在页面上长得一模一样。
const staticBlogPosts: BlogPost[] = [];

// 数据源模式
type DataSourceMode = 'feishu' | 'static' | 'auto';

let dataSourceMode: DataSourceMode = (import.meta.env.VITE_DATA_SOURCE_MODE as DataSourceMode) || 'auto';

/**
 * 设置数据源模式
 * - 'feishu': 仅使用飞书知识库数据源
 * - 'static': 仅使用静态数据
 * - 'auto': 优先飞书，失败时降级到静态数据（默认）
 */
export function setDataSourceMode(mode: DataSourceMode): void {
  dataSourceMode = mode;
}

/**
 * 获取博客文章列表
 * 优先从飞书知识库获取，失败时降级到静态数据
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  // 仅使用静态数据模式
  if (dataSourceMode === 'static') {
    return staticBlogPosts;
  }
  
  // 仅使用飞书模式 或 自动模式（先尝试飞书）
  if (dataSourceMode === 'feishu' || dataSourceMode === 'auto') {
    try {
      const posts = await feishuBlogClient.fetchBlogPosts();
      // 如果获取到数据，直接返回
      if (posts.length > 0) {
        return posts;
      }
      // 如果飞书返回空数据且是 auto 模式，降级到静态数据
      if (dataSourceMode === 'auto') {
        console.warn('Feishu returned empty data, falling back to static data');
        return staticBlogPosts;
      }
    } catch (error) {
      console.warn('Failed to fetch from Feishu:', error);
      // 自动模式下降级到静态数据
      if (dataSourceMode === 'auto') {
        return staticBlogPosts;
      }
    }
  }
  
  return [];
}

/**
 * 获取单篇博客文章
 * 优先从飞书知识库获取，失败时降级到静态数据
 */
export async function getBlogPost(id: string): Promise<BlogPost | undefined> {
  // 仅使用静态数据模式
  if (dataSourceMode === 'static') {
    return staticBlogPosts.find(post => post.id === id);
  }
  
  // 仅使用飞书模式 或 自动模式（先尝试飞书）
  if (dataSourceMode === 'feishu' || dataSourceMode === 'auto') {
    try {
      const posts = await feishuBlogClient.fetchBlogPosts();
      const post = posts.find(p => p.id === id);
      if (post) {
        return post;
      }
      // 如果飞书没有找到文章且是 auto 模式，降级到静态数据
      if (dataSourceMode === 'auto') {
        return staticBlogPosts.find(post => post.id === id);
      }
    } catch (error) {
      console.warn('Failed to fetch post from Feishu:', error);
      // 自动模式下降级到静态数据
      if (dataSourceMode === 'auto') {
        return staticBlogPosts.find(post => post.id === id);
      }
    }
  }
  
  return undefined;
}

/**
 * 获取分类列表
 * 优先从飞书知识库获取，失败时降级到静态数据
 */
export async function getCategories(): Promise<string[]> {
  // 仅使用静态数据模式
  if (dataSourceMode === 'static') {
    const categories = new Set(['全部']);
    staticBlogPosts.forEach(post => categories.add(post.category));
    return Array.from(categories);
  }
  
  // 仅使用飞书模式 或 自动模式
  if (dataSourceMode === 'feishu' || dataSourceMode === 'auto') {
    try {
      // 先从飞书获取文章列表（会更新缓存）
      await feishuBlogClient.fetchBlogPosts();
      const categories = feishuBlogClient.getCategories();
      return ['全部', ...categories.filter(c => c !== '全部' && c !== '未分类')];
    } catch (error) {
      console.warn('Failed to fetch categories from Feishu:', error);
      // 自动模式下降级到静态数据
      if (dataSourceMode === 'auto') {
        const categories = new Set(['全部']);
        staticBlogPosts.forEach(post => categories.add(post.category));
        return Array.from(categories);
      }
    }
  }
  
  return ['全部', '技术', '生活', '旅行'];
}

/**
 * 获取标签列表
 * 优先从飞书知识库获取，失败时降级到静态数据
 */
export async function getTags(): Promise<string[]> {
  // 仅使用静态数据模式
  if (dataSourceMode === 'static') {
    const tags = new Set<string>();
    staticBlogPosts.forEach(post => post.tags.forEach((tag: string) => tags.add(tag)));
    return Array.from(tags);
  }
  
  // 仅使用飞书模式 或 自动模式
  if (dataSourceMode === 'feishu' || dataSourceMode === 'auto') {
    try {
      // 先从飞书获取文章列表（会更新缓存）
      await feishuBlogClient.fetchBlogPosts();
      return feishuBlogClient.getTags();
    } catch (error) {
      console.warn('Failed to fetch tags from Feishu:', error);
      // 自动模式下降级到静态数据
      if (dataSourceMode === 'auto') {
        const tags = new Set<string>();
        staticBlogPosts.forEach(post => post.tags.forEach((tag: string) => tags.add(tag)));
        return Array.from(tags);
      }
    }
  }
  
  return [];
}

/**
 * 按分类筛选博客
 */
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  if (category === '全部') return posts;
  return posts.filter(post => post.category === category);
}

/**
 * 按标签筛选博客
 */
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts.filter(post => post.tags.includes(tag));
}

/**
 * 搜索博客
 */
export async function searchPosts(query: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  const lowerQuery = query.toLowerCase();
  return posts.filter(post => 
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.content.toLowerCase().includes(lowerQuery) ||
    post.tags.some((tag: string) => tag.toLowerCase().includes(lowerQuery))
  );
}

/**
 * 清除缓存
 * 清除飞书客户端缓存
 */
export function clearCache(): void {
  feishuBlogClient.clearCache();
}

// 导出静态数据用于构建时（如果需要）
export { staticBlogPosts };
