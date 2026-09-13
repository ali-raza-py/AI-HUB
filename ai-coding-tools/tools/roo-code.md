# Roo Code

> Last verified: 2026-09 · Status: archived · Autonomy: Level 4 — see [the autonomy scale](../docs/autonomy-scale.md).

<!-- full_page: true — page is generated once; edit data/tools.yaml, then re-run scripts/generate-tool-pages.py --force to overwrite. -->

GitHub archived the Roo-Code repo on May 15, 2026. Extension shut down May 15, 2026. Fork 'ZooCode' (community) and Cline (origin) recommended as alternatives per archived README.

## Overview

**Roo Code** is a editor/ide native agent (vs code extension host) in the *VS Code / IDE AI agents* category, made by Roo Code, Inc..

Learning from its design; evaluating forks like ZooCode.

## Official Links

- [Official website](https://roocode.com/)
- Documentation — not verified, check official website
- [GitHub](https://github.com/RooCodeInc/Roo-Code)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Archived** — no longer maintained.

GitHub archived the Roo-Code repo on May 15, 2026. Extension shut down May 15, 2026. Fork 'ZooCode' (community) and Cline (origin) recommended as alternatives per archived README.

## What It Does

Powerful modes (Code/Architect/Ask/Debug), MCP, strong community, Cline fork lineage.

Known limitations: Archived/product shut down May 2026 — not an active recommendation.

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

- VS Code (extension)

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Was free/BYOK with paid API options.

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
- License: **Apache-2.0**
- Repository: <https://github.com/RooCodeInc/Roo-Code>
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://roocode.com/)

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

Powerful modes (Code/Architect/Ask/Debug), MCP, strong community, Cline fork lineage.

## Weaknesses

Archived/product shut down May 2026 — not an active recommendation.

## Best For

Learning from its design; evaluating forks like ZooCode.

## Not Ideal For

- Developers who need stability guarantees — Roo Code changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **good** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟢 Recommended**

Works well on this machine for normal use. Local inference (Ollama) on 8 GB RAM is limited to small models (~1–4 B) and will be slow on this CPU-only machine — fine for experimentation, not for daily heavy agent work. Stated requirements: Same as Cline..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [cline](./cline.md)
- [kilo-code](./kilo-code.md)
- [continue](./continue.md)

## Sources

- [Official website](https://roocode.com/)
- Official documentation — not verified, check official website
- [Source repository](https://github.com/RooCodeInc/Roo-Code)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
