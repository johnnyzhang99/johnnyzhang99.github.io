#!/usr/bin/env bash
# Optimize images: read originals from public/images/_original/, write resized +
# recompressed copies to public/images/ (mirroring subfolder structure).
#
# Idempotent — files whose output is newer than the input are skipped, so it's
# safe to re-run any time after adding a few new originals.
#
# Usage:
#   bash scripts/optimize-images.sh
#   MAX_EDGE=1000 QUALITY=85 bash scripts/optimize-images.sh
#   npm run images:optimize
#
# Requires macOS (uses built-in `sips`).

set -euo pipefail

SRC_ROOT="../public/images/_original"
DST_ROOT="../public/images"
MAX_EDGE="${MAX_EDGE:-1600}"
QUALITY="${QUALITY:-82}"

if ! command -v sips >/dev/null 2>&1; then
  echo "Error: 'sips' not found. This script requires macOS." >&2
  exit 1
fi

if [ ! -d "$SRC_ROOT" ]; then
  echo "Source folder '$SRC_ROOT' does not exist." >&2
  echo "Create it and drop your originals inside (preserving subfolders like life/ or publications/), then re-run." >&2
  exit 1
fi

# Format a byte count as a human-readable string (e.g. 6.3M / 262K).
human() {
  awk -v b="$1" 'BEGIN {
    if (b >= 1048576) printf "%.1fM", b/1048576
    else if (b >= 1024) printf "%.0fK", b/1024
    else printf "%dB", b
  }'
}

echo "Source  : $SRC_ROOT"
echo "Target  : $DST_ROOT"
echo "Settings: max edge = ${MAX_EDGE}px, JPEG quality = $QUALITY"
echo

count=0
skipped=0
total_in=0
total_out=0

while IFS= read -r -d '' src; do
  rel="${src#"$SRC_ROOT"/}"
  dst="$DST_ROOT/$rel"
  mkdir -p "$(dirname "$dst")"

  # Skip if destination already exists and is strictly newer than the source.
  # NOTE: bash's `-nt` test compares mtimes at whole-second precision, which loses
  # sub-second resolution and yields false negatives when both files share the same
  # second. We compare full sub-second mtimes via awk instead.
  if [ -f "$dst" ]; then
    src_mtime=$(stat -f%Fm "$src")
    dst_mtime=$(stat -f%Fm "$dst")
    if awk -v s="$src_mtime" -v d="$dst_mtime" 'BEGIN { exit (d > s) ? 0 : 1 }'; then
      printf '  skip  %s  (up to date)\n' "$rel"
      skipped=$((skipped + 1))
      continue
    fi
  fi

  in_bytes=$(stat -f%z "$src")
  sips -Z "$MAX_EDGE" -s formatOptions "$QUALITY" "$src" --out "$dst" >/dev/null
  # sips may copy the source's mtime onto the output; bump it so the skip-if-newer
  # check below works on subsequent runs.
  touch "$dst"
  out_bytes=$(stat -f%z "$dst")

  if [ "$in_bytes" -gt 0 ]; then
    pct=$(( (in_bytes - out_bytes) * 100 / in_bytes ))
  else
    pct=0
  fi
  printf '  ok    %s  %s -> %s  (-%d%%)\n' \
    "$rel" "$(human "$in_bytes")" "$(human "$out_bytes")" "$pct"

  count=$((count + 1))
  total_in=$((total_in + in_bytes))
  total_out=$((total_out + out_bytes))
done < <(find "$SRC_ROOT" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0)

echo
if [ "$count" -eq 0 ] && [ "$skipped" -eq 0 ]; then
  echo "No images found under $SRC_ROOT."
else
  echo "Done.  Processed: $count, skipped: $skipped"
  if [ "$count" -gt 0 ] && [ "$total_in" -gt 0 ]; then
    total_pct=$(( (total_in - total_out) * 100 / total_in ))
    printf 'Total   : %s -> %s  (-%d%%)\n' \
      "$(human "$total_in")" "$(human "$total_out")" "$total_pct"
  fi
fi
