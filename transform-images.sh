#!/usr/bin/env bash
# Converts all images in public/images/original into:
#  - AVIF responsive variants (576/1024/1440)
#  - Compressed legacy JPEG/PNG fallbacks (in /compressed)

set -e  # stop on first error

INPUT_DIR="public/images/original"
OUTPUT_DIR="public/images"

SIZES=(
  "576:40%"
  "1024:70%"
  "1440:100%"
)

echo "🧹 Cleaning old output folders..."
for size in "${SIZES[@]}"; do
  folder="${size%%:*}"
  outdir="$OUTPUT_DIR/$folder"
  [ -d "$outdir" ] && rm -rf "$outdir"
done

# clean compressed fallback folder
COMPRESSED_DIR="$OUTPUT_DIR/compressed"
[ -d "$COMPRESSED_DIR" ] && rm -rf "$COMPRESSED_DIR"

echo "🖼️ Transforming images from $INPUT_DIR..."

# Generate AVIF scaled versions
for size in "${SIZES[@]}"; do
  folder="${size%%:*}"     # e.g. 576
  scale="${size##*:}"      # e.g. 40%
  outdir="$OUTPUT_DIR/$folder"

  mkdir -p "$outdir"

  echo "➡️ Generating ${folder}px AVIF images at $scale scale..."

  for f in "$INPUT_DIR"/*.{png,PNG,jpg,JPG,jpeg,JPEG}; do
    [ -f "$f" ] || continue
    filename="$(basename "${f%.*}")"
    magick "$f" -resize "$scale" "$outdir/$filename.avif"
  done
done

# Generate compressed legacy fallbacks
echo "📦 Generating compressed JPEG/PNG fallbacks..."

mkdir -p "$COMPRESSED_DIR"

for f in "$INPUT_DIR"/*.{png,PNG,jpg,JPG,jpeg,JPEG}; do
  [ -f "$f" ] || continue
  filename="$(basename "$f")"
  ext="${filename##*.}"
  out="$COMPRESSED_DIR/$filename"

  echo "➡️ Compressing $filename..."
  case "$ext" in
    jpg|JPG|jpeg|JPEG)
      magick "$f" -strip -interlace Plane -quality 75 "$out"
      ;;
    png|PNG)
      magick "$f" -strip -define png:compression-level=9 "$out"
      ;;
  esac
done

echo "✅ All images transformed and compressed successfully!"
