export interface Photo {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

export const photos: Photo[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
    title: '阿尔卑斯山日出',
    description: '清晨的第一缕阳光洒在雪山之巅',
    category: '风景',
    date: '2024-11-15',
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80',
    title: '山间小径',
    description: '漫步在宁静的山间小路上',
    category: '风景',
    date: '2024-11-10',
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&q=80',
    title: '瀑布奇观',
    description: '壮观的瀑布从高处倾泻而下',
    category: '风景',
    date: '2024-10-28',
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&q=80',
    title: '海边日落',
    description: '夕阳西下的海边美景',
    category: '风景',
    date: '2024-10-20',
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80',
    title: '城市夜景',
    description: '繁华都市的璀璨夜色',
    category: '城市',
    date: '2024-10-15',
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80',
    title: '星空银河',
    description: '仰望璀璨的星空',
    category: '风景',
    date: '2024-10-05',
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    title: '人像摄影',
    description: '自然光下的人像作品',
    category: '人像',
    date: '2024-09-28',
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80',
    title: '绿色森林',
    description: '郁郁葱葱的原始森林',
    category: '风景',
    date: '2024-09-20',
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80',
    title: '晨雾山峦',
    description: '薄雾笼罩的山间清晨',
    category: '风景',
    date: '2024-09-15',
  },
  {
    id: '10',
    url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&q=80',
    title: '秋日森林',
    description: '金黄色的秋叶铺满林间',
    category: '风景',
    date: '2024-09-10',
  },
  {
    id: '11',
    url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80',
    title: '城市天际线',
    description: '高楼林立的城市景观',
    category: '城市',
    date: '2024-09-05',
  },
  {
    id: '12',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    title: '街头人像',
    description: '城市街头的随拍',
    category: '人像',
    date: '2024-08-28',
  },
];

export const photoCategories = ['全部', '风景', '城市', '人像'];
