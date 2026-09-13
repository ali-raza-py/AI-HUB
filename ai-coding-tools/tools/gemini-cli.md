# Gemini CLI

> Last verified: 2026-09 · Status: active · Autonomy: Level 4 — see [the autonomy scale](../docs/autonomy-scale.md).

<!-- full_page: true — page is generated once; edit data/tools.yaml, then re-run scripts/generate-tool-pages.py --force to overwrite. -->

Open-source (Apache-2.0) terminal agent for Gemini; free personal tier, BYOK API, MCP support, extensions (verified Sep 2026).

## Overview

**Gemini CLI** is a terminal agent (cli/repl) in the *Terminal / CLI coding agents* category, made by Google.

Free, open-source terminal agent for Gemini models with MCP support, extensions, and a VS Code companion.

## Official Links

- [Official website](https://geminicli.com)
- [Documentation](https://geminicli.com/docs)
- [GitHub](https://github.com/google-gemini/gemini-cli)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

Open-source (Apache-2.0) terminal agent for Gemini; free personal tier, BYOK API, MCP support, extensions (verified Sep 2026).

## What It Does

Latency, 1M context, style adaptation.

Known limitations: Autocomplete/chat only; no autonomous agent.

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
| Local models | No |

## Platforms

- VS Code (extension)
- Terminal / CLI

## Supported Models

- Unknown — check official documentation for currently supported models.

## Model Providers

Unknown — check official documentation.

## Pricing

Free to use for personal use via Google sign-in; BYOK for API; enterprise via Google Cloud.

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
- Repository: <https://github.com/google-gemini/gemini-cli>
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://geminicli.com/docs)

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

Latency, 1M context, style adaptation.

## Weaknesses

Autocomplete/chat only; no autonomous agent.

## Best For

Free, open-source terminal agent for Gemini models with MCP support, extensions, and a VS Code companion.

## Not Ideal For

- Developers who need stability guarantees — Gemini CLI changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **good** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟢 Recommended**

Works well on this machine for normal use. Stated requirements: Any..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [github-copilot](./github-copilot.md)
- [codeium](./codeium.md)
- [supermaven](./supermaven.md)

## Sources

- [Official website](https://geminicli.com)
- [Official documentation](https://geminicli.com/docs)
- [Source repository](https://github.com/google-gemini/gemini-cli)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
