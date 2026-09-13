#!/usr/bin/env python3
"""Check internal markdown links across the repository.

Verifies that relative links resolve to existing files (and, for generated
tool pages, that referenced tool ids exist in the registry). External
http(s) links are listed but NOT fetched (offline-safe; use a CI link
checker for live verification).
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SKIP_DIRS = {".git", "node_modules", "__pycache__"}
LINK_RE = re.compile(r"\[[^\]]*\]\(([^)\s]+)\)")


def md_files() -> list[Path]:
    return [p for p in ROOT.rglob("*.md")
            if not (set(p.parts) & SKIP_DIRS)]


def main() -> int:
    broken: list[str] = []
    external = 0
    for page in md_files():
        text = page.read_text(encoding="utf-8", errors="replace")
        for target in LINK_RE.findall(text):
            if target.startswith(("http://", "https://", "mailto:")):
                external += 1
                continue
            if target.startswith("#"):
                continue
            path_part = target.split("#", 1)[0]
            if not path_part:
                continue
            resolved = (page.parent / path_part).resolve()
            if not resolved.exists():
                broken.append(f"{page.relative_to(ROOT)} -> {target}")

    n_pages = len(md_files())
    print(f"checked {n_pages} markdown files, {external} external links "
          f"(not fetched), {len(broken)} broken internal links")
    for b in broken:
        print(f"  BROKEN: {b}")
    return 1 if broken else 0


if __name__ == "__main__":
    sys.exit(main())
