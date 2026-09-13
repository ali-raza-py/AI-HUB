# CodeRabbit

> Last verified: 2026-09 · Status: active · Autonomy: Level 2 — see [the autonomy scale](../docs/autonomy-scale.md).

Proprietary AI code-review service for GitHub/GitLab pull requests (plus IDE and CLI review surfaces); free trial and a free plan for open source (verify eligibility on the official page) (verified Sep 2026).

## Overview

**CodeRabbit** is a autonomous pr / code-review agent in the *Autonomous software-engineering agents* category, made by CodeRabbit Inc..

Automated first-pass review on every PR with committable suggestions.

## Official Links

- [Official website](https://www.coderabbit.ai)
- [Documentation](https://docs.coderabbit.ai)
- GitHub — not verified, check official website
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Proprietary AI code-review service for GitHub/GitLab pull requests (plus IDE and CLI review surfaces); free trial and a free plan for open source (verify eligibility on the official page) (verified Sep 2026).

## What It Does

PR-native; learns from repo history; IDE and CLI review options.

Known limitations: Closed source; review noise and limits vary by plan; enterprise pricing.

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
| BYOK | No |
| Local models | Unknown |

## Platforms

- Web

## Supported Models

- Unknown — check official documentation for currently supported models.

## Model Providers

Unknown — check official documentation.

## Pricing

Free trial; paid plans per seat; free plan for open-source projects — verify on the official pricing page.

| Option | Available |
| --- | --- |
| Free | No |
| Free tier | Yes |
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

- [Official install/setup docs](https://docs.coderabbit.ai)

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

PR-native; learns from repo history; IDE and CLI review options.

## Weaknesses

Closed source; review noise and limits vary by plan; enterprise pricing.

## Best For

Automated first-pass review on every PR with committable suggestions.

## Not Ideal For

- Developers who need stability guarantees — CodeRabbit changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **possible-but-limited** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟡 Usable with limitations**

Usable, but expect friction (limits, RAM pressure, or setup effort) on this hardware. Stated requirements: Cloud service; thin client..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [greptile](./greptile.md)
- [qodo](./qodo.md)
- [sweep](./sweep.md)

## Sources

- [Official website](https://www.coderabbit.ai)
- [Official documentation](https://docs.coderabbit.ai)
- Source repository — not verified, check official website
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
