# SWE-agent

> Last verified: 2026-09 · Status: active · Autonomy: Level 4 — see [the autonomy scale](../docs/autonomy-scale.md).

<!-- full_page: true — page is generated once; edit data/tools.yaml, then re-run scripts/generate-tool-pages.py --force to overwrite. -->

Research project (MIT); SWE-agent 1.0 well-known. README now recommends 'mini-swe-agent' which has superseded it (verified Sep 2026).

## Overview

**SWE-agent** is a terminal agent (cli/repl) in the *Terminal / CLI coding agents* category, made by Princeton University / Stanford University (research).

Academic study of agent-computer interfaces and SWE-bench-style evaluation.

## Official Links

- [Official website](https://swe-agent.com/)
- Documentation — not verified, check official website
- [GitHub](https://github.com/SWE-agent/SWE-agent)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Research project (MIT); SWE-agent 1.0 well-known. README now recommends 'mini-swe-agent' which has superseded it (verified Sep 2026).

## What It Does

Research-grade, config-driven, evaluation tooling, EnIGMA security mode.

Known limitations: Research tool, not a polished product; mini-swe-agent recommended for new work.

## Main Capabilities

| Capability | Supported |
| --- | --- |
| File editing | Yes |
| Terminal | Yes |
| Repository context | Yes |
| MCP | No |
| Git | Unknown |
| Tests | Yes |
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

Free, open source, BYOK.

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
- Repository: <https://github.com/SWE-agent/SWE-agent>
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://swe-agent.com/)

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

Research-grade, config-driven, evaluation tooling, EnIGMA security mode.

## Weaknesses

Research tool, not a polished product; mini-swe-agent recommended for new work.

## Best For

Academic study of agent-computer interfaces and SWE-bench-style evaluation.

## Not Ideal For

- Developers who need stability guarantees — SWE-agent changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **good** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟢 Recommended**

Works well on this machine for normal use. Local inference (Ollama) on 8 GB RAM is limited to small models (~1–4 B) and will be slow on this CPU-only machine — fine for experimentation, not for daily heavy agent work. Stated requirements: Any (Python), moderate for local models..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [swe-rex](./swe-rex.md)
- [openhands](./openhands.md)
- [autocoderover](./autocoderover.md)

## Sources

- [Official website](https://swe-agent.com/)
- Official documentation — not verified, check official website
- [Source repository](https://github.com/SWE-agent/SWE-agent)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
