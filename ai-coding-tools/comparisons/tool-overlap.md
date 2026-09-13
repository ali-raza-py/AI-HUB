# Tool Overlap — What You Don't Need Twice

Many tools in this registry solve nearly the same problem. This page exists so
you install **one** per niche, not four.

## VS Code agentic editing (≈90% overlap)
**Cline · Kilo Code · Roo Code · Continue · OpenCode (VS Code bridges)**

All are open-source VS Code agents with plan/act modes, BYOK, local-model
support, and MCP. Differences are UI polish, defaults, and feature velocity.
**Pick one.** (Kilo Code began as a Cline/Roo fork — the family resemblance is
literal.)

## Autocomplete (+chat)
**GitHub Copilot · Codeium · Tabnine · Supermaven · Twinny**

Twinny is the open-source/local option; the rest are commercial with free
tiers. **Pick one** — running two autocompletes together causes conflicts.

## Terminal agents
**Claude Code · Codex CLI · Gemini CLI · OpenCode · Aider · Crush · Goose**

Same niche, different models/hosts/defaults: Claude Code (Anthropic
subscription), Codex CLI (OpenAI, open source), Gemini CLI (generous free
tier, Google), OpenCode (open source, provider-agnostic), Aider (git-native
pair-programmer), Goose (extensible, Block). **Pick one or two** by the model
ecosystem you prefer.

## AI-native IDEs (replaces VS Code entirely)
**Cursor · Windsurf · Void · PearAI · Trae · Zed · Kiro · Aide**

One editor, one subscription. Evaluating all eight is waste — trial two at
most. Void/PearAI are the open-source-leaning options.

## Autonomous cloud agents
**Devin · Jules · Codex cloud · OpenHands · Factory Droid**

Same job (async issue→PR). OpenHands if you want self-hosted/open source; the
others are commercial. **Pick one.**

## App builders
**Replit Agent · Lovable · Bolt.new · v0 · Firebase Studio · Tempo**

All prompt-to-app with hosting. They differ in depth (full-stack vs UI) and
exit path (code export). Choose by where you want the code to live.

## Documentation
- **Static-site generators (pick one):** Docusaurus, MkDocs/VitePress-class,
  Sphinx (Python), TypeDoc/JSDoc (JS), Doxygen (C/C++), DocFX (.NET), pdoc.
- **Hosted platforms (pick one):** Mintlify, GitBook, ReadMe, Document360.
- **API refs (pick one):** Redoc, Fern, Swagger/OpenAPI tooling.

## The Ali-specific implication

Cline *or* Kilo Code, Copilot free tier, one terminal agent, Ollama — that is
a complete stack. Everything else in this repository is reference knowledge,
not something to install. See [the recommended stack](best-stack-for-ali.md).
