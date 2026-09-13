# Agentless

> Last verified: 2026-09 · Status: active · Autonomy: Level 3 — see [the autonomy scale](../docs/autonomy-scale.md).


Research tool that resolves software problems WITHOUT an agent-like action loop; two-phase workflow (localization + repair). Verify maintenance.

## Overview

**Agentless** is a research prototype agent in the *Autonomous software-engineering agents* category, made by Academic (agentless research project).

Understanding non-agentic (planned) issue-solving pipelines.

## Official Links

- [Official website](https://github.com/AgentlessResearch/Agentless)
- Documentation — not verified, check official website
- [GitHub](https://github.com/AgentlessResearch/Agentless)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Research tool that resolves software problems WITHOUT an agent-like action loop; two-phase workflow (localization + repair). Verify maintenance.

## What It Does

Simple deterministic pipelines, cheap, reproducible.

Known limitations: Not a realtime coding tool for interactive use.

## Main Capabilities

| Capability | Supported |
| --- | --- |
| File editing | Yes |
| Terminal | No |
| Repository context | Yes |
| MCP | No |
| Git | Unknown |
| Tests | No |
| Browser | Unknown |
| Subagents | Unknown |
| BYOK | Yes |
| Local models | Yes |

## Platforms

- Unknown — check official documentation.

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Free, open source, BYOK.

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
- License: **MIT**
- Repository: https://github.com/AgentlessResearch/Agentless
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://github.com/AgentlessResearch/Agentless)

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
Human review
 ↓
Final changes
```

Only the steps above are supported by this tool (derived from the capability table, not marketing claims).

## Strengths

Simple deterministic pipelines, cheap, reproducible.

## Weaknesses

Not a realtime coding tool for interactive use.

## Best For

Understanding non-agentic (planned) issue-solving pipelines.

## Not Ideal For

- Developers who need stability guarantees — Agentless changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **possible-but-limited** — see [best tools for students](../comparisons/best-for-students.md).

## Ali's Setup

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, no dGPU, Windows, VS Code, PowerShell): **Possible but limited**

Usable, but expect friction (limits, RAM pressure, or setup effort) on this hardware. Local inference (Ollama) on 8 GB RAM is limited to small models (~1–4 B) and will be slow on this CPU-only machine — fine for experimentation, not for daily heavy agent work. Stated requirements: Any (Python)..

## Alternatives

- [autocoderover](./autocoderover.md)
- [swe-agent](./swe-agent.md)

## Sources

- [Official website](https://github.com/AgentlessResearch/Agentless)
- Official documentation — not verified, check official website
- [Source repository](https://github.com/AgentlessResearch/Agentless)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*Page generated from `data/tools.yaml` — edit the registry, not this file.*
