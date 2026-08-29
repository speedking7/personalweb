#!/usr/bin/env python3
"""
扩展维度。在总表产出之前定义，避免看完结果再挑指标。
量的是「方案形态」而非「对错」——四道核心题三组均已满分，差异只可能在这里。
"""
import re, json, pathlib, sys
sys.path.insert(0, '.')
from score import score

REAL = set()
for line in open('./ctx_B.txt'):
    m = re.match(r'===== FILE: (\S+) =====', line)
    if m: REAL.add(m.group(1))

def dims(t: str) -> dict:
    # 文中出现的项目内文件路径
    paths = set(re.findall(r'app/src/[\w/\-.]+\.(?:tsx?|md)', t))
    existing = {p for p in paths if p in REAL}
    proposed = {p for p in paths if p not in REAL}          # 提议新建的文件
    return {
        "files_existing": len(existing),                     # 触及的既有文件数
        "files_new": len(proposed),                          # 提议新建的文件数
        "touch_feishu_ts": int('app/src/lib/feishu.ts' in existing),   # 是否在代码层覆盖第二数据源
        "touch_page": int(any('pages/' in p for p in existing)),       # 是否落到列表页
        "touch_ui_prim": int(any('components/ui/' in p for p in paths)),# 是否被 53 个基元带偏
    }

rows = []
for cond in ("A", "B", "C"):
    for f in sorted(pathlib.Path(f"./out/{cond}").glob("*.md")):
        t = f.read_text(errors="replace")
        if len(t) < 1000: continue
        rows.append({"cond": cond, "run": f.stem, **score(t), **dims(t)})
json.dump(rows, open('./wave.json', 'w'), ensure_ascii=False)
print(f"已打分 {len(rows)} 个样本 -> wave.json")
