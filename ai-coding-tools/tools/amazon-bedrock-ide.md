# Amazon Bedrock IDE

> Last verified: 2026-09 · Status: active · Autonomy: Level 2 — see [the autonomy scale](../docs/autonomy-scale.md).


Bedrock-managed models surface through IDE integrations (VS Code / JetBrains + Amazon Q Developer). Verify availability per region.

## Overview

**Amazon Bedrock IDE** is a editor/ide native agent (vs code extension host) in the *VS Code / IDE AI agents* category, made by Amazon Web Services.

Teams standardized on AWS Bedrock models.

## Official Links

- [Official website](https://aws.amazon.com/bedrock/)
- Documentation — not verified, check official website
- GitHub — not verified, check official website
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Bedrock-managed models surface through IDE integrations (VS Code / JetBrains + Amazon Q Developer). Verify availability per region.

## What It Does

Enterprise governance, many models via one gateway.

Known limitations: Not a consumer tool; developer experience is auxiliary to AWS.

## Main Capabilities

| Capability | Supported |
| --- | --- |
| File editing | Yes |
| Terminal | No |
| Repository context | Yes |
| MCP | Unknown |
| Git | Unknown |
| Tests | Unknown |
| Browser | Unknown |
| Subagents | Unknown |
| BYOK | Yes |
| Local models | No |

## Platforms

- Unknown — check official documentation.

## Supported Models

- Unknown — check official documentation for currently supported models.

## Model Providers

Unknown — check official documentation.

## Pricing

AWS usage-based pricing via Bedrock model invocation.

| Option | Available |
| --- | --- |
| Free | No |
| Free tier | Yes |
| Paid | Yes — see summary above |
| BYOK | Yes |
| API costs | You pay the model provider when using BYOK |

> Advertised prices are not total cost: BYOK tools are often free while you > pay the model provider per token. See [pricing analysis](../docs/comparisons/pricing.md).

## Open Source

- Open source: **False**
- License: **Proprietary**
- Repository: not public / not verified
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://aws.amazon.com/bedrock/)

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

Enterprise governance, many models via one gateway.

## Weaknesses

Not a consumer tool; developer experience is auxiliary to AWS.

## Best For

Teams standardized on AWS Bedrock models.

## Not Ideal For

- Developers who need stability guarantees — Amazon Bedrock IDE changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **possible-but-limited** — see [best tools for students](../comparisons/best-for-students.md).

## Ali's Setup

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, no dGPU, Windows, VS Code, PowerShell): **Possible but limited**

Usable, but expect friction (limits, RAM pressure, or setup effort) on this hardware. Stated requirements: Any..

## Alternatives

- [amazon-q-developer](./amazon-q-developer.md)
- [amazon-kiro](./amazon-kiro.md)

## Sources

- [Official website](https://aws.amazon.com/bedrock/)
- Official documentation — not verified, check official website
- Source repository — not verified, check official website
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*Page generated from `data/tools.yaml` — edit the registry, not this file.*
