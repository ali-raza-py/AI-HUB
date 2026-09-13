# My Setup — Hardware Compatibility Guide

> Evaluated for: HP EliteBook 845 G7 — **Ryzen 5 PRO 4650U** (6C/12T, no dGPU) ·
> **8 GB RAM** · **256 GB SSD** · Windows · VS Code · PowerShell · Git/GitHub CLI ·
> Ollama. Last verified: September 2026.
>
> **Honesty note:** the 🟢🟡🔴 classifications below are **derived from official
> requirements and hardware reasoning — they are not personal benchmarks.**
> Nothing on this page should be read as "tested on this machine" unless
> explicitly stated. Verify requirements on each tool's official page (linked
> from its tool page).

**Legend:** 🟢 Recommended · 🟡 Usable with limitations · 🔴 Not ideal

**Installing 100 coding agents is pointless.** The goal: understand the
ecosystem (this repository), then run a small, mastered stack.

## Compatibility at a glance

| Tool / workload | Verdict | Why (documented requirements → this machine) |
| --- | --- | --- |
| VS Code + GitHub Copilot (free tier) | 🟢 | Thin client; inference is in the cloud |
| Cline / Kilo Code (BYOK) | 🟢 | Light extensions; your keys; per-step approvals |
| Gemini CLI / Aider / OpenCode / Crush | 🟢 | Light CLIs; models run remotely |
| Ollama + 3B model (Q4) | 🟢 | ~3 GB RAM; responsive for chat and small tasks |
| LM Studio / GPT4All / Jan (3B models) | 🟢 | Local GUI runtimes sized to the 3B class |
| Ollama + 7B–8B (Q4) | 🟡 | ~5–6 GB RAM; slow on this CPU; close other apps |
| Continue / Twinny with local small models | 🟡 | Works; local completion is modest on CPU |
| Tabby (self-hosted server) | 🟡 | Server + small models only; setup effort |
| Codex CLI | 🟡 | Thin client; value depends on plan limits |
| Cursor / Windsurf / Kiro / Trae | 🟡 | Hardware-fine; subscription + replaces VS Code |
| Claude Code (subscription) | 🟡 | Hardware-fine; limited by budget, not hardware |
| OpenHands (self-hosted, container) | 🟡 | Docker + agent server wants more than 8 GB comfortably |
| Local runtimes with 14B+ models | 🔴 | The RAM math does not fit 8 GB |
| Local agentic loops (e.g. Cline + Ollama 7B) | 🔴 | Dozens of slow LLM calls per task; not practical daily |
| CodeGeeX local mode (9B) | 🔴 | Docs want ~16 GB for the model |
| AutoGPT (self-hosted platform) | 🔴 | Docker stack + services; too heavy here |
| Devin / Jules / Codex cloud / Factory Droid | 🟢* | Runs remotely — *hardware 🟢; cost/privacy are the real trade-offs |
| CodeRabbit / Greptile (cloud PR review) | 🟢* | Cloud service — *cost is the constraint, not hardware |
| Lovable / Bolt / v0 / bolt.diy / Onlook | 🟢 | Browser or light desktop apps |
| MkDocs / Starlight / VitePress / Sphinx | 🟢 | Trivial static-site tooling |

The rule behind every row: **thin clients (cloud/BYOK) are hardware-light —
only local inference stresses this machine.**

## Tier 1 — Daily tools (max 3–5)

1. **VS Code + GitHub Copilot (Free)** — frictionless autocomplete/chat;
   Student Pack may unlock Pro — verify.
2. **Cline** — the one agentic workhorse: BYOK, MCP, plan/act, every step
   visible. *Master this one tool.*
3. **Gemini CLI** — free agentic terminal experience; learn CLI workflows at $0.
4. **Ollama** (3B–8B Q4 models) — offline chat + understanding local models;
   🟢 for experimentation, 🟡 as anything heavier.

## Tier 2 — Specialized (adopt when needed)

- **Aider or OpenCode** — when you want a git-native/terminal-first flow.
- **Continue** — when local-model IDE integration matters more than polish.
- **Supabase MCP server** (via Cline) — schema-aware database work; fits the stack.
- **Qodo PR-Agent** (open source) — automated first-pass PR review on GitHub repos.
- **Sphinx (Python) + MkDocs/Doxygen (C++)** — documentation craft for real projects.
- **OpenHands** (self-host, experiment) — understand autonomous agents hands-on,
  in a container.

## Tier 3 — Worth understanding (not installing)

Cursor or Windsurf (trial), Claude Code (if a subscription ever fits), Kilo Code
(evaluate against Cline, keep one), Codex CLI, Jules, Tabby, Twinny, v0/Lovable
for frontend scaffolding, CodeRabbit/Greptile on repos where PR review matters.

## Avoid / unnecessary (overlaps Tier 1)

- **Roo Code + Kilo Code + Cline together** — near-identical; keep Cline
  (Roo Code itself was shut down in May 2026 — see its tool page).
- **A second autocomplete** (Codeium/Supermaven/Tabnine) alongside Copilot.
- **An AI IDE** (Cursor/Windsurf) *and* VS Code agents — the IDE replaces
  VS Code; don't pay for both worlds at once.
- **Devin / Factory Droid subscriptions** — commercial autonomy you don't need
  to buy to understand.
- **Self-hosting heavy agent platforms** (AutoGPT platform, large OpenHands
  setups) on 8 GB — use managed/cloud paths or better hardware.

## Option analysis

### Option A — VS Code + Cline ✅ (recommended)
BYOK (OpenRouter/Anthropic/Google/Ollama), MCP, visible diffs, per-action
approval — ideal for *learning* agent architecture. **Cost:** tool $0; tokens
capped by you. **Verdict: 🟢 Recommended.**

### Option B — VS Code + GitHub Copilot ✅ (recommended, free tier)
Best-in-class autocomplete, chat, agent mode + CLI, GitHub integration.
**Cost:** $0 (free tier). **Weakness:** less transparent than Cline for
learning how agents work. **Verdict: 🟢 Recommended at $0.**

### Option C — Claude Code
Top-tier terminal agent; Agent SDK for automation. **Cost:** subscription.
**Hardware:** fine (thin client). **Verdict: 🟡 Usable with limitations** — by
budget, not hardware. Revisit later.

### Option D — Local AI (Ollama)
**Privacy:** total. **Cost:** $0. **Reality on Ryzen 5 PRO 4650U + 8 GB, no
GPU:** 3B models = fine; 7B–8B = slow; 14B+ = no. Agentic loops are
impractical. **Verdict: 🟢 for experimentation, 🟡 as a daily workflow.** It is
**not** a replacement for cloud models on this machine.

### Option E — Cursor
Integrated AI IDE with strong codebase understanding. **Cost:** subscription.
**Tradeoff:** replaces VS Code + duplicates Cline. **Verdict: 🟡 Usable with
limitations** — trial once; don't pay before outgrowing the free stack.

## The stack, in one line

> **Copilot Free (autocomplete/chat) + Cline with a capped BYOK key (agent) +
> Ollama small model (local) + Gemini CLI (terminal).**
> Everything else in this repository is knowledge, not installs.

And the standing rule: AI is a force multiplier — keep learning DSA, Git,
databases, and architecture; review every diff. See also the
[hardware guide](../docs/guides/hardware.md) and the
[low-end hardware comparison](best-for-low-end-hardware.md).
