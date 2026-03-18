import { useEffect, useRef } from 'react';
import { Code, Server, Cloud, Wrench } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: '前端开发',
    items: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: '后端开发',
    items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: Cloud,
    title: 'DevOps',
    items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Nginx'],
  },
  {
    icon: Wrench,
    title: '工具',
    items: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest'],
  },
];

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      id="skills"
      ref={sectionRef}
      className="bg-white py-20 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <h2
          className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-12"
          style={{ animationDelay: '0ms' }}
        >
          技术栈
        </h2>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="animate-on-scroll opacity-0 group bg-[#f0efe9] rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                style={{ animationDelay: `${100 + index * 50}ms` }}
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-[#1a1a1a]" />
                </div>

                <h3 className="text-lg font-medium text-[#1a1a1a] mb-3">
                  {skill.title}
                </h3>

                <ul className="space-y-1.5">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[#6b6b6b]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
