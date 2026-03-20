import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Music, Image, MessageSquare, Github, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getBlogPosts, staticBlogPosts, type BlogPost } from '@/data/blogs';
import { songs } from '@/data/music';
import { photos } from '@/data/photos';
import { messages } from '@/data/messages';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:speedkingblock@hotmail.com', label: 'Email' },
];

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState('');
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>(staticBlogPosts.slice(0, 3));
  const [blogCount, setBlogCount] = useState(staticBlogPosts.length);
  const fullText = '内容分享者 / 知识博主 / 生活记录者';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // 从飞书获取最新博客数据
  useEffect(() => {
    async function loadBlogData() {
      try {
        const posts = await getBlogPosts();
        if (posts.length > 0) {
          setLatestPosts(posts.slice(0, 3));
          setBlogCount(posts.length);
        }
      } catch (error) {
        console.warn('Failed to load blog data from Feishu:', error);
        // 使用静态数据作为备用
      }
    }
    
    loadBlogData();
  }, []);

  const stats = [
    { label: '文章', value: blogCount, icon: BookOpen },
    { label: '音乐', value: songs.length, icon: Music },
    { label: '照片', value: photos.length, icon: Image },
    { label: '留言', value: messages.length, icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-[#f0efe9]">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="animate-on-scroll opacity-0 mb-4">
                <span className="inline-block px-4 py-1.5 bg-[#1a1a1a] text-white text-xs font-medium rounded-full">
                  👋 欢迎来到我的个人博客
                </span>
              </div>

              <h1 className="animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-[56px] font-medium text-[#1a1a1a] leading-[1.1] mb-6">
                你好，我是
                <br />
                瀛同学
              </h1>

              <div className="animate-on-scroll opacity-0 h-8 mb-8">
                <span className="text-lg text-[#6b6b6b] font-mono">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>

              <p className="animate-on-scroll opacity-0 text-[#6b6b6b] text-lg mb-8 max-w-lg">
                这里是一个充满吃喝玩乐、学习以及其他有趣分享的小天地。
                希望我的博客能成为你放松、获取灵感和知识的地方。让我们一起探索生活的美好，享受每一个精彩的瞬间！
              </p>

              <div className="animate-on-scroll opacity-0 flex flex-wrap gap-4">
                <Link to="/blog">
                  <Button className="bg-[#1a1a1a] hover:bg-[#1a1a1a]/85 text-white px-6 py-3 rounded-lg">
                    浏览内容
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white px-6 py-3 rounded-lg">
                    了解更多
                  </Button>
                </Link>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-white shadow-lg">
                  <img
                    src="avatar.jpg"
                    alt="瀛同学"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#1a1a1a] rounded-full opacity-5" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#1a1a1a] rounded-full opacity-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="animate-on-scroll opacity-0 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-6 h-6 text-[#1a1a1a] mb-3" />
                  <div className="text-3xl font-medium text-[#1a1a1a] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[#9ca3af] text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium text-[#1a1a1a]">最新文章</h2>
            <Link
              to="/blog"
              className="flex items-center gap-1 text-[#6b6b6b] hover:text-[#1a1a1a] text-sm font-medium transition-colors"
            >
              查看全部
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestPosts.map((post: BlogPost, index: number) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="animate-on-scroll opacity-0 group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-[#f0f0f0] text-[#4a4a4a] text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-[#9ca3af] text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-medium text-[#1a1a1a] mb-2 group-hover:text-[#6b6b6b] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#6b6b6b] text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#6b6b6b] hover:bg-[#1a1a1a] hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          <p className="text-[#9ca3af] text-sm">
            © 2024 瀛同学. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
