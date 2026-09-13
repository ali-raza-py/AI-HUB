# Ollama

> Last verified: 2026-09 · Status: active · Autonomy: Level 0 — see [the autonomy scale](../docs/autonomy-scale.md).

Local model runner: one-command model management and an OpenAI-compatible local API (localhost:11434); runs GGUF models on CPU or GPU; the de-facto local backend behind BYOK tools (verified Sep 2026).

## Overview

**Ollama** is a local model runtime / chat app in the *Open-source / BYOK / local AI tools* category, made by Ollama.

The easiest way to run local models (3B–8B class) on modest hardware; pairs with Cline, Continue, Aider, Twinny, and more.

## Official Links

- [Official website](https://ollama.com)
- Documentation — not verified, check official website
- [GitHub](https://github.com/ollama/ollama)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Local model runner: one-command model management and an OpenAI-compatible local API (localhost:11434); runs GGUF models on CPU or GPU; the de-facto local backend behind BYOK tools (verified Sep 2026).

## What It Does

Dead-simple model pulls; OpenAI-compatible local API; wide tool support.

Known limitations: No agent features of its own; CPU-only 8 GB machines are limited to 3B–8B class models at usable speeds.

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
| Local models | Yes |

## Platforms

- Terminal / CLI

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Free, open source; no API costs for local models.

| Option | Available |
| --- | --- |
| Free | Yes |
| Free tier | Yes |
| Paid | Yes — see summary above |
| BYOK | No |
| API costs | Unknown |

> Advertised prices are not total cost: BYOK tools are often free while you pay the model provider per token. See [pricing analysis](../docs/comparisons/pricing.md).

## Open Source

- Open source: **True**
- License: **MIT**
- Repository: <https://github.com/ollama/ollama>
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://ollama.com)

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

Dead-simple model pulls; OpenAI-compatible local API; wide tool support.

## Weaknesses

No agent features of its own; CPU-only 8 GB machines are limited to 3B–8B class models at usable speeds.

## Best For

The easiest way to run local models (3B–8B class) on modest hardware; pairs with Cline, Continue, Aider, Twinny, and more.

## Not Ideal For

- Developers who need stability guarantees — Ollama changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **excellent** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟢 Recommended**

Light client; heavy inference happens in the cloud or via BYOK. Local inference (Ollama) on 8 GB RAM is limited to small models (~1–4 B) and will be slow on this CPU-only machine — fine for experimentation, not for daily heavy agent work. Stated requirements: 3B models ~3 GB RAM; 7–8B Q4 ~5–6 GB; 14B+ impractical on 8 GB CPU-only..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [llama-cpp](./llama-cpp.md)
- [lm-studio](./lm-studio.md)
- [gpt4all](./gpt4all.md)
- [jan](./jan.md)

## Sources

- [Official website](https://ollama.com)
- Official documentation — not verified, check official website
- [Source repository](https://github.com/ollama/ollama)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
