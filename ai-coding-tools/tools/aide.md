# Aide

> Last verified: 2026-09 · Status: unknown · Autonomy: Unknown — not verified.


Aide.dev site (Sep 2026) frames the project as a developer-tools research lab; SWE-bench blog posts remain. Verify active maintenance before relying on it.

## Overview

**Aide** is a editor/ide native agent (vs code extension host) in the *VS Code / IDE AI agents* category, made by Aide (developer tools lab).

Unknown

## Official Links

- [Official website](https://aide.dev/)
- Documentation — not verified, check official website
- GitHub — not verified, check official website
- Pricing: see the official pricing page via the website link above.

## Current Status

**unknown**

Aide.dev site (Sep 2026) frames the project as a developer-tools research lab; SWE-bench blog posts remain. Verify active maintenance before relying on it.

## What It Does

Research reputation: SWE-bench work (scaling test-time inference).

Known limitations: Product status uncertain.

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
| BYOK | Unknown |
| Local models | Unknown |

## Platforms

- Unknown — check official documentation.

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Unknown

| Option | Available |
| --- | --- |
| Free | Unknown |
| Free tier | Unknown |
| Paid | Yes — see summary above |
| BYOK | Unknown |
| API costs | You pay the model provider when using BYOK |

> Advertised prices are not total cost: BYOK tools are often free while you > pay the model provider per token. See [pricing analysis](../docs/comparisons/pricing.md).

## Open Source

- Open source: **unknown**
- License: **Unknown**
- Repository: not public / not verified
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://aide.dev/)

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

Research reputation: SWE-bench work (scaling test-time inference).

## Weaknesses

Product status uncertain.

## Best For

Unknown

## Not Ideal For

- Developers who need stability guarantees — Aide changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **unknown** — see [best tools for students](../comparisons/best-for-students.md).

## Ali's Setup

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, no dGPU, Windows, VS Code, PowerShell): **Possible but limited**

Fit could not be fully verified — check official requirements. Stated requirements: Unknown.

## Alternatives

- [cline](./cline.md)
- [kilo-code](./kilo-code.md)

## Sources

- [Official website](https://aide.dev/)
- Official documentation — not verified, check official website
- Source repository — not verified, check official website
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*Page generated from `data/tools.yaml` — edit the registry, not this file.*
