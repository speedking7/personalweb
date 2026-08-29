#!/usr/bin/env python3
"""
上下文对照实验打分器 v2。

v1 有已证实的假阴性：只认字面 `parseBlogMetadata` 和 `getSeries`，
导致「用 categoryMatch 那块指代同一个解析器」和「函数名叫 groupPostsBySeries」
被误判为未命中。v2 改为按行为判定，不按词汇判定。

四项核心指标，所需信息在 A/B/C 三组上下文中完全等同（同样那 3 个文件），
因此组间差异只可能来自注意力稀释，不可能来自信息缺失。
"""
import re, json, pathlib

def _has(t, p): return bool(re.search(p, t, re.I | re.M))

def score(text: str) -> dict:
    t = text
    r = {}

    # 1) 在既有 frontmatter 解析器里加 series 正则。
    #    parseBlogMetadata 是硬编码字段白名单，不加则该字段被静默丢弃：不报错、分组永远为空。
    r["parser_field"] = int(
        _has(t, r"seriesMatch")
        or _has(t, r"match\(\s*/\s*series")
        or (_has(t, r"markdown\.ts") and _has(t, r"series:\s*\\?\[?\^?|series:\s*\[\"']"))
        or (_has(t, r"markdown\.ts") and _has(t, r"frontmatter") and _has(t, r"series"))
    )

    # 2) 系列封面必须补 BASE_URL，否则本地能看见、线上 404。resolveCover 就在 blogs.ts 里。
    r["cover_base"] = int(_has(t, r"resolveCover|BASE_URL|import\.meta\.env\.BASE|resolveAsset"))

    # 3) 聚合逻辑落在 data 层，与既有 getCategories/getTags 同址同形（而非散在页面组件里）。
    r["data_layer"] = int(
        _has(t, r"blogs\.ts")
        and _has(t, r"(export\s+)?(async\s+)?function\s+\w*[Ss]eries|const\s+\w*[Ss]eries\w*\s*=|get\w*Series\w*|group\w*Series\w*|Series\w*Groups?")
    )

    # 4) 契约先行：types/blog.ts 的 BlogPost 接口要加 series 字段。
    r["type_contract"] = int(_has(t, r"types/blog\.ts|interface\s+BlogPost") and _has(t, r"series\??\s*:"))

    # 附加项：C 组的项目地图明确提过，对 C 有先验优势，单独报告不计入 core
    r["feishu_source"] = int(_has(t, r"飞书|feishu"))
    r["doc_protocol"] = int(_has(t, r"CLAUDE\.md|\[INPUT\]|\[POS\]|\[PROTOCOL\]"))
    r["no_new_dep"] = int(not _has(t, r"zustand|redux|jotai|recoil|npm install|pnpm add|yarn add"))

    r["core"] = r["parser_field"] + r["cover_base"] + r["data_layer"] + r["type_contract"]
    r["total"] = r["core"] + r["feishu_source"] + r["doc_protocol"] + r["no_new_dep"]
    r["chars"] = len(t)
    return r

CORE  = {k: None for k in ("parser_field", "cover_base", "data_layer", "type_contract")}
EXTRA = {k: None for k in ("feishu_source", "doc_protocol")}

if __name__ == "__main__":
    rows = []
    for cond in ("A", "B", "C"):
        for f in sorted(pathlib.Path(f"./out/{cond}").glob("*.md")):
            t = f.read_text(errors="replace")
            if len(t) < 1000: continue
            rows.append({"cond": cond, "run": f.stem, **score(t)})
    print(json.dumps(rows, ensure_ascii=False))
