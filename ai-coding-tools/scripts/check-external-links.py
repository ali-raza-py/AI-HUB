#!/usr/bin/env python3
"""Check external http(s) links recorded in data/*.yaml (best-effort).

HEAD first; on 403/405/429/501 falls back to a streamed GET. Timeouts and
network errors are reported as "unreachable" — not necessarily broken links.
Default is report-only (exit 0); pass --strict to exit 1 on any problem.
Intended for a weekly CI job or a manual pre-release pass, not every commit.
"""
from __future__ import annotations

import argparse
import concurrent.futures as cf
import sys
from pathlib import Path

import requests
import yaml

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
UA = {"User-Agent": "ai-hub-link-checker/1.0 (registry verification)"}


def collect() -> dict[str, str]:
    urls: dict[str, str] = {}

    def add(value, where: str) -> None:
        if isinstance(value, str) and value.startswith(("http://", "https://")):
            urls.setdefault(value.rstrip("/"), where)

    tools = (yaml.safe_load((DATA / "tools.yaml").read_text(encoding="utf-8"))
             or {}).get("tools", [])
    for t in tools:
        for field in ("official_website", "official_docs", "github"):
            add(t.get(field), f"tools[{t.get('id', '?')}].{field}")

    for name in ("models.yaml", "providers.yaml", "categories.yaml"):
        doc = yaml.safe_load((DATA / name).read_text(encoding="utf-8")) or {}
        if isinstance(doc, dict):
            for group in doc.values():
                if isinstance(group, list):
                    for item in group:
                        if isinstance(item, dict):
                            for field in ("official_url", "official_website",
                                          "github", "url", "website"):
                                add(item.get(field), name)
    return urls


def check(url: str) -> tuple[str, int | None, str | None]:
    try:
        r = requests.head(url, headers=UA, timeout=12, allow_redirects=True)
        if r.status_code in (403, 405, 429, 501):
            r = requests.get(url, headers=UA, timeout=15, allow_redirects=True,
                             stream=True)
            r.close()
        return url, r.status_code, None
    except requests.RequestException as exc:
        return url, None, str(exc)[:90]


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--strict", action="store_true",
                        help="exit 1 when any problem URL is found")
    parser.add_argument("--workers", type=int, default=12)
    args = parser.parse_args()

    urls = collect()
    print(f"checking {len(urls)} unique external URLs (HEAD/GET, best-effort)...")
    problems: list[tuple[str, str, object]] = []
    with cf.ThreadPoolExecutor(max_workers=args.workers) as pool:
        for url, status, err in pool.map(check, urls):
            if err is not None or (status is not None and status >= 400):
                problems.append((url, urls[url], err if err is not None else status))

    print(f"\n{len(problems)} problem URL(s) out of {len(urls)}:")
    for url, where, why in problems:
        print(f"  {url}  [{where}] -> {why}")
    if not problems:
        print("all reachable")
    if args.strict and problems:
        print("RESULT: FAIL (--strict)")
        return 1
    print("RESULT: report-only (pass --strict to fail on problems)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
