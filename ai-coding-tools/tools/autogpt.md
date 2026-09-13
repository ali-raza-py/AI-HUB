# AutoGPT

> Last verified: 2026-09 · Status: active · Autonomy: Level 4 — see [the autonomy scale](../docs/autonomy-scale.md).

Open platform for building and running AI agents; managed platform is paid, self-hosting is free (own infra + model keys). Licensing: classic/ is MIT; autogpt_platform/ is Polyform Shield (verified Sep 2026).

## Overview

**AutoGPT** is a open-source autonomous agent (self-hosted) in the *Autonomous software-engineering agents* category, made by AutoGPT (Significant Gravitas).

Building and running goal-driven agent workflows — self-hosted or managed.

## Official Links

- [Official website](https://agpt.co)
- [Documentation](https://docs.agpt.co)
- [GitHub](https://github.com/Significant-Gravitas/AutoGPT)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Open platform for building and running AI agents; managed platform is paid, self-hosting is free (own infra + model keys). Licensing: classic/ is MIT; autogpt_platform/ is Polyform Shield (verified Sep 2026).

## What It Does

Large community; many integrations; self-host path stays free.

Known limitations: Platform licensing is not fully open; heavier infrastructure than a CLI agent; output quality depends on your models.

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
| Local models | Unknown |

## Platforms

- Web

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Self-host: no license fee (you pay infra + model keys); managed platform: paid plans.

| Option | Available |
| --- | --- |
| Free | Yes |
| Free tier | Unknown |
| Paid | Yes — see summary above |
| BYOK | Yes |
| API costs | You pay the model provider when using BYOK |

> Advertised prices are not total cost: BYOK tools are often free while you pay the model provider per token. See [pricing analysis](../docs/comparisons/pricing.md).

## Open Source

- Open source: **source-available**
- License: **MIT (classic) / Polyform Shield (platform)**
- Repository: <https://github.com/Significant-Gravitas/AutoGPT>
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://docs.agpt.co)

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

Large community; many integrations; self-host path stays free.

## Weaknesses

Platform licensing is not fully open; heavier infrastructure than a CLI agent; output quality depends on your models.

## Best For

Building and running goal-driven agent workflows — self-hosted or managed.

## Not Ideal For

- Developers who need stability guarantees — AutoGPT changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **possible-but-limited** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟡 Usable with limitations**

Usable, but expect friction (limits, RAM pressure, or setup effort) on this hardware. Stated requirements: Self-hosting wants Docker and spare RAM; tight on 8 GB machines..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [metagpt](./metagpt.md)
- [gpt-engineer](./gpt-engineer.md)
- [openhands](./openhands.md)

## Sources

- [Official website](https://agpt.co)
- [Official documentation](https://docs.agpt.co)
- [Source repository](https://github.com/Significant-Gravitas/AutoGPT)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
