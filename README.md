# AI Coding Tools & Agents — Developer Reference

A maintainable knowledge base of modern AI-powered developer tools: IDE agents,
VS Code extensions, terminal agents, autonomous coding agents, open-source and
BYOK tools, local AI, AI app builders, and documentation systems.

> **Warning:** AI tooling changes rapidly. Pricing, model availability,
> supported platforms, and features may change at any time. Every entry carries
> a **Last verified** date (this build: **September 2026**). Always verify
> important information with the official source. Anything unverified is
> marked **Unknown** — it is never guessed.

## Table of Contents

- [How this repository works](#how-this-repository-works)
- [Categories](#categories)
- [Quick recommendations](#quick-recommendations)
- [Comparison matrix](#comparison-matrix)
- [How to choose](#how-to-choose)
- [Guides](#guides)
- [The Practical AI Developer Stack](docs/getting-started/practical-stack.md)
- [Contribution guide](CONTRIBUTING.md)
- [Update policy](#update-policy)
- [Data model](#data-model)
- [License](LICENSE)

## How this repository works

This is **not** a static list. It is a source-of-truth knowledge base:

```text
data/tools.yaml   (the registry — single source of truth)
        ↓  scripts/validate-data.py       (consistency + enum checks)
        ↓  scripts/generate-tool-pages.py (80 tool pages)
        ↓  scripts/generate-index.py      (indexes + comparison tables)
        ↓  scripts/check-links.py         (internal link integrity)
```

Edit `data/tools.yaml`, then re-run the scripts. Never hand-edit generated
pages. The three maintenance scripts are the entire pipeline.

## Categories

| Category | Tools | Index |
| --- | --- | --- |
| VS Code / IDE agents | 30 | [docs/vscode-ide-agents](docs/vscode-ide-agents/index.md) |
| Terminal / CLI agents | ~17 | [docs/terminal-agents](docs/terminal-agents/index.md) |
| Open-source / BYOK / local | 20 | [docs/open-source-byok](docs/open-source-byok/index.md) |
| Autonomous agents | 20 | [docs/autonomous-agents](docs/autonomous-agents/index.md) |
| AI app / UI / full-stack builders | 10 | [docs/app-builders](docs/app-builders/index.md) |
| Documentation tools | 16 | [docs/documentation-tools](docs/documentation-tools/index.md) |

Full directory: [docs/tool-index.md](docs/tool-index.md) — 80 registered tools.

Many tools appear in several categories (e.g. Cline is both a VS Code agent
and a BYOK tool). The registry stores each tool once; categories are views.

## Quick recommendations

**Best free starting point (VS Code):** GitHub Copilot free tier, or Cline /
Kilo Code with a free-tier API key. **Best BYOK:** Cline, Kilo Code, Continue,
OpenCode, Aider. **Best terminal-first:** Claude Code, Codex CLI, Gemini CLI,
Aider, OpenCode. **Best open-source agent:** Cline, OpenHands, Aider, Goose.
**Best local AI (with caveats on 8 GB RAM):** Ollama + Qwen/Llama-class small
models, Twinny, Tabby, Continue. **Best autonomous:** OpenHands, Devin,
Codex cloud — but read the autonomy scale first; autonomy ≠ quality.

Details: [comparisons/](comparisons/) — including
[best-for-students](comparisons/best-for-students.md) and the
[Ali-specific stack](comparisons/best-stack-for-ali.md).

## Comparison matrix

The master matrix (open-source, BYOK, local, VS Code, CLI, MCP, terminal, git,
autonomy, free, best-for) is generated from the registry:
[comparisons/tool-comparison-matrix.md](comparisons/tool-comparison-matrix.md).

## How to choose

Do **not** install 100 agents. The goal is: **learn many → evaluate → choose
few → master them.** Start here:

1. [Decision tree](docs/guides/decision-tree.md)
2. [Tool overlap — what you don't need to duplicate](comparisons/tool-overlap.md)
3. [Pricing models — why advertised price ≠ total cost](docs/comparisons/pricing.md)
4. [The Practical AI Developer Stack](docs/getting-started/practical-stack.md)

## Guides

- [Beginner concepts](docs/getting-started/beginners.md) — autocomplete vs chat vs agent, BYOK, MCP, RAG
- [Key concepts & definitions](docs/getting-started/concepts.md) — tool vs agent vs model vs provider
- [Autonomy scale (L0–L5)](docs/autonomy-scale.md)
- [MCP guide](docs/mcp-guide.md)
- [AI coding workflows](docs/workflows/ai-coding-workflows.md)
- [AI coding rules — never blindly accept](docs/guides/ai-coding-rules.md)
- [Prompt templates for coding agents](docs/guides/coding-agent-prompts.md)
- [Advanced agent workflows](docs/guides/advanced-agent-workflows.md)
- [Security](docs/security/ai-coding-security.md) · [Privacy](docs/security/privacy.md)
- [Hardware guide (incl. Ryzen 5 + 8 GB reality check)](docs/guides/hardware.md)
- [Student guide](docs/workflows/student.md)
- [Quality control](docs/quality-control.md)

## Update policy

- Every registry entry carries `last_verified` (currently `2026-09`).
- Changes are recorded in [CHANGELOG.md](CHANGELOG.md) — only for updates
  actually performed.
- Validation must pass (`0 errors`) before any commit.
- When a product is discontinued/archived/renamed it is **kept** in the
  registry with an explicit status — never silently removed.

## Data model

Structured registry in [data/tools.yaml](data/tools.yaml) with fields for
identity, licensing, models, capabilities (file editing, terminal, MCP,
subagents, git, tests…), autonomy level, pricing, student-friendliness,
hardware fit, and sources. Supporting registries:
[data/models.yaml](data/models.yaml) (model families),
[data/providers.yaml](data/providers.yaml) (API providers),
[data/categories.yaml](data/categories.yaml) (categories + subcategories).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). In short: change the registry, not the
generated pages; run the validators; cite official sources; use `Unknown`
honestly.

---

> AI coding tools are force multipliers, not substitutes for understanding
> programming. Learn the fundamentals — DSA, Git, databases, testing,
> architecture, security — and let AI accelerate, not replace, that learning.
