# Tempo

> Last verified: 2026-09 · Status: active · Autonomy: Level 3 — see [the autonomy scale](../docs/autonomy-scale.md).


AI app builder that generates React/Next.js/SwiftUI code from prompts with visual editing. Verify pricing.

## Overview

**Tempo** is a generates ui/screens/components from prompts in the *AI app / UI / full-stack builders* category, made by Tempo Labs.

Designer-friendly app prototyping.

## Official Links

- [Official website](https://www.tempo.new/)
- Documentation — not verified, check official website
- GitHub — not verified, check official website
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

AI app builder that generates React/Next.js/SwiftUI code from prompts with visual editing. Verify pricing.

## What It Does

Visual editing + code export.

Known limitations: Proprietary; details to verify.

## Main Capabilities

| Capability | Supported |
| --- | --- |
| File editing | Yes |
| Terminal | No |
| Repository context | Yes |
| MCP | No |
| Git | Unknown |
| Tests | Unknown |
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

Not verified — check official documentation.

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

- [Official install/setup docs](https://www.tempo.new/)

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
Tests
 ↓
Human review
 ↓
Final changes
```

Only the steps above are supported by this tool (derived from the capability table, not marketing claims).

## Strengths

Visual editing + code export.

## Weaknesses

Proprietary; details to verify.

## Best For

Designer-friendly app prototyping.

## Not Ideal For

- Developers who need stability guarantees — Tempo changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **possible-but-limited** — see [best tools for students](../comparisons/best-for-students.md).

## Ali's Setup

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, no dGPU, Windows, VS Code, PowerShell): **Possible but limited**

Usable, but expect friction (limits, RAM pressure, or setup effort) on this hardware. Stated requirements: Browser..

## Alternatives

- [v0](./v0.md)
- [lovable](./lovable.md)
- [bolt](./bolt.md)

## Sources

- [Official website](https://www.tempo.new/)
- Official documentation — not verified, check official website
- Source repository — not verified, check official website
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*Page generated from `data/tools.yaml` — edit the registry, not this file.*
