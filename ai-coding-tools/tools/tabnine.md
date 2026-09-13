

> HAND-WRITTEN FLAG SET — regenerate with `--force` only if you intend to overwrite.
# Tabnine

> Last verified: 2026-09 · Status: acquired · Autonomy: Level 2 — see [the autonomy scale](../docs/autonomy-scale.md).

Acquired by Tricentis (announced on official site, verified Sep 2026). Enterprise AI coding platform angle; on-prem/air-gapped options.

## Overview

**Tabnine** is a autocomplete-focused assistant in the *VS Code / IDE AI agents* category, made by Tabnine (acquired by Tricentis).

Enterprises needing on-prem/air-gapped code assistance.

## Official Links

- [Official website](https://www.tabnine.com/)
- Documentation — not verified, check official website
- GitHub — not verified, check official website
- Pricing: see the official pricing page via the website link above.

## Current Status

**Acquired** — absorbed into another product/organization.

Acquired by Tricentis (announced on official site, verified Sep 2026). Enterprise AI coding platform angle; on-prem/air-gapped options.

## What It Does

Multiple model support, on-prem deployment, context-aware completions, style learning.

Known limitations: Not open source; agentic capability varies by tier.

## Main Capabilities

| Capability | Supported |
| --- | --- |
| File editing | Yes |
| Terminal | No |
| Repository context | Yes |
| MCP | Unknown |
| Git | Unknown |
| Tests | Unknown |
| Browser | Unknown |
| Subagents | Unknown |
| BYOK | No |
| Local models | Yes |

## Platforms

- Unknown — check official documentation.

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Free tier; Pro; Enterprise.

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

- [Official install/setup docs](https://www.tabnine.com/)

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

Multiple model support, on-prem deployment, context-aware completions, style learning.

## Weaknesses

Not open source; agentic capability varies by tier.

## Best For

Enterprises needing on-prem/air-gapped code assistance.

## Not Ideal For

- Developers who need stability guarantees — Tabnine changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **good** — see [best tools for students](../comparisons/best-for-students.md).

## Ali's Setup

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, no dGPU, Windows, VS Code, PowerShell): **Good**

Works well on this machine for normal use. Local inference (Ollama) on 8 GB RAM is limited to small models (~1–4 B) and will be slow on this CPU-only machine — fine for experimentation, not for daily heavy agent work. Stated requirements: Cloud or on-prem server; client is lightweight..

## Alternatives

See the [comparison matrix](../comparisons/tool-comparison-matrix.md).

## Sources

- [Official website](https://www.tabnine.com/)
- Official documentation — not verified, check official website
- Source repository — not verified, check official website
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*Page generated from `data/tools.yaml` — edit the registry, not this file.*

