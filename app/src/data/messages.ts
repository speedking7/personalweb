export interface Message {
  id: string;
  nickname: string;
  avatar: string;
  content: string;
  date: string;
  replies?: Reply[];
}

export interface Reply {
  id: string;
  nickname: string;
  avatar: string;
  content: string;
  date: string;
}

export const messages: Message[] = [
  {
    id: '1',
    nickname: '小明',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=xiaoming',
    content: '网站设计得很棒！特别是音乐播放器，界面简洁又好用。',
    date: '2024-12-14 10:30',
    replies: [
      {
        id: '1-1',
        nickname: '瀛同学',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chenmy',
        content: '谢谢支持！会继续优化体验的。',
        date: '2024-12-14 11:00',
      },
    ],
  },
  {
    id: '2',
    nickname: '前端爱好者',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=frontend',
    content: '博客文章写得很详细，React 那篇对我帮助很大！',
    date: '2024-12-13 15:45',
  },
  {
    id: '3',
    nickname: '旅行者',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=traveler',
    content: '云南的照片太美了，我也想去看看！',
    date: '2024-12-12 09:20',
  },
  {
    id: '4',
    nickname: '程序员小王',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wang',
    content: 'TypeScript 高级类型的文章很有深度，学习了！',
    date: '2024-12-10 18:30',
  },
  {
    id: '5',
    nickname: '音乐迷',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=music',
    content: '歌单很棒，都是经典歌曲！希望能添加更多新歌。',
    date: '2024-12-09 14:15',
  },
  {
    id: '6',
    nickname: '摄影师阿杰',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jie',
    content: '相册的风景照构图很棒，请问是用什么相机拍的？',
    date: '2024-12-08 20:00',
    replies: [
      {
        id: '6-1',
        nickname: '瀛同学',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chenmy',
        content: '谢谢！主要用 Sony A7M4，镜头是 24-70mm GM。',
        date: '2024-12-08 21:30',
      },
    ],
  },
];
