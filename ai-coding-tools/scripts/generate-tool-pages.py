#!/usr/bin/env python3
"""Generate tools/<id>.md for every tool in data/tools.yaml.

tools.yaml is the single source of truth: edit the registry, then re-run this
script. Behavior:
  - full_page: false  -> (re)generated from the registry on every run
  - full_page: true   -> generated ONCE; afterwards the generator skips it
                         unless --force is passed (so hand edits survive)
  - --only <id>       -> regenerate a single tool page
Missing registry fields render as "Unknown"/"Not verified" — never guessed.
"""
from __future__ import annotations

import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
OUT = ROOT / "tools"

YES, NO, UNK = "Yes", "No", "Unknown"


def cap(t: dict, field: str) -> str:
    v = t.get(field)
    if v is True:
        return YES
    if v is False:
        return NO
    if isinstance(v, str):
        return v
    return UNK


def yn(t: dict, field: str) -> str:
    v = t.get(field)
    if v is True:
        return YES
    if v is False:
        return NO
    return UNK


def bullet_list(items) -> str:
    return "\n".join(f"- {i}" for i in items)


def link(label: str, url: str | None) -> str:
    if url in (None, "", "Unknown") or not str(url).startswith("http"):
        return f"{label} — not verified, check official website"
    return f"[{label}]({url})"


def ali_verdict(t: dict) -> tuple[str, str]:
    """(verdict, reason) for Ali's machine: Ryzen 5 PRO 4650U, 8 GB RAM, no dGPU."""
    stud = t.get("student_friendliness", "unknown")
    cpu = t.get("cpu_only")
    local = t.get("local_models")
    hw = str(t.get("hardware_requirements", "") or "")

    reason = ""
    if local is True:
        reason += ("Local inference (Ollama) on 8 GB RAM is limited to small models "
                   "(~1–4 B) and will be slow on this CPU-only machine — fine for "
                   "experimentation, not for daily heavy agent work. ")
    if hw:
        reason += f"Stated requirements: {hw}."

    if stud == "not-recommended":
        verdict = "🔴 Not ideal"
        reason = (t.get("weaknesses") or
                  "Requirements or pricing do not fit this machine/budget.") + " " + reason
    elif stud == "possible-but-limited":
        verdict = "🟡 Usable with limitations"
        reason = ("Usable, but expect friction (limits, RAM pressure, or setup "
                  "effort) on this hardware. ") + reason
    elif stud == "excellent" and cpu is not False:
        verdict = "🟢 Recommended"
        reason = "Light client; heavy inference happens in the cloud or via BYOK. " + reason
    elif stud == "good" and cpu is not False:
        verdict = "🟢 Recommended"
        reason = "Works well on this machine for normal use. " + reason
    else:
        verdict = "🟡 Usable with limitations"
        reason = "Fit could not be fully verified — check official requirements. " + reason
    return verdict, reason.strip()


def workflow_lines(t: dict) -> list[str]:
    steps = ["Prompt"]
    if t.get("repository_context") or t.get("mcp"):
        steps.append("Context gathering (repository / MCP tools)")
    if isinstance(t.get("autonomy_level"), int) and t["autonomy_level"] >= 3:
        steps.append("Planning")
    if t.get("file_editing"):
        steps.append("File changes")
    if t.get("terminal_execution"):
        steps.append("Terminal commands")
    if t.get("testing"):
        steps.append("Tests")
    steps += ["Human review", "Final changes"]
    if t.get("git_support") or t.get("pull_requests"):
        steps.append("Commit / PR")
    out = [steps[0]]
    for s in steps[1:]:
        out += [" \u2193", s]
    return out

