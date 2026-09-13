# Decision Tree — Which Tools Do You Actually Need?

Answer the questions top-down; stop when you have a stack of **1–3 tools**.
Installing 100 agents is pointless — learn many, choose few, master them.

```text
Do you use VS Code?
├─ Yes
│   ├─ Do you want BYOK (your own API key, pay per token)?
│   │   ├─ Yes → Cline or Kilo Code (add Continue for local models)
│   │   └─ No  → GitHub Copilot (free tier first) or Gemini Code Assist
│   ├─ Do you want an integrated AI IDE instead?
│   │   └─ Try Cursor or Windsurf — but note they replace VS Code
│   └─ Do you need local/offline models?
│       └─ Continue or Twinny + Ollama (see hardware guide for 8 GB reality)
│
├─ Do you live in the terminal?
│   ├─ Subscription-friendly → Claude Code (strong repo-wide agent)
│   ├─ Free/open-source BYOK → OpenCode or Aider or Gemini CLI
│   └─ Building agents yourself → Claude Agent SDK
│
├─ Is the task fully autonomous ("do this ticket end-to-end")?
│   ├─ Open source, self-hosted → OpenHands
│   ├─ GitHub-native async → Jules
│   └─ Commercial cloud → Devin or Codex (cloud)
│
├─ Is your work GitHub-centric (issues → PRs)?
│   └─ Copilot (agent mode + CLI) or Jules; add Qodo for PR review
│
├─ Is this an enterprise/team rollout?
│   └─ Copilot Business/Enterprise, Amazon Q Developer, GitLab Duo,
│      Gemini Code Assist, or Tabnine (privacy/contract-driven choice)
│
└─ What's your budget?
    ├─ $0        → Copilot Free + Cline/Kilo Code + free-tier key + Ollama
    ├─ Small     → BYOK with a modest monthly cap (OpenRouter is flexible)
    └─ Comfortable → one subscription (Copilot Pro or Cursor) + one BYOK tool
```

## Worked examples

- **Student, VS Code, $0:** Copilot Free + Cline (free-tier key). Done.
- **Student, privacy-curious:** add Ollama + Continue with a 3B model.
- **Startup:** Copilot Business for the team + Claude Code for hard tasks +
  OpenHands for autonomous issue triage.
- **Large repository:** tools with strong repo indexing: Cursor, Copilot,
  Sourcegraph Cody, Augment Code.
- **Terminal-first engineer:** Claude Code (or OpenCode/Aider for BYOK).

## Anti-patterns

- Installing Cline **and** Kilo Code **and** Roo Code **and** Continue — they
  overlap ~90% (see [tool overlap](../../comparisons/tool-overlap.md)). Pick one.
- Paying for two subscriptions that cover the same need.
- Running local agentic loops on 8 GB RAM as your primary workflow.
