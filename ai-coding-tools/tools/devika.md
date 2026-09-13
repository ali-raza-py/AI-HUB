# Devika

> Last verified: 2026-09 · Status: unknown · Autonomy: Level 4 — see [the autonomy scale](../docs/autonomy-scale.md).

Open-source (MIT) 'AI software engineer' (early Devin alternative). README (verified Sep 2026): very early/experimental stage; a successor ('Opcode') is announced — verify current state before relying on it.

## Overview

**Devika** is a open-source autonomous agent (self-hosted) in the *Autonomous software-engineering agents* category, made by Stition AI (community).

Studying an early open-source autonomous software-engineer design.

## Official Links

- Official website — not verified, check official website
- Documentation — not verified, check official website
- [GitHub](https://github.com/stitionai/devika)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Unknown** — not verified; check the official source before relying on it.

Open-source (MIT) 'AI software engineer' (early Devin alternative). README (verified Sep 2026): very early/experimental stage; a successor ('Opcode') is announced — verify current state before relying on it.

## What It Does

Open source; local-model (Ollama) configuration; plan → code loop.

Known limitations: Experimental; unfinished features; unclear long-term maintenance.

## Main Capabilities

| Capability | Supported |
| --- | --- |
| File editing | Unknown |
| Terminal | Unknown |
| Repository context | Unknown |
| MCP | Unknown |
| Git | Unknown |
| Tests | Unknown |
| Browser | Unknown |
| Subagents | Unknown |
| BYOK | Yes |
| Local models | Yes |

## Platforms

- Web

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Free, open source; model API keys at your own cost.

| Option | Available |
| --- | --- |
| Free | Yes |
| Free tier | Yes |
| Paid | Yes — see summary above |
| BYOK | Yes |
| API costs | You pay the model provider when using BYOK |

> Advertised prices are not total cost: BYOK tools are often free while you pay the model provider per token. See [pricing analysis](../docs/comparisons/pricing.md).

## Open Source

- Open source: **True**
- License: **MIT**
- Repository: <https://github.com/stitionai/devika>
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- Official install/setup docs — not verified, check official website

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
Human review
 ↓
Final changes
```

Only the steps above are supported by this tool (derived from the capability table, not marketing claims).

## Strengths

Open source; local-model (Ollama) configuration; plan → code loop.

## Weaknesses

Experimental; unfinished features; unclear long-term maintenance.

## Best For

Studying an early open-source autonomous software-engineer design.

## Not Ideal For

- Developers who need stability guarantees — Devika changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **possible-but-limited** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟡 Usable with limitations**

Usable, but expect friction (limits, RAM pressure, or setup effort) on this hardware. Local inference (Ollama) on 8 GB RAM is limited to small models (~1–4 B) and will be slow on this CPU-only machine — fine for experimentation, not for daily heavy agent work. Stated requirements: Runs a local server + web UI; models can be cloud or Ollama..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [metagpt](./metagpt.md)
- [gpt-engineer](./gpt-engineer.md)
- [autogpt](./autogpt.md)

## Sources

- Official website — not verified, check official website
- Official documentation — not verified, check official website
- [Source repository](https://github.com/stitionai/devika)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
