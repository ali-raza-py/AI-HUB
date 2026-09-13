# Cursor CLI

> Last verified: 2026-09 · Status: active · Autonomy: Level 4 — see [the autonomy scale](../docs/autonomy-scale.md).

Cursor's terminal agent (`agent` command): interactive and print/CI modes, Agent/Plan/Ask modes, cloud-agent handoff, resumable sessions, and sandbox controls; pairs with the Cursor IDE and subscription (verified docs Sep 2026).

## Overview

**Cursor CLI** is a terminal agent with ide extension in the *Terminal / CLI coding agents* category, made by Anysphere.

Cursor subscribers who want the same agent in the terminal and CI.

## Official Links

- [Official website](https://cursor.com/docs/cli)
- [Documentation](https://cursor.com/docs/cli)
- GitHub — not verified, check official website
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Cursor's terminal agent (`agent` command): interactive and print/CI modes, Agent/Plan/Ask modes, cloud-agent handoff, resumable sessions, and sandbox controls; pairs with the Cursor IDE and subscription (verified docs Sep 2026).

## What It Does

Same agent/modes as the editor; print mode for scripts and CI pipelines.

Known limitations: Requires a Cursor account/subscription; closed source.

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

- Terminal / CLI

## Supported Models

- Unknown — check official documentation for currently supported models.

## Model Providers

Unknown — check official documentation.

## Pricing

Part of Cursor subscription plans; see the official pricing page.

| Option | Available |
| --- | --- |
| Free | Unknown |
| Free tier | Unknown |
| Paid | Yes — see summary above |
| BYOK | Unknown |
| API costs | You pay the model provider when using BYOK |

> Advertised prices are not total cost: BYOK tools are often free while you pay the model provider per token. See [pricing analysis](../docs/comparisons/pricing.md).

## Open Source

- Open source: **False**
- License: **Proprietary**
- Repository: not public / not verified
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://cursor.com/docs/cli)

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

Same agent/modes as the editor; print mode for scripts and CI pipelines.

## Weaknesses

Requires a Cursor account/subscription; closed source.

## Best For

Cursor subscribers who want the same agent in the terminal and CI.

## Not Ideal For

- Developers who need stability guarantees — Cursor CLI changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **possible-but-limited** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟡 Usable with limitations**

Usable, but expect friction (limits, RAM pressure, or setup effort) on this hardware. Stated requirements: Thin client; model runs in the cloud..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [cursor](./cursor.md)
- [claude-code](./claude-code.md)
- [gemini-cli](./gemini-cli.md)

## Sources

- [Official website](https://cursor.com/docs/cli)
- [Official documentation](https://cursor.com/docs/cli)
- Source repository — not verified, check official website
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
