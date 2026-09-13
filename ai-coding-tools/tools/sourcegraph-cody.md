# Sourcegraph Cody

> Last verified: 2026-09 · Status: deprecated · Autonomy: Level 2 — see [the autonomy scale](../docs/autonomy-scale.md).

Sourcegraph deprecated Cody for individual users (mid-2025); it remains available in Sourcegraph Enterprise. Check Sourcegraph for current guidance.

## Overview

**Sourcegraph Cody** is a ide plugin + agent workspace in the *VS Code / IDE AI agents* category, made by Sourcegraph.

Enterprise Sourcegraph customers.

## Official Links

- [Official website](https://sourcegraph.com/)
- [Documentation](https://sourcegraph.com/docs/cody)
- GitHub — not verified, check official website
- Pricing: see the official pricing page via the website link above.

## Current Status

**Deprecated** — officially superseded; migration recommended.

Sourcegraph deprecated Cody for individual users (mid-2025); it remains available in Sourcegraph Enterprise. Check Sourcegraph for current guidance.

## What It Does

Code Search integration, chat + auto-edit, context from remote repos.

Known limitations: No longer a consumer tool; enterprise-only now.

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

- VS Code (extension)
- JetBrains (plugin)

## Supported Models

- Unknown — check official documentation for currently supported models.

## Model Providers

Unknown — check official documentation.

## Pricing

Enterprise offering; individual free tier removed.

| Option | Available |
| --- | --- |
| Free | No |
| Free tier | No |
| Paid | Yes — see summary above |
| BYOK | No |
| API costs | Unknown |

> Advertised prices are not total cost: BYOK tools are often free while you pay the model provider per token. See [pricing analysis](../docs/comparisons/pricing.md).

## Open Source

- Open source: **False**
- License: **Proprietary**
- Repository: not public / not verified
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://sourcegraph.com/docs/cody)

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

Code Search integration, chat + auto-edit, context from remote repos.

## Weaknesses

No longer a consumer tool; enterprise-only now.

## Best For

Enterprise Sourcegraph customers.

## Not Ideal For

- Developers who need stability guarantees — Sourcegraph Cody changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **not-recommended** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🔴 Not ideal**

No longer a consumer tool; enterprise-only now. Stated requirements: Any..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [github-copilot](./github-copilot.md)
- [kilo-code](./kilo-code.md)
- [cline](./cline.md)

## Sources

- [Official website](https://sourcegraph.com/)
- [Official documentation](https://sourcegraph.com/docs/cody)
- Source repository — not verified, check official website
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
