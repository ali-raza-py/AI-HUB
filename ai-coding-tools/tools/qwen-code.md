# Qwen Code

> Last verified: 2026-09 · Status: active · Autonomy: Level 4 — see [the autonomy scale](../docs/autonomy-scale.md).

Open-source (Apache-2.0) terminal coding agent, originally based on Gemini CLI v0.8.2, now independently developed; multi-protocol model access, IDE plugins (VS Code/JetBrains/Zed), desktop app, and SDK (verified Sep 2026).

## Overview

**Qwen Code** is a terminal agent (cli/repl) in the *Terminal / CLI coding agents* category, made by Alibaba (Qwen team).

An open-source Claude Code-style terminal agent with Qwen and multi-provider model access.

## Official Links

- [Official website](https://qwenlm.github.io/qwen-code-docs/)
- [Documentation](https://qwenlm.github.io/qwen-code-docs/)
- [GitHub](https://github.com/QwenLM/qwen-code)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Open-source (Apache-2.0) terminal coding agent, originally based on Gemini CLI v0.8.2, now independently developed; multi-protocol model access, IDE plugins (VS Code/JetBrains/Zed), desktop app, and SDK (verified Sep 2026).

## What It Does

Feature-rich (subagents, MCP, plan mode, IDE plugins); multi-protocol; open source.

Known limitations: Result quality depends on the model/plan you connect; younger than Claude Code.

## Main Capabilities

| Capability | Supported |
| --- | --- |
| File editing | Yes |
| Terminal | Yes |
| Repository context | Yes |
| MCP | Yes |
| Git | Yes |
| Tests | Yes |
| Browser | Unknown |
| Subagents | Unknown |
| BYOK | Yes |
| Local models | Unknown |

## Platforms

- VS Code (extension)
- JetBrains (plugin)
- Zed
- Terminal / CLI
- Desktop app

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Free, open source; bring your own Qwen/multi-provider keys — verify current free-tier limits with the provider.

| Option | Available |
| --- | --- |
| Free | Yes |
| Free tier | Unknown |
| Paid | Yes — see summary above |
| BYOK | Yes |
| API costs | You pay the model provider when using BYOK |

> Advertised prices are not total cost: BYOK tools are often free while you pay the model provider per token. See [pricing analysis](../docs/comparisons/pricing.md).

## Open Source

- Open source: **True**
- License: **Apache-2.0**
- Repository: <https://github.com/QwenLM/qwen-code>
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://qwenlm.github.io/qwen-code-docs/)

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
 ↓
Commit / PR
```

Only the steps above are supported by this tool (derived from the capability table, not marketing claims).

## Strengths

Feature-rich (subagents, MCP, plan mode, IDE plugins); multi-protocol; open source.

## Weaknesses

Result quality depends on the model/plan you connect; younger than Claude Code.

## Best For

An open-source Claude Code-style terminal agent with Qwen and multi-provider model access.

## Not Ideal For

- Developers who need stability guarantees — Qwen Code changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **good** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟢 Recommended**

Works well on this machine for normal use. Stated requirements: Thin client; model runs in the cloud..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [gemini-cli](./gemini-cli.md)
- [claude-code](./claude-code.md)
- [opencode](./opencode.md)

## Sources

- [Official website](https://qwenlm.github.io/qwen-code-docs/)
- [Official documentation](https://qwenlm.github.io/qwen-code-docs/)
- [Source repository](https://github.com/QwenLM/qwen-code)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
