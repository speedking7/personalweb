import { useEffect, useRef } from 'react';

const stats = [
  { value: '100+', label: '原创内容' },
  { value: '10K+', label: '读者关注' },
  { value: '5+', label: '内容领域' },
];

export function About() {
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
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-white py-20 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2
              className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-8"
              style={{ animationDelay: '0ms' }}
            >
              关于我
            </h2>

            <div className="space-y-6">
              <p
                className="animate-on-scroll opacity-0 text-[#6b6b6b] leading-relaxed"
                style={{ animationDelay: '100ms' }}
              >
                我是一名内容创作者，专注于分享有价值的知识和见解。我相信好的内容能够启发思考、传递价值、连接志同道合的人。
              </p>

              <p
                className="animate-on-scroll opacity-0 text-[#6b6b6b] leading-relaxed"
                style={{ animationDelay: '200ms' }}
              >
                我相信内容不仅是信息的传递，更是思想的交流。我追求深度与温度并存的表达，注重与读者的每一次连接。
              </p>
            </div>

            {/* Stats */}
            <div
              className="animate-on-scroll opacity-0 grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-[#e5e5e5]"
              style={{ animationDelay: '300ms' }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Decoration Image */}
          <div
            className="animate-on-scroll opacity-0 flex justify-center lg:justify-end"
            style={{ animationDelay: '200ms' }}
          >
            <div className="relative w-full max-w-md">
              <img
                src="/decoration.jpg"
                alt="装饰图案"
                className="w-full h-auto rounded-2xl shadow-sm"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f0efe9]/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
