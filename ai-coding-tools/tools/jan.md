# Jan

> Last verified: 2026-09 · Status: active · Autonomy: Level 0 — see [the autonomy scale](../docs/autonomy-scale.md).

Open-source (Apache-2.0) offline ChatGPT alternative: local models via llama.cpp, MCP integration, OpenAI-compatible local API (localhost:1337), optional cloud providers (verified Sep 2026).

## Overview

**Jan** is a local model runtime / chat app in the *Open-source / BYOK / local AI tools* category, made by Jan (Menlo Research).

An open-source local AI app with MCP and agent features plus optional cloud providers.

## Official Links

- [Official website](https://jan.ai)
- [Documentation](https://jan.ai/docs)
- [GitHub](https://github.com/janhq/jan)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Open-source (Apache-2.0) offline ChatGPT alternative: local models via llama.cpp, MCP integration, OpenAI-compatible local API (localhost:1337), optional cloud providers (verified Sep 2026).

## What It Does

Apache-2.0; MCP support; OpenAI-compatible local server; cross-platform.

Known limitations: Younger ecosystem than Ollama; the same RAM constraints apply.

## Main Capabilities

| Capability | Supported |
| --- | --- |
| File editing | Unknown |
| Terminal | Unknown |
| Repository context | Unknown |
| MCP | Yes |
| Git | Unknown |
| Tests | Unknown |
| Browser | Unknown |
| Subagents | Unknown |
| BYOK | Yes |
| Local models | Yes |

## Platforms

- Desktop app

## Supported Models

- - **Cloud models:** supported
- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Free, open source; cloud providers cost what those providers charge.

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
- License: **Apache-2.0**
- Repository: <https://github.com/janhq/jan>
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://jan.ai/docs)

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

Apache-2.0; MCP support; OpenAI-compatible local server; cross-platform.

## Weaknesses

Younger ecosystem than Ollama; the same RAM constraints apply.

## Best For

An open-source local AI app with MCP and agent features plus optional cloud providers.

## Not Ideal For

- Developers who need stability guarantees — Jan changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **excellent** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟢 Recommended**

Light client; heavy inference happens in the cloud or via BYOK. Local inference (Ollama) on 8 GB RAM is limited to small models (~1–4 B) and will be slow on this CPU-only machine — fine for experimentation, not for daily heavy agent work. Stated requirements: 8 GB RAM for 3B models, 16 GB for 7B, 32 GB for 13B (per docs)..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [ollama](./ollama.md)
- [lm-studio](./lm-studio.md)
- [gpt4all](./gpt4all.md)

## Sources

- [Official website](https://jan.ai)
- [Official documentation](https://jan.ai/docs)
- [Source repository](https://github.com/janhq/jan)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
