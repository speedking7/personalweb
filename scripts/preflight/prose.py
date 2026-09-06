#!/usr/bin/env python3
"""
[INPUT]: 依赖标准库 re/sys/pathlib/unicodedata；读 app/src/content/posts/*.md 与 app/public/covers/*
[OUTPUT]: 对外提供命令行入口，以及 analyze() / gates() / track_of() 供调用方复用
[POS]: scripts/preflight 的文章验收器，与 cover.py 分管「文字」与「图」两侧；
       闸门规则来自 BLOG_PLAYBOOK.md 第六节的两个雷，指标与目标值来自 WRITING_STYLE.md 第三节与第十二节
[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md

口径：字数类指标**只数字母/数字/汉字，不数标点**，与 WRITING_STYLE.md 同尺。
2026-08 之前这里数标点而目标值不数，两把尺子对同一张表，长度类虚高 13%、
极短段虚低 24%——照着自检会以为「还不够碎」而继续加短段，第 4、5 篇就是这么写碎的。

轨别：指标区间按 frontmatter 的 category 分组比对，入门篇只跟入门篇比。
不分组的话，第一篇实作篇（带代码块与数据表）会把区间整片拉宽，
从此每篇都「在区间内」，横向比失效。闸门与轨别无关，照常拦。
"""
import re
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
POSTS = ROOT / "app/src/content/posts"
PUBLIC = ROOT / "app/public"

# parseBlogMetadata 的硬编码字段白名单；wechat 是发布侧元数据，故意不进前端契约
WHITELIST = {"title", "category", "tags", "date", "cover", "readTime", "excerpt", "wechat"}

# 目标值按轨别分。段落与句子两项是作者的指纹，两轨相同（同年对照实测：
# 段落均长 25.8 对 25.8、句子均长差 6%）；问句与人称随篇幅涨，短文该对低档。
# 见 WRITING_STYLE.md 第十二节。
TARGETS = {
    "入门": {"段落均长": 25.0, "句子均长": 23.0, "「你」每千字": 20.5, "问句每千字": 8.0},
    "实作": {"段落均长": 25.0, "句子均长": 23.0, "「你」每千字": 22.0, "问句每千字": 10.0},
    # 实战轨（AI Agent 实操系列）是操作手册不是专栏，段落与句子结构本就不同，
    # 现有两轨的目标值套上来只会误导。目标值先留空：只报数、只跟同轨历史比区间，
    # 等发够三五篇有了样本再回填。
    # 必须列在这里而不是让它落进 DEFAULT_TRACK——否则会被当成入门篇，
    # 既拿错目标值，又把它混进入门篇的区间，重演 BLOG_PLAYBOOK 第四节那个「区间拉宽到失效」。
    "实战": {"段落均长": None, "句子均长": None, "「你」每千字": None, "问句每千字": None},
}
DEFAULT_TRACK = "入门"

# 只报数、不设目标的指标。极短段占比是高方差量：同一批语料换取样窗口
# 量四次得到 8%/21%/38%/6%，差值大于它想测的效应，设目标只会诱导硬凑。
REPORT_ONLY = ["极短段占比"]

# 去标点口径下的阅读速度，由已发篇目的 readTime 反推（旧值 459 是含标点口径，
# 且与当时的实际篇目也对不上）。口径一改这个常数必须跟着改，否则静默漂移。
CHARS_PER_MIN = 347


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


def words(text):
    """只留字母/数字/汉字。字数类指标的唯一口径，与 WRITING_STYLE.md 同尺。"""
    return "".join(c for c in text if unicodedata.category(c)[0] in ("L", "N"))


def track_of(fm):
    """从 frontmatter 取轨别。认不出的一律归主轨，宁可跟入门篇比也不要无历史可比。"""
    m = re.search(r"category:\s*[\"\']?([^\"\'\n]+)[\"\']?", fm or "")
    t = m.group(1).strip() if m else ""
    return t if t in TARGETS else DEFAULT_TRACK


