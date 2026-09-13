# Gemini Code Assist

> Last verified: 2026-09 · Status: active · Autonomy: Level 3 — see [the autonomy scale](../docs/autonomy-scale.md).


Google's Gemini-powered IDE assistant (VS Code + JetBrains) with a free tier for individuals. Verify current quota/plan details on the official site.

## Overview

**Gemini Code Assist** is a editor/ide native agent (vs code extension host) in the *VS Code / IDE AI agents* category, made by Google.

Gemini users who want a no-cost IDE assistant for personal projects.

## Official Links

- [Official website](https://codeassist.google/)
- Documentation — not verified, check official website
- GitHub — not verified, check official website
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Google's Gemini-powered IDE assistant (VS Code + JetBrains) with a free tier for individuals. Verify current quota/plan details on the official site.

## What It Does

Free tier, strong Gemini models, chat + completions, some agentic features.

Known limitations: Less transparent BYOK; confusion with Gemini CLI feature set.

## Main Capabilities

| Capability | Supported |
| --- | --- |
| File editing | Yes |
| Terminal | Yes |
| Repository context | Yes |
| MCP | Yes |
| Git | No |
| Tests | No |
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

Free tier; enterprise tier via Google Cloud.

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

- [Official install/setup docs](https://codeassist.google/)

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
Human review
 ↓
Final changes
```

Only the steps above are supported by this tool (derived from the capability table, not marketing claims).

## Strengths

Free tier, strong Gemini models, chat + completions, some agentic features.

## Weaknesses

Less transparent BYOK; confusion with Gemini CLI feature set.

## Best For

Gemini users who want a no-cost IDE assistant for personal projects.

## Not Ideal For

- Developers who need stability guarantees — Gemini Code Assist changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **good** — see [best tools for students](../comparisons/best-for-students.md).

## Ali's Setup

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, no dGPU, Windows, VS Code, PowerShell): **Good**

Works well on this machine for normal use. Stated requirements: Any; cloud inference..

## Alternatives

- [github-copilot](./github-copilot.md)
- [amazon-q-developer](./amazon-q-developer.md)

## Sources

- [Official website](https://codeassist.google/)
- Official documentation — not verified, check official website
- Source repository — not verified, check official website
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*Page generated from `data/tools.yaml` — edit the registry, not this file.*
