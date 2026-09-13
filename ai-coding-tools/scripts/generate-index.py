#!/usr/bin/env python3
"""Generate indexes and comparison tables from data/*.yaml.

Outputs (all regenerated on every run — do not hand-edit):
  docs/tool-index.md                     full directory of every tool
  docs/<category>/index.md               per-category pages
  docs/models/index.md                   model families table
  docs/providers/index.md                model providers table
  comparisons/tool-comparison-matrix.md  master matrix (section 35)
  comparisons/best-free-tools.md
  comparisons/best-open-source.md
  comparisons/best-byok.md
  comparisons/best-vscode-agents.md
  comparisons/best-cli-agents.md
  comparisons/best-autonomous-agents.md
  comparisons/best-app-builders.md
  comparisons/best-documentation-tools.md
"""
from __future__ import annotations

import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
DOCS = ROOT / "docs"
COMP = ROOT / "comparisons"

YES, NO, UNK = "Yes", "No", "Unknown"
GENERATED_NOTE = ("*Generated from `data/tools.yaml` on a `2026-09` verification "
                  "pass — edit the registry, then re-run `scripts/generate-index.py`.*")


def fmt(v) -> str:
    if v is True:
        return YES
    if v is False:
        return NO
    if isinstance(v, str) and v.strip():
        return v
    return UNK


def md_table(headers: list[str], rows: list[list[str]]) -> str:
    out = ["| " + " | ".join(headers) + " |", "| " + " | ".join(["---"] * len(headers)) + " |"]
    out += ["| " + " | ".join(r) + " |" for r in rows]
    return "\n".join(out)


def tool_rows(tools: list[dict], cats: dict) -> list[list[str]]:
    cat_name = {c["id"]: c["name"] for c in cats["categories"]}
    rows = []
    for t in sorted(tools, key=lambda x: x["name"].lower()):
        auto = t.get("autonomy_level", UNK)
        auto = f"L{auto}" if isinstance(auto, int) else UNK
        rows.append([
            f"[{t['name']}](../tools/{t['id']}.md)",
            cat_name.get(t["category"], t["category"]),
            fmt(t.get("open_source")) if t.get("open_source") is True else
            (t.get("open_source") if isinstance(t.get("open_source"), str) else NO),
            fmt(t.get("byok")), fmt(t.get("local_models")),
            fmt(t.get("vscode")), fmt(t.get("cli")), fmt(t.get("mcp")),
            fmt(t.get("git_support")),
            auto, fmt(t.get("free")),
            str(t.get("best_for", UNK))[:80],
        ])
    return rows


def write(path: Path, title: str, body: str) -> None:
    body = body.rstrip("\n")
    while "\n\n\n" in body:  # collapse blanks introduced by empty parts
        body = body.replace("\n\n\n", "\n\n")
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(f"# {title}\n\n{body}\n\n{GENERATED_NOTE}\n",
                    encoding="utf-8", newline="\n")
    print(f"wrote {path.relative_to(ROOT)}")


MATRIX_HEADERS = ["Tool", "Category", "Open Source", "BYOK", "Local", "VS Code",
                  "CLI", "MCP", "Terminal", "Git", "Autonomous", "Free", "Best For"]


def matrix_rows(tools, cats):
    cat_name = {c["id"]: c["name"] for c in cats["categories"]}
    rows = []
    for t in sorted(tools, key=lambda x: x["name"].lower()):
        lvl = t.get("autonomy_level")
        rows.append([
            f"[{t['name']}](../tools/{t['id']}.md)",
            cat_name.get(t["category"], t["category"]),
            fmt(t.get("open_source")) if t.get("open_source") is True else
            (t.get("open_source") if isinstance(t.get("open_source"), str) else NO),
            fmt(t.get("byok")), fmt(t.get("local_models")),
            fmt(t.get("vscode")), fmt(t.get("cli")), fmt(t.get("mcp")),
            fmt(t.get("terminal_execution")),
            fmt(t.get("git_support")),
            (f"L{lvl}" if isinstance(lvl, int) else UNK),
            fmt(t.get("free")),
            str(t.get("best_for", UNK))[:80],
        ])
    return rows

def filtered_page(path: Path, title: str, intro: str, tools, cats, pred) -> None:
    picked = [t for t in tools if pred(t)]
    if not picked:
        write(path, title, intro + "\n\nNo tools matched this filter.")
        return
    body = intro + "\n\n" + md_table(
        ["Tool", "Category", "Open Source", "BYOK", "Local", "CLI", "MCP",
         "Autonomy", "Free", "Best For"],
        [[r[0], r[1], r[2], r[3], r[4], r[6], r[7], r[9], r[10], r[11]]
         for r in tool_rows(picked, cats)])
    write(path, title, body)


