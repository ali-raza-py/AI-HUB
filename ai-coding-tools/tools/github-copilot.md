

> HAND-WRITTEN FLAG SET — regenerate with `--force` only if you intend to overwrite.
# GitHub Copilot

> Last verified: 2026-09 · Status: active · Autonomy: Level 3 — see [the autonomy scale](../docs/autonomy-scale.md).

Active. Free tier, Pro, Pro+, Business, Enterprise plans; VS Code, JetBrains, Visual Studio, CLI, mobile; agent mode; MCP support in IDE/CLI (verified docs Sep 2026).

## Overview

**GitHub Copilot** is a editor/ide native agent (vs code extension host) in the *VS Code / IDE AI agents* category, made by GitHub / Microsoft.

GitHub-centric developers who want integrated autocomplete + chat + agents in one subscription.

## Official Links

- [Official website](https://github.com/features/copilot)
- [Documentation](https://docs.github.com/en/copilot)
- GitHub — not verified, check official website
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Active. Free tier, Pro, Pro+, Business, Enterprise plans; VS Code, JetBrains, Visual Studio, CLI, mobile; agent mode; MCP support in IDE/CLI (verified docs Sep 2026).

## What It Does

Tight GitHub integration, fast autocomplete, chat, agent mode, CLI, mobile app, wide IDE support.

Known limitations: Closed source; no BYOK; model choice limited to Copilot's catalog.

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
| BYOK | No |
| Local models | No |

## Platforms

- Unknown — check official documentation.

## Supported Models

- Unknown — check official documentation for currently supported models.

## Model Providers

Unknown — check official documentation.

## Pricing

Free tier exists; paid tiers add models/agent features. Includes CLI and cloud agent.

| Option | Available |
| --- | --- |
| Free | Yes |
| Free tier | Yes |
| Paid | Yes — see summary above |
| BYOK | No |
| API costs | Unknown |

> Advertised prices are not total cost: BYOK tools are often free while you > pay the model provider per token. See [pricing analysis](../docs/comparisons/pricing.md).

## Open Source

- Open source: **False**
- License: **Proprietary**
- Repository: not public / not verified
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://docs.github.com/en/copilot)

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

Tight GitHub integration, fast autocomplete, chat, agent mode, CLI, mobile app, wide IDE support.

## Weaknesses

Closed source; no BYOK; model choice limited to Copilot's catalog.

## Best For

GitHub-centric developers who want integrated autocomplete + chat + agents in one subscription.

## Not Ideal For

- Developers who need stability guarantees — GitHub Copilot changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **good** — see [best tools for students](../comparisons/best-for-students.md).

## Ali's Setup

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, no dGPU, Windows, VS Code, PowerShell): **Good**

Works well on this machine for normal use. Stated requirements: Any machine; cloud inference..

## Alternatives

- [gemini-code-assist](./gemini-code-assist.md)
- [amazon-q-developer](./amazon-q-developer.md)
- [cursor](./cursor.md)

## Sources

- [Official website](https://github.com/features/copilot)
- [Official documentation](https://docs.github.com/en/copilot)
- Source repository — not verified, check official website
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*Page generated from `data/tools.yaml` — edit the registry, not this file.*

