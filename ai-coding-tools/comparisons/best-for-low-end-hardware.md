# Best Tools for Low-End Hardware

> Evaluated for CPU-only laptops with 8 GB RAM (e.g. Ryzen 5 PRO 4650U).
> Last verified: September 2026. See the full
> [hardware guide](../docs/guides/hardware.md).

**Key insight:** thin-client tools (BYOK/cloud) are *hardware-light* — the
model runs remotely. Only local inference stresses this machine.

| Tool | Local RAM need | On 8 GB CPU-only |
| --- | --- | --- |
| GitHub Copilot | ~None (cloud) | Excellent |
| Cline / Kilo Code | ~None with cloud keys | Excellent |
| Gemini CLI | ~None | Excellent |
| Aider / OpenCode | ~None with cloud keys | Excellent |
| Continue | None (cloud) / model RAM (local) | Excellent; good local option |
| Ollama + 3B model | ~3 GB | Good — usable |
| Ollama + 7B/8B Q4 | ~5–6 GB | Possible but limited — close other apps, slow |
| Ollama + 14B+ | 8 GB+ | Not recommended |
| Local agentic loops (Cline+Ollama) | High + sustained CPU | Possible but limited — experimentation only |
| Twinny (local) | Model RAM | Good for local autocomplete with small models |
| Tabby (self-host) | Model RAM | Possible but limited — small models only |
| Devin / Jules / Codex cloud / OpenHands cloud | ~None | Excellent (cost/privacy are the tradeoffs) |

**Best low-end stack:** VS Code + Copilot Free + Cline (cloud key) + Ollama
3B for local play. Everything heavy happens in someone else's datacenter;
your laptop just renders diffs.

**Biggest low-end mistakes:** expecting local 7B agents to match cloud
models; running local inference while a browser hogs RAM; paying for tools
whose value depends on hardware you don't have.
