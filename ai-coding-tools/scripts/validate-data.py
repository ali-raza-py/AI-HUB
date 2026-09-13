#!/usr/bin/env python3
"""Validate data/tools.yaml, data/categories.yaml, data/models.yaml, providers.yaml.

Checks: YAML parses, unique ids/names, required core fields, category and
subcategory references, `alternatives` id references, autonomy_level range,
allowed enum values, https URLs, last_verified format. Exit 0 = valid.
`--strict` treats warnings as errors.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"

ALLOWED_STATUS = {"active", "archived", "discontinued", "deprecated", "renamed",
                  "acquired", "unknown"}  # unknown => warning, not error
ALLOWED_OPEN_SOURCE = {True, False, "source-available", "unknown"}
ALLOWED_STUDENT = {"excellent", "good", "possible-but-limited", "not-recommended", "unknown"}
PLATFORM_FIELDS = ("vscode", "jetbrains", "zed", "cli", "terminal", "web", "desktop", "mobile")

CORE_FIELDS = [
    "name", "id", "category", "subcategory", "company", "official_website",
    "status", "official_status_notes", "last_verified", "open_source", "license",
    "free", "free_tier", "pricing_summary", "best_for", "strengths", "weaknesses",
    "full_page",
]

VERIFIED_MONTH = "2026-09"
SLUG_RE = re.compile(r"^[a-z0-9][a-z0-9-]*$")
URL_RE = re.compile(r"^https?://")
MONTH_RE = re.compile(r"^\d{4}-(0[1-9]|1[0-2])$")


def load(path: Path):
    with path.open(encoding="utf-8") as fh:
        return yaml.safe_load(fh)


def main() -> int:
    errors: list[str] = []
    warnings: list[str] = []
    strict = "--strict" in sys.argv

    def err(msg: str) -> None:
        errors.append(msg)

    def warn(msg: str) -> None:
        warnings.append(msg)

    # ------------------------------------------------------------- categories
    cats = load(DATA / "categories.yaml")
    cat_ids = {c["id"] for c in cats.get("categories", [])}
    sub_ids = {s["id"] for s in cats.get("subcategories", [])}
    sub_parent = {s["id"]: s.get("parent") for s in cats.get("subcategories", [])}

    # ----------------------------------------------------------------- tools
    tools_doc = load(DATA / "tools.yaml")
    tools = tools_doc.get("tools", [])
    if not tools:
        err("tools.yaml: no tools found")

    ids = [t.get("id", "<missing>") for t in tools]
    names = [t.get("name", "<missing>") for t in tools]
    for dup in sorted({i for i in ids if ids.count(i) > 1}):
        err(f"duplicate tool id: {dup}")
    for dup in sorted({n for n in names if names.count(n) > 1}):
        err(f"duplicate tool name: {dup}")

    id_set = set(ids)
    for t in tools:
        tid = t.get("id", "<missing>")
        loc = f"tools[{tid}]"

        for field in CORE_FIELDS:
            if field not in t:
                err(f"{loc}: missing required field `{field}`")

        slug = str(t.get("id", ""))
        if not SLUG_RE.match(slug):
            err(f"{loc}: id `{slug}` is not a valid slug (a-z 0-9 -)")

        if t.get("category") not in cat_ids:
            err(f"{loc}: unknown category `{t.get('category')}`")
        sub = t.get("subcategory")
        if sub not in sub_ids:
            err(f"{loc}: unknown subcategory `{sub}`")
        elif sub_parent.get(sub) != t.get("category"):
            err(f"{loc}: subcategory `{sub}` parent is `{sub_parent.get(sub)}`, "
                f"but tool category is `{t.get('category')}`")

        status = t.get("status")
        if status not in ALLOWED_STATUS:
            err(f"{loc}: status `{status}` not in {sorted(ALLOWED_STATUS)}")
        elif status == "unknown":
            warn(f"{loc}: status unknown — verify against the official source")

        os_val = t.get("open_source")
        if os_val not in ALLOWED_OPEN_SOURCE:
            err(f"{loc}: open_source `{os_val}` not in {sorted(map(str, ALLOWED_OPEN_SOURCE))}")

        stud = t.get("student_friendliness", "unknown")
        if stud not in ALLOWED_STUDENT:
            err(f"{loc}: student_friendliness `{stud}` not in {sorted(ALLOWED_STUDENT)}")
        elif stud == "unknown":
            warn(f"{loc}: student_friendliness not assessed")

        lvl = t.get("autonomy_level")
        if lvl is not None and lvl != "unknown":
            if not (isinstance(lvl, int) and 0 <= lvl <= 5):
                err(f"{loc}: autonomy_level `{lvl}` must be int 0..5 or 'unknown'")

        lv = str(t.get("last_verified", ""))
        if not MONTH_RE.match(lv):
            err(f"{loc}: last_verified `{lv}` must be YYYY-MM")
        elif lv != VERIFIED_MONTH:
            warn(f"{loc}: last_verified is `{lv}`, current is {VERIFIED_MONTH}")

        for field in ("official_website", "official_docs", "github"):
            v = t.get(field)
            if v is None:
                continue
            if str(v).strip().lower() in ("unknown", ""):
                warn(f"{loc}: {field} not verified — official source not recorded")
            elif not URL_RE.match(str(v)):
                err(f"{loc}: {field} `{v}` is not an http(s) URL")

        for alt in t.get("alternatives", []) or []:
            if not str(alt).strip():
                warn(f"{loc}: empty alternatives entry")
            elif alt not in id_set:
                err(f"{loc}: alternatives entry `{alt}` is not a known tool id")

        if "github" not in t and t.get("open_source") is True:
            warn(f"{loc}: open_source=true but no `github` repo URL recorded")

        for field in PLATFORM_FIELDS:
            v = t.get(field)
            if v is None:
                continue
            if v is not True and v is not False and str(v).lower() != "unknown":
                err(f"{loc}: {field} `{v}` must be true, false, or 'unknown'")

    # ---------------------------------------------------------------- models
    mdoc = load(DATA / "models.yaml")
    models = mdoc.get("models", []) if isinstance(mdoc, dict) else mdoc
    if not models:
        err("models.yaml: no models found")
    else:
        m_ids = [m.get("id", "<missing>") for m in models]
        for dup in sorted({i for i in m_ids if m_ids.count(i) > 1}):
            err(f"models.yaml: duplicate model id: {dup}")
        for m in models:
            for field in ("id", "name", "provider", "last_verified"):
                if field not in m:
                    err(f"models[{m.get('id', '?')}]: missing field `{field}`")

    # ------------------------------------------------------------- providers
    pdoc = load(DATA / "providers.yaml")
    provs = pdoc.get("providers", []) if isinstance(pdoc, dict) else pdoc
    if not provs:
        err("providers.yaml: no providers found")
    else:
        p_ids = [p.get("id", "<missing>") for p in provs]
        for dup in sorted({i for i in p_ids if p_ids.count(i) > 1}):
            err(f"providers.yaml: duplicate provider id: {dup}")
        for p in provs:
            for field in ("id", "name", "official_url", "last_verified"):
                if field not in p:
                    err(f"providers[{p.get('id', '?')}]: missing field `{field}`")

    # ---------------------------------------------------------------- report
    print(f"tools: {len(tools)}  models: {len(models)}  providers: {len(provs)}")
    for w in warnings:
        print(f"WARN  {w}")
    for e in errors:
        print(f"ERROR {e}")
    print(f"\n{len(errors)} errors, {len(warnings)} warnings")
    if errors or (strict and warnings):
        print("RESULT: INVALID")
        return 1
    print("RESULT: VALID")
    return 0


if __name__ == "__main__":
    sys.exit(main())

