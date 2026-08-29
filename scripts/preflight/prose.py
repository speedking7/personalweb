#!/usr/bin/env python3
"""
[INPUT]: 依赖标准库 re/sys/pathlib；读 app/src/content/posts/*.md 与 app/public/covers/*
[OUTPUT]: 对外提供命令行入口，以及 analyze() / gates() 供 cover.py 之外的调用方复用
[POS]: scripts/preflight 的文章验收器，与 cover.py 分管「文字」与「图」两侧；
       闸门规则来自 BLOG_PLAYBOOK.md 第六节的两个雷，指标来自 WRITING_STYLE.md 第三节
[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
POSTS = ROOT / "app/src/content/posts"
PUBLIC = ROOT / "app/public"

# parseBlogMetadata 的硬编码字段白名单；wechat 是发布侧元数据，故意不进前端契约
WHITELIST = {"title", "category", "tags", "date", "cover", "readTime", "excerpt", "wechat"}

# WRITING_STYLE.md 第三节的节奏参数
TARGETS = {
    "段落均长": 25.0,
    "句子均长": 23.0,
    "极短段占比": 25.0,
    "「你」每千字": 22.0,
    "问句每千字": 10.0,
}


def split_frontmatter(text):
    m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    if not m:
        return None, text
    return m.group(1), text[m.end():]


def strip_code(text):
    """剥掉围栏代码块。它不是正文——算进去会把讲技术的那几篇的指标整片带偏，
    也会让代码块里形如 [文字](地址) 的示例被误当成站内链接。"""
    return re.sub(r"^```.*?^```", "", text, flags=re.S | re.M)


def paragraphs(body):
    """剥掉代码块、链接、强调、标题与分隔线，留下正文段落。指标口径的唯一出处。"""
    t = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", strip_code(body))
    t = re.sub(r"\*\*|\*|`", "", t)
    out = []
    for block in (b.strip() for b in t.split("\n\n")):
        if not block or block.startswith("#") or re.fullmatch(r"-{3,}", block):
            continue
        out.append(block)
    return out


def analyze(body):
    paras = paragraphs(body)
    if not paras:
        return None
    lens = [len(re.sub(r"\s", "", p)) for p in paras]
    total = sum(lens)
    flat = re.sub(r"\s", "", "".join(paras))
    sents = [s for s in re.split(r"(?<=[。！？])", flat) if s.strip()]
    return {
        "总字数": total,
        "段落数": len(paras),
        "段落均长": total / len(paras),
        "句子均长": sum(len(s) for s in sents) / len(sents),
        "极短段占比": sum(1 for n in lens if n <= 15) / len(paras) * 100,
        "「你」每千字": flat.count("你") / total * 1000,
        "问句每千字": sum(1 for s in sents if s.endswith("？")) / total * 1000,
        "_尾段": lens[-1],
    }


def gates(path, fm, body, stats):
    """只拦「错了就没救」的静默失败。每条给出下一步该做什么，而非名词解释。"""
    res = []

    def add(ok, name, detail):
        res.append((ok, name, detail))

    fields = {l.split(":")[0].strip() for l in fm.split("\n") if l.strip() and ":" in l}
    extra = fields - WHITELIST
    add(not extra, "frontmatter 字段白名单",
        "全部在白名单内" if not extra
        else f"{'、'.join(sorted(extra))} 会被 parseBlogMetadata 静默丢弃 → 删掉，"
             f"或同时改 lib/markdown.ts 与 lib/feishu.ts")

    m = re.search(r"tags:\s*\[([^\]]*)\]", fm)
    if not m:
        add(False, "tags 半角逗号", "没找到 tags: [...] → 补上，否则标签页筛不出这篇")
    else:
        raw = m.group(1)
        tags = [x.strip() for x in raw.split(",") if x.strip()]
        ok = "，" not in raw
        add(ok, "tags 半角逗号",
            f"解析出 {tags}" if ok
            else f"含全角逗号，会被当成一整条标签 {[raw.strip()]} → 换成半角。"
                 f"页面照常显示，只是标签页永远筛不出这篇")

    m = re.search(r"cover:\s*(\S+)", fm)
    if not m:
        add(False, "cover 路径", "没有 cover 字段")
    else:
        cov = m.group(1)
        rel = not cov.startswith("/")
        add(rel, "cover 相对路径",
            cov if rel else f"{cov} 以 / 开头 → 去掉，resolveCover 会补部署前缀")
        f = PUBLIC / cov
        add(f.exists(), "cover 文件存在",
            f"{f.stat().st_size // 1024} KB" if f.exists() else f"找不到 {f}")

    dead = []
    for label, url in re.findall(r"\[([^\]]+)\]\((https://blog\.[^)]+)\)", strip_code(body)):
        tail = url.split("/#/")[-1]
        if re.fullmatch(r"blog/\d{4}-\d{2}-\d{2}-[\w-]+", tail):
            if not (POSTS / f"{tail.split('/')[-1]}.md").exists():
                dead.append(f"「{label}」→ {tail}")
    add(not dead, "站内链接非死链",
        "全部指向存在的文章" if not dead else "；".join(dead) + " → 核对文章 id")

    # 「结尾段短于正文均长」刻意不在这里。它是看得见、随时能改的风格问题，
    # 不是静默失败；而且带附录的文章（正文后跟大段代码块）会被误判——
    # 第二篇的真结尾是 22 字冷短句，脚本看到的却是附录引导语。放指标区报数。
    return res


def history(exclude):
    """已发篇目的指标区间。只有横向比，才分得清是失手还是固有偏移。"""
    rows = []
    for f in sorted(POSTS.glob("*.md")):
        if f.resolve() == exclude.resolve():
            continue
        _, body = split_frontmatter(f.read_text(encoding="utf-8"))
        s = analyze(body)
        if s:
            rows.append(s)
    return rows


def check(path):
    text = path.read_text(encoding="utf-8")
    fm, body = split_frontmatter(text)
    if fm is None:
        print(f"✗ {path.name}：没有 frontmatter")
        return False
    stats = analyze(body)
    if stats is None:
        print(f"✗ {path.name}：正文为空")
        return False

    print(f"\n{'=' * 62}\n{path.name}\n{'=' * 62}")
    print(f"{stats['总字数']} 字 / {stats['段落数']} 段 / "
          f"建议 readTime {round(stats['总字数'] / 459)}（按已发篇目 459 字每分钟）")

    rows = history(path)
    print("\n闸门（拦的是静默失败：页面照常显示，功能已经死了）")
    results = gates(path, fm, body, stats)
    for ok, name, detail in results:
        print(f"  {'✓' if ok else '✗'} {name:<22}{detail}")
    passed = sum(1 for ok, _, _ in results if ok)

    print(f"\n指标（只报数，不拦；括号内是已发 {len(rows)} 篇的区间）")
    for k, target in TARGETS.items():
        v = stats[k]
        unit = "%" if "占比" in k else ""
        if rows:
            lo = min(r[k] for r in rows)
            hi = max(r[k] for r in rows)
            band = f"已发 {lo:.1f}~{hi:.1f}"
            flag = "" if lo <= v <= hi else "  ← 跳出历史区间"
        else:
            band, flag = "无历史可比", ""
        gap = "" if abs(v - target) / target < 0.15 else ("↓" if v < target else "↑")
        print(f"  {k:<14}{v:>6.1f}{unit}{gap:<2} 目标 {target:<6}{band}{flag}")

    tail_len, avg = stats["_尾段"], stats["段落均长"]
    note = "" if tail_len < avg else "  ← 不短于均长；若文末是附录代码块，看的是引导语不是真结尾"
    print(f"  {'结尾段长':<14}{tail_len:>6}  {'':<2} 目标 <{avg:.0f}   结尾四式要求最后一段比正文更短{note}")

    ok_all = passed == len(results)
    print(f"\n闸门 {passed}/{len(results)} {'✓ 通过' if ok_all else '✗ 未通过'}")
    return ok_all


def main(argv):
    if not argv:
        print("用法：python3 scripts/preflight/prose.py <文章.md> [更多文章...]")
        print("     python3 scripts/preflight/prose.py app/src/content/posts/*.md")
        return 2
    bad = 0
    for a in argv:
        p = Path(a)
        if not p.exists():
            print(f"✗ 找不到 {a}")
            bad += 1
            continue
        if not check(p):
            bad += 1
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
