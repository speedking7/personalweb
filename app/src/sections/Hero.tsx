import { useEffect, useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-[#f0efe9] pt-16 flex items-center"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: '0ms' }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#1a1a1a] text-white text-xs font-medium rounded-full mb-6">
                内容分享者
              </span>
            </div>

            <h1
              className="animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-[56px] font-medium text-[#1a1a1a] leading-[1.1] mb-6"
              style={{ animationDelay: '100ms' }}
            >
              你好，我是
              <br />
              瀛同学
            </h1>

            <p
              className="animate-on-scroll opacity-0 text-lg text-[#6b6b6b] leading-relaxed mb-8 max-w-[480px]"
              style={{ animationDelay: '200ms' }}
            >
              这里是一个充满吃喝玩乐、学习以及其他有趣分享的小天地。
              希望我的博客能成为你放松、获取灵感和知识的地方。
            </p>

            <div
              className="animate-on-scroll opacity-0 flex flex-wrap gap-4"
              style={{ animationDelay: '300ms' }}
            >
              <Button
                onClick={() => scrollToSection('#projects')}
                className="bg-[#1a1a1a] text-white hover:bg-[#1a1a1a]/85 px-6 py-2.5 rounded-lg transition-all"
              >
                查看项目
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white px-6 py-2.5 rounded-lg transition-all"
              >
                <Mail className="w-4 h-4 mr-2" />
                联系我
              </Button>
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div
            className="animate-on-scroll opacity-0 order-1 lg:order-2 flex justify-center lg:justify-end"
            style={{ animationDelay: '400ms' }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-white shadow-lg">
                <img
                  src="/personalweb/avatar.jpg"
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
  );
}
