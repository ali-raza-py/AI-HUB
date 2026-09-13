# ShellGPT

> Last verified: 2026-09 · Status: active · Autonomy: Level 2 — see [the autonomy scale](../docs/autonomy-scale.md).

MIT-licensed command-line productivity tool: generates shell commands, code snippets, and documentation from LLMs; works with an OpenAI API key or a local Ollama backend; PowerShell/CMD/Bash/Zsh; REPL and chat modes (verified Sep 2026).

## Overview

**ShellGPT** is a general llm assistant for the terminal in the *Terminal / CLI coding agents* category, made by TheR1D (community).

Quick shell-command and code generation in any shell without a full coding agent.

## Official Links

- [Official website](https://github.com/TheR1D/shell_gpt)
- Documentation — not verified, check official website
- [GitHub](https://github.com/TheR1D/shell_gpt)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

MIT-licensed command-line productivity tool: generates shell commands, code snippets, and documentation from LLMs; works with an OpenAI API key or a local Ollama backend; PowerShell/CMD/Bash/Zsh; REPL and chat modes (verified Sep 2026).

## What It Does

Lightweight; Ollama support; shell-command generation with explanations.

Known limitations: Not a repo-editing agent; API costs when using cloud models.

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
| BYOK | Yes |
| Local models | Yes |

## Platforms

- Terminal / CLI

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Free, open source; OpenAI API costs if you use cloud models.

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
- Repository: <https://github.com/TheR1D/shell_gpt>
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://github.com/TheR1D/shell_gpt)

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

Lightweight; Ollama support; shell-command generation with explanations.

## Weaknesses

Not a repo-editing agent; API costs when using cloud models.

## Best For

Quick shell-command and code generation in any shell without a full coding agent.

## Not Ideal For

- Developers who need stability guarantees — ShellGPT changes quickly; re-verify features and pricing before committing.
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

- [llm-cli](./llm-cli.md)
- [gemini-cli](./gemini-cli.md)
- [warp-ai](./warp-ai.md)

## Sources

- [Official website](https://github.com/TheR1D/shell_gpt)
- Official documentation — not verified, check official website
- [Source repository](https://github.com/TheR1D/shell_gpt)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
