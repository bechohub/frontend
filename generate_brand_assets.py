import os
from PIL import Image, ImageDraw, ImageFont

# Define paths
FONT_SLOGAN_BOLD = "/Users/supratim/Desktop/b2b_marketplace/SpaceGrotesk-Bold.ttf"
FONT_LOGO_BLACK = "/Users/supratim/Desktop/b2b_marketplace/Outfit-Black.ttf"

OUTPUT_DIR = "/Users/supratim/.gemini/antigravity-ide/brain/74362b3f-cdbe-47d4-aeb4-04164e8a6651"
PUBLIC_BRAND_DIR = "/Users/supratim/Desktop/b2b_marketplace/public/brand"

# Ensure directories exist
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(PUBLIC_BRAND_DIR, exist_ok=True)

# Brand colors
BG_COLOR = "#020617"       # Slate-950 (Brand background)
TEXT_WHITE = "#ffffff"     # Hard White
TEXT_CYAN = "#0891b2"      # Cyan-600 (Brand accent)
SLOGAN_WHITE = "#eaeaea"   # Soft White

# Resampling filter safety
try:
    RESAMPLE_FILTER = Image.Resampling.LANCZOS
except AttributeError:
    RESAMPLE_FILTER = Image.ANTIALIAS

def get_text_dimensions(draw, text, font, stroke_width=0):
    try:
        left, top, right, bottom = draw.textbbox((0, 0), text, font=font, stroke_width=stroke_width)
        w = right - left
        h = bottom - top
        return w, h, left, top
    except AttributeError:
        w, h = draw.textsize(text, font=font)
        return w, h, 0, 0

def draw_text_spaced(draw, x, y, text, font, fill, spacing, stroke_width=0, stroke_fill=None):
    current_x = x
    for char in text:
        draw.text((current_x, y), char, font=font, fill=fill, stroke_width=stroke_width, stroke_fill=stroke_fill)
        if hasattr(draw, 'textbbox'):
            char_w = draw.textbbox((0, 0), char, font=font, stroke_width=stroke_width)[2]
        else:
            char_w = draw.textsize(char, font=font)[0] + stroke_width * 2
        current_x += char_w + spacing

def get_spaced_text_width(draw, text, font, spacing, stroke_width=0):
    total_width = 0
    for i, char in enumerate(text):
        if hasattr(draw, 'textbbox'):
            char_w = draw.textbbox((0, 0), char, font=font, stroke_width=stroke_width)[2]
        else:
            char_w = draw.textsize(char, font=font)[0] + stroke_width * 2
        total_width += char_w
        if i < len(text) - 1:
            total_width += spacing
    return total_width

def get_wordmark_width(draw, font, font_size, spacing):
    w_becho = get_spaced_text_width(draw, "becho", font, spacing)
    w_Hub = get_spaced_text_width(draw, "Hub", font, spacing)
    return w_becho + spacing + w_Hub

# ----------------- Modern Profile Picture Rendering (Supersampled) -----------------
def generate_profile_picture(size_1x):
    """
    Renders 'bechoHub' wordmark centered on the Slate-950 background in Outfit Black.
    Auto-scales the text to fit exactly 86% of the canvas width (Option 5).
    Uses 4x supersampling for high-end rendering quality.
    """
    size_4x = size_1x * 4
    img = Image.new("RGB", (size_4x, size_4x), color=BG_COLOR)
    draw = ImageDraw.Draw(img)
    
    # Target 80% of canvas width to stay safe inside the circular crop with breathing room
    target_width = int(size_4x * 0.80)
    
    # Dynamically find the best font size
    font_size_4x = 24
    while True:
        spacing = int(-0.08 * font_size_4x)  # Tight modern tracking
        test_font = ImageFont.truetype(FONT_LOGO_BLACK, font_size_4x)
        w = get_wordmark_width(draw, test_font, font_size_4x, spacing)
        if w >= target_width:
            break
        font_size_4x += 2
        
    font = ImageFont.truetype(FONT_LOGO_BLACK, font_size_4x)
    spacing_4x = int(-0.08 * font_size_4x)
    
    w_becho = get_spaced_text_width(draw, "becho", font, spacing_4x)
    w_Hub = get_spaced_text_width(draw, "Hub", font, spacing_4x)
    w_logo = w_becho + spacing_4x + w_Hub
    h_logo = get_text_dimensions(draw, "bechoHub", font)[1]
    
    # Centering coordinates
    start_x = (size_4x - w_logo) // 2
    # Apply minor offset (-5%) for visual centering
    start_y = (size_4x - h_logo) // 2 - int(h_logo * 0.05)
    
    # Draw 'becho' in white
    draw_text_spaced(draw, start_x, start_y, "becho", font, TEXT_WHITE, spacing_4x)
    # Draw 'Hub' in cyan
    draw_text_spaced(draw, start_x + w_becho + spacing_4x, start_y, "Hub", font, TEXT_CYAN, spacing_4x)
    
    return img.resize((size_1x, size_1x), resample=RESAMPLE_FILTER)