def main() -> int:
    tools = yaml.safe_load((DATA / "tools.yaml").read_text(encoding="utf-8"))["tools"]
    cats = yaml.safe_load((DATA / "categories.yaml").read_text(encoding="utf-8"))
    models = yaml.safe_load((DATA / "models.yaml").read_text(encoding="utf-8"))["models"]
    provs = yaml.safe_load((DATA / "providers.yaml").read_text(encoding="utf-8"))["providers"]

    tools_by_cat: dict[str, list[dict]] = {}
    for t in tools:
        tools_by_cat.setdefault(t["category"], []).append(t)

    # ------------------------------------------------------ docs/tool-index.md
    parts = ["Complete directory of every registered tool. Every row links to a "
             "full page with capabilities, pricing, platforms, and sources.\n"]
    for c in cats["categories"]:
        group = tools_by_cat.get(c["id"], [])
        parts.append(f"## {c['name']} ({len(group)})\n")
        parts.append(c.get("description", "").strip() + "\n")
        parts.append(md_table(
            ["Tool", "Status", "Autonomy", "Free", "BYOK", "Local", "Best For"],
            [[f"[{t['name']}](../tools/{t['id']}.md)", t.get("status", UNK),
              (f"L{t['autonomy_level']}" if isinstance(t.get("autonomy_level"), int)
               else UNK), fmt(t.get("free")), fmt(t.get("byok")),
              fmt(t.get("local_models")), str(t.get("best_for", ""))[:70]]
             for t in sorted(group, key=lambda x: x["name"].lower())]))
        parts.append("")
    write(DOCS / "tool-index.md",
          f"Tool Index — {len(tools)} registered tools", "\n".join(parts))

    # ------------------------------------------------- docs/<category>/index.md
    for c in cats["categories"]:
        group = tools_by_cat.get(c["id"], [])
        body = (c.get("description", "").strip() + "\n\n" +
                md_table(["Tool", "Status", "Autonomy", "Free", "BYOK", "Local",
                          "CLI", "Best For"],
                         [[f"[{t['name']}](../../tools/{t['id']}.md)",
                           t.get("status", UNK),
                           (f"L{t['autonomy_level']}"
                            if isinstance(t.get("autonomy_level"), int) else UNK),
                           fmt(t.get("free")), fmt(t.get("byok")),
                           fmt(t.get("local_models")), fmt(t.get("cli")),
                           str(t.get("best_for", ""))[:70]]
                          for t in sorted(group, key=lambda x: x["name"].lower())]))
        write(DOCS / c["id"] / "index.md", c["name"], body)

    # ----------------------------------------------------- comparisons/matrix
    write(COMP / "tool-comparison-matrix.md", "Tool Comparison Matrix",
          "Master comparison of every registered tool. Values come from the "
          "registry; **Unknown** means not verified — do not assume.\n\n" +
          md_table(MATRIX_HEADERS, matrix_rows(tools, cats)))

    # ----------------------------------------------------- filtered comparisons
    coding_cats = {"vscode-ide-agents", "terminal-agents", "autonomous-agents"}
    coding = [t for t in tools if t["category"] in coding_cats]
    filtered_page(COMP / "best-free-tools.md", "Best Free AI Coding Tools",
                  "Coding tools usable at $0 (free, open source, or a real free "
                  "tier). Free tiers have limits — verify them on official pages.",
                  coding, cats,
                  lambda t: t.get("free") is True or t.get("free_tier") is True)
    filtered_page(COMP / "best-open-source.md", "Best Open-Source Tools",
                  "Registered tools with an open-source or open-weight license. "
                  "Open-source is about the license — not about price or hosting.",
                  tools, cats, lambda t: t.get("open_source") is True)
    filtered_page(COMP / "best-byok.md", "Best BYOK Tools",
                  "Bring-your-own-key: the tool is (often) free while you pay the "
                  "model provider directly at token cost.",
                  tools, cats, lambda t: t.get("byok") is True)
    filtered_page(COMP / "best-vscode-agents.md", "Best VS Code Agents",
                  "AI agents and assistants that run inside VS Code.",
                  tools, cats,
                  lambda t: t.get("vscode") is True or
                  t["category"] == "vscode-ide-agents")
    filtered_page(COMP / "best-cli-agents.md", "Best Terminal / CLI Agents",
                  "Agents you drive from a terminal or CLI.",
                  tools, cats,
                  lambda t: t["category"] == "terminal-agents" or
                  (t.get("cli") is True and
                   t["category"] in ("vscode-ide-agents", "autonomous-agents")))
    filtered_page(COMP / "best-autonomous-agents.md", "Best Autonomous Agents",
                  "Tools at autonomy Level 4–5 (plan + implement with minimal "
                  "supervision) or designed as autonomous agents. See the "
                  "[autonomy scale](../docs/autonomy-scale.md) — levels are "
                  "evidence-based, not marketing.",
                  tools, cats,
                  lambda t: t.get("autonomy_level") in (4, 5) or
                  t["category"] == "autonomous-agents")
    filtered_page(COMP / "best-app-builders.md", "Best AI App Builders",
                  "Hosted products that generate, deploy, and iterate on whole "
                  "applications from prompts.",
                  tools, cats, lambda t: t["category"] == "app-builders")
    filtered_page(COMP / "best-documentation-tools.md", "Best Documentation Tools",
                  "Documentation generators, AI assistants, platforms, and API "
                  "reference tools. Not all of these are AI-powered.",
                  tools, cats, lambda t: t["category"] == "documentation-tools")

    # ------------------------------------------------------ models + providers
    write(DOCS / "models" / "index.md", "Model Families",
          "Model families referenced across this repository. Capabilities change "
          "with every release — verify on official provider pages.\n\n" +
          md_table(["Family", "Provider", "Local", "Providers", "Notes"],
                   [[m["id"], str(m.get("provider", UNK)), fmt(m.get("local")),
                     ", ".join(m.get("providers", [])) or UNK,
                     str(m.get("notes", ""))[:90]] for m in models]))
    write(DOCS / "providers" / "index.md", "Model Providers",
          "Where model access comes from. BYOK tools use these APIs directly.\n\n" +
          md_table(["Provider", "API", "BYOK", "Local", "Notes"],
                   [[p["id"], fmt(p.get("api")), fmt(p.get("byok")),
                     fmt(p.get("local")), str(p.get("notes", ""))[:90]]
                    for p in provs]))

    print(f"done: {len(tools)} tools, {len(models)} model families, "
          f"{len(provs)} providers")
    return 0


if __name__ == "__main__":
    sys.exit(main())


