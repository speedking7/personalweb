#!/usr/bin/env python3
"""
[INPUT]: 依赖 Pillow 的 Image；复用 cover.py 的 measure/survival/is_bg 与安全区判据
[OUTPUT]: 对外提供命令行入口，产出 1920x1072 的封面文件
[POS]: scripts/preflight 里唯一「加工」而非「验收」的一支。cover.py 说图哪儿不合格，
       它负责把图改到合格；改完自动回头跑一遍 cover.py 的判据，不让人凭眼睛验收
[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
"""
import sys
from pathlib import Path

from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
from cover import SIZE, CROPS, BAND_TOL, is_bg, measure, survival  # noqa: E402

# 安全区由最严的那种裁切倒推：1.2:1 中心裁切只保留中间 67%
SAFE_LO, SAFE_HI = 0.165, 0.835
EPS = 0.003                  # 内缩后正好压在边界上，留出浮点容差


def crop_to_size(im):
    """先裁成目标比例，再缩到目标尺寸。playbook 第五节「出图后」那段的固化。"""
    tw, th = SIZE
    w, h = im.size
    rs, rd = w / h, tw / th
    if rs > rd:
        nw = int(h * rd)
        box = ((w - nw) // 2, 0, (w - nw) // 2 + nw, h)
    else:
        nh = int(w / rd)
        box = (0, (h - nh) // 2, w, (h - nh) // 2 + nh)
    return im.crop(box).resize(SIZE, Image.LANCZOS)


def clean_strip(im):
    """找一条整行都是背景的横带，用它铺底才能保住纸纹。
    满幅出血的图顶部也有物件，所以不能想当然地取顶部。"""
    W, H = im.size
    px = im.load()
    # 带取厚是有理由的：拉伸倍数 = H/need，倍数越大纸纹被抻得越粗，
    # 横向差异跟着放大。取 H//40（26 行、41 倍）实测五张全部超容差退化成纯色，
    # 取 H//10（107 行、10 倍）才留得住纸纹。
    need = max(24, H // 10)

    def row_clean(y):
        return all(is_bg(px[x, y]) for x in range(0, W, 7))

    run = []
    for y in list(range(H)):
        if row_clean(y):
            run.append(y)
            if len(run) >= need:
                return im.crop((0, run[0], W, run[-1] + 1))
        else:
            run = []
    return None


def inset(im):
    """等比缩小整幅内容并居中，把物件压进安全区。
    与「抽中间留白合拢」互补：那招要求中间有富余留白，满幅出血时失效；这招没有这个前提。
    构图比例一点不动，代价只是物件变小、留白变多——而这套视觉本来就是大留白。"""
    W, H = im.size
    m = measure(im)
    if not m["ink"]:
        return im, "未检出物件，不做内缩"
    lo, hi = min(m["ink"]) / W, max(m["ink"]) / W
    if lo >= SAFE_LO - EPS and hi <= SAFE_HI + EPS:
        return im, f"物件已在安全区（{lo * 100:.1f}%~{hi * 100:.1f}%），无需内缩"

    scale = (SAFE_HI - SAFE_LO) / (hi - lo)
    nw, nh = round(W * scale), round(H * scale)

    strip = clean_strip(im)
    canvas, why = None, ""
    if strip is not None:
        cand = strip.resize((W, H), Image.LANCZOS)
        # 拉伸会把横带自身的横向渐变一并放大。加工工具不许引入新缺陷，
        # 所以铺完自己量一次，超容差就退回纯色——宁可丢纸纹，不留色带。
        if measure(cand)["spread"] <= BAND_TOL:
            canvas = cand
            why = "背景取自图内干净带（纸纹保留）"
        else:
            why = "干净带拉伸后横向色差超容差，退回纯色铺底（纸纹会丢）"
    if canvas is None:
        px = im.load()
        corners = [px[1, 1], px[W - 2, 1], px[1, H - 2], px[W - 2, H - 2]]
        flat = tuple(sum(c[i] for c in corners) // 4 for i in range(3))
        canvas = Image.new("RGB", (W, H), flat)
        why = why or "未找到干净背景带，用纯色铺底（纸纹会丢）"
    note = f"缩到 {scale * 100:.1f}%，{why}"

    # 横向按「物件左缘对齐安全区左界」定位，不能按画布居中：
    # 原图里物件本身多半不对称（第二篇是 8.6%~93.9%，中心在 51.25%），
    # 缩完再居中会把那份偏移原样带过去，一侧仍越界。
    ox = round(SAFE_LO * W - lo * W * scale)
    canvas.paste(im.resize((nw, nh), Image.LANCZOS), (ox, (H - nh) // 2))
    return canvas, note


def report(im, label):
    W, H = im.size
    m = measure(im)
    if not m["ink"]:
        print(f"  {label}：未检出物件")
        return
    lo, hi = min(m["ink"]) / W * 100, max(m["ink"]) / W * 100
    spread = f"{m['spread']}" if m["top_clean"] else f"{m['spread']}(顶部有物件，不可信)"
    line = f"  {label}：物件 {lo:.1f}%~{hi:.1f}%  背景色差 {spread}"
    if m["amber"]:
        surv = "  ".join(f"{r}:1 橙色点 {survival(m['amber'], W, H, r):.0f}%" for r in CROPS)
        line += f"  {surv}"
    else:
        line += "  未检出橙色点"
    print(line)


def main(argv):
    args = [a for a in argv if not a.startswith("--")]
    do_inset = "--inset" in argv
    if len(args) != 2:
        print("用法：python3 scripts/preflight/fit.py <源图> <输出.jpg> [--inset]")
        print("     不带 --inset  只裁到 1920x1072")
        print("     带  --inset  再等比缩小居中，把物件压进裁切安全区")
        return 2

    src, dst = Path(args[0]), Path(args[1])
    if not src.exists():
        print(f"✗ 找不到 {src}")
        return 1

    im = Image.open(src).convert("RGB")
    print(f"源图 {im.size[0]}x{im.size[1]}")
    report(im, "裁前")

    im = crop_to_size(im)
    report(im, "裁后")

    if do_inset:
        im, note = inset(im)
        print(f"  内缩：{note}")
        report(im, "内缩后")

    dst.parent.mkdir(parents=True, exist_ok=True)
    im.save(dst, quality=92, optimize=True)
    kb = dst.stat().st_size // 1024
    print(f"\n已写入 {dst}  {kb} KB")

    m = measure(im)
    W, H = im.size
    lo, hi = (min(m["ink"]) / W, max(m["ink"]) / W) if m["ink"] else (0, 1)
    if lo < SAFE_LO - EPS or hi > SAFE_HI + EPS:
        print("物件仍在安全区外 → 加 --inset 重跑")
    print(f"验收：python3 scripts/preflight/cover.py {dst}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
