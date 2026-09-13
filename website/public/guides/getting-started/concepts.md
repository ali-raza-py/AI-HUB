# Key Concepts: Tool vs Agent vs Model vs Provider

These terms are constantly confused. They are different layers:

| Concept | What it is | Example |
| --- | --- | --- |
| **AI tool** | A product developers use | Cline (VS Code extension) |
| **AI agent** | A tool that can plan + act (edit files, run commands) toward a goal | Claude Code |
| **AI model** | The LLM doing the actual reasoning/code generation | Claude Sonnet family, GPT family, Qwen |
| **Model provider** | Company serving models via API | Anthropic, OpenAI, Google |
| **API** | The paid interface to a provider's models | OpenAI API, Anthropic API |
| **Protocol / integration** | A standard connecting tools to external capabilities | MCP (Model Context Protocol) |

## Why it matters

- **Cline is a tool, not a model.** Its output quality depends on which model
  you plug into it. The same Cline can be brilliant or poor depending on the
  model behind it.
- **A model is not an agent.** GPT-5-class models generate text and (some)
  support tool-calling — but the *agent loop* (planning, editing files, running
  commands, retrying) lives in the tool around the model.
- **An SDK is not an IDE.** The Claude Agent SDK is a library for building
  agents; it has no editor. Cursor is an IDE; it is not an SDK.
- **MCP is not a model or an agent** — it is a protocol letting agents reach
  external tools (databases, browsers, APIs) through standardized servers.

## Licensing vocabulary (do not treat as synonyms)

| Term | Meaning |
| --- | --- |
| **Open source** | OSI-approved license (MIT, Apache-2.0, GPL…); you can inspect, modify, redistribute |
| **Source available** | Code is visible but license restricts use/redistribution |
| **Free** | Costs $0 to use (says nothing about source code) |
| **Free tier** | A limited $0 tier of a commercial product |
| **BYOK** | Bring your own key — the tool uses *your* API key; you pay the provider per token |
| **Local inference** | The model runs on your hardware (e.g. via Ollama) — no code leaves your machine |
| **Self-hosted** | You run the (cloud) product on your own infrastructure |
| **Open-weight** | Model weights are downloadable but the license may restrict use (e.g. some Llama/Qwen licenses) — not necessarily OSI open source |

A tool can be open source and commercial at the same time (e.g. open core).
A tool can be free and closed. Check each property separately — the registry
stores them as separate fields for exactly this reason.

## Autonomy levels

See [autonomy-scale.md](../autonomy-scale.md) for the L0–L5 scale used across
this repository.
