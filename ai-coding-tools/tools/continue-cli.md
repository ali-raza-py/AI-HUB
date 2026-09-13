# Continue CLI

> Last verified: 2026-09 · Status: active · Autonomy: Level 3 — see [the autonomy scale](../docs/autonomy-scale.md).


Open-source terminal agent from the Continue team, complementing the Continue IDE extensions. Verify current CLI commands in the official docs.

## Overview

**Continue CLI** is a terminal agent (cli/repl) in the *Terminal / CLI coding agents* category, made by Continue (Continue Dev, Inc.).

Developers who want one open ecosystem for both IDE and terminal agents with BYOK/local models.

## Official Links

- [Official website](https://continue.dev/)
- [Documentation](https://docs.continue.dev/)
- [GitHub](https://github.com/continuedev/continue)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Open-source terminal agent from the Continue team, complementing the Continue IDE extensions. Verify current CLI commands in the official docs.

## What It Does

Open source, BYOK + local models (Ollama), MCP support, shares configuration with Continue IDE extensions.

Known limitations: Younger terminal agent than Aider/Claude Code; fewer batteries included.

## Main Capabilities

| Capability | Supported |
| --- | --- |
| File editing | Yes |
| Terminal | Yes |
| Repository context | Yes |
| MCP | Yes |
| Git | No |
| Tests | Yes |
| Browser | Unknown |
| Subagents | Unknown |
| BYOK | Yes |
| Local models | Yes |

## Platforms

- Unknown — check official documentation.

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Free and open source; BYOK means you pay the model provider directly; optional Continue hub features.

| Option | Available |
| --- | --- |
| Free | Yes |
| Free tier | Yes |
| Paid | Yes — see summary above |
| BYOK | Yes |
| API costs | You pay the model provider when using BYOK |

> Advertised prices are not total cost: BYOK tools are often free while you > pay the model provider per token. See [pricing analysis](../docs/comparisons/pricing.md).

## Open Source

- Open source: **True**
- License: **Apache-2.0**
- Repository: https://github.com/continuedev/continue
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://docs.continue.dev/)

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

Open source, BYOK + local models (Ollama), MCP support, shares configuration with Continue IDE extensions.

## Weaknesses

Younger terminal agent than Aider/Claude Code; fewer batteries included.

## Best For

Developers who want one open ecosystem for both IDE and terminal agents with BYOK/local models.

## Not Ideal For

- Developers who need stability guarantees — Continue CLI changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **good** — see [best tools for students](../comparisons/best-for-students.md).

## Ali's Setup

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, no dGPU, Windows, VS Code, PowerShell): **Good**

Works well on this machine for normal use. Local inference (Ollama) on 8 GB RAM is limited to small models (~1–4 B) and will be slow on this CPU-only machine — fine for experimentation, not for daily heavy agent work. Stated requirements: Terminal client only; model runs remote or local (local needs RAM)..

## Alternatives

- [continue](./continue.md)
- [claude-code](./claude-code.md)
- [opencode](./opencode.md)

## Sources

- [Official website](https://continue.dev/)
- [Official documentation](https://docs.continue.dev/)
- [Source repository](https://github.com/continuedev/continue)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*Page generated from `data/tools.yaml` — edit the registry, not this file.*
