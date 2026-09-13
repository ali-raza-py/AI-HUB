

> HAND-WRITTEN FLAG SET — regenerate with `--force` only if you intend to overwrite.
# Claude Code

> Last verified: 2026-09 · Status: active · Autonomy: Level 4 — see [the autonomy scale](../docs/autonomy-scale.md).

Anthropic's agentic coding tool: CLI, VS Code/JetBrains extensions, desktop app, web; MCP; Agent SDK (verified docs Sep 2026).

## Overview

**Claude Code** is a terminal agent with ide extension in the *Terminal / CLI coding agents* category, made by Anthropic.

Terminal-first workflows, long-running agent sessions, and deep repo understanding.

## Official Links

- [Official website](https://claude.com/)
- [Documentation](https://docs.claude.com/en/docs/claude-code/overview)
- GitHub — not verified, check official website
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Anthropic's agentic coding tool: CLI, VS Code/JetBrains extensions, desktop app, web; MCP; Agent SDK (verified docs Sep 2026).

## What It Does

Mature CLI agent, subagents, hooks, CLAUDE.md memory, MCP, IDE extensions, scripting/headless modes.

Known limitations: Anthropic-centric billing; subscription needed for the smoothest experience.

## Main Capabilities

| Capability | Supported |
| --- | --- |
| File editing | Yes |
| Terminal | Yes |
| Repository context | Yes |
| MCP | Yes |
| Git | Yes |
| Tests | Yes |
| Browser | Unknown |
| Subagents | Unknown |
| BYOK | Yes |
| Local models | No |

## Platforms

- Unknown — check official documentation.

## Supported Models

- Unknown — check official documentation for currently supported models.

## Model Providers

Unknown — check official documentation.

## Pricing

Requires Claude Pro/Max subscription or API/Bedrock/Vertex; third-party OAuth providers supported.

| Option | Available |
| --- | --- |
| Free | No |
| Free tier | Yes |
| Paid | Yes — see summary above |
| BYOK | Yes |
| API costs | You pay the model provider when using BYOK |

> Advertised prices are not total cost: BYOK tools are often free while you > pay the model provider per token. See [pricing analysis](../docs/comparisons/pricing.md).

## Open Source

- Open source: **False**
- License: **Proprietary (source-available components)**
- Repository: not public / not verified
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://docs.claude.com/en/docs/claude-code/overview)

## Basic Usage

Start from the official quickstart in the documentation above. Keep the first session read-only (or on a scratch repository) until you trust the tool's file-editing and terminal behavior.

## Agent Workflow

```text
Prompt
 ↓
Context gathering (repository / MCP tools)
 ↓
Planning
 ↓
File changes
 ↓
Terminal commands
 ↓
Tests
 ↓
Human review
 ↓
Final changes
 ↓
Commit / PR
```

Only the steps above are supported by this tool (derived from the capability table, not marketing claims).

## Strengths

Mature CLI agent, subagents, hooks, CLAUDE.md memory, MCP, IDE extensions, scripting/headless modes.

## Weaknesses

Anthropic-centric billing; subscription needed for the smoothest experience.

## Best For

Terminal-first workflows, long-running agent sessions, and deep repo understanding.

## Not Ideal For

- Developers who need stability guarantees — Claude Code changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **good** — see [best tools for students](../comparisons/best-for-students.md).

## Ali's Setup

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, no dGPU, Windows, VS Code, PowerShell): **Good**

Works well on this machine for normal use. Stated requirements: Any machine; runs in terminal (Windows w/ PowerShell/WSL)..

## Alternatives

- [openai-codex-cli](./openai-codex-cli.md)
- [gemini-cli](./gemini-cli.md)
- [aider](./aider.md)
- [crush](./crush.md)

## Sources

- [Official website](https://claude.com/)
- [Official documentation](https://docs.claude.com/en/docs/claude-code/overview)
- Source repository — not verified, check official website
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*Page generated from `data/tools.yaml` — edit the registry, not this file.*

