#!/usr/bin/env python3
"""三组对照的统计分析。二元指标用 Wilson 区间，组间差异用 Fisher 精确检验。"""
import json, sys, itertools
import numpy as np
from scipy import stats

sys.path.insert(0, '.')
from score import CORE, EXTRA

rows = json.load(open('./wave.json'))
CONDS = ["A", "B", "C"]
LABEL = {"A": "A 只给3个相关文件", "B": "B 整个 app/src(A的超集)", "C": "C 3个文件+项目地图"}
CHECKS = list(CORE) + list(EXTRA) + ["no_new_dep"]

def wilson(k, n, z=1.96):
    if n == 0: return (0, 0)
    p = k / n; d = 1 + z*z/n
    c = (p + z*z/(2*n)) / d
    h = z*np.sqrt(p*(1-p)/n + z*z/(4*n*n)) / d
    return (max(0, c-h), min(1, c+h))

g = {c: [r for r in rows if r["cond"] == c] for c in CONDS}
print("=" * 92)
print(f"{'条件':<26}{'n':>4}{'输入token≈':>11}{'core/4':>10}{'total/7':>10}{'输出字数':>10}")
print("-" * 92)
TOK = {"A": 12381//3, "B": 291742//3, "C": 27012//3}   # 中文/代码混合，约 3 字节/token
for c in CONDS:
    if not g[c]: continue
    core = [r["core"] for r in g[c]]; tot = [r["total"] for r in g[c]]
    print(f"{LABEL[c]:<26}{len(g[c]):>4}{TOK[c]:>11,}{np.mean(core):>10.2f}{np.mean(tot):>10.2f}"
          f"{int(np.mean([r['chars'] for r in g[c]])):>10,}")

print("\n" + "=" * 92)
print("逐项命中率（括号为 95% Wilson 置信区间）")
print("-" * 92)
print(f"{'指标':<16}" + "".join(f"{LABEL[c][:2]:>25}" for c in CONDS))
for k in CHECKS:
    line = f"{k:<16}"
    for c in CONDS:
        if not g[c]: line += f"{'-':>25}"; continue
        n = len(g[c]); hit = sum(r[k] for r in g[c]); lo, hi = wilson(hit, n)
        line += f"{f'{hit}/{n} {hit/n*100:.0f}% [{lo*100:.0f}-{hi*100:.0f}]':>25}"
    print(line)

print("\n" + "=" * 92)
print("组间差异 · Fisher 精确检验（核心指标，双尾 p）")
print("-" * 92)
for a, b in itertools.combinations(CONDS, 2):
    if not (g[a] and g[b]): continue
    for k in list(CORE):
        ha, na = sum(r[k] for r in g[a]), len(g[a])
        hb, nb = sum(r[k] for r in g[b]), len(g[b])
        if ha == na and hb == nb: continue          # 双双满分，无差异可谈
        _, p = stats.fisher_exact([[ha, na-ha], [hb, nb-hb]])
        flag = "  <-- 显著" if p < 0.05 else ""
        print(f"  {a} vs {b}  {k:<14} {ha}/{na} vs {hb}/{nb}   p={p:.4f}{flag}")
    # core 总分用 Mann-Whitney
    ca = [r["core"] for r in g[a]]; cb = [r["core"] for r in g[b]]
    if len(set(ca+cb)) > 1:
        _, p = stats.mannwhitneyu(ca, cb, alternative='two-sided')
        print(f"  {a} vs {b}  {'core 总分':<14} {np.mean(ca):.2f} vs {np.mean(cb):.2f}   p={p:.4f}"
              + ("  <-- 显著" if p < 0.05 else ""))
    print()
