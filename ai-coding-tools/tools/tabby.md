# Tabby

> Last verified: 2026-09 · Status: active · Autonomy: Level 1 — see [the autonomy scale](../docs/autonomy-scale.md).


Self-hosted AI coding assistant (Apache-2.0); code completion server you run yourself; supports CPU inference. Verify recent releases.

## Overview

**Tabby** is a self-hosted server/assistant you run on your own infrastructure. in the *Open-source / BYOK / local AI tools* category, made by TabbyML (community).

Teams that need an in-house autocomplete server with data privacy.

## Official Links

- [Official website](https://tabby.tabbyml.com/)
- Documentation — not verified, check official website
- [GitHub](https://github.com/TabbyML/tabby)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Self-hosted AI coding assistant (Apache-2.0); code completion server you run yourself; supports CPU inference. Verify recent releases.

## What It Does

Self-hosted, model-agnostic, CPU/GPU support.

Known limitations: Autocomplete/chat focus; not an autonomous agent.

## Main Capabilities

| Capability | Supported |
| --- | --- |
| File editing | Yes |
| Terminal | No |
| Repository context | Yes |
| MCP | No |
| Git | Unknown |
| Tests | No |
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

Free, open source, self-hosted.

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
- Repository: https://github.com/TabbyML/tabby
- Self-hostable: **Yes**
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://tabby.tabbyml.com/)

## Basic Usage

Start from the official quickstart in the documentation above. Keep the first session read-only (or on a scratch repository) until you trust the tool's file-editing and terminal behavior.

## Agent Workflow

```text
Prompt
 ↓
Context gathering (repository / MCP tools)
 ↓
File changes
 ↓
Human review
 ↓
Final changes
```

Only the steps above are supported by this tool (derived from the capability table, not marketing claims).

## Strengths

Self-hosted, model-agnostic, CPU/GPU support.

## Weaknesses

Autocomplete/chat focus; not an autonomous agent.

## Best For

Teams that need an in-house autocomplete server with data privacy.

## Not Ideal For

- Developers who need stability guarantees — Tabby changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **good** — see [best tools for students](../comparisons/best-for-students.md).

## Ali's Setup

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, no dGPU, Windows, VS Code, PowerShell): **Good**

Works well on this machine for normal use. Local inference (Ollama) on 8 GB RAM is limited to small models (~1–4 B) and will be slow on this CPU-only machine — fine for experimentation, not for daily heavy agent work. Stated requirements: Depends on model; smaller models work on CPU..

## Alternatives

- [twinny](./twinny.md)
- [continue](./continue.md)

## Sources

- [Official website](https://tabby.tabbyml.com/)
- Official documentation — not verified, check official website
- [Source repository](https://github.com/TabbyML/tabby)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*Page generated from `data/tools.yaml` — edit the registry, not this file.*
