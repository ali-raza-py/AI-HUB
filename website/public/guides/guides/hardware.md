# Hardware Guide — What Runs on What

> Last verified: September 2026. Local-model capabilities improve constantly,
> but physics (RAM bandwidth, no GPU) does not.

## Reference machine: HP EliteBook 845 G7

**Ryzen 5 PRO 4650U (6C/12T, no dGPU) · 8 GB RAM · 256 GB SSD · Windows.**
Shared system memory is the binding constraint: Windows + VS Code + browser +
Ollama compete for the same 8 GB. Budget ~3–4 GB for a local model at most.

| Setup | Local model feasibility | AI tooling practicality |
| --- | --- | --- |
| **8 GB RAM, CPU-only** (this machine) | 3B–7B/8B models at Q4 quantization; slow but usable for chat/small edits | Autocomplete + cloud agents fully fine; local = experimentation only |
| **16 GB RAM, CPU-only** | 7B–14B Q4 comfortably; usable small-model coding | Local becomes genuinely useful for privacy-sensitive work |
| **32 GB RAM** | 14B–30B Q4; still CPU-speed | Local near-parity with small cloud models, minus speed |
| **Dedicated GPU** (8 GB+ VRAM, e.g. RTX 3060+) | Fast local inference up to ~14B | Local-first workflows viable |
| **Cloud agents** (Devin, Codex cloud, Jules) | N/A — runs remotely | Zero local requirements; cost/privacy are the tradeoffs |

## What is practical on 8 GB, CPU-only — honestly

- **Qwen2.5-Coder 3B / Llama 3.2 3B (Q4):** responsive enough for chat,
  explanations, small functions. Good for learning Ollama itself.
- **7B–8B models (Qwen2.5-Coder 7B, Llama 3.1 8B, Qwen3-class small):** runs,
  but expect several tokens/sec — fine for "think while it writes", painful
  for agentic loops (an agent making 40 calls takes a long time).
- **14B+:** not practical here; close other apps first or don't.
- **Agentic local workflows (Cline+Ollama):** technically supported, practically
  slow on this machine. Treat as experimentation, not daily driving.
- **Tool-side, everything is light:** Cline, Kilo Code, Aider, OpenCode,
  Continue are thin clients — the model does the heavy lifting. All VS Code
  agents run fine; the constraint is only the local model.

## Rules of thumb

1. Cloud models (free tier or BYOK) will outperform any local model this
   machine can run — that's a hardware reality, not a license issue.
2. Keep the browser tab count down when running local models; 8 GB disappears
   fast.
3. RAM upgrade (this model supports it) is the single best investment for
   local AI; a used eGPU is not realistic on this chassis.
4. SSD space: keep 2–3 small models at most; each Q4 7B is ~4–5 GB.

## Bottom line for this machine

> Local AI on this machine is useful for **experimentation, privacy practice,
> and offline chat** — it should not be considered a replacement for stronger
> cloud models. Use the cloud (free tiers first) for serious agentic work;
> use Ollama to learn how models behave.
