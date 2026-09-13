# AI Hub

> A structured knowledge base and comparison platform for modern AI developer tools —
> IDE agents, terminal/CLI agents, autonomous agents, BYOK and local-AI tooling,
> AI app builders, and documentation systems.

**102 registered tools · 40 detailed tool pages · 6 categories · 10 comparison
guides · 1 master matrix** — all generated from one verified registry.

> **Warning:** AI tooling changes rapidly. Pricing, model availability, platforms,
> and features may change at any time. Every entry carries a **Last verified** date
> (current pass: **September 2026**). Anything that could not be verified against an
> official source is marked **Unknown** — it is never guessed.

## What is AI Hub?

AI Hub answers one question well: **"Which AI developer tool should I actually use —
and why?"** It is not a link dump or a hype list. It is a maintainable reference
built like a small database:

```text
ai-coding-tools/data/tools.yaml      (the registry — single source of truth)
        ↓  scripts/validate-data.py        (schema, enums, duplicates, references)
        ↓  scripts/generate-tool-pages.py  (102 tool pages from the registry)
        ↓  scripts/generate-index.py       (indexes, comparisons, master matrix)
        ↓  scripts/check-links.py          (internal link integrity)
        ↓  scripts/check-external-links.py (best-effort live URL check)
```

Every tool is described with the same fields: category and subcategory, status
(active/archived/deprecated/…), official website and docs, GitHub repository,
open-source status and license, BYOK support, local-model support, platform
availability (VS Code, JetBrains, Zed, CLI, terminal, web, desktop), MCP support,
terminal access, Git support, autonomy level, free/free-tier status, pricing
summary, best-for, strengths, weaknesses, hardware fit, and a `last_verified`
date. GitHub Actions re-validates all of it on every push.

## Why I built it

The AI coding ecosystem is loud: dozens of tools claim to be "the future of
software development", comparisons are written by people selling the tool, and
half the "best of" lists recycle marketing claims. As a developer (and student)
with a modest machine and a real budget, I needed the opposite:

- **Evidence over marketing** — capability claims tied to documented features,
  never invented benchmarks.
- **Honest trade-offs** — every tool lists weaknesses, not just strengths.
- **Fit for real constraints** — what actually runs on an 8 GB, CPU-only laptop?
  What is free, BYOK, or open source?
- **Fewer tools, mastered** — a system for choosing 1–3 tools instead of
  installing 100.

## Features

- **Single source of truth** — one YAML registry (`ai-coding-tools/data/tools.yaml`);
  every page, index, and comparison table is generated from it.
- **Consistent tool pages** — the same template for all 102 tools; 40 important
  tools get detailed pages, the rest concise ones.
- **Capability-first comparisons** — VS Code, CLI, MCP, terminal execution, Git,
  BYOK, local models, autonomy level, free tier — as data, not adjectives.
- **Practical guides** — decision tree, tool overlap analysis, pricing reality
  check, security, privacy, and a hardware compatibility guide.
- **Verified and honest** — archived/discontinued tools are kept and clearly
  marked; unverifiable values are `Unknown`; changes are recorded in the
  changelog.
- **Automated quality gates** — validation, duplicate detection, required-field
  checks, link checking, Markdown lint, and CI.

## Tool categories

| Category | Tools | Index |
| --- | --- | --- |
| VS Code / IDE agents | 31 | [docs/vscode-ide-agents](ai-coding-tools/docs/vscode-ide-agents/index.md) |
| Terminal / CLI agents | 24 | [docs/terminal-agents](ai-coding-tools/docs/terminal-agents/index.md) |
| Autonomous agents | 13 | [docs/autonomous-agents](ai-coding-tools/docs/autonomous-agents/index.md) |
| AI app builders | 10 | [docs/app-builders](ai-coding-tools/docs/app-builders/index.md) |
| Documentation tools | 18 | [docs/documentation-tools](ai-coding-tools/docs/documentation-tools/index.md) |
| Open-source / BYOK / local AI | 6 | [docs/open-source-byok](ai-coding-tools/docs/open-source-byok/index.md) |

Full directory: [docs/tool-index.md](ai-coding-tools/docs/tool-index.md).
Categories overlap by design (e.g. Cline is both a VS Code agent and a BYOK
tool); the registry stores each tool once and categories are views.

## Comparison system

Ten generated comparison guides plus a master matrix, all derived from the
registry so they never drift out of sync with the tool pages:

| Comparison | Page |
| --- | --- |
| Master matrix (all 102 tools × 13 criteria) | [tool-comparison-matrix.md](ai-coding-tools/comparisons/tool-comparison-matrix.md) |
| Best free AI coding tools | [best-free-tools.md](ai-coding-tools/comparisons/best-free-tools.md) |
| Best open-source tools | [best-open-source.md](ai-coding-tools/comparisons/best-open-source.md) |
| Best BYOK tools | [best-byok.md](ai-coding-tools/comparisons/best-byok.md) |
| Best VS Code agents | [best-vscode-agents.md](ai-coding-tools/comparisons/best-vscode-agents.md) |
| Best terminal / CLI agents | [best-cli-agents.md](ai-coding-tools/comparisons/best-cli-agents.md) |
| Best autonomous agents | [best-autonomous-agents.md](ai-coding-tools/comparisons/best-autonomous-agents.md) |
| Best tools for students | [best-for-students.md](ai-coding-tools/comparisons/best-for-students.md) |
| Best tools for low-end hardware | [best-for-low-end-hardware.md](ai-coding-tools/comparisons/best-for-low-end-hardware.md) |
| Best tools for local AI | [best-for-local-ai.md](ai-coding-tools/comparisons/best-for-local-ai.md) |

