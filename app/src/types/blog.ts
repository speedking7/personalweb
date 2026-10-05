/**
 * [INPUT]: 无依赖，纯类型定义
 * [OUTPUT]: 对外提供 BlogPost 接口 —— 博客文章的领域契约
 * [POS]: types/ 层的领域契约，飞书链路（lib/feishu）与本地 md 链路（data/blogs）
 *        共用同一份形状；pages 各页面只认这个类型，不认任何数据源自己的结构
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */

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