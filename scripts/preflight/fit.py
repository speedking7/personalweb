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

from PIL import Image, ImageOps

sys.path.insert(0, str(Path(__file__).resolve().parent))
from cover import SIZE, CROPS, BAND_TOL, is_bg, is_ink, measure, survival  # noqa: E402

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


def tile(strip, W, H):
    """把干净带按原尺寸上下重复铺满，隔行镜像消接缝。
    与拉伸的分野只有一处，却是决定性的：它不改变纸纹的纵向尺度，
    因而不放大横带自身的横向渐变。第 03 篇封面实测，拉伸色差 7 不合格、平铺 4 合格，
    而纸纹标准差两者相同（1.69），也就是说拉伸那条路白付了代价。"""
    canvas = Image.new("RGB", (W, H))
    sh = strip.size[1]
    y = k = 0
    while y < H:
        canvas.paste(strip if k % 2 == 0 else ImageOps.flip(strip), (0, y))
        y += sh
        k += 1
    return canvas


def flatten_split(im):
    """检出「整幅被劈成两种底色」并修平。

    2026-09 第 6、7 篇连撞：模型把左右画成两块底色，缝落在正中，横向色差 13~18。
    提示词层面试过三招（加首句约束、加 avoid 条款、去掉当桌面的横线）全部无效，
    改 Concept 让两侧长得不一样也只是碰运气——07 篇那张两侧一团石头对一架七级梯，照裂。

    **动手的前提有两条，缺一不做**：缝是单一的竖直阶跃，两侧各自的底色是平的；
    以及物件的填充色跟底色分得开。第 6 篇那张分不开（物件灰面与底色几乎同色），
    强行修平会把物件和线条一起提亮，两侧风格当场分家——那一张只能重出。
    只改与该侧底色同色的像素，其余一个不碰。
    """
    W, H = im.size
    px = im.load()
    top = max(6, int(H * 0.03))

    col = []
    for x in range(W):
        s = [px[x, y] for y in range(0, top, 2)]
        col.append(tuple(sum(v[i] for v in s) // len(s) for i in range(3)))

    # 找最大的一处相邻阶跃
    jump, at = 0, None
    for x in range(1, W):
        d = max(abs(col[x][i] - col[x - 1][i]) for i in range(3))
        if d > jump:
            jump, at = d, x
    if at is None or jump <= BAND_TOL:
        return im, ""

    # 缝两侧要各让开一段：缩到 1920 时 LANCZOS 会把硬缝抹开几个像素，
    # 那几列是中间值，算进去会让「两侧底色平不平」这一步误判成不平。
    MARGIN = max(8, W // 200)
    left, right = col[:max(0, at - MARGIN)], col[min(W, at + MARGIN):]
    if len(left) < W // 10 or len(right) < W // 10:
        return im, ""

    def tone(part):
        return tuple(sum(c[i] for c in part) // len(part) for i in range(3))

    def flat(part):
        return max(max(abs(a[i] - b[i]) for i in range(3))
                   for a in part[::7] for b in part[::7]) <= BAND_TOL

    lt, rt = tone(left), tone(right)
    if max(abs(lt[i] - rt[i]) for i in range(3)) <= BAND_TOL:
        return im, ""
    if not (flat(left) and flat(right)):
        return im, "两侧底色本身不平，不是干净的两色劈分，不修"

    # 少数侧向多数侧对齐；等宽时右侧为准
    # 修改区要盖住过渡带，扫描区必须避开它——那条带子是另一侧的底色，
    # 扫进来会被当成「物件填充色」，守卫当场误报。
    if len(left) >= len(right):
        keep, fix, x0, x1 = lt, rt, at - MARGIN, W
        sx0, sx1 = at + MARGIN, W
    else:
        keep, fix, x0, x1 = rt, lt, 0, at + MARGIN
        sx0, sx1 = 0, at - MARGIN

    TOL = 10
    near = lambda p, t: all(abs(p[i] - t[i]) <= TOL for i in range(3))

    # 物件填充色与底色分不开就别动——那是第 6 篇那张的形态
    fills = {}
    for x in range(sx0, sx1, 3):
        for y in range(0, H, 3):
            p = px[x, y]
            if is_ink(p) or near(p, fix):
                continue
            fills[tuple(v // 6 for v in p)] = fills.get(tuple(v // 6 for v in p), 0) + 1
    if fills:
        top_fill = max(fills.items(), key=lambda kv: kv[1])[0]
        top_fill = tuple(v * 6 + 3 for v in top_fill)
        if max(abs(top_fill[i] - fix[i]) for i in range(3)) <= TOL * 1.6:
            return im, ("物件填充色与该侧底色分不开（%s 对 %s），修平会把物件一起提亮 → 只能重出"
                        % (top_fill, fix))

    out = im.copy()
    opx = out.load()
    delta = tuple(keep[i] - fix[i] for i in range(3))
    for x in range(x0, x1):
        for y in range(H):
            p = px[x, y]
            if near(p, fix):
                opx[x, y] = tuple(min(255, max(0, p[i] + delta[i])) for i in range(3))

    # 过渡带单独收尾：缩放抹出来的中间值离两侧底色都有四五个单位，
    # 按 delta 平移追不平，直接把这一段的背景像素设成目标底色。
    # 带内有线条就不碰——那说明有物件横跨缝隙，动它会伤图。
    band = range(max(0, at - MARGIN * 2), min(W, at + MARGIN * 2))
    if not any(is_ink(px[x, y]) for x in band for y in range(0, H, 3)):
        for x in band:
            for y in range(H):
                if is_bg(opx[x, y]):
                    opx[x, y] = keep

    after = measure(out)["spread"]
    if after > BAND_TOL:
        return im, f"修平后横向色差仍为 {after}，回退"
    return out, f"两色劈分已修平（缝在 {at / W * 100:.0f}%，色差 {jump} → {after}）"


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
        # 铺底两条路，按「对源图的忠实度」排序，不是按代码简单排序。
        # 一是镜像平铺：原尺寸重复，纸纹一比一保留，横向色差就是源图背景自己那点色差。
        # 二是纵向拉伸：十倍抻开会把横带自身的横向渐变一并放大（实测色差 4 → 7）。
        # 加工工具不许引入新缺陷，所以每条铺完都自己量一次，都超容差才退回纯色。
        for cand, tag in ((tile(strip, W, H), "镜像平铺"),
                          (strip.resize((W, H), Image.LANCZOS), "纵向拉伸")):
            if measure(cand)["spread"] <= BAND_TOL:
                canvas = cand
                why = f"背景取自图内干净带，{tag}（纸纹保留）"
                break
        if canvas is None:
            why = "干净带两种铺法横向色差都超容差，退回纯色铺底（纸纹会丢）"
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

    im, note = flatten_split(im)
    if note:
        print(f"  修平：{note}")
        report(im, "修平后")

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
