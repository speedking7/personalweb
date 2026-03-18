import { useEffect } from 'react';
import {
  Code,
  Camera,
  Music,
  Coffee,
  MapPin,
  Mail,
  Github,
  Twitter,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
} from 'lucide-react';

const skills = [
  { name: '内容策划', level: 95 },
  { name: '知识整理', level: 90 },
  { name: '文案写作', level: 85 },
  { name: '视觉表达', level: 80 },
  { name: '读者运营', level: 75 },
  { name: '多媒体创作', level: 85 },
];

const timeline = [
  {
    year: '2024',
    title: '独立内容创作者',
    company: '全职创作',
    description: '专注于多平台内容创作，建立个人品牌影响力',
    icon: Briefcase,
  },
  {
    year: '2022',
    title: '知识博主',
    company: '内容平台',
    description: '开始在各平台分享知识和见解，积累首批忠实读者',
    icon: Briefcase,
  },
  {
    year: '2020',
    title: '开始创作',
    company: '个人博客',
    description: '建立个人博客，开始记录学习笔记和生活感悟',
    icon: GraduationCap,
  },
  {
    year: '2019',
    title: '第一篇内容',
    company: '创作起点',
    description: '写下第一篇分享文章，开启内容创作之旅',
    icon: Award,
  },
];

const hobbies = [
  { name: '编程', icon: Code, description: '热爱代码，追求优雅的解决方案' },
  { name: '摄影', icon: Camera, description: '用镜头记录生活中的美好' },
  { name: '音乐', icon: Music, description: '享受音乐带来的宁静与力量' },
  { name: '咖啡', icon: Coffee, description: '品味生活，从一杯咖啡开始' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:contact@chenmyuan.dev', label: 'Email' },
];

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f0efe9] pt-24 pb-16">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        {/* Profile Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/avatar.jpg"
                  alt="瀛同学"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-medium text-[#1a1a1a] mb-2">
                瀛同学
              </h1>
              <p className="text-lg text-[#6b6b6b] mb-4">
                内容分享者 / 知识博主 / 生活记录者
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-[#9ca3af] mb-6">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  中国 · 上海
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  持续创作中
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  contact@chenmyuan.dev
                </span>
              </div>
              <div className="flex justify-center md:justify-start gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#f0f0f0] rounded-xl flex items-center justify-center text-[#6b6b6b] hover:bg-[#1a1a1a] hover:text-white transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-medium text-[#1a1a1a] mb-6">关于我</h2>
          <div className="space-y-4 text-[#6b6b6b] leading-relaxed">
            <p>
              你好！我是瀛同学，一名热爱分享的内容创作者。从最初记录学习笔记开始，我就被内容创作的魅力深深吸引。多年的创作经历让我在知识整理、观点表达和读者连接方面积累了丰富的经验。
            </p>
            <p>
              我相信好的内容不仅要有信息量，更要有温度和深度。在创作过程中，我注重内容质量，追求真诚表达，同时也乐于探索新的创作形式和话题领域。
            </p>
            <p>
              创作之余，我喜欢摄影和音乐。用镜头捕捉生活中的美好瞬间，用音乐激发创作灵感。这些爱好让我的生活更加丰富多彩，也让我在内容创作中保持敏锐的观察力和持续的创造力。
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-medium text-[#1a1a1a] mb-6">技能专长</h2>
          <div className="space-y-5">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-[#6b6b6b]">
                    {skill.name}
                  </span>
                  <span className="text-[#9ca3af]">{skill.level}%</span>
                </div>
                <div className="h-2 bg-[#f0f0f0] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1a1a1a] rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-medium text-[#1a1a1a] mb-6">经历</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#f0f0f0] rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-[#e5e5e5] my-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <span className="text-sm text-[#9ca3af] font-medium">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-medium text-[#1a1a1a] mt-1">
                      {item.title}
                    </h3>
                    <p className="text-[#9ca3af] text-sm mb-2">{item.company}</p>
                    <p className="text-[#6b6b6b]">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hobbies */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h2 className="text-2xl font-medium text-[#1a1a1a] mb-6">兴趣爱好</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {hobbies.map((hobby) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={hobby.name}
                  className="flex items-start gap-4 p-4 bg-[#f0f0f0] rounded-xl"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1a1a1a] mb-1">
                      {hobby.name}
                    </h3>
                    <p className="text-[#9ca3af] text-sm">{hobby.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