def analyze(body):
    paras = paragraphs(body)
    if not paras:
        return None
    lens = [len(words(p)) for p in paras]
    total = sum(lens)
    if not total:
        return None
    flat = re.sub(r"\s", "", "".join(paras))
    sents = [s for s in re.split(r"(?<=[。！？])", flat) if s.strip()]
    tail_sents = [s for s in re.split(r"(?<=[。！？])", paras[-1]) if s.strip()]
    return {
        "总字数": total,
        "段落数": len(paras),
        "段落均长": total / len(paras),
        "句子均长": sum(len(words(s)) for s in sents) / len(sents),
        "极短段占比": sum(1 for n in lens if n <= 15) / len(paras) * 100,
        "「你」每千字": flat.count("你") / total * 1000,
        "问句每千字": sum(1 for s in sents if s.endswith("？")) / total * 1000,
        "_尾段": lens[-1],
        "_尾段句数": len(tail_sents),
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

    # 加粗被中文标点吃掉。写成 **文字。**紧跟汉字 时，闭合的 ** 前面是标点、
    # 后面既不是空白也不是标点，不满足 CommonMark 的 right-flanking，于是它不被
    # 当成闭合符，整段退化成纯文本，星号原样印在页面上。
    # 这条属于闸门而非指标：页面照常渲染、不报错、构建不失败，只有肉眼盯着才看得出来。
    # 2026-08-31 实测全站中招 6 处，其中两处已经在线上挂了好几天。
    # 判据照 CommonMark 原文，不要用正则找 **...**——那会把 **MCP**。 这种
    # 正常配对的闭合星号当成开启星号，报出误判。
    broken = []
    for ln, line in enumerate(strip_code(body).split("\n"), 1):
        marks = [m.start() for m in re.finditer(r"\*\*", line)]
        for k in range(1, len(marks), 2):          # 按序配对，奇数下标是闭合位
            i = marks[k]
            prev = line[i - 1] if i > 0 else ""
            nxt = line[i + 2] if i + 2 < len(line) else ""
            if (prev and unicodedata.category(prev).startswith("P")
                    and nxt and not nxt.isspace()
                    and not unicodedata.category(nxt).startswith("P")):
                broken.append(f"L{ln}「{line[max(0, i - 10):i + 4]}」")
    add(not broken, "加粗没被标点吃掉",
        "全部正常闭合" if not broken
        else "；".join(broken[:3]) + " → 把标点挪到 ** 外面（**文字**。 而不是 **文字。**）。"
             "页面照常显示，只是把星号原样印出来")

    # markdown 表格要 remark-gfm 才渲染得出来。react-markdown 不带它，
    # 没挂插件时表格被当成普通段落，页面上是一行行竖线文本——照常显示、构建不报错。
    # 前七篇是散文轨一张表都没有，所以这个坑一直没暴露；第三轨「实战」的规矩是
    # 「表格优先于散文」，2026-09-06 发首篇时当场撞上。
    # 只在文章真的含表格时才查，免得散文篇天天飘红——那样人会连闸门一起忽略。
    has_table = bool(re.search(r"^\s*\|.+\|\s*$", strip_code(body), re.M))
    if has_table:
        detail_tsx = (ROOT / "app/src/pages/BlogDetail.tsx")
        wired = detail_tsx.exists() and "remarkGfm" in detail_tsx.read_text(encoding="utf-8")
        add(wired, "表格渲染管线",
            "BlogDetail 已挂 remark-gfm" if wired
            else "本文含 markdown 表格，但 BlogDetail.tsx 没挂 remark-gfm → "
                 "表格会被渲染成一行行竖线文本，页面照常显示、构建不报错。"
                 "装 remark-gfm 并加到 remarkPlugins")

    # markdown 有序列表在公众号里会散架。微信把 <ol> 拆成自己的带序号段落结构，
    # 而 .prose li 的 margin-bottom 加行高 2.0 造出的间距会被它当成独立项——
    # 实测「四条中间的空行也被加了编号」。
    # 这条跟表格那条同源：**博客版完全正常，只有公众号版坏，而你看博客预览发现不了**。
    # 前七篇是散文轨，一处有序列表都没用过，所以直到 2026-09-06 发第三轨第二篇才暴露。
    # 修法不是改样式（微信那侧改不动），是**别用有序列表**——实战轨本就规定表格优先，
    # 二列表格既绕开这个坑，又跟全文其余表格视觉统一。代码块里的编号不算，那走 <pre>。
    ordered = [f"L{ln}「{line.strip()[:16]}」"
               for ln, line in enumerate(strip_code(body).split("\n"), 1)
               if re.match(r"^\s*\d+\.\s", line)]
    add(not ordered, "没用 markdown 有序列表",
        "没有" if not ordered
        else "；".join(ordered[:3]) + " → 公众号版会给条目之间的空行也编上号。"
             "改成二列表格，或手写「一、二、三」。博客版正常，只有公众号版坏")

    # 「结尾段短于正文均长」刻意不在这里。它是看得见、随时能改的风格问题，
    # 不是静默失败；而且带附录的文章（正文后跟大段代码块）会被误判——
    # 第二篇的真结尾是 22 字冷短句，脚本看到的却是附录引导语。放指标区报数。
    return res


def history(exclude, track):
    """同轨已发篇目的指标区间。只有横向比，才分得清是失手还是固有偏移；
    而只有同轨比才有意义——实作篇带代码与数据表，混进来会把区间拉宽到失效。"""
    rows = []
    for f in sorted(POSTS.glob("*.md")):
        if f.resolve() == exclude.resolve():
            continue
        fm, body = split_frontmatter(f.read_text(encoding="utf-8"))
        if track_of(fm) != track:
            continue
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

    track = track_of(fm)
    print(f"\n{'=' * 62}\n{path.name}   [{track}轨]\n{'=' * 62}")
    print(f"{stats['总字数']} 字（不数标点）/ {stats['段落数']} 段 / "
          f"建议 readTime {max(1, round(stats['总字数'] / CHARS_PER_MIN))}"
          f"（{CHARS_PER_MIN} 字每分钟）")

    rows = history(path, track)
    print("\n闸门（拦的是静默失败：页面照常显示，功能已经死了）")
    results = gates(path, fm, body, stats)
    for ok, name, detail in results:
        print(f"  {'✓' if ok else '✗'} {name:<22}{detail}")
    passed = sum(1 for ok, _, _ in results if ok)

    same = f"已发同轨 {len(rows)} 篇" if rows else "同轨暂无历史可比"
    print(f"\n指标（只报数，不拦；口径不数标点；区间取自{same}）")

    def band_of(k, v):
        if not rows:
            return "无历史可比", ""
        lo = min(r[k] for r in rows)
        hi = max(r[k] for r in rows)
        return f"已发 {lo:.1f}~{hi:.1f}", ("" if lo <= v <= hi else "  ← 跳出历史区间")

    for k, target in TARGETS[track].items():
        v = stats[k]
        band, flag = band_of(k, v)
        if target is None:
            print(f"  {k:<14}{v:>6.1f}   暂不设目标（样本不足）  {band}{flag}")
            continue
        gap = "" if abs(v - target) / target < 0.15 else ("↓" if v < target else "↑")
        print(f"  {k:<14}{v:>6.1f}{gap:<2} 目标 {target:<6}{band}{flag}")

    for k in REPORT_ONLY:
        v = stats[k]
        band, flag = band_of(k, v)
        print(f"  {k:<14}{v:>6.1f}%  不设目标（高方差）  {band}{flag}")

    n = stats["_尾段句数"]
    note = "" if n == 1 else "  ← 末段不止一句；若文末是附录代码块，看的是引导语不是真结尾"
    print(f"  {'结尾段句数':<14}{n:>6}   目标 1      结尾诸式的共同点是末段恒为一句"
          f"（不是「比正文短」，那条已被实测推翻，见 WRITING_STYLE 第八节）{note}")

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
