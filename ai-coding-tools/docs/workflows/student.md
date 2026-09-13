# Student Guide — Limited Money, Maximum Learning

> "I'm a student with limited money. What should I use?"
> Last verified: September 2026 — re-check free-tier limits before relying on
> them; they change without notice.

## $0 budget

**Stack:** VS Code + **GitHub Copilot Free** + **Cline or Kilo Code** (free
tool, BYOK) with a free-tier key (**Gemini API free tier** or **OpenRouter
free models**) + **Ollama** for a small local model.

- Covers: autocomplete, chat, real agentic editing, local experimentation.
- Tradeoffs: free tiers have hard limits; local models on 8 GB RAM are slow
  (see the [hardware guide](../guides/hardware.md)); don't run agentic loops
  against a free tier carelessly — limits vanish fast.

## Small budget (~$5–10/month)

**Add BYOK with a hard cap:** OpenRouter (or a direct Anthropic/OpenAI key)
with a monthly spend limit, used through Cline/Kilo Code. $5 of good-model
tokens, spent deliberately on hard debugging and multi-file features, teaches
more than $20 of passive autocomplete. Keep Copilot Free underneath.

## BYOK strategy

- Use the *strongest* model only where it pays: architecture decisions,
  gnarly bugs, refactors.
- Use cheap/free models for chat, explanations, boilerplate.
- Always set spend caps. Agents re-send context every step — costs compound.
- OpenRouter lets you switch models without changing tools.

## Local AI (Ollama)

Worth it for: learning how LLMs behave, offline work, privacy practice,
quick chats. Not worth it for: serious agentic coding on 8 GB CPU-only —
too slow. Use 3B–7B/8B Q4 models and keep expectations calibrated
([hardware guide](../guides/hardware.md)).

## VS Code workflow

One agentic extension (Cline **or** Kilo Code — not both), permission
prompts **on**, one task at a time, read every diff. Add Copilot Free for
autocomplete. This is the daily-driver setup.

## Terminal workflow

Learn one CLI agent — **OpenCode** or **Aider** (both free/BYOK) — because
terminal agents teach Git, processes, and scripting by osmosis. Add **Gemini
CLI** for its free tier. Claude Code is excellent but subscription-based.

## GitHub-based workflow

Push everything to GitHub from day one: issues as tasks, branches per task,
PRs per feature — then any agent (Copilot agent mode, Jules) plugs into your
existing process instead of replacing it. Free private repos are plenty.

## The tradeoffs, honestly

| Option | Upside | Downside |
| --- | --- | --- |
| Free tiers | $0, real tools | Limits; policy changes; some telemetry |
| BYOK | Best models, flexible | Real cost if unsupervised; card needed |
| Local | $0 forever, private | Weak + slow on this hardware |
| Subscriptions | Zero-friction, strong | Monthly cost; one-ecosystem lock-in |

## The rule that outranks tooling

> Use AI to understand *more*, not to understand less. Ask the agent why, not
> just what. Write some code with AI disabled. You are training to be an
> engineer, not a prompt operator — see
> [AI coding rules](../guides/ai-coding-rules.md).
