# Best Tools for Local AI

> Local = weights on your machine, no code sent to any API. Last verified:
> September 2026. Model releases move fast — verify current versions in the
> [model index](../docs/models/index.md).

| Tool | Role | License | Notes |
| --- | --- | --- | --- |
| **Ollama** | Local model runtime | Open source (MIT) | The easiest entry point; OpenAI-compatible local API; quantized models |
| **LM Studio** | Local runtime + GUI | Proprietary (free for personal use — verify) | Friendlier discovery/testing; MLX + GGUF |
| **Continue** | IDE extension + CLI, BYOK/local | Open source (Apache-2.0) | One config spans cloud and local providers |
| **Twinny** | VS Code local autocomplete/chat | Open source | Ollama-friendly; minimal |
| **Tabby** | Self-hosted autocomplete server | Open source | Team/privacy deployments; needs modest hardware |
| **Aider** | Terminal agent with local-model support | Open source (Apache-2.0) | Works with small local models; honest about limits |
| **OpenCode / Kilo Code / Cline / Roo** | Agents with local-provider support | Open source | Supported — but agentic loops on small models are slow and weaker; experiment, don't depend |
| **Qwen2.5-Coder / Qwen3 (small), Llama 3.x, DeepSeek-Coder, GLM, Kimi open-weight** | Model families | Mostly open-weight (check each license) | Pick by RAM: 3B on 8 GB; 7B–14B with 16–32 GB |

**Honest expectations on 8 GB CPU-only:** 3B Q4 = responsive; 7B–8B Q4 =
usable but slow; agentic multi-step local workflows = impractical as a daily
driver. Local AI here is for **privacy practice, offline chat, and learning
how models work** — not a cloud replacement
([hardware guide](../docs/guides/hardware.md)).

**Best local stack:** Ollama + a small Qwen-Coder-class model + Continue
(IDE) or Aider (terminal).
