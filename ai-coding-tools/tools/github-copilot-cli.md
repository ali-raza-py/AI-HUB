# GitHub Copilot CLI

> Last verified: 2026-09 · Status: active · Autonomy: Level 3 — see [the autonomy scale](../docs/autonomy-scale.md).


Copilot in the terminal (GitHub CLI extension and native terminal app); agentic; part of Copilot subscription (verified docs Sep 2026).

## Overview

**GitHub Copilot CLI** is a terminal agent (cli/repl) in the *Terminal / CLI coding agents* category, made by GitHub / Microsoft.

GitHub users who want Copilot chat in the terminal.

## Official Links

- [Official website](https://docs.github.com/en/copilot/using-github-copilot/getting-started-with-github-copilot)
- Documentation — not verified, check official website
- GitHub — not verified, check official website
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Copilot in the terminal (GitHub CLI extension and native terminal app); agentic; part of Copilot subscription (verified docs Sep 2026).

## What It Does

Tight GitHub integration, agentic flows, IDE delegation.

Known limitations: Requires Copilot subscription; closed source.

## Main Capabilities

| Capability | Supported |
| --- | --- |
| File editing | Yes |
| Terminal | Yes |
| Repository context | Yes |
| MCP | Yes |
| Git | Unknown |
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

Part of Copilot Free/Pro/Pro+ plans.

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

- [Official install/setup docs](https://docs.github.com/en/copilot/using-github-copilot/getting-started-with-github-copilot)

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
```

Only the steps above are supported by this tool (derived from the capability table, not marketing claims).

## Strengths

Tight GitHub integration, agentic flows, IDE delegation.

## Weaknesses

Requires Copilot subscription; closed source.

## Best For

GitHub users who want Copilot chat in the terminal.

## Not Ideal For

- Developers who need stability guarantees — GitHub Copilot CLI changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **good** — see [best tools for students](../comparisons/best-for-students.md).

## Ali's Setup

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, no dGPU, Windows, VS Code, PowerShell): **Good**

Works well on this machine for normal use. Stated requirements: Any..

## Alternatives

- [claude-code](./claude-code.md)
- [gemini-cli](./gemini-cli.md)
- [openai-codex-cli](./openai-codex-cli.md)

## Sources

- [Official website](https://docs.github.com/en/copilot/using-github-copilot/getting-started-with-github-copilot)
- Official documentation — not verified, check official website
- Source repository — not verified, check official website
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*Page generated from `data/tools.yaml` — edit the registry, not this file.*
