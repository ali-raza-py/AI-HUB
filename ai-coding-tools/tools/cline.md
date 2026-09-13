

> HAND-WRITTEN FLAG SET — regenerate with `--force` only if you intend to overwrite.
# Cline

> Last verified: 2026-09 · Status: active · Autonomy: Level 4 — see [the autonomy scale](../docs/autonomy-scale.md).

Autonomous open-source coding agent; published as IDE extension, SDK, CLI, and desktop app (verified Sep 2026).

## Overview

**Cline** is a editor/ide native agent (vs code extension host) in the *VS Code / IDE AI agents* category, made by Cline Bot Inc..

VS Code users who want a fully transparent, BYOK, MCP-connected coding agent.

## Official Links

- [Official website](https://cline.bot/)
- Documentation — not verified, check official website
- GitHub — not verified, check official website
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Autonomous open-source coding agent; published as IDE extension, SDK, CLI, and desktop app (verified Sep 2026).

## What It Does

Open source (Apache-2.0), deep BYOK/local support, MCP, plan/act modes, human-in-the-loop file+terminal approvals.

Known limitations: Requires you to manage your own API keys/costs; deep agentic work consumes tokens quickly.

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
| Local models | Yes |

## Platforms

- Unknown — check official documentation.

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Open source; brings your own keys or uses paid plans/provider keys as configured.

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
- Repository: not public / not verified
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://cline.bot/)

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

Open source (Apache-2.0), deep BYOK/local support, MCP, plan/act modes, human-in-the-loop file+terminal approvals.

## Weaknesses

Requires you to manage your own API keys/costs; deep agentic work consumes tokens quickly.

## Best For

VS Code users who want a fully transparent, BYOK, MCP-connected coding agent.

## Not Ideal For

- Developers who need stability guarantees — Cline changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **excellent** — see [best tools for students](../comparisons/best-for-students.md).

## Ali's Setup

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, no dGPU, Windows, VS Code, PowerShell): **Excellent**

Light client; heavy inference happens in the cloud or via BYOK. Local inference (Ollama) on 8 GB RAM is limited to small models (~1–4 B) and will be slow on this CPU-only machine — fine for experimentation, not for daily heavy agent work. Stated requirements: Lightweight editor extension; any API-based model works on low-end hardware..

## Alternatives

- [kilo-code](./kilo-code.md)
- [roo-code](./roo-code.md)
- [continue](./continue.md)

## Sources

- [Official website](https://cline.bot/)
- Official documentation — not verified, check official website
- Source repository — not verified, check official website
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*Page generated from `data/tools.yaml` — edit the registry, not this file.*

