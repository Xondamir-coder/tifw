#!/usr/bin/env bash
# Converts all images in public/images/original into AVIF at multiple resolutions.
# Cleans previous outputs before generating new ones.

set -e  # stop on first error

INPUT_DIR="public/images/original"
OUTPUT_DIR="public/images"
SIZES=(
  "576:40%"
  "1024:70%"
  "1440:100%"
)

echo "🧹 Cleaning old resized folders..."
for size in "${SIZES[@]}"; do
  folder="${size%%:*}"
  outdir="$OUTPUT_DIR/$folder"
  if [ -d "$outdir" ]; then
    rm -rf "$outdir"
  fi
done

echo "🖼️  Transforming images from $INPUT_DIR..."

for size in "${SIZES[@]}"; do
  folder="${size%%:*}"     # e.g. 576
  scale="${size##*:}"      # e.g. 40%
  outdir="$OUTPUT_DIR/$folder"

  mkdir -p "$outdir"

  echo "➡️  Generating ${folder}px images at $scale scale..."

  for f in "$INPUT_DIR"/*.{png,PNG,jpg,JPG,jpeg,JPEG}; do
    [ -f "$f" ] || continue
    filename="$(basename "${f%.*}")"
    magick "$f" -resize "$scale" "$outdir/$filename.avif"
  done
done

echo "✅ All images transformed successfully!"
