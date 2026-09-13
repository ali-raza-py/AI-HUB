# Best AI Coding Stack for Ali

> Evaluated for: Class XI CS student, Karachi · learning Python/C++/DSA,
> Next.js/TypeScript/FastAPI/Supabase · VS Code, Git/GitHub CLI, PowerShell,
> Ollama · HP EliteBook 845 G7, Ryzen 5 PRO 4650U, **8 GB RAM**, no dGPU ·
> budget-conscious. Last verified: September 2026.

**Installing 100 coding agents is pointless.** The goal: understand the
ecosystem (this repository), then run a small, mastered stack.

## Tier 1 — Daily tools (max 3–5)

1. **VS Code + GitHub Copilot (Free)** — frictionless autocomplete/chat;
   Student Pack may unlock Pro — verify.
2. **Cline** — the one agentic workhorse: BYOK, MCP, plan/act, every step
   visible. *Master this one tool.*
3. **Ollama** (3B–8B Q4 models) — offline chat + understanding local models;
   not for serious agentic work on this hardware.
4. **Gemini CLI** — free agentic terminal experience; learn CLI workflows at
   $0.

## Tier 2 — Specialized (5–10, adopt when needed)

- **Aider or OpenCode** — when you want a git-native/terminal-first flow.
- **Continue** — when local-model IDE integration matters more than polish.
- **Supabase MCP server** (via Cline) — direct schema-aware DB work; fits the
  Supabase stack.
- **Qodo PR-Agent** (open source) — automated first-pass PR review on your
  GitHub repos.
- **Sphinx (Python) + Doxygen (C++)** — documentation craft for your projects.
- **OpenHands** (self-host, experiment) — understand autonomous agents
  hands-on, in a container.

## Tier 3 — Worth experimenting (not installing)

Cursor or Windsurf (trial), Claude Code (if a subscription ever fits),
Kilo Code (evaluate against Cline, keep one), Codex CLI, Jules, Tabby,
Twinny, v0/Lovable for frontend scaffolding.

## Avoid / unnecessary (overlaps Tier 1)

- **Roo Code + Kilo Code + Cline together** — ~90% identical; keep Cline.
- **A second autocomplete** (Codeium/Supermaven/Tabnine) alongside Copilot.
- **An AI IDE** (Cursor/Windsurf) *and* VS Code agents — the IDE replaces
  VS Code; don't pay for both worlds at once.
- **Devin / Factory Droid** — commercial autonomy you don't need to buy.
- **Tabnine / watsonx / GitLab Duo** — enterprise-oriented, wrong fit.

## Recommended stack analysis

### Option A — VS Code + Kilo Code
BYOK, MCP, plan/act, fork of the Cline/Roo lineage. **Cost:** free tool +
tokens. **Verdict:** excellent; functionally interchangeable with Cline —
the real decision is which UI you prefer. **Student suitability: excellent.**

### Option B — VS Code + Cline ✅ (recommended)
Same class as A: BYOK (OpenRouter/Anthropic/Google/Ollama), MCP, visible
diffs, per-action approval — ideal for *learning* agent architecture.
**Cost:** tool $0; tokens capped by you. **Weakness:** token-hungry on big
context; free-tier keys run out. **Verdict: Excellent.**

### Option C — VS Code + GitHub Copilot ✅ (recommended, free tier)
Best-in-class autocomplete, chat, GitHub integration, agent mode + CLI.
**Cost:** $0 (free tier). **Weakness:** less transparent than Cline for
learning how agents work; agent mode limits on free tier.
**Verdict: Excellent at $0.**

### Option D — Claude Code
Top-tier terminal agent, repo-wide tasks, scripting/automation via Agent SDK.
**Cost:** subscription. **Hardware:** fine (thin client).
**Verdict: Possible but limited** — by budget, not hardware. Revisit later.

### Option E — OpenAI Codex (CLI/cloud)
Strong repo tasks + autonomous cloud mode; open-source CLI.
**Verdict: Good** — free-tier/plus-tier dependent; keep as Tier-3 experiment.

### Option F — Cursor
Integrated AI IDE, strong codebase understanding, easy.
**Cost:** subscription. **Tradeoff:** replaces VS Code + duplicates Cline.
**Verdict: Possible but limited** — trial it once; don't pay before
outgrowing the free stack.

### Option G — Local AI (Ollama)
**Privacy:** total. **Cost:** $0. **Reality on Ryzen 5 4650U + 8 GB, no GPU:**
3B models = fine; 7B–8B = slow; 14B+ = no. Agentic loops are impractical.
**Verdict: Good for experimentation — Possible but limited as a daily
workflow.** It is **not** a replacement for cloud models on this machine.

## The stack, in one line

> **Copilot Free (autocomplete/chat) + Cline with a capped BYOK key
> (agent) + Ollama small model (local) + Gemini CLI (terminal).**
> Everything else in this repository is knowledge, not installs.

And the standing rule: AI is a force multiplier — keep learning DSA, Git,
databases, and architecture; review every diff.
