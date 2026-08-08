#!/usr/bin/env sh
set -eu

if git grep -nE '(ghp_[A-Za-z0-9]{36}|github_pat_[A-Za-z0-9_]{20,}|AKIA[0-9A-Z]{16})' -- ':!scripts/check-secrets.sh'; then
  echo "Potential credential detected in a tracked file." >&2
  exit 1
fi
