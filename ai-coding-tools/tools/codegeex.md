# CodeGeeX

> Last verified: 2026-09 · Status: active · Autonomy: Level 1 — see [the autonomy scale](../docs/autonomy-scale.md).

Open multilingual code model (CodeGeeX4-ALL-9B, GLM lineage) plus official VS Code/JetBrains extensions; a local-mode deployment guide connects the extensions to a self-hosted model. Code under Apache-2.0; model weights under a separate Model License (commercial use requires registration) (verified Sep 2026).

## Overview

**CodeGeeX** is a autocomplete-focused assistant in the *VS Code / IDE AI agents* category, made by Zhipu AI (zai-org).

Open-weight autocomplete/code assistant you can self-host for privacy or research.

## Official Links

- [Official website](https://codegeex.cn)
- Documentation — not verified, check official website
- [GitHub](https://github.com/zai-org/CodeGeeX4)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Open multilingual code model (CodeGeeX4-ALL-9B, GLM lineage) plus official VS Code/JetBrains extensions; a local-mode deployment guide connects the extensions to a self-hosted model. Code under Apache-2.0; model weights under a separate Model License (commercial use requires registration) (verified Sep 2026).

## What It Does

Strong small-model benchmark results; local mode; VS Code + JetBrains.

Known limitations: Weights license restricts commercial use; less polish than commercial assistants.

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

- VS Code (extension)
- JetBrains (plugin)

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Free extension; self-hosted model on your own hardware; check commercial terms for the weights.

| Option | Available |
| --- | --- |
| Free | Yes |
| Free tier | Yes |
| Paid | Yes — see summary above |
| BYOK | Yes |
| API costs | You pay the model provider when using BYOK |

> Advertised prices are not total cost: BYOK tools are often free while you pay the model provider per token. See [pricing analysis](../docs/comparisons/pricing.md).

## Open Source

- Open source: **source-available**
- License: **Apache-2.0 (code) / Model License (weights)**
- Repository: <https://github.com/zai-org/CodeGeeX4>
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://codegeex.cn)

## Basic Usage

Start from the official quickstart in the documentation above. Keep the first session read-only (or on a scratch repository) until you trust the tool's file-editing and terminal behavior.

## Agent Workflow

```text
Prompt
 ↓
Human review
 ↓
Final changes
```

Only the steps above are supported by this tool (derived from the capability table, not marketing claims).

## Strengths

Strong small-model benchmark results; local mode; VS Code + JetBrains.

## Weaknesses

Weights license restricts commercial use; less polish than commercial assistants.

## Best For

Open-weight autocomplete/code assistant you can self-host for privacy or research.

## Not Ideal For

- Developers who need stability guarantees — CodeGeeX changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **good** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟡 Usable with limitations**

Fit could not be fully verified — check official requirements. Local inference (Ollama) on 8 GB RAM is limited to small models (~1–4 B) and will be slow on this CPU-only machine — fine for experimentation, not for daily heavy agent work. Stated requirements: 9B model self-hosting wants ~16 GB RAM; cloud extension mode is light..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [tabby](./tabby.md)
- [twinny](./twinny.md)
- [continue](./continue.md)

## Sources

- [Official website](https://codegeex.cn)
- Official documentation — not verified, check official website
- [Source repository](https://github.com/zai-org/CodeGeeX4)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
