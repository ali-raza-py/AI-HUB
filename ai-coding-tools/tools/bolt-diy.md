# bolt.diy

> Last verified: 2026-09 · Status: active · Autonomy: Level 3 — see [the autonomy scale](../docs/autonomy-scale.md).

Open-source (MIT) community evolution of bolt.new: prompt, run, edit, and deploy full-stack web apps in the browser (WebContainers) using your choice of LLM/provider (many providers plus Ollama); Electron desktop builds; WebContainer API needs a commercial license in production (verified Sep 2026).

## Overview

**bolt.diy** is a hosted generator of a whole application in the *AI app / UI / full-stack builders* category, made by StackBlitz Labs (community).

Self-hosting a bolt.new-style app builder with your own model keys, including local models.

## Official Links

- [Official website](https://stackblitz-labs.github.io/bolt.diy/)
- Documentation — not verified, check official website
- [GitHub](https://github.com/stackblitz-labs/bolt.diy)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Open-source (MIT) community evolution of bolt.new: prompt, run, edit, and deploy full-stack web apps in the browser (WebContainers) using your choice of LLM/provider (many providers plus Ollama); Electron desktop builds; WebContainer API needs a commercial license in production (verified Sep 2026).

## What It Does

Open source; any-LLM BYOK including Ollama; runs in the browser.

Known limitations: Community-maintained; model quality varies; commercial WebContainer licensing.

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
- Desktop app

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Free, open source; you bring the model keys (or run local models).

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
- License: **MIT (code); WebContainer API license applies in production**
- Repository: <https://github.com/stackblitz-labs/bolt.diy>
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://stackblitz-labs.github.io/bolt.diy/)

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

Open source; any-LLM BYOK including Ollama; runs in the browser.

## Weaknesses

Community-maintained; model quality varies; commercial WebContainer licensing.

## Best For

Self-hosting a bolt.new-style app builder with your own model keys, including local models.

## Not Ideal For

- Developers who need stability guarantees — bolt.diy changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **excellent** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟢 Recommended**

Light client; heavy inference happens in the cloud or via BYOK. Local inference (Ollama) on 8 GB RAM is limited to small models (~1–4 B) and will be slow on this CPU-only machine — fine for experimentation, not for daily heavy agent work. Stated requirements: Browser-based; Node/Docker for self-hosting..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [bolt](./bolt.md)
- [lovable](./lovable.md)
- [replit-agent](./replit-agent.md)

## Sources

- [Official website](https://stackblitz-labs.github.io/bolt.diy/)
- Official documentation — not verified, check official website
- [Source repository](https://github.com/stackblitz-labs/bolt.diy)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
