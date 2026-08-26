/**
 * [INPUT]: 依赖 @/lib/feishu 的 feishuBlogClient 取远端数据，@/lib/markdown 的 parseBlogMetadata
 *           解析 frontmatter，@/types/blog 的 BlogPost 契约；构建期 glob 内联 content/posts/*.md
 * [OUTPUT]: 对外提供 getBlogPosts/getBlogPost 读取、getCategories/getTags 聚合、
 *           getPostsByCategory/getPostsByTag/searchPosts 筛选、setDataSourceMode 与 clearCache 控制
 * [POS]: data/ 层的博客数据唯一入口，横在 pages/Blog·BlogDetail·Home 与两个数据源之间。
 *        持有 feishu/static/auto 三态降级决策：auto 下飞书失败会静默回落到本地文章。
 *        降级本身不在页面上显形，排查数据问题须从这里的降级分支看起；
 *        但兜底内容是 content/posts/ 下的真实文章，不是占位数据——这是有意的设计
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { feishuBlogClient } from '@/lib/feishu';
import { parseBlogMetadata } from '@/lib/markdown';
import type { BlogPost } from '@/types/blog';

// 重新导出类型
export type { BlogPost };

// 本地文章：构建期由 Vite 静态内联进产物，运行期零请求、零依赖。
//
// 它占据的是 auto 模式下飞书不可用时的降级位。此前这个位置放的是占位假文章，
// 那是危险的——数据源死掉与一切正常在页面上长得一模一样。现在兜的是真文章：
// 飞书通就走飞书，飞书断就走这里，两条链路共用同一个 frontmatter 解析器。
//
// 新增文章 = 往 src/content/posts/ 丢一个带 frontmatter 的 .md，无需改动本文件。
const localPostModules = import.meta.glob('../content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

// 本地文章的封面在 frontmatter 里写相对路径（如 covers/x.svg），此处补上部署 base。
// 不这么做的话，本地 dev 能看见、发到 GitHub Pages 就是 404——因为线上多一层 /personalweb/ 前缀。
// 绝对 URL 与以 / 开头的路径原样返回：飞书文章的封面是完整 URL，绝不能被前缀污染。
const resolveCover = (cover: string): string =>
  !cover || /^(https?:)?\/\//.test(cover) || cover.startsWith('/')
    ? cover
    : `${import.meta.env.BASE_URL}${cover}`;

const staticBlogPosts: BlogPost[] = Object.entries(localPostModules)
  .map(([path, raw]) => {
    // 文件名即文章 id，用于 /blog/:id 路由
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    // 解析器只在命中时写入字段，未命中的键不存在，因此不会覆盖下方默认值
    const post = { title: slug, excerpt: '', coverImage: '', ...parseBlogMetadata(raw, slug) } as BlogPost;
    return { ...post, coverImage: resolveCover(post.coverImage) };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

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
  
  // 兜底同样走真实数据聚合，不写死分类——写死的分类会在文章全空时依旧显示，冒充成统计结果
  const fallback = new Set(['全部']);
  staticBlogPosts.forEach(post => fallback.add(post.category));
  return Array.from(fallback);
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
