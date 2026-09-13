# Theia IDE

> Last verified: 2026-09 · Status: active · Autonomy: Level 2 — see [the autonomy scale](../docs/autonomy-scale.md).

AI-native open-source cloud & desktop IDE built on the Eclipse Theia platform — an open alternative to VS Code (not a fork, but compatible with the VS Code extension ecosystem via Open VSX); BYOK to any provider incl. self-hosted/local models; no telemetry (verified Sep 2026).

## Overview

**Theia IDE** is a standalone editor built from scratch / lightly derived in the *VS Code / IDE AI agents* category, made by Eclipse Foundation.

Privacy-conscious developers and organizations wanting an open, vendor-neutral IDE with AI agents and full model control.

## Official Links

- [Official website](https://theia-ide.org)
- [Documentation](https://theia-ide.org/docs)
- [GitHub](https://github.com/eclipse-theia/theia)
- Pricing: see the official pricing page via the website link above.

## Current Status

**Active** — under active development as of the last verification date.

AI-native open-source cloud & desktop IDE built on the Eclipse Theia platform — an open alternative to VS Code (not a fork, but compatible with the VS Code extension ecosystem via Open VSX); BYOK to any provider incl. self-hosted/local models; no telemetry (verified Sep 2026).

## What It Does

Open governance (Eclipse); BYOK to any provider or local models; VS Code extension compatibility; cloud + desktop.

Known limitations: Smaller community than VS Code; some extensions work better in VS Code proper.

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

- Web
- Desktop app

## Supported Models

- - **Local models:** supported (Ollama / LM Studio / llama.cpp)

## Model Providers

Unknown — check official documentation.

## Pricing

Free, open source; model costs follow the provider you connect.

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
- License: **EPL-2.0 (platform; GPL-2.0 with classpath exception option)**
- Repository: <https://github.com/eclipse-theia/theia>
- Open-source, source-available, free, and free-tier are different properties — see [concepts](../docs/getting-started/concepts.md).

## Installation

Use the official installation instructions — do not rely on third-party copies:

- [Official install/setup docs](https://theia-ide.org/docs)

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

Open governance (Eclipse); BYOK to any provider or local models; VS Code extension compatibility; cloud + desktop.

## Weaknesses

Smaller community than VS Code; some extensions work better in VS Code proper.

## Best For

Privacy-conscious developers and organizations wanting an open, vendor-neutral IDE with AI agents and full model control.

## Not Ideal For

- Developers who need stability guarantees — Theia IDE changes quickly; re-verify features and pricing before committing.
- Anyone unwilling to review generated diffs and terminal commands.

## Security Considerations

Agents that execute terminal commands and edit files can cause damage if misused. Review diffs before accepting, never paste secrets into prompts, keep permissions scoped. See [AI coding security](../docs/security/ai-coding-security.md).

## Privacy Considerations

With BYOK/local models, prompts go to the provider you choose (or nowhere for local). Hosted products may retain data per their policy — verify the current policy before using on proprietary code. See [privacy notes](../docs/security/privacy.md).

## Student Perspective

Assessment: **good** — see [best tools for students](../comparisons/best-for-students.md).

## My Setup (hardware compatibility)

Verdict for HP EliteBook 845 G7 (Ryzen 5 PRO 4650U, 8 GB RAM, 256 GB SSD, no dGPU, Windows, VS Code, PowerShell, Ollama): **🟢 Recommended**

Works well on this machine for normal use. Local inference (Ollama) on 8 GB RAM is limited to small models (~1–4 B) and will be slow on this CPU-only machine — fine for experimentation, not for daily heavy agent work. Stated requirements: Comparable to VS Code; light for cloud models..

*Compatibility verdicts are derived from documented requirements and hardware reasoning — not personal benchmarks. See [my setup](../comparisons/best-stack-for-ali.md).*

## Alternatives

- [void](./void.md)
- [kilo-code](./kilo-code.md)
- [continue](./continue.md)

## Sources

- [Official website](https://theia-ide.org)
- [Official documentation](https://theia-ide.org/docs)
- [Source repository](https://github.com/eclipse-theia/theia)
- Pricing: verify on the official pricing page — it changes frequently.

All capability and pricing claims above were checked against the official sources listed here as of 2026-09. Anything not confirmed is marked **Unknown** — do not assume.

---

*(Page generated from `data/tools.yaml` — edit the registry, not this file.)*
