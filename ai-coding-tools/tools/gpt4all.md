# GPT4All

> Last verified: 2026-09 · Status: active · Autonomy: Level 0 — see [the autonomy scale](../docs/autonomy-scale.md).

Open-source (MIT) desktop app that runs local LLMs on everyday hardware — no GPU or API calls required; LocalDocs for private chat with your files; OpenAI-compatible local API server (verified Sep 2026).

## Overview

**GPT4All** is a local model runtime / chat app in the *Open-source / BYOK / local AI tools* category, made by Nomic AI.

Private, offline local chat on CPU-only machines; LocalDocs for personal-document Q&A.

## Official Links

- [Official website](https://www.nomic.ai/gpt4all)
- [Documentation](https://docs.gpt4all.io)
- [GitHub](https://github.com/nomic-ai/gpt4all)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Open-source (MIT) desktop app that runs local LLMs on everyday hardware — no GPU or API calls required; LocalDocs for private chat with your files; OpenAI-compatible local API server (verified Sep 2026).

## What It Does

MIT license; CPU-friendly; Windows/macOS/Linux installers.

Known limitations: Not a coding agent; coding workflows need other tools on top.

## Main Capabilities

| Capability | Supported |
| --- | --- |
| File editing | Unknown |
| Terminal | Unknown |
| Repository context | Unknown |
| MCP | No |
| Git | Unknown |
| Tests | Unknown |
| Browser | Unknown |
| Subagents | Unknown |
| BYOK | No |
| Local models | Yes |

## Platforms

- Desktop app

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Free, open source (MIT), commercial use permitted.

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
- Repository: <https://github.com/nomic-ai/gpt4all>
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://docs.gpt4all.io)

## Basic Usage

Start from the official quickstart in the documentation above. Keep the first session read-only (or on a scratch repository) until you trust the tool's file-editing and terminal behavior.

## Agent Workflow

```text
Prompt
 ↓
Human review
 ↓
Final changes
```

Only the steps above are supported by this tool (derived from the capability table, not marketing claims).

## Strengths

MIT license; CPU-friendly; Windows/macOS/Linux installers.

## Weaknesses

Not a coding agent; coding workflows need other tools on top.

## Best For

Private, offline local chat on CPU-only machines; LocalDocs for personal-document Q&A.

## Not Ideal For

- Developers who need stability guarantees — GPT4All changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **excellent** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟢 Recommended**

Light client; heavy inference happens in the cloud or via BYOK. Local inference (Ollama) on 8 GB RAM is limited to small models (~1–4 B) and will be slow on this CPU-only machine — fine for experimentation, not for daily heavy agent work. Stated requirements: CPU-only supported; RAM sized to the model you load..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [ollama](./ollama.md)
- [lm-studio](./lm-studio.md)
- [jan](./jan.md)

## Sources

- [Official website](https://www.nomic.ai/gpt4all)
- [Official documentation](https://docs.gpt4all.io)
- [Source repository](https://github.com/nomic-ai/gpt4all)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
