/**
 * [INPUT]: 无外部依赖，仅定义自身 Photo 结构
 * [OUTPUT]: 对外提供 Photo 类型、photos 相册数组、photoCategories 分类清单
 * [POS]: data/ 层的相册数据源，被 pages/Gallery 的网格与灯箱、pages/Home 的统计消费。
 *        photoCategories 由 photos 实时归纳而非硬编码，分类随数据自动增减，不会出现空分类
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
export interface Photo {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

// 占位照片已清空：宁可空着，也不用假数据冒充真实内容
export const photos: Photo[] = [];

// 分类由现有照片实时归纳，不写死——否则照片删光了分类标签还杵在那儿
export const photoCategories = ['全部', ...Array.from(new Set(photos.map((p) => p.category)))];