def render(t: dict, cats: dict) -> str:
    cat_name = next((c["name"] for c in cats["categories"]
                     if c["id"] == t["category"]), t["category"])
    sub_name = next((s["name"] for s in cats["subcategories"]
                     if s["id"] == t["subcategory"]), t.get("subcategory", ""))
    status = t.get("status", "unknown")
    status_line = {
        "active": "**Active** — under active development as of the last verification date.",
        "archived": "**Archived** — no longer maintained.",
        "discontinued": "**Discontinued** — no longer available.",
        "deprecated": "**Deprecated** — officially superseded; migration recommended.",
        "renamed": "**Renamed** — this product name is historical.",
        "acquired": "**Acquired** — absorbed into another product/organization.",
        "unknown": "**Unknown** — not verified; check the official source before relying on it.",
    }.get(status, f"**{status}**")

    lvl = t.get("autonomy_level", "unknown")
    lvl_txt = (f"Level {lvl} — see [the autonomy scale](../docs/autonomy-scale.md)."
               if isinstance(lvl, int) else UNK + " — not verified.")

    caps = [
        ("File editing", "file_editing"), ("Terminal", "terminal_execution"),
        ("Repository context", "repository_context"), ("MCP", "mcp"),
        ("Git", "git_support"), ("Tests", "testing"), ("Browser", "web_browsing"),
        ("Subagents", "subagents"), ("BYOK", "byok"), ("Local models", "local_models"),
    ]
    cap_rows = "\n".join(f"| {label} | {cap(t, f)} |" for label, f in caps)

    platforms = []
    if t.get("vscode"): platforms.append("VS Code (extension)")
    if t.get("jetbrains"): platforms.append("JetBrains (plugin)")
    if t.get("cursor"): platforms.append("Cursor (compatible)")
    if t.get("windsurf"): platforms.append("Windsurf")
    if t.get("zed"): platforms.append("Zed")
    if t.get("terminal"): platforms.append("Terminal / CLI")
    if t.get("web"): platforms.append("Web")
    if t.get("desktop"): platforms.append("Desktop app")
    if t.get("mobile"): platforms.append("Mobile")
    if t.get("ide_support"): platforms.append(str(t["ide_support"]))
    platforms = platforms or [f"{UNK} — check official documentation."]

    models_sec = []
    if t.get("supported_models"): models_sec.append(f"- **Models:** {t['supported_models']}")
    if t.get("model_providers"): models_sec.append(f"- **Providers:** {t['model_providers']}")
    if t.get("cloud_models"): models_sec.append("- **Cloud models:** supported")
    if t.get("local_models"): models_sec.append("- **Local models:** supported (Ollama / LM Studio / llama.cpp)")
    if not models_sec:
        models_sec = [f"{UNK} — check official documentation for currently supported models."]

    price_rows = [
        ("Free", yn(t, "free")),
        ("Free tier", yn(t, "free_tier")),
        ("Paid", "Yes — see summary above" if t.get("pricing_summary") else UNK),
        ("BYOK", yn(t, "byok")),
        ("API costs", "You pay the model provider when using BYOK" if t.get("byok") else UNK),
    ]
    price_table = "\n".join(f"| {k} | {v} |" for k, v in price_rows)

    alt = t.get("alternatives") or []
    alt_lines = "\n".join(f"- [{a}](./{a}.md)" for a in alt) or \
        "See the [comparison matrix](../comparisons/tool-comparison-matrix.md)."

    verdict, reason = ali_verdict(t)
    wf = "\n".join(workflow_lines(t))
    sources = bullet_list([
        link("Official website", t.get("official_website")),
        link("Official documentation", t.get("official_docs")),
        link("Source repository", t.get("github")),
        "Pricing: verify on the official pricing page — it changes frequently.",
    ])
    security = t.get("security_notes") or (
        "Agents that execute terminal commands and edit files can cause damage if "
        "misused. Review diffs before accepting, never paste secrets into prompts, "
        "keep permissions scoped. See [AI coding security]"
        "(../docs/security/ai-coding-security.md).")
    privacy = t.get("privacy_notes") or (
        "With BYOK/local models, prompts go to the provider you choose (or nowhere "
        "for local). Hosted products may retain data per their policy — verify the "
        "current policy before using on proprietary code. See [privacy notes]"
        "(../docs/security/privacy.md).")
    install = t.get("official_docs") or t.get("official_website")
    hand = ("<!-- full_page: true — page is generated once; edit data/tools.yaml, then "
            "re-run scripts/generate-tool-pages.py --force to overwrite. -->\n"
            ) if t.get("full_page") else ""
    selfh = (f"\n- Self-hostable: **{yn(t, 'self_hosted')}**" if "self_hosted" in t else "")

    parts = [
        f"# {t['name']}\n",
        f"> Last verified: {t.get('last_verified', UNK)} · Status: {status} · "
        f"Autonomy: {lvl_txt}\n",
        hand,
        f"{t.get('official_status_notes', '')}\n",
        "## Overview\n",
        f"**{t['name']}** is a {sub_name.lower() or 'developer tool'} in the "
        f"*{cat_name}* category, made by {t.get('company', UNK)}.\n",
        f"{t.get('best_for', '')}\n",
        "## Official Links\n",
        f"- {link('Official website', t.get('official_website'))}",
        f"- {link('Documentation', t.get('official_docs'))}",
        f"- {link('GitHub', t.get('github'))}",
        "- Pricing: see the official pricing page via the website link above.\n",
        f"## Current Status\n\n{status_line}\n\n{t.get('official_status_notes', '')}\n",
        f"## What It Does\n\n{t.get('strengths', '')}\n",
        f"Known limitations: {t.get('weaknesses', '')}\n",
        "## Main Capabilities\n",
        f"| Capability | Supported |\n| --- | --- |\n{cap_rows}\n",
        f"## Platforms\n\n{bullet_list(platforms)}\n",
        f"## Supported Models\n\n{bullet_list(models_sec)}\n",
        "## Model Providers\n",
        f"{t.get('model_providers', UNK + ' — check official documentation.')}\n",
        "## Pricing\n",
        f"{t.get('pricing_summary', UNK + ' — check official pricing.')}\n",
        f"| Option | Available |\n| --- | --- |\n{price_table}\n",
        "> Advertised prices are not total cost: BYOK tools are often free while you "
        "pay the model provider per token. See [pricing analysis]"
        "(../docs/comparisons/pricing.md).\n",
        "## Open Source\n",
        f"- Open source: **{t.get('open_source', UNK)}**",
        f"- License: **{t.get('license', UNK)}**",
        f"- Repository: {('<' + t['github'] + '>') if t.get('github') else 'not public / not verified'}{selfh}",
        "- Open-source, source-available, free, and free-tier are different "
        "properties — see [concepts](../docs/getting-started/concepts.md).\n",
        "## Installation\n",
        "Use the official installation instructions — do not rely on third-party copies:\n",
        f"- {link('Official install/setup docs', install)}\n",
        "## Basic Usage\n",
        "Start from the official quickstart in the documentation above. Keep the "
        "first session read-only (or on a scratch repository) until you trust the "
        "tool's file-editing and terminal behavior.\n",
        f"## Agent Workflow\n\n```text\n{wf}\n```\n",
        "Only the steps above are supported by this tool (derived from the "
        "capability table, not marketing claims).\n",
        f"## Strengths\n\n{t.get('strengths', UNK)}\n",
        f"## Weaknesses\n\n{t.get('weaknesses', UNK)}\n",
        f"## Best For\n\n{t.get('best_for', UNK)}\n",
        "## Not Ideal For\n",
        f"- Developers who need stability guarantees — {t['name']} changes quickly; "
        "re-verify features and pricing before committing.",
        "- Anyone unwilling to review generated diffs and terminal commands.\n",
        f"## Security Considerations\n\n{security}\n",
        f"## Privacy Considerations\n\n{privacy}\n",
        "## Student Perspective\n",
        f"Assessment: **{t.get('student_friendliness', UNK)}** — see "
        "[best tools for students](../comparisons/best-for-students.md).\n",
        "## My Setup (hardware compatibility)\n",
        "Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, "
        f"no dGPU, Windows, VS Code, PowerShell, Ollama): **{verdict}**\n",
        f"{reason}\n",
        "*Compatibility verdicts are derived from documented requirements and hardware "
        "reasoning — not personal benchmarks. See "
        "[my setup](../comparisons/best-stack-for-ali.md).*\n",
        f"## Alternatives\n\n{alt_lines}\n",
        f"## Sources\n\n{sources}\n",
        "All capability and pricing claims above were checked against the official "
        f"sources listed here as of {t.get('last_verified', UNK)}. Anything not "
        "confirmed is marked **Unknown** — do not assume.\n",
        "---\n",
        "*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*\n",
    ]
    text = "\n".join(parts)
    while "\n\n\n" in text:  # collapse blanks introduced by empty optional parts
        text = text.replace("\n\n\n", "\n\n")
    return text

def main() -> int:
    argv = sys.argv
    only = argv[argv.index("--only") + 1] if "--only" in argv else None
    force = "--force" in argv

    tools_doc = yaml.safe_load((DATA / "tools.yaml").read_text(encoding="utf-8"))
    cats = yaml.safe_load((DATA / "categories.yaml").read_text(encoding="utf-8"))
    tools = tools_doc["tools"]

    OUT.mkdir(exist_ok=True)
    written = skipped = 0
    for t in tools:
        if only and t["id"] != only:
            continue
        page = OUT / f"{t['id']}.md"
        if page.exists() and t.get("full_page") is True and not force:
            skipped += 1
            continue
        page.write_text(render(t, cats), encoding="utf-8", newline="\n")
        written += 1
    print(f"generated {written} pages to tools/ ({skipped} full-page tools preserved)")
    return 0


if __name__ == "__main__":
    sys.exit(main())




