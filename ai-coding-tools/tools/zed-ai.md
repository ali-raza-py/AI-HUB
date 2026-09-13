# Zed AI

> Last verified: 2026-09 · Status: active · Autonomy: Level 3 — see [the autonomy scale](../docs/autonomy-scale.md).

<!-- full_page: true — page is generated once; edit data/tools.yaml, then re-run scripts/generate-tool-pages.py --force to overwrite. -->

Zed editor (Rust-written, open source) with AI/agent features; AI features include billing tiers (verified Sep 2026).

## Overview

**Zed AI** is a standalone editor built from scratch / lightly derived in the *VS Code / IDE AI agents* category, made by Zed Industries.

Performance-focused developers open to switching editors.

## Official Links

- [Official website](https://zed.dev/)
- [Documentation](https://zed.dev/docs)
- [GitHub](https://github.com/zed-industries/zed)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Zed editor (Rust-written, open source) with AI/agent features; AI features include billing tiers (verified Sep 2026).

## What It Does

Native-speed editor, built-in agent, collaboration, open source.

Known limitations: Editor switch required; AI plans are subscription-based.

## Main Capabilities

| Capability | Supported |
| --- | --- |
| File editing | Yes |
| Terminal | Yes |
| Repository context | Yes |
| MCP | Yes |
| Git | Unknown |
| Tests | No |
| Browser | Unknown |
| Subagents | Unknown |
| BYOK | No |
| Local models | Yes |

## Platforms

- Zed
- Desktop app

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Editor free; AI assistant has paid subscription; BYOK varies.

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
- License: **GPL-3.0 (editor) + proprietary services**
- Repository: <https://github.com/zed-industries/zed>
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://zed.dev/docs)

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
Human review
 ↓
Final changes
```

Only the steps above are supported by this tool (derived from the capability table, not marketing claims).

## Strengths

Native-speed editor, built-in agent, collaboration, open source.

## Weaknesses

Editor switch required; AI plans are subscription-based.

## Best For

Performance-focused developers open to switching editors.

## Not Ideal For

- Developers who need stability guarantees — Zed AI changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **good** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟢 Recommended**

Works well on this machine for normal use. Local inference (Ollama) on 8 GB RAM is limited to small models (~1–4 B) and will be slow on this CPU-only machine — fine for experimentation, not for daily heavy agent work. Stated requirements: Very light; good for 8 GB machines..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [cursor](./cursor.md)
- [void](./void.md)
- [kilo-code](./kilo-code.md)

## Sources

- [Official website](https://zed.dev/)
- [Official documentation](https://zed.dev/docs)
- [Source repository](https://github.com/zed-industries/zed)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
