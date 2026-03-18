# 个人网站 v2.0 设计文档

## Part 1: 视觉设计系统

### 色彩系统

**主色调：**
- 背景色: `#f8f9fa` (浅灰白)
- 主文字: `#1a1a1a` (深黑色)
- 次文字: `#6b7280` (中灰色)
- 辅助文字: `#9ca3af` (浅灰色)

**强调色：**
- 主强调: `#3b82f6` (蓝色)
- 次强调: `#8b5cf6` (紫色)
- 成功: `#10b981` (绿色)
- 警告: `#f59e0b` (橙色)
- 错误: `#ef4444` (红色)

**UI色彩：**
- 卡片背景: `#ffffff`
- 边框色: `#e5e7eb`
- 悬停背景: `#f3f4f6`
- 深色区域: `#1f2937`

### 字体系统

**字体家族：**
- 主字体: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- 中文备用: `"PingFang SC", "Microsoft YaHei", sans-serif`

**字号规范：**
- 页面标题: 40px, font-weight: 700
- 区块标题: 28px, font-weight: 600
- 卡片标题: 20px, font-weight: 600
- 正文: 16px, font-weight: 400
- 小字: 14px, font-weight: 400
- 标签: 12px, font-weight: 500

### 间距系统

- 区块间距: 80px
- 卡片间隙: 24px
- 容器最大宽度: 1200px
- 容器内边距: 24px

### 圆角系统

- 卡片圆角: 16px
- 按钮圆角: 12px
- 标签圆角: 20px (胶囊形)
- 头像圆角: 50%

### 阴影系统

- 卡片阴影: `0 4px 6px -1px rgba(0, 0, 0, 0.05)`
- 卡片悬停阴影: `0 10px 25px -5px rgba(0, 0, 0, 0.1)`

---

## Part 2: 全局动画与交互

### 页面过渡动画

- 路由切换: 淡入淡出
- 时长: 300ms
- 缓动: `ease-in-out`

### 滚动触发动画

- 元素从下方淡入
- 时长: 500ms
- 缓动: `cubic-bezier(0.16, 1, 0.3, 1)`
- 错开延迟: 100ms

### 通用悬停效果

- 卡片: 上移 4px + 阴影增强
- 按钮: 透明度变化
- 链接: 颜色变化

---

## Part 3: 页面结构与功能

### 1. 导航栏 (Navbar)

**布局：**
- 固定顶部
- Logo + 导航链接 + 主题切换
- 导航项: 首页、博客、音乐、相册、留言、关于

**交互：**
- 滚动时背景变实
- 当前页面高亮

---

### 2. 首页 (Home)

**Hero 区域：**
- 大标题 + 简介
- 动态打字机效果
- 背景装饰动画

**个人简介卡片：**
- 头像 + 名字 + 职位
- 社交链接
- 简短介绍

**最新博客预览：**
- 显示最新 3 篇文章
- 卡片式布局
- 点击查看更多

**数据统计：**
- 文章数、项目数、音乐数、留言数

---

### 3. 博客页面 (Blog)

**布局：**
- 左侧: 文章列表
- 右侧: 侧边栏

**文章列表：**
- 卡片式展示
- 封面图 + 标题 + 摘要 + 日期 + 标签
- 分类筛选
- 分页

**侧边栏：**
- 个人资料
- 文章分类
- 标签云
- 归档

**文章详情：**
- Markdown 渲染
- 代码高亮
- 分享功能

---

### 4. 音乐播放器页面 (Music)

**布局：**
- 播放器主体
- 播放列表

**播放器功能：**
- 播放/暂停
- 上一首/下一首
- 进度条拖动
- 音量控制
- 循环/随机播放
- 歌词显示

**播放列表：**
- 歌曲列表
- 点击切换
- 当前播放高亮

---

### 5. 相册页面 (Gallery)

**布局：**
- 瀑布流/网格布局
- 分类筛选

**功能：**
- 图片懒加载
- 点击查看大图
- 左右切换
- 图片信息展示

---

### 6. 留言板页面 (Guestbook)

**布局：**
- 留言表单
- 留言列表

**留言表单：**
- 昵称
- 邮箱
- 内容
- 表情选择

**留言列表：**
- 头像 + 昵称 + 时间 + 内容
- 回复功能
- 分页

---

### 7. 关于页面 (About)

**布局：**
- 个人详细介绍
- 时间线经历
- 技能展示
- 联系方式

**内容：**
- 个人故事
- 工作经历时间线
- 技能熟练度
- 联系方式

---

## Part 4: 数据结构

### 博客文章
```typescript
interface BlogPost {
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
```

### 音乐
```typescript
interface Song {
  id: string;
  title: string;
  artist: string;
  cover: string;
  url: string;
  duration: number;
  lyrics?: string;
}
```

### 相册图片
```typescript
interface Photo {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  category: string;
  date: string;
}
```

### 留言
```typescript
interface Message {
  id: string;
  nickname: string;
  avatar: string;
  content: string;
  date: string;
  replies?: Message[];
}
```
