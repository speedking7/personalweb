/**
 * [INPUT]: 依赖 @/types/blog 的 BlogPost 契约
 * [OUTPUT]: 对外提供 parseBlogMetadata —— 把带 YAML frontmatter 的 markdown 解析为 BlogPost 字段
 * [POS]: lib/ 层的格式解析器，是飞书文档与本地 md 文件的共同入口。
 *        两个数据源必须共用它，否则元数据规则会各自漂移，同一篇文章在两条链路上解析出不同结果
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import type { BlogPost } from '../types/blog';

/**
 * 解析博客元数据（从文档顶部提取）
 */
export function parseBlogMetadata(content: string, docId: string): Partial<BlogPost> {
  const metadata: Partial<BlogPost> = {};
  
  // 解析 YAML frontmatter (如果存在)
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    
    // 提取元数据
    const titleMatch = frontmatter.match(/title:\s*["']?([^"'\n]+)["']?/);
    if (titleMatch) metadata.title = titleMatch[1].trim();
    
    const categoryMatch = frontmatter.match(/category:\s*["']?([^"'\n]+)["']?/);
    if (categoryMatch) metadata.category = categoryMatch[1].trim();
    
    const tagsMatch = frontmatter.match(/tags:\s*\[([^\]]+)\]/);
    if (tagsMatch) {
      metadata.tags = tagsMatch[1].split(',').map(tag => tag.trim().replace(/["']/g, ''));
    }
    
    const dateMatch = frontmatter.match(/date:\s*["']?([^"'\n]+)["']?/);
    if (dateMatch) metadata.date = dateMatch[1].trim();
    
    const coverMatch = frontmatter.match(/cover:\s*["']?([^"'\n]+)["']?/);
    if (coverMatch) metadata.coverImage = coverMatch[1].trim();
    
    const readTimeMatch = frontmatter.match(/readTime:\s*(\d+)/);
    if (readTimeMatch) metadata.readTime = parseInt(readTimeMatch[1]);
    
    const excerptMatch = frontmatter.match(/excerpt:\s*["']?([^"'\n]+)["']?/);
    if (excerptMatch) metadata.excerpt = excerptMatch[1].trim();
    
    // 移除 frontmatter，获取正文内容
    metadata.content = content.substring(frontmatterMatch[0].length).trim();
  } else {
    // 如果没有 frontmatter，尝试从内容中提取
    metadata.content = content;
    
    // 从第一个标题提取标题
    const titleMatch = content.match(/^#\s+(.+)$/m);
    if (titleMatch) metadata.title = titleMatch[1].trim();
    
    // 从第一段提取摘要
    const firstParagraph = content.split('\n\n')[1];
    if (firstParagraph) metadata.excerpt = firstParagraph.substring(0, 100) + '...';
  }
  
  // 设置默认值
  metadata.id = docId;
  if (!metadata.date) metadata.date = new Date().toISOString().split('T')[0];
  if (!metadata.category) metadata.category = '未分类';
  if (!metadata.tags) metadata.tags = [];
  if (!metadata.readTime) {
    // 根据内容长度估算阅读时间（假设每分钟阅读 300 字）
    const wordCount = (metadata.content || content).length;
    metadata.readTime = Math.max(1, Math.ceil(wordCount / 300));
  }
  
  return metadata;
}
