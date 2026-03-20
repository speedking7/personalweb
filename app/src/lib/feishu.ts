/**
 * 飞书 API 集成模块
 * 用于从飞书知识库获取博客内容
 */

import type { BlogPost } from '../types/blog';

// 重新导出 BlogPost 类型
export type { BlogPost };

// 飞书 API 配置
const FEISHU_CONFIG = {
  // 飞书开放平台应用凭证（需要后端代理或环境变量配置）
  appId: import.meta.env.VITE_FEISHU_APP_ID || '',
  appSecret: import.meta.env.VITE_FEISHU_APP_SECRET || '',
  // 知识库 Token（从飞书知识库 URL 获取）
  wikiToken: import.meta.env.VITE_FEISHU_WIKI_TOKEN || '',
  // 博客文件夹 Token
  blogFolderToken: import.meta.env.VITE_FEISHU_BLOG_FOLDER_TOKEN || '',
};

// 缓存配置
const CACHE_CONFIG = {
  enabled: true,
  duration: 10 * 60 * 1000, // 10分钟缓存
};

// 博客缓存
interface BlogCache {
  posts: BlogPost[];
  lastUpdate: number;
  categories: string[];
  tags: string[];
}

let blogCache: BlogCache | null = null;

/**
 * 解析博客元数据（从文档顶部提取）
 */
function parseBlogMetadata(content: string, docId: string): Partial<BlogPost> {
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

/**
 * 飞书 API 客户端
 */
export class FeishuBlogClient {
  private tenantAccessToken: string | null = null;
  private tokenExpireTime: number = 0;
  
  /**
   * 获取 tenant_access_token
   */
  // @ts-ignore - 方法暂时未被使用，但保留以备将来需要
  private async getTenantAccessToken(): Promise<string> {
    // 如果 token 未过期，直接返回
    if (this.tenantAccessToken && Date.now() < this.tokenExpireTime) {
      return this.tenantAccessToken!;
    }
    
    // 需要通过后端代理获取 token（避免暴露 appSecret）
    const response = await fetch('/api/feishu/auth', {
      method: 'POST',
    });
    
    if (!response.ok) {
      throw new Error('Failed to get tenant access token');
    }
    
    const data = await response.json();
    this.tenantAccessToken = data.tenant_access_token;
    this.tokenExpireTime = Date.now() + (data.expire - 300) * 1000; // 提前5分钟过期
    
    return this.tenantAccessToken!;
  }
  
  /**
   * 从飞书知识库获取所有博客文章
   */
  async fetchBlogPosts(): Promise<BlogPost[]> {
    // 检查缓存
    if (CACHE_CONFIG.enabled && blogCache && 
        Date.now() - blogCache.lastUpdate < CACHE_CONFIG.duration) {
      return blogCache.posts;
    }
    
    try {
      // 获取知识库节点列表（后端自动处理 token）
      const nodesResponse = await fetch(
        `/api/feishu/wiki/${FEISHU_CONFIG.wikiToken}/nodes?parent_node_token=${FEISHU_CONFIG.blogFolderToken}`
      );
      
      if (!nodesResponse.ok) {
        throw new Error('Failed to fetch wiki nodes');
      }
      
      const nodesData = await nodesResponse.json();
      const posts: BlogPost[] = [];
      
      // 遍历所有文档节点
      for (const node of nodesData.data?.items || []) {
        if (node.obj_type !== 'docx') continue;
        
        try {
          // 获取文档内容
          const docResponse = await fetch(
            `/api/feishu/docx/${node.obj_token}/raw`
          );
          
          if (!docResponse.ok) continue;
          
          const docData = await docResponse.json();
          const content = docData.data?.content || '';
          
          // 解析元数据
          const metadata = parseBlogMetadata(content, node.obj_token);
          
          posts.push({
            id: metadata.id!,
            title: metadata.title || node.title,
            excerpt: metadata.excerpt || '',
            content: metadata.content || content,
            coverImage: metadata.coverImage || this.getDefaultCover(metadata.category),
            category: metadata.category || '未分类',
            tags: metadata.tags || [],
            date: metadata.date || new Date().toISOString().split('T')[0],
            readTime: metadata.readTime || 5,
          });
        } catch (error) {
          console.error(`Failed to fetch document ${node.obj_token}:`, error);
        }
      }
      
      // 按日期排序（最新的在前）
      posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
      // 更新缓存
      blogCache = {
        posts,
        lastUpdate: Date.now(),
        categories: [...new Set(posts.map(p => p.category))],
        tags: [...new Set(posts.flatMap(p => p.tags))],
      };
      
      return posts;
    } catch (error) {
      console.error('Failed to fetch blog posts from Feishu:', error);
      // 如果获取失败，返回缓存的旧数据或空数组
      return blogCache?.posts || [];
    }
  }
  
  /**
   * 解析飞书 Docx 内容为 Markdown
   */
  // @ts-ignore - 方法暂时未被使用，但保留以备将来需要
  private parseDocxContent(docData: any): string {
    // 简化版本：飞书文档内容的实际解析需要根据飞书 API 返回的结构实现
    // 这里提供一个基础框架
    if (!docData?.content) return '';
    
    let markdown = '';
    
    // 遍历文档块
    for (const block of docData.content.blocks || []) {
      switch (block.type) {
        case 'paragraph':
          markdown += this.parseParagraph(block) + '\n\n';
          break;
        case 'heading1':
          markdown += `# ${this.getText(block)}\n\n`;
          break;
        case 'heading2':
          markdown += `## ${this.getText(block)}\n\n`;
          break;
        case 'heading3':
          markdown += `### ${this.getText(block)}\n\n`;
          break;
        case 'bulletList':
          markdown += `- ${this.getText(block)}\n`;
          break;
        case 'numberList':
          markdown += `1. ${this.getText(block)}\n`;
          break;
        case 'code':
          markdown += `\`\`\`\n${this.getText(block)}\n\`\`\`\n\n`;
          break;
        case 'image':
          markdown += `![${block.alt || 'image'}](${block.url || ''})\n\n`;
          break;
        default:
          markdown += this.getText(block) + '\n\n';
      }
    }
    
    return markdown.trim();
  }
  
  private parseParagraph(block: any): string {
    // 解析富文本段落
    let text = '';
    for (const segment of block.segments || []) {
      let segmentText = segment.text || '';
      
      // 处理格式
      if (segment.bold) segmentText = `**${segmentText}**`;
      if (segment.italic) segmentText = `*${segmentText}*`;
      if (segment.code) segmentText = `\`${segmentText}\``;
      if (segment.link) segmentText = `[${segmentText}](${segment.link})`;
      
      text += segmentText;
    }
    return text;
  }
  
  private getText(block: any): string {
    return block.text?.content || '';
  }
  
  /**
   * 根据分类获取默认封面图
   */
  private getDefaultCover(category?: string): string {
    const covers: Record<string, string> = {
      '技术': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
      '生活': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
      '旅行': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
    };
    return covers[category || ''] || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80';
  }
  
  /**
   * 清除缓存
   */
  clearCache(): void {
    blogCache = null;
  }
  
  /**
   * 获取分类列表
   */
  getCategories(): string[] {
    return blogCache?.categories || ['全部', '技术', '生活', '旅行'];
  }
  
  /**
   * 获取标签列表
   */
  getTags(): string[] {
    return blogCache?.tags || [];
  }
}

// 导出单例实例
export const feishuBlogClient = new FeishuBlogClient();