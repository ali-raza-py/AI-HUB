# LLM

> Last verified: 2026-09 · Status: active · Autonomy: Level 1 — see [the autonomy scale](../docs/autonomy-scale.md).

Apache-2.0 CLI and Python library for running prompts against hosted and local models; logs prompts/responses to SQLite; plugin ecosystem; supports tools/functions (verified Sep 2026).

## Overview

**LLM** is a general llm assistant for the terminal in the *Terminal / CLI coding agents* category, made by Simon Willison.

Scriptable LLM access from the terminal with logged history — useful for pipelines and learning.

## Official Links

- [Official website](https://llm.datasette.io)
- [Documentation](https://llm.datasette.io/)
- [GitHub](https://github.com/simonw/llm)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Apache-2.0 CLI and Python library for running prompts against hosted and local models; logs prompts/responses to SQLite; plugin ecosystem; supports tools/functions (verified Sep 2026).

## What It Does

Model-agnostic via plugins; SQLite logging; Python library for automation.

Known limitations: Not a coding agent — no repo-editing loop out of the box.

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

Free, open source; provider API costs depend on the models you use.

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
- Repository: <https://github.com/simonw/llm>
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://llm.datasette.io/)

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

Model-agnostic via plugins; SQLite logging; Python library for automation.

## Weaknesses

Not a coding agent — no repo-editing loop out of the box.

## Best For

Scriptable LLM access from the terminal with logged history — useful for pipelines and learning.

## Not Ideal For

- Developers who need stability guarantees — LLM changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **excellent** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟢 Recommended**

Light client; heavy inference happens in the cloud or via BYOK. Local inference (Ollama) on 8 GB RAM is limited to small models (~1–4 B) and will be slow on this CPU-only machine — fine for experimentation, not for daily heavy agent work. Stated requirements: Tiny CLI; heavy lifting happens at the model provider..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [shell-gpt](./shell-gpt.md)
- [gemini-cli](./gemini-cli.md)

## Sources

- [Official website](https://llm.datasette.io)
- [Official documentation](https://llm.datasette.io/)
- [Source repository](https://github.com/simonw/llm)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
