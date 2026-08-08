#!/usr/bin/env sh
set -eu

git diff --check

for file in $(find . -name '*.md' -not -path './.git/*'); do
  fences=$(awk '/^```/{n++} END {print n+0}' "$file")
  test $((fences % 2)) -eq 0
done

test -z "$(git ls-files --others --exclude-standard)"
