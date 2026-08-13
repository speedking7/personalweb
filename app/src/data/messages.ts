/**
 * [INPUT]: 无外部依赖，仅定义自身 Message 与 Reply 结构
 * [OUTPUT]: 对外提供 Message/Reply 类型与 messages 留言数组
 * [POS]: data/ 层的留言板初始数据，被 pages/Guestbook 当作初始状态、pages/Home 当作统计消费。
 *        留言目前是纯前端状态，刷新即丢失，尚未接入任何持久化后端
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
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

// 占位留言已清空：宁可空着，也不用假数据冒充真实内容
export const messages: Message[] = [];
