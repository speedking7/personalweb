import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Twitter, Send, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('消息已发送！');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#1a1a1a] py-20 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <h2
              className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-medium text-white mb-6"
              style={{ animationDelay: '0ms' }}
            >
              让我们合作
            </h2>

            <p
              className="animate-on-scroll opacity-0 text-[#9ca3af] leading-relaxed mb-8"
              style={{ animationDelay: '100ms' }}
            >
              有项目想法或工作机会？欢迎随时联系我。我会尽快回复您的消息。
            </p>

            <div
              className="animate-on-scroll opacity-0 flex items-center gap-3 mb-10"
              style={{ animationDelay: '200ms' }}
            >
              <div className="w-10 h-10 bg-[#2a2a2a] rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <a
                href="mailto:speedkingblock@hotmail.com"
                className="text-white hover:text-[#9ca3af] transition-colors"
              >
                speedkingblock@hotmail.com
              </a>
            </div>

            {/* Social Links */}
            <div
              className="animate-on-scroll opacity-0 flex gap-3"
              style={{ animationDelay: '300ms' }}
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#2a2a2a] rounded-lg flex items-center justify-center text-[#9ca3af] hover:bg-[#3a3a3a] hover:text-white transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Content - Form */}
          <form
            onSubmit={handleSubmit}
            className="animate-on-scroll opacity-0 space-y-4"
            style={{ animationDelay: '200ms' }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Input
                  type="text"
                  placeholder="您的姓名"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-[#6b6b6b] focus:border-white focus:ring-0 h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="您的邮箱"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-[#6b6b6b] focus:border-white focus:ring-0 h-12"
                />
              </div>
            </div>

            <div>
              <Textarea
                placeholder="您的消息..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-[#6b6b6b] focus:border-white focus:ring-0 resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-white text-[#1a1a1a] hover:bg-white/90 h-12 font-medium transition-all"
            >
              <Send className="w-4 h-4 mr-2" />
              发送消息
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
