# Advanced Agent Workflows

For when the basics (see [AI coding workflows](../workflows/ai-coding-workflows.md))
are second nature.

## Planning before coding
Force the plan-first loop: agent proposes file-level changes → you approve →
execute. In Cline/Kilo/Roo this is Plan vs Act mode; in Claude Code, ask for
a plan before permission to edit. A 2-minute plan review prevents a 2-hour
wrong-direction session.

## Context engineering
Agents are only as good as the context you give them:
- **Repository instructions** — maintain a rules file the tool auto-reads
  (`.clinerules`/`.kilocode` rules, `CLAUDE.md`, `AGENTS.md`, Copilot
  instructions). Put: stack, conventions, forbidden patterns, test commands.
- Keep it short and factual; stale rules are worse than none.
- Point at exemplar files ("follow patterns in `app/api/users.py`") instead
  of describing conventions in prose.

## MCP in the loop
Wire the agent to your real environment: database (read-only creds!), browser
(Playwright), GitHub (issues/PRs). See the [MCP guide](../mcp-guide.md). Add
servers one at a time and scope credentials.

## Subagents & parallel agents
- **Subagents:** some tools spawn scoped child agents (e.g. a search agent
  that reports back, keeping the main context clean). Use for research-heavy
  tasks.
- **Parallel agents:** run two agents on *independent* tasks in separate git
  worktrees/branches. Never two agents on one working tree — they will
  trample each other's edits. Merge via normal PRs.

## Testing & CI/CD
- The agent writes tests; **you** run them and read them.
- Wire agents into CI as reviewers (Qodo, Copilot code review) — automated
  first-pass review, human final word.
- Golden rule: CI must be green before an agent's PR merges. Branch
  protection enforces what discipline doesn't.

## Git workflows with agents
```text
main (protected)
 └─ feature/agent-task-X   ← agent works here, small commits
      ↑ human review → squash-merge
```
One task per branch, small commits (revert points), commit before agent
sessions, never let agents force-push or touch `main`.

## Code review of agent output
Review generated PRs *harder* than human PRs: agents write confident,
plausible code and plausible-looking tests that assert little. Use the
checklist in [ai-coding-rules.md](ai-coding-rules.md).

## Long-running & autonomous development
- **Async clouds (Jules, Codex cloud, Devin):** give well-scoped issues with
  acceptance criteria; sandbox + least-privilege tokens; review the PR, never
  the promise.
- **Context decay:** beyond ~an hour of autonomous work, quality degrades as
  context fills. Prefer many small tasks over one epic.
- **Checkpointing:** require commit/push at milestones so nothing lives only
  in agent memory.

## The meta-rule

Autonomy is a dial, not a goal. Increase it only when your verification
(tests, CI, review) can catch the failure modes the extra autonomy creates.
