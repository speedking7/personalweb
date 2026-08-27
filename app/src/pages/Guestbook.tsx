/**
 * [INPUT]: 依赖 @/components/Comments 挂载 giscus 讨论串，依赖 react 的 useEffect
 * [OUTPUT]: 对外提供 Guestbook 页面组件，对应路由 /guestbook
 * [POS]: pages/ 层的全站留言页。与 BlogDetail 的文章评论共用同一套 Comments 机制，
 *        差别仅在 term：此处固定为 guestbook，文章页传各自的文章 id。
 *        改造前此页是纯 useState 的假实现——能提交、能显示、刷新即丢，
 *        且数据只存在于访客自己的浏览器里，站主永远收不到
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { useEffect } from 'react';
import { Comments } from '@/components/Comments';

export function Guestbook() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f0efe9] pt-24 pb-16">
      <div className="max-w-[800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-4">
            留言板
          </h1>
          <p className="text-[#6b6b6b]">欢迎留言交流，分享你的想法</p>
        </div>

        <Comments term="guestbook" title="全站留言" />
      </div>
    </div>
  );
}
