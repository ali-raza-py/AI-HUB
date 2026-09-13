# Autonomy Scale (L0–L5)

Levels below are assigned from **observed capabilities** (file editing, shell
execution, planning, long-running operation) — not from marketing claims. A
tool's level can change with any release; entries carry `last_verified` dates.

| Level | Name | Can do | Cannot do |
| --- | --- | --- | --- |
| **L0** | Autocomplete / chat | Suggest lines; answer questions in chat | Edit files itself |
| **L1** | Single-file editor | Apply edits to one file at a time | Coordinated multi-file change |
| **L2** | Multi-file editor | Plan and edit across many files | Execute commands/tests |
| **L3** | Command-running agent | Everything above + run terminal commands, tests, git | Sustained unsupervised operation |
| **L4** | Task agent | Take a task, plan, implement, test, iterate with minimal supervision | Days-long unattended operation |
| **L5** | Long-running SWE agent | Operate on tasks over long horizons (background/cloud), manage own context, possibly multi-agent | Guaranteed correctness — review is still mandatory |

## How to read a level

- **L2 vs L3 is the big safety boundary.** At L3 the agent can execute shell
  commands — that is where sandboxing, permission prompts, and review
  discipline become mandatory (see [security](security/ai-coding-security.md)).
- **Higher is not automatically better.** An L3 agent you supervise closely is
  often more productive — and far safer — than an L5 agent you cannot audit.
- **Levels are per-mode.** Many tools have several modes (chat = L0, agent
  mode = L3). The registry records the highest *sustained* mode.
- Examples (2026-09 verification): GitHub Copilot chat/autocomplete alone ≈
  L0–L1 (its agent mode reaches L3); Cline/Kilo Code/Roo Code ≈ L3 with
  plan-mode features toward L4; Claude Code, Codex CLI, Gemini CLI ≈ L3–L4;
  OpenHands, Devin, Codex cloud, Jules ≈ L4–L5. Verify current behavior —
  vendors add autonomy constantly.