# ----------------- Banners Drawing (Supersampled) -----------------
def generate_banner(width_1x, height_1x, slogan_text, slogan_size_1x, logo_size_1x, letter_spacing_1x):
    width_4x = width_1x * 4
    height_4x = height_1x * 4
    
    img = Image.new("RGB", (width_4x, height_4x), color=BG_COLOR)
    draw = ImageDraw.Draw(img)
    
    # Load Fonts: Space Grotesk Bold for slogan, Outfit Black for logo
    slogan_font = ImageFont.truetype(FONT_SLOGAN_BOLD, slogan_size_1x * 4)
    logo_font = ImageFont.truetype(FONT_LOGO_BLACK, logo_size_1x * 4)
    
    spacing_slogan_4x = letter_spacing_1x * 4
    spacing_logo_4x = int(-0.08 * logo_size_1x * 4)
    
    # Calculate widths
    w_slogan = get_spaced_text_width(draw, slogan_text, slogan_font, spacing_slogan_4x)
    h_slogan = get_text_dimensions(draw, slogan_text, slogan_font)[1]
    
    # Logo components
    w_becho = get_spaced_text_width(draw, "becho", logo_font, spacing_logo_4x)
    w_Hub = get_spaced_text_width(draw, "Hub", logo_font, spacing_logo_4x)
    w_logo = w_becho + spacing_logo_4x + w_Hub
    h_logo = get_text_dimensions(draw, "bechoHub", logo_font)[1]
    
    # Vertical arrangement
    gap_4x = 24 * 4
    total_height = h_slogan + gap_4x + h_logo
    
    start_y = (height_4x - total_height) // 2
    
    # Draw slogan
    slogan_x = (width_4x - w_slogan) // 2
    draw_text_spaced(draw, slogan_x, start_y, slogan_text, slogan_font, SLOGAN_WHITE, spacing_slogan_4x)
    
    # Draw logo below
    logo_x = (width_4x - w_logo) // 2
    logo_y = start_y + h_slogan + gap_4x
    
    # Draw 'becho'
    draw_text_spaced(draw, logo_x, logo_y, "becho", logo_font, TEXT_WHITE, spacing_logo_4x)
    # Draw 'Hub'
    draw_text_spaced(draw, logo_x + w_becho + spacing_logo_4x, logo_y, "Hub", logo_font, TEXT_CYAN, spacing_logo_4x)
    
    return img.resize((width_1x, height_1x), resample=RESAMPLE_FILTER)

# Generate assets
assets = {
    "instagram_profile.png": generate_profile_picture(512),
    "twitter_profile.png": generate_profile_picture(400),
    "linkedin_profile.png": generate_profile_picture(400),
    "linkedin_banner.png": generate_banner(
        width_1x=1584,
        height_1x=396,
        slogan_text="REBUILDING INDIAN B2B TRADE",
        slogan_size_1x=32,
        logo_size_1x=48,
        letter_spacing_1x=8
    ),
    "twitter_banner.png": generate_banner(
        width_1x=1500,
        height_1x=500,
        slogan_text="TRUST. TRADE. INFRASTRUCTURE.",
        slogan_size_1x=36,
        logo_size_1x=54,
        letter_spacing_1x=8
    )
}

# Save assets to destinations
for filename, img in assets.items():
    # Save in artifact directory
    artifact_path = os.path.join(OUTPUT_DIR, filename)
    img.save(artifact_path)
    print(f"Saved artifact to: {artifact_path}")
    
    # Save in project workspace
    public_path = os.path.join(PUBLIC_BRAND_DIR, filename)
    img.save(public_path)
    print(f"Saved project file to: {public_path}")

print("Bolder, modern Outfit-Black brand assets generated successfully.")
