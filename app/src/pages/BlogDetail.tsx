import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Loader2 } from 'lucide-react';
import { getBlogPost, getBlogPosts, type BlogPost } from '@/data/blogs';
import ReactMarkdown from 'react-markdown';

export function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // 加载文章详情
    async function loadPost() {
      if (!id) {
        setError('文章ID无效');
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const loadedPost = await getBlogPost(id);
        setPost(loadedPost || null);
        setError(null);
      } catch (err) {
        console.error('Failed to load post:', err);
        setError('加载文章失败');
      } finally {
        setLoading(false);
      }
    }
    
    loadPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f0efe9] pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#6b6b6b] mb-4" />
          <p className="text-[#6b6b6b]">加载中...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f0efe9] pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-[#1a1a1a] mb-4">
            文章未找到
          </h1>
          <Link
            to="/blog"
            className="text-[#6b6b6b] hover:text-[#1a1a1a] flex items-center gap-2 justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
            返回博客
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0efe9] pt-24 pb-16">
      <div className="max-w-[800px] mx-auto px-6 lg:px-12">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[#6b6b6b] hover:text-[#1a1a1a] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          返回博客
        </Link>

        {/* Article Header */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-8">
          <div className="aspect-video">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#f0f0f0] text-[#4a4a4a] text-sm font-medium rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-[#9ca3af] text-sm">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1 text-[#9ca3af] text-sm">
                <Clock className="w-4 h-4" />
                {post.readTime} 分钟阅读
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-medium text-[#1a1a1a] mb-4">
              {post.title}
            </h1>
            <p className="text-[#6b6b6b] text-lg">{post.excerpt}</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="bg-white rounded-xl p-8 shadow-sm">
          <div className="prose prose-lg max-w-none prose-headings:text-[#1a1a1a] prose-p:text-[#6b6b6b] prose-a:text-[#1a1a1a] prose-code:bg-[#f0f0f0] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-[#1a1a1a] prose-pre:text-[#e5e5e5]">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Tag className="w-5 h-5 text-[#9ca3af]" />
          {post.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white text-[#6b6b6b] text-sm rounded-full shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Related Posts */}
        <RelatedPosts currentPostId={post.id} category={post.category} />
      </div>
    </div>
  );
}

// 相关文章组件
function RelatedPosts({ currentPostId, category }: { currentPostId: string; category: string }) {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    async function loadRelatedPosts() {
      try {
        const allPosts = await getBlogPosts();
        const related = allPosts
          .filter(p => p.id !== currentPostId && p.category === category)
          .slice(0, 2);
        setRelatedPosts(related);
      } catch (err) {
        console.error('Failed to load related posts:', err);
      }
    }
    
    loadRelatedPosts();
  }, [currentPostId, category]);
  
  if (relatedPosts.length === 0) return null;
  
  return (
    <div className="mt-12">
      <h2 className="text-xl font-medium text-[#1a1a1a] mb-6">相关文章</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {relatedPosts.map((relatedPost) => (
          <Link
            key={relatedPost.id}
            to={`/blog/${relatedPost.id}`}
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={relatedPost.coverImage}
                alt={relatedPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-[#1a1a1a] group-hover:text-[#6b6b6b] transition-colors">
                {relatedPost.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
