# JetBrains Junie

> Last verified: 2026-09 · Status: active · Autonomy: Level 4 — see [the autonomy scale](../docs/autonomy-scale.md).

<!-- full_page: true — page is generated once; edit data/tools.yaml, then re-run scripts/generate-tool-pages.py --force to overwrite. -->

BYOK coding agent for JetBrains IDEs, CLI, GitHub/GitLab actions; AI credits or BYOK pricing (verified Sep 2026).

## Overview

**JetBrains Junie** is a ide plugin + agent workspace in the *VS Code / IDE AI agents* category, made by JetBrains.

JetBrains users who want an in-IDE agent with BYOK.

## Official Links

- [Official website](https://www.jetbrains.com/junie/)
- [Documentation](https://www.jetbrains.com/help/junie/)
- GitHub — not verified, check official website
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

BYOK coding agent for JetBrains IDEs, CLI, GitHub/GitLab actions; AI credits or BYOK pricing (verified Sep 2026).

## What It Does

Runs in JetBrains IDEs, planning mode (plans in .junie/plans), live prompting, human-in-the-loop review.

Known limitations: JetBrains-ecosystem oriented; CLI experience younger.

## Main Capabilities

| Capability | Supported |
| --- | --- |
| File editing | Yes |
| Terminal | Yes |
| Repository context | Yes |
| MCP | Unknown |
| Git | Yes |
| Tests | Yes |
| Browser | Unknown |
| Subagents | Unknown |
| BYOK | Yes |
| Local models | Yes |

## Platforms

- JetBrains (plugin)

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Free to start with 5 AI credits; BYOK zero-markup; AI Pro/AI Ultimate subscriptions.

| Option | Available |
| --- | --- |
| Free | Yes |
| Free tier | Yes |
| Paid | Yes — see summary above |
| BYOK | Yes |
| API costs | You pay the model provider when using BYOK |

> Advertised prices are not total cost: BYOK tools are often free while you pay the model provider per token. See [pricing analysis](../docs/comparisons/pricing.md).

## Open Source

- Open source: **False**
- License: **Proprietary**
- Repository: not public / not verified
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://www.jetbrains.com/help/junie/)

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

Runs in JetBrains IDEs, planning mode (plans in .junie/plans), live prompting, human-in-the-loop review.

## Weaknesses

JetBrains-ecosystem oriented; CLI experience younger.

## Best For

JetBrains users who want an in-IDE agent with BYOK.

## Not Ideal For

- Developers who need stability guarantees — JetBrains Junie changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **good** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟢 Recommended**

Works well on this machine for normal use. Local inference (Ollama) on 8 GB RAM is limited to small models (~1–4 B) and will be slow on this CPU-only machine — fine for experimentation, not for daily heavy agent work. Stated requirements: Any JetBrains-compatible machine..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [github-copilot](./github-copilot.md)
- [cline](./cline.md)
- [kilo-code](./kilo-code.md)

## Sources

- [Official website](https://www.jetbrains.com/junie/)
- [Official documentation](https://www.jetbrains.com/help/junie/)
- Source repository — not verified, check official website
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
