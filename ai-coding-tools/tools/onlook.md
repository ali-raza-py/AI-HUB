# Onlook

> Last verified: 2026-09 · Status: active · Autonomy: Level 2 — see [the autonomy scale](../docs/autonomy-scale.md).

Open-source (Apache-2.0) AI-first visual editor for React (Next.js + Tailwind): edit designs directly on your real codebase; hosted product in early access; MCP support and OpenRouter-based model access in the open-source stack (verified Sep 2026).

## Overview

**Onlook** is a generates ui/screens/components from prompts in the *AI app / UI / full-stack builders* category, made by Onlook.

Design-minded developers who want to edit a real React codebase visually with AI.

## Official Links

- [Official website](https://onlook.com)
- [Documentation](https://docs.onlook.com)
- [GitHub](https://github.com/onlook-dev/onlook)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Open-source (Apache-2.0) AI-first visual editor for React (Next.js + Tailwind): edit designs directly on your real codebase; hosted product in early access; MCP support and OpenRouter-based model access in the open-source stack (verified Sep 2026).

## What It Does

Open source; code-native (reads/writes real Next.js/Tailwind); MCP; checkpoints.

Known limitations: Focused on Next.js + Tailwind today; hosted product still in early access.

## Main Capabilities

| Capability | Supported |
| --- | --- |
| File editing | Unknown |
| Terminal | Unknown |
| Repository context | Unknown |
| MCP | Yes |
| Git | Unknown |
| Tests | Unknown |
| Browser | Unknown |
| Subagents | Unknown |
| BYOK | Yes |
| Local models | Unknown |

## Platforms

- Web
- Desktop app

## Supported Models

- Unknown — check official documentation for currently supported models.

## Model Providers

Unknown — check official documentation.

## Pricing

Open source, free to self-host; hosted product pricing not yet verified.

| Option | Available |
| --- | --- |
| Free | Yes |
| Free tier | Unknown |
| Paid | Yes — see summary above |
| BYOK | Yes |
| API costs | You pay the model provider when using BYOK |

> Advertised prices are not total cost: BYOK tools are often free while you pay the model provider per token. See [pricing analysis](../docs/comparisons/pricing.md).

## Open Source

- Open source: **True**
- License: **Apache-2.0**
- Repository: <https://github.com/onlook-dev/onlook>
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://docs.onlook.com)

## Basic Usage

Start from the official quickstart in the documentation above. Keep the first session read-only (or on a scratch repository) until you trust the tool's file-editing and terminal behavior.

## Agent Workflow

```text
Prompt
 ↓
Context gathering (repository / MCP tools)
 ↓
Human review
 ↓
Final changes
```

Only the steps above are supported by this tool (derived from the capability table, not marketing claims).

## Strengths

Open source; code-native (reads/writes real Next.js/Tailwind); MCP; checkpoints.

## Weaknesses

Focused on Next.js + Tailwind today; hosted product still in early access.

## Best For

Design-minded developers who want to edit a real React codebase visually with AI.

## Not Ideal For

- Developers who need stability guarantees — Onlook changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **good** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟢 Recommended**

Works well on this machine for normal use. Stated requirements: Desktop app + local preview container; modest projects fit 8 GB..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [v0](./v0.md)
- [bolt](./bolt.md)
- [lovable](./lovable.md)

## Sources

- [Official website](https://onlook.com)
- [Official documentation](https://docs.onlook.com)
- [Source repository](https://github.com/onlook-dev/onlook)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
