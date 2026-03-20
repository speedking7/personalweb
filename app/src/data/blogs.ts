import { feishuBlogClient } from '@/lib/feishu';
import type { BlogPost } from '@/types/blog';

// 重新导出类型
export type { BlogPost };

// 静态数据作为备用（当飞书 API 不可用时使用）
const staticBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'React 18 新特性详解',
    excerpt: '深入了解 React 18 带来的并发特性、自动批处理、Suspense 改进等重要更新。',
    content: `## React 18 新特性详解

React 18 带来了许多令人兴奋的新特性，让我们一起来看看这些重要的更新。

### 并发特性 (Concurrent Features)

React 18 引入了并发渲染机制，这使得 React 可以同时准备多个版本的 UI。

**useTransition**

useTransition 是一个新的 Hook，用于标记某些状态更新为非紧急更新。

**自动批处理 (Automatic Batching)**

React 18 现在会自动批处理所有状态更新，无论它们发生在何处。这意味着即使在 setTimeout、Promise 或原生事件处理程序中，状态更新也会被自动批处理。

**Suspense 改进**

Suspense 现在支持服务端渲染，并且性能得到了显著提升。这使得我们可以更好地处理异步数据加载，提供更好的用户体验。

### 新的 Hooks

- **useId**: 生成唯一 ID，用于无障碍属性
- **useDeferredValue**: 延迟更新非紧急部分的值
- **useSyncExternalStore**: 订阅外部数据源
- **useInsertionEffect**: 在布局效果之前插入样式

### 升级建议

升级到 React 18 非常简单，只需要更新依赖包并修改根组件的渲染方式即可。`,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    category: '技术',
    tags: ['React', '前端', 'JavaScript'],
    date: '2024-12-15',
    readTime: 8,
  },
  {
    id: '2',
    title: 'TypeScript 高级类型技巧',
    excerpt: '掌握 TypeScript 的高级类型系统，提升代码的类型安全性和可维护性。',
    content: `## TypeScript 高级类型技巧

TypeScript 的类型系统非常强大，本文将介绍一些高级技巧。

### 条件类型

条件类型允许我们根据条件选择类型：

条件类型是 TypeScript 中最强大的特性之一，它让我们能够创建灵活且类型安全的代码。

### 映射类型

映射类型可以基于现有类型创建新类型：

映射类型让我们可以批量转换类型的属性，非常实用。

### 模板字面量类型

模板字面量类型让我们可以操作字符串类型：

这个特性在创建事件处理器类型时特别有用。

### 实用技巧

1. 使用 infer 关键字提取类型
2. 使用 keyof 获取对象的所有键
3. 使用 typeof 获取值的类型
4. 使用 as const 创建只读字面量类型

掌握这些技巧，你的 TypeScript 代码将更加健壮和可维护。`,
    coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
    category: '技术',
    tags: ['TypeScript', '前端'],
    date: '2024-12-10',
    readTime: 12,
  },
  {
    id: '3',
    title: '我的 2024 年度总结',
    excerpt: '回顾过去一年的成长与收获，展望新的一年的目标与计划。',
    content: `## 我的 2024 年度总结

时光飞逝，2024年即将结束。在这一年里，我经历了许多，也成长了许多。

### 技术成长

- 深入学习了 React 18 和 Next.js 14
- 掌握了 TypeScript 高级类型
- 开始接触 AI 和机器学习
- 参与了多个开源项目

### 项目经历

今年参与了多个重要项目：

1. 电商平台重构 - 提升性能 40%
2. 企业管理系统开发 - 完整的权限管理
3. 开源项目贡献 - 提交了 50+ PR

### 生活感悟

工作之外，我也学会了更好地平衡生活。阅读、运动、旅行，让生活更加丰富多彩。

读完了 20 本书，跑了 500 公里，去了 5 个城市。

### 2025 展望

新的一年，我希望能：

- 深入学习 AI 技术
- 完成个人项目
- 保持健康的生活方式
- 去更多的地方旅行

感谢 2024，期待 2025！`,
    coverImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
    category: '生活',
    tags: ['年度总结', '感悟'],
    date: '2024-12-01',
    readTime: 6,
  },
  {
    id: '4',
    title: 'CSS Grid 布局完全指南',
    excerpt: '从基础到进阶，全面掌握 CSS Grid 布局的各种技巧和应用场景。',
    content: `## CSS Grid 布局完全指南

CSS Grid 是现代网页布局的利器，让我们从基础开始学习。

### 基础概念

Grid 布局由容器和项目组成。容器定义网格结构，项目放置在网格中。

### 常用属性

**grid-template-columns**

定义列的宽度和数量。可以使用 fr 单位、repeat 函数等。

**grid-template-rows**

定义行的高度和数量。

**grid-area**

定义项目占据的区域。

### 实用技巧

1. 使用 auto-fit 和 auto-fill 创建响应式网格
2. 使用 minmax 设置最小和最大尺寸
3. 使用 grid-gap 设置间距
4. 使用 grid-template-areas 创建复杂布局

### 实战案例

创建一个响应式的图片画廊：

这个布局会根据屏幕宽度自动调整列数。

Grid 布局让复杂的网页布局变得简单，是现代前端开发必备技能。`,
    coverImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80',
    category: '技术',
    tags: ['CSS', '前端'],
    date: '2024-11-20',
    readTime: 10,
  },
  {
    id: '5',
    title: '旅行日记：云南之行',
    excerpt: '记录云南之旅的美好瞬间，分享旅途中的见闻和感悟。',
    content: `## 旅行日记：云南之行

云南，一个充满魅力的地方。这次旅行让我留下了难忘的回忆。

### 丽江古城

漫步在古城的石板路上，感受纳西族的独特文化。小桥流水，古朴的建筑，让人仿佛穿越回了过去。

夜晚的古城更加迷人，灯笼亮起，酒吧街传来悠扬的歌声。

### 玉龙雪山

站在雪山脚下，仰望巍峨的山峰，感受大自然的壮丽。

海拔 4680 米的冰川公园，虽然空气稀薄，但风景绝美。

### 洱海

骑行环洱海，欣赏湖光山色，享受慢生活的惬意。

沿途的白族村落、花海、湿地公园，每一处都是风景。

### 美食

过桥米线、汽锅鸡、鲜花饼...云南的美食让人回味无穷。

最喜欢的是大理的乳扇和丽江的腊排骨火锅。

### 总结

云南之行让我放松了身心，也让我更加热爱生活。期待下一次旅行！`,
    coverImage: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80',
    category: '旅行',
    tags: ['旅行', '云南', '摄影'],
    date: '2024-11-05',
    readTime: 5,
  },
];

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

// 默认导出分类和标签（向后兼容）
export const categories = ['全部', '技术', '生活', '旅行'];
export const tags = ['React', 'TypeScript', 'CSS', '前端', '年度总结', '感悟', '旅行', '云南', '摄影', 'JavaScript'];