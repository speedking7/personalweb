import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { blogPosts, categories, tags } from '@/data/blogs';

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === '全部' || post.category === activeCategory;
    const matchesTag = !activeTag || post.tags.includes(activeTag);
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesTag && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f0efe9] pt-24 pb-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-4">
            博客文章
          </h1>
          <p className="text-[#6b6b6b]">分享技术心得、生活感悟和旅行见闻</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Search & Filter */}
            <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                <Input
                  type="text"
                  placeholder="搜索文章..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-11 rounded-lg border-[#e5e5e5] focus:border-[#1a1a1a]"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                      activeCategory === category
                        ? 'bg-[#1a1a1a] text-white'
                        : 'bg-[#f0f0f0] text-[#4a4a4a] hover:bg-[#e5e5e5]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts List */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 aspect-video md:aspect-auto overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 bg-[#f0f0f0] text-[#4a4a4a] text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-[#9ca3af] text-xs">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1 text-[#9ca3af] text-xs">
                          <Clock className="w-3 h-3" />
                          {post.readTime} 分钟
                        </span>
                      </div>
                      <h2 className="text-xl font-medium text-[#1a1a1a] mb-2 group-hover:text-[#6b6b6b] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[#6b6b6b] text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 px-2 py-1 bg-[#f0f0f0] text-[#6b6b6b] text-xs rounded-full"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-[#6b6b6b]">没有找到相关文章</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/personalweb/avatar.jpg"
                  alt="瀛同学"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-[#1a1a1a]">瀛同学</h3>
                  <p className="text-[#9ca3af] text-sm">内容分享者</p>
                </div>
              </div>
              <p className="text-[#6b6b6b] text-sm">
                热爱技术与艺术，分享代码、音乐、照片和思考。
              </p>
            </div>

            {/* Tags Cloud */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-medium text-[#1a1a1a] mb-4">标签云</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() =>
                      setActiveTag(activeTag === tag ? null : tag)
                    }
                    className={`px-3 py-1.5 text-sm rounded-full transition-all ${
                      activeTag === tag
                        ? 'bg-[#1a1a1a] text-white'
                        : 'bg-[#f0f0f0] text-[#4a4a4a] hover:bg-[#e5e5e5]'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Archive */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-medium text-[#1a1a1a] mb-4">归档</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6b6b6b]">2024年12月</span>
                  <span className="text-[#9ca3af]">2篇</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6b6b6b]">2024年11月</span>
                  <span className="text-[#9ca3af]">2篇</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6b6b6b]">2024年10月</span>
                  <span className="text-[#9ca3af]">1篇</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
