# MetaGPT

> Last verified: 2026-09 · Status: active · Autonomy: Level 4 — see [the autonomy scale](../docs/autonomy-scale.md).

Multi-agent framework ('software company' roles: PM, architect, engineer); MIT; CLI (`metagpt "..."`) and Python library; LLM config supports OpenAI/Azure/Ollama/Groq etc.; the commercial MGX product is separate (verified Sep 2026).

## Overview

**MetaGPT** is a open-source autonomous agent (self-hosted) in the *Autonomous software-engineering agents* category, made by FoundationAgents (DeepWisdom).

Multi-agent 'software company' simulations and one-prompt project scaffolding with a strong research lineage.

## Official Links

- [Official website](https://atoms.dev)
- [Documentation](https://docs.deepwisdom.ai)
- [GitHub](https://github.com/FoundationAgents/MetaGPT)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Multi-agent framework ('software company' roles: PM, architect, engineer); MIT; CLI (`metagpt "..."`) and Python library; LLM config supports OpenAI/Azure/Ollama/Groq etc.; the commercial MGX product is separate (verified Sep 2026).

## What It Does

MIT; active research; role-based multi-agent pipelines; local-model config.

Known limitations: Research-grade output quality; heavier than single-agent CLIs.

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

- Terminal / CLI

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Free, open source; model API costs depend on your provider.

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
- License: **MIT**
- Repository: <https://github.com/FoundationAgents/MetaGPT>
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://docs.deepwisdom.ai)

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

MIT; active research; role-based multi-agent pipelines; local-model config.

## Weaknesses

Research-grade output quality; heavier than single-agent CLIs.

## Best For

Multi-agent 'software company' simulations and one-prompt project scaffolding with a strong research lineage.

## Not Ideal For

- Developers who need stability guarantees — MetaGPT changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **good** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟢 Recommended**

Works well on this machine for normal use. Local inference (Ollama) on 8 GB RAM is limited to small models (~1–4 B) and will be slow on this CPU-only machine — fine for experimentation, not for daily heavy agent work. Stated requirements: Light client; models via API or Ollama..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [autogpt](./autogpt.md)
- [gpt-engineer](./gpt-engineer.md)
- [openhands](./openhands.md)

## Sources

- [Official website](https://atoms.dev)
- [Official documentation](https://docs.deepwisdom.ai)
- [Source repository](https://github.com/FoundationAgents/MetaGPT)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
