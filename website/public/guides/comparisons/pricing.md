# Pricing — Why Advertised Price ≠ Total Cost

> Last verified: September 2026. Prices are not listed as facts here because
> they change too fast; this page explains the **cost models** so you can
> evaluate any current price sheet yourself.

## The six cost models

### Subscription
Recurring fee (monthly/annual) for access to the product and some model
allowance. *Examples: Copilot Pro, Cursor, Windsurf.* Watch for: usage limits
hidden behind "fair use", model downgrades on cheaper tiers.

### BYOK
The tool itself is free or cheap; **you pay the model provider per token**
with your own API key. *Examples: Cline, Kilo Code, Aider, Continue.* Watch
for: agentic tools burn tokens fast (they re-read files every step) — a
"free" tool with a premium-model key can cost more than a subscription if
unsupervised. Mitigate with smaller-context models for simple tasks.

### API billing
Pure pay-per-token. No subscription. Good for sporadic use; unpredictable at
scale. Rate limits on lower spend tiers can matter for agents.

### Free tier
$0 with limits (requests/day, premium-model quota). *Examples: Copilot Free,
Gemini Code Assist free tier.* Fine for learning; limits are the product.

### Local
No token cost — but hardware is the cost, and on CPU-only machines you pay in
*time* (see the hardware guide). Electricity and opportunity cost included.

### Hybrid (recommended for students)
Local/free models for cheap tasks (chat, boilerplate, explanations) and cloud
models (via free tier or small BYOK budget) for hard tasks (multi-file
refactors, debugging). This is usually the best value-per-dollar.

## Why advertised price may not equal total cost

- **Agent amplification:** one "task" can be 50+ model calls with full file
  context each.
- **Overage/limits:** subscription caps can push you into per-token billing.
- **Model mixing:** premium models on premium tiers; the price you saw may be
  for the weakest model.
- **The free tool ≠ free model:** BYOK tools shift cost, not remove it.
- **Your time:** a cheap-but-worse model that needs 3× correction loops is
  not cheaper.

## $0-budget starting point (September 2026, verify current terms)

VS Code + **GitHub Copilot Free** (autocomplete/chat/limited agent) + **Cline
or Kilo Code** (BYOK, free tool) + a free-tier API key (e.g. Gemini free tier
or OpenRouter free models) + **Ollama** for experimentation. That stack costs
nothing and covers autocomplete, chat, and agentic work — see the
[student guide](../workflows/student.md) for tradeoffs.
