#!/usr/bin/env python3
"""
[INPUT]: 依赖 Pillow 的 Image 读像素；读 app/public/covers/*.jpg
[OUTPUT]: 对外提供命令行入口，以及 measure() 供 fit.py 复用同一套判据
[POS]: scripts/preflight 的封面验收器，与 prose.py 分管「图」与「文字」两侧；
       判据来自 BLOG_PLAYBOOK.md 第五节的五条经验与 OPERATIONS.md 的发布流程
[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
"""
import sys
from pathlib import Path

from PIL import Image

SIZE = (1920, 1072)          # 五张封面必须同尺寸，否则列表页错位
BAND_TOL = 4                 # 背景横向色差容差；超了就是画出了面板而非通铺一色
CROPS = (1.36, 1.20)         # 列表页容器实测会把宽图裁成这两种比例
ALIVE = 99.5                 # 存活率按列计，边界列必吃掉零点几个百分点，不取 100
SOFT_KB = 200                # OPERATIONS.md 的建议值，不是硬线

INK = 600                    # sum(rgb) 低于此值算物件（炭灰线条、橙瓤、灰瓤都在内）
BG = (235, 225, 210)         # 高于这三个分量算背景（暖白纸底）


def is_ink(p):
    return sum(p) < INK


def is_bg(p):
    return p[0] > BG[0] and p[1] > BG[1] and p[2] > BG[2]


def is_amber(p):
    """burnt amber：调色板里唯一的强调色，落在有语义的那个物件上。"""
    return p[0] > 150 and 60 < p[1] < 135 and p[2] < 90


def measure(im):
    W, H = im.size
    px = im.load()

    ink_cols = [x for x in range(W)
                if sum(1 for y in range(0, H, 3) if is_ink(px[x, y])) > 1]
    amber_cols = [x for x in range(W)
                  if sum(1 for y in range(0, H, 3) if is_amber(px[x, y])) > 1]

    top = int(H * 0.03)
    top_clean = not any(is_ink(px[x, y])
                        for x in range(0, W, 7) for y in range(0, top, 3))
    samples = []
    for pct in range(0, 101, 5):
        x = min(W - 1, int(W * pct / 100))
        s = [px[x, y] for y in range(0, top, 3)]
        samples.append(tuple(sum(v[i] for v in s) // len(s) for i in range(3)))
    spread = max(max(abs(a[i] - b[i]) for i in range(3))
                 for a in samples for b in samples)

    return {
        "size": (W, H),
        "ink": ink_cols,
        "amber": amber_cols,
        "spread": spread,
        "top_clean": top_clean,
    }


def survival(cols, W, H, ratio):
    """中心裁成给定比例后，还剩多少列存活。"""
    if not cols:
        return None
    keep = ratio / (W / H)
    lo, hi = (1 - keep) / 2, 1 - (1 - keep) / 2
    return sum(1 for x in cols if lo * W <= x <= hi * W) / len(cols) * 100


def check(path):
    im = Image.open(path).convert("RGB")
    m = measure(im)
    W, H = m["size"]
    kb = path.stat().st_size // 1024

    print(f"\n{'=' * 62}\n{path.name}  {W}x{H}  {kb} KB\n{'=' * 62}")

    gates = []

    gates.append((m["size"] == SIZE, "尺寸 1920x1072",
                  f"{W}x{H}" + ("" if m["size"] == SIZE
                                else f" → 与其余封面不一致，列表页会错位；用 fit.py 裁齐")))

    if not m["top_clean"]:
        gates.append((False, "背景通铺一色",
                      "顶部 3% 有物件，取样不可靠 → 构图应让顶部留空后重测"))
    else:
        ok = m["spread"] <= BAND_TOL
        gates.append((ok, "背景通铺一色",
                      f"横向最大色差 {m['spread']}" + ("" if ok else
                      " → 画出了色带/面板。提示词里别用 central two thirds 这类几何措辞，"
                      "模型会当成要画出来的区域")))

    if not m["amber"]:
        gates.append((False, "橙色点存在",
                      "没检出 burnt amber → 强调色应落在有语义的那个物件上"))
    else:
        a, b = min(m["amber"]) / W * 100, max(m["amber"]) / W * 100
        print(f"橙色点横向 {a:.1f}% ~ {b:.1f}%")
        for r in CROPS:
            s = survival(m["amber"], W, H, r)
            ok = s >= ALIVE
            gates.append((ok, f"橙色点 {r}:1 裁切存活",
                          f"{s:.0f}%" + ("" if ok else
                          " → 列表页会把它切掉，且事后无法补救。用 fit.py --inset 内缩")))

    print(f"全部物件横向 {min(m['ink']) / W * 100:.1f}% ~ {max(m['ink']) / W * 100:.1f}%"
          if m["ink"] else "未检出物件")

    print("\n闸门（拦的是发出去就没救的）")
    for ok, name, detail in gates:
        print(f"  {'✓' if ok else '✗'} {name:<20}{detail}")

    print("\n指标（只报数，不拦）")
    for r in CROPS:
        s = survival(m["ink"], W, H, r)
        print(f"  {r}:1 裁切  全部物件存活 {s:.0f}%"
              f"{'' if s >= ALIVE else '  ← 构图两侧会被切一部分'}")
    print(f"  文件大小    {kb} KB  建议 ≤{SOFT_KB}"
          f"{'' if kb <= SOFT_KB else '  ← 偏大，可再压'}")

    passed = sum(1 for ok, _, _ in gates if ok)
    ok_all = passed == len(gates)
    print(f"\n闸门 {passed}/{len(gates)} {'✓ 通过' if ok_all else '✗ 未通过'}")
    return ok_all


def main(argv):
    if not argv:
        print("用法：python3 scripts/preflight/cover.py <封面.jpg> [更多...]")
        print("     python3 scripts/preflight/cover.py app/public/covers/*.jpg")
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
