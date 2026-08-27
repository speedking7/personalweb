/**
 * [INPUT]: 无依赖，纯配置常量
 * [OUTPUT]: 对外提供 giscusConfig 配置对象与 isGiscusReady 就绪判断
 * [POS]: config/ 层的评论系统配置，被 components/Comments 消费。
 *        集中在此是为了让 categoryId 这类需人工获取的值只有一个填写位置；
 *        未配置时 isGiscusReady 为 false，组件据此显式提示而非静默空白
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export const giscusConfig = {
  repo: 'speedking7/personalweb' as const,
  // 由 GitHub API 的 node_id 得来，仓库改名也不会变
  repoId: 'R_kgDORqbsFQ',

  // 建议用 Announcements：只有仓库维护者能发起新讨论，
  // 读者只能在既有讨论下回复，可挡掉大部分垃圾内容。
  category: 'Announcements',

  // ⚠️ 需在仓库启用 Discussions 后手工填入。
  // 取值方式：打开 https://giscus.app ，填入仓库名，页面会生成 data-category-id。
  categoryId: 'DIC_kwDORqbsFc4DERcV',

  // 站点是浅色米白底，用 light 最接近；不跟随系统深色，避免评论区与页面撞色
  theme: 'light',
  lang: 'zh-CN',
} as const;

/** 配置齐备才算就绪。缺 categoryId 时组件显示提示，不假装能用。 */
export const isGiscusReady = (): boolean =>
  Boolean(giscusConfig.repoId && giscusConfig.categoryId);
