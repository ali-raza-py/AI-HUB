# Privacy: Where Does Your Code Go?

> Last verified: September 2026. Retention and training policies change —
> verify the vendor's current policy before trusting it with proprietary code.

## The five access models, compared

| Model | Where code/prompts go | Typical privacy posture |
| --- | --- | --- |
| **Local models** (Ollama, LM Studio, Twinny, Tabby) | Nowhere — inference on your machine | Strongest: no code leaves the device |
| **BYOK API** (Cline + OpenRouter/Anthropic key) | To the provider you chose, per request | You see exactly which provider; governed by that provider's API policy (API traffic is typically not used for training — verify) |
| **Hosted agent/tool** (Cursor, Copilot, Windsurf…) | To the vendor's backend | Governed by the product's privacy policy; may include telemetry and, on some tiers, data retention |
| **Enterprise tools** (Copilot Enterprise, Q Developer Pro, watsonx) | Vendor cloud under contract | Contractual controls, no-training guarantees, audit — this is what enterprises pay for |
| **Cloud autonomous agents** (Devin, Jules, Codex cloud) | Full repo copied to vendor sandbox | Widest exposure — the whole repo (including secrets in it) is processed remotely |

## What to actually check, per tool

1. **Retention:** are prompts/code stored, and for how long?
2. **Training:** is your data used to train models? (Often tier-dependent.)
3. **Telemetry:** what usage data is collected; can it be disabled?
4. **Sub-processors:** does the tool route through third parties (cloud
   providers, model APIs)?
5. **Self-hosting:** is there an option that removes third parties entirely?

Honest note: specifics per vendor change frequently and this repository does
not restate them as facts — each tool page links to official sources, and the
registry's `privacy_notes` field carries only verified, tool-specific claims.

## Practical guidance for a student

- Local models give real privacy but real capability limits on 8 GB RAM
  (see the [hardware guide](../guides/hardware.md)).
- BYOK with a reputable API provider is a reasonable middle ground for
  coursework and personal projects.
- For anything proprietary (internship work, client code, others' secrets):
  use only what the engagement's policy permits — default to local or
  enterprise-approved tools, never a free cloud tier.

## Free-tier tradeoff, stated plainly

Free hosted tiers are often subsidized by telemetry and data policies. That's
a fine trade for your own toy projects; it is not a fine trade for someone
else's code. Read the policy for the tier you actually use.