The matrix compares: open source, BYOK, local models, VS Code, CLI, MCP,
terminal execution, Git, autonomy level, free availability, and best use case
for every tool.

## Verification policy

- Every registry entry carries `last_verified` (current pass: `2026-09`).
- Important facts are checked against **official sources** — vendor sites,
  official docs, and canonical GitHub repositories. Third-party blogs are not
  pricing evidence.
- **Never invent** features, prices, benchmarks, or statistics. Qualitative
  wording (Strong/Good/Moderate/Limited) is used instead of fake numbers.
- **Unknown is a feature.** If a value cannot be verified, it says `Unknown`.
- Archived, discontinued, renamed, and acquired tools are **kept** in the
  registry with an explicit status — never silently deleted (e.g. Roo Code's
  May 2026 shutdown and gpt-engineer's April 2026 archive are documented).
- Validation must pass with **0 errors** before any commit; CI enforces this.

## My setup (compatibility)

Practical compatibility classifications (🟢 Recommended / 🟡 Usable with
limitations / 🔴 Not ideal) for one specific machine — HP EliteBook 845 G7,
Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dedicated GPU, Windows, VS Code,
PowerShell, GitHub, Ollama:

- Full page: [comparisons/best-stack-for-ali.md](ai-coding-tools/comparisons/best-stack-for-ali.md)
- Hardware reasoning: [docs/guides/hardware.md](ai-coding-tools/docs/guides/hardware.md)

Every generated tool page ends with the same classification for this machine.
Classifications are **derived from documented requirements and hardware
reasoning — they are not personal benchmarks.**

## How to choose

Do **not** install 100 agents. The goal: **learn many → evaluate → choose few →
master them.** Start here:

1. [Decision tree](ai-coding-tools/docs/guides/decision-tree.md)
2. [Tool overlap — what you don't need to duplicate](ai-coding-tools/comparisons/tool-overlap.md)
3. [Pricing models — why advertised price ≠ total cost](ai-coding-tools/docs/comparisons/pricing.md)
4. [The practical stack per profile](ai-coding-tools/docs/getting-started/practical-stack.md)

## Guides

- [Beginner concepts](ai-coding-tools/docs/getting-started/beginners.md) — autocomplete vs chat vs agent, BYOK, MCP, RAG
- [Key concepts & definitions](ai-coding-tools/docs/getting-started/concepts.md) — tool vs agent vs model vs provider
- [Autonomy scale (L0–L5)](ai-coding-tools/docs/autonomy-scale.md)
- [MCP guide](ai-coding-tools/docs/mcp-guide.md)
- [AI coding security](ai-coding-tools/docs/security/ai-coding-security.md) · [Privacy](ai-coding-tools/docs/security/privacy.md)
- [Hardware guide (8 GB RAM reality check)](ai-coding-tools/docs/guides/hardware.md)
- [Student guide](ai-coding-tools/docs/workflows/student.md) · [Workflows](ai-coding-tools/workflows/README.md)
- [Quality control — how this repo stays accurate](ai-coding-tools/docs/quality-control.md)

## Automation & CI

Maintenance is scripted (run from `ai-coding-tools/`):

```powershell
python scripts/validate-data.py        # registry check — must print RESULT: VALID
python scripts/generate-tool-pages.py  # regenerate tool pages from the registry
python scripts/generate-index.py       # regenerate indexes + comparison tables
python scripts/check-links.py          # internal link integrity — must print 0 broken
python scripts/check-external-links.py # best-effort live URL check (report-only)
```

GitHub Actions (`.github/workflows/validate.yml`) runs on every push/PR:
registry validation, duplicate and required-field checks, regeneration parity
(fails if generated files are out of sync with the registry), internal link
checks, and Markdown linting. External links are re-checked weekly
(report-only, since networks flake).

## Transparency

This knowledge base is produced with **AI-assisted research**: drafting,
aggregation across sources, and consistency checking are AI-accelerated, while
**important information is reviewed and verified against official sources**
before it is stored in the registry. Anything that cannot be verified is marked
`Unknown`. Capability verdicts are derived from documented features; no
benchmarks or statistics are invented, and nothing is presented as personally
tested unless it explicitly was. See
[quality control](ai-coding-tools/docs/quality-control.md) for the full process.

## How to contribute

Corrections are the most valuable contributions — AI tooling changes weekly.
See [CONTRIBUTING.md](ai-coding-tools/CONTRIBUTING.md). In short: edit the
registry, not the generated pages; cite official sources; use `Unknown`
honestly; keep archived tools archived; run the validators.

## License

[MIT](LICENSE) — free to use, fork, and build upon with attribution.

---

> AI coding tools are force multipliers, not substitutes for understanding
> programming. Learn the fundamentals — DSA, Git, databases, testing,
> architecture, security — and let AI accelerate, not replace, that learning.
