/**
 * [INPUT]: 依赖 @/config/giscus 的配置与就绪判断，依赖 react 的 useEffect/useRef
 * [OUTPUT]: 对外提供 Comments 组件，按 term 挂载一个独立评论区
 * [POS]: components/ 层的评论挂载器，被 pages/BlogDetail 与 pages/Guestbook 共用。
 *        必须由调用方显式传 term：本站是 HashRouter，所有路由的 pathname 都相同，
 *        若沿用 giscus 默认的 pathname 映射，全站文章会共用同一个讨论串
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { useEffect, useRef } from 'react';
import { giscusConfig, isGiscusReady } from '@/config/giscus';

interface CommentsProps {
  /** 讨论串的唯一标识。文章传文章 id，全站留言板传固定值 */
  term: string;
  /** 区块标题，默认「留言」 */
  title?: string;
}

export function Comments({ term, title = '留言' }: CommentsProps) {
  const holder = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = holder.current;
    if (!el || !isGiscusReady()) return;

    // term 变化时（切换文章）必须清空重挂，giscus 不会自行换串
    el.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-repo', giscusConfig.repo);
    script.setAttribute('data-repo-id', giscusConfig.repoId);
    script.setAttribute('data-category', giscusConfig.category);
    script.setAttribute('data-category-id', giscusConfig.categoryId);
    script.setAttribute('data-mapping', 'specific');
    script.setAttribute('data-term', term);
    script.setAttribute('data-strict', '1');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', giscusConfig.theme);
    script.setAttribute('data-lang', giscusConfig.lang);
    script.setAttribute('data-loading', 'lazy');
    el.appendChild(script);

    return () => {
      el.innerHTML = '';
    };
  }, [term]);

  return (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
      <h2 className="text-xl font-medium text-[#1a1a1a] mb-1">{title}</h2>
      <p className="text-[#9ca3af] text-sm mb-6">
        评论由 GitHub Discussions 驱动，需登录 GitHub 账号后发表
      </p>

      {isGiscusReady() ? (
        <div ref={holder} />
      ) : (
        // 配置缺失时明确说出来。宁可显示一句"还没接通"，
        // 也不要留一片空白让人以为是加载中——那是假装能用。
        <div className="rounded-lg bg-[#faf9f6] border border-[#eee9e0] px-5 py-6">
          <p className="text-[#4a4a4a] text-sm mb-2">评论区尚未接通。</p>
          <p className="text-[#6b7280] text-sm leading-relaxed">
            需要在仓库启用 Discussions、安装 giscus 应用，
            并把生成的 category id 填入 <code className="px-1 bg-[#f0f0f0] rounded">src/config/giscus.ts</code>。
          </p>
        </div>
      )}
    </div>
  );
}
