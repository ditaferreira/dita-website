import os
from PIL import Image
from pathlib import Path

def compress_images_to_webp(source_folder='.', output_subfolder='webp_compressed', quality=80):
    """
    Convert all PNG and JPG images in a folder to WebP format.
    
    Args:
        source_folder: Source folder to search for images (default: current directory)
        output_subfolder: Name of subfolder to save WebP images (default: 'webp_compressed')
        quality: WebP quality from 1-100 (default: 80)
    """
    # Create output subfolder if it doesn't exist
    output_path = Path(source_folder) / output_subfolder
    output_path.mkdir(exist_ok=True)
    
    # Supported image extensions
    extensions = ('.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG')
    
    # Counter for converted images
    converted_count = 0
    
    # Search for images in the source folder
    for file_path in Path(source_folder).iterdir():
        if file_path.is_file() and file_path.suffix in extensions:
            try:
                # Open image
                img = Image.open(file_path)
                
                # Convert RGBA to RGB if necessary (WebP supports both, but RGB is more compatible)
                if img.mode == 'RGBA':
                    # Create white background
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    background.paste(img, mask=img.split()[3])  # Use alpha channel as mask
                    img = background
                elif img.mode != 'RGB':
                    img = img.convert('RGB')
                
                # Create output filename
                output_filename = file_path.stem + '.webp'
                output_file = output_path / output_filename
                
                # Save as WebP
                img.save(output_file, 'WebP', quality=quality, method=6)
                
                # Get file sizes for reporting
                original_size = file_path.stat().st_size / 1024  # KB
                new_size = output_file.stat().st_size / 1024  # KB
                reduction = ((original_size - new_size) / original_size) * 100
                
                print(f"✓ Converted: {file_path.name}")
                print(f"  Original: {original_size:.2f} KB → WebP: {new_size:.2f} KB ({reduction:.1f}% reduction)")
                
                converted_count += 1
                
            except Exception as e:
                print(f"✗ Error converting {file_path.name}: {str(e)}")
    
    print(f"\n{'='*50}")
    print(f"Conversion complete! {converted_count} image(s) converted.")
    print(f"WebP images saved in: {output_path}")

if __name__ == "__main__":
    # You can customize these parameters
    SOURCE_FOLDER = '.'  # Current directory
    OUTPUT_SUBFOLDER = 'webp_compressed'
    QUALITY = 66  # 1-100, higher = better quality but larger file
    
    print("Image to WebP Converter")
    print("="*50)
    print(f"Source folder: {Path(SOURCE_FOLDER).resolve()}")
    print(f"Output subfolder: {OUTPUT_SUBFOLDER}")
    print(f"Quality: {QUALITY}")
    print("="*50)
    print()
    
    compress_images_to_webp(SOURCE_FOLDER, OUTPUT_SUBFOLDER, QUALITY)