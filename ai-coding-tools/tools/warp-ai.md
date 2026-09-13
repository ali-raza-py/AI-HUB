# Warp AI

> Last verified: 2026-09 · Status: active · Autonomy: Level 4 — see [the autonomy scale](../docs/autonomy-scale.md).


Warp is an open-source terminal plus an agent platform ('factories' coordinate fleets of coding agents); Warp AI capabilities in the terminal are being retired in favor of agent platform (verified Sep 2026).

## Overview

**Warp AI** is a terminal agent (cli/repl) in the *Terminal / CLI coding agents* category, made by Warp.

Teams automating PR review/incident workflows ('factories').

## Official Links

- [Official website](https://www.warp.dev/)
- Documentation — not verified, check official website
- [GitHub](https://github.com/warpdotdev/warp)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Warp is an open-source terminal plus an agent platform ('factories' coordinate fleets of coding agents); Warp AI capabilities in the terminal are being retired in favor of agent platform (verified Sep 2026).

## What It Does

Modern terminal UX, agent platform, MCP, evals.

Known limitations: Platform pricing per-run; terminal AI features being retired.

## Main Capabilities

| Capability | Supported |
| --- | --- |
| File editing | Yes |
| Terminal | Yes |
| Repository context | Yes |
| MCP | Yes |
| Git | Unknown |
| Tests | Yes |
| Browser | Unknown |
| Subagents | Unknown |
| BYOK | Yes |
| Local models | Unknown |

## Platforms

- Unknown — check official documentation.

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Terminal free; agent platform usage-based.

| Option | Available |
| --- | --- |
| Free | Yes |
| Free tier | Yes |
| Paid | Yes — see summary above |
| BYOK | Yes |
| API costs | You pay the model provider when using BYOK |

> Advertised prices are not total cost: BYOK tools are often free while you > pay the model provider per token. See [pricing analysis](../docs/comparisons/pricing.md).

## Open Source

- Open source: **True**
- License: **Apache-2.0 (terminal, open-sourced 2025); AI platform features are commercial cloud**
- Repository: https://github.com/warpdotdev/warp
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://www.warp.dev/)

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
```

Only the steps above are supported by this tool (derived from the capability table, not marketing claims).

## Strengths

Modern terminal UX, agent platform, MCP, evals.

## Weaknesses

Platform pricing per-run; terminal AI features being retired.

## Best For

Teams automating PR review/incident workflows ('factories').

## Not Ideal For

- Developers who need stability guarantees — Warp AI changes quickly; re-verify features and pricing before committing.
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

- [claude-code](./claude-code.md)
- [augment-code](./augment-code.md)

## Sources

- [Official website](https://www.warp.dev/)
- Official documentation — not verified, check official website
- [Source repository](https://github.com/warpdotdev/warp)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*Page generated from `data/tools.yaml` — edit the registry, not this file.*
