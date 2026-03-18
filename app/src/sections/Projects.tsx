import { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const categories = ['全部', 'Web应用', '移动应用', '开源项目'];

const projects = [
  {
    id: 1,
    title: '电商平台重构',
    description: '为大型电商平台进行前端架构重构，提升页面加载速度 40%',
    tags: ['React', 'TypeScript', 'Next.js'],
    category: 'Web应用',
  },
  {
    id: 2,
    title: '企业管理系统',
    description: '开发完整的企业内部管理系统，包含权限管理、数据可视化等模块',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    category: 'Web应用',
  },
  {
    id: 3,
    title: '健身追踪 App',
    description: '跨平台移动应用，帮助用户记录运动数据并制定健身计划',
    tags: ['React Native', 'Firebase'],
    category: '移动应用',
  },
  {
    id: 4,
    title: 'UI 组件库',
    description: '开源的 React UI 组件库，提供 50+ 高质量组件',
    tags: ['React', 'TypeScript', 'Storybook'],
    category: '开源项目',
  },
  {
    id: 5,
    title: '实时聊天系统',
    description: '支持群聊、私聊、文件传输的实时通讯系统',
    tags: ['Socket.io', 'Express', 'Redis'],
    category: 'Web应用',
  },
  {
    id: 6,
    title: '数据可视化平台',
    description: '大数据分析可视化平台，支持多种图表类型和实时数据更新',
    tags: ['D3.js', 'React', 'Python'],
    category: 'Web应用',
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === '全部'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-[#f0efe9] py-20 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2
            className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-medium text-[#1a1a1a]"
            style={{ animationDelay: '0ms' }}
          >
            精选项目
          </h2>

          {/* Filter Tags */}
          <div
            className="animate-on-scroll opacity-0 flex flex-wrap gap-2"
            style={{ animationDelay: '100ms' }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-[#1a1a1a] text-white'
                    : 'bg-white text-[#4a4a4a] hover:bg-[#f5f5f5]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-on-scroll opacity-0 group bg-white rounded-xl p-6 cursor-pointer transition-all duration-200 hover:bg-[#fafafa] hover:shadow-md"
              style={{ animationDelay: `${150 + index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#f0efe9] rounded-lg flex items-center justify-center text-lg font-medium text-[#1a1a1a]">
                  {project.title.charAt(0)}
                </div>
                <ExternalLink className="w-5 h-5 text-[#9ca3af] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-xl font-medium text-[#1a1a1a] mb-2 group-hover:text-[#1a1a1a]">
                {project.title}
              </h3>

              <p className="text-sm text-[#6b6b6b] leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-[#f0f0f0] text-[#4a4a4a] text-xs font-medium rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
