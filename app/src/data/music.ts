export interface Song {
  id: string;
  title: string;
  artist: string;
  cover: string;
  url: string;
  duration: number;
}

export const songs: Song[] = [
  {
    id: '1',
    title: '晴天',
    artist: '周杰伦',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: 269,
  },
  {
    id: '2',
    title: '七里香',
    artist: '周杰伦',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    duration: 299,
  },
  {
    id: '3',
    title: '夜曲',
    artist: '周杰伦',
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    duration: 226,
  },
  {
    id: '4',
    title: '稻香',
    artist: '周杰伦',
    cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    duration: 223,
  },
  {
    id: '5',
    title: '告白气球',
    artist: '周杰伦',
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    duration: 205,
  },
  {
    id: '6',
    title: '青花瓷',
    artist: '周杰伦',
    cover: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=400&q=80',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    duration: 239,
  },
  {
    id: '7',
    title: '简单爱',
    artist: '周杰伦',
    cover: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&q=80',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    duration: 270,
  },
  {
    id: '8',
    title: '听妈妈的话',
    artist: '周杰伦',
    cover: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=400&q=80',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    duration: 264,
  },
];
