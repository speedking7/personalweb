export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  date: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
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

export const categories = ['全部', '技术', '生活', '旅行'];

export const tags = ['React', 'TypeScript', 'CSS', '前端', '年度总结', '感悟', '旅行', '云南', '摄影', 'JavaScript'];
