"""Draws the Open Graph cards described on argv[1]. Invoked by generate-og-images.mjs."""
import json
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG_TOP = (8, 16, 31)
BG_BOTTOM = (11, 23, 45)
ACCENT = (125, 153, 255)
TEXT = (238, 242, 255)
MUTED = (159, 183, 255)

FONT_DIR = Path("/System/Library/Fonts/Supplemental")
BOLD = FONT_DIR / "Arial Bold.ttf"
REGULAR = FONT_DIR / "Arial.ttf"


def wrap(draw, text, font, max_width):
    words, lines, line = text.split(), [], ""
    for word in words:
        candidate = f"{line} {word}".strip()
        if draw.textlength(candidate, font=font) <= max_width:
            line = candidate
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def render(card, out_dir):
    img = Image.new("RGB", (W, H), BG_TOP)
    draw = ImageDraw.Draw(img)

    # Vertical gradient, matching the site's dark background ramp.
    for y in range(H):
        t = y / H
        draw.line(
            [(0, y), (W, y)],
            fill=tuple(round(a + (b - a) * t) for a, b in zip(BG_TOP, BG_BOTTOM)),
        )

    # Accent rule down the left edge.
    draw.rectangle([0, 0, 10, H], fill=ACCENT)

    title_font = ImageFont.truetype(str(BOLD), 68)
    kicker_font = ImageFont.truetype(str(REGULAR), 30)
    brand_font = ImageFont.truetype(str(BOLD), 32)
    foot_font = ImageFont.truetype(str(REGULAR), 26)

    margin = 88
    max_width = W - margin * 2

    draw.text((margin, 78), card["kicker"].upper(), font=kicker_font, fill=MUTED)

    lines = wrap(draw, card["title"], title_font, max_width)
    # Drop to a smaller size rather than letting a long title overflow the card.
    if len(lines) > 4:
        title_font = ImageFont.truetype(str(BOLD), 56)
        lines = wrap(draw, card["title"], title_font, max_width)

    y = 160
    for line in lines:
        draw.text((margin, y), line, font=title_font, fill=TEXT)
        y += title_font.size + 14

    draw.line([(margin, H - 128), (margin + 120, H - 128)], fill=ACCENT, width=4)
    draw.text((margin, H - 104), "BuildWise Webs", font=brand_font, fill=TEXT)
    draw.text((margin, H - 62), "One-time pricing from $150", font=foot_font, fill=MUTED)

    out = out_dir / f"og-{card['slug']}.jpg"
    img.save(out, "JPEG", quality=82, optimize=True)
    return out


def main():
    payload = json.loads(sys.argv[1])
    root = Path(payload["root"])
    written = []
    for target in ("public", "dist"):
        out_dir = root / target
        if not out_dir.exists():
            continue
        for card in payload["cards"]:
            written.append(render(card, out_dir))
    print(f"OG images written: {len(written)} files across public/ and dist/")


if __name__ == "__main__":
    main()
