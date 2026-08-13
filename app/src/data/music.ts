/**
 * [INPUT]: 无外部依赖，仅定义自身 Song 结构
 * [OUTPUT]: 对外提供 Song 类型与 songs 曲目数组
 * [POS]: data/ 层的音乐数据源，被 pages/Music 的播放器与 pages/Home 的统计卡片消费。
 *        占位曲目已清空——播放器对空数组有守卫，新增曲目直接往数组里填即可
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
export interface Song {
  id: string;
  title: string;
  artist: string;
  cover: string;
  url: string;
  duration: number;
}

// 占位曲目已清空：宁可空着，也不用假数据冒充真实内容
export const songs: Song[] = [];
