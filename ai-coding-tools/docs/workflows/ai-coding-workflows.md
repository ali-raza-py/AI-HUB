# AI Coding Workflows

Four practical, human-in-the-loop workflows. The agent assists; **you** verify
at every arrow. Only include steps your tool actually supports (see each
tool page's workflow section).

## Workflow 1 — Learn a project

```text
AI  → explain repository (purpose, structure)
AI  → map architecture (modules, data flow)
AI  → identify entry points
AI  → explain dependencies
HUMAN → verify understanding (run it, break it, read key files yourself)
```

Prompt seed: *"Map this repository: entry points, main modules, data flow,
and the three files I should read first. Cite file paths."*

## Workflow 2 — Build a feature

```text
REQUIREMENT → one clear sentence + acceptance criteria
   ↓
PLANNING → agent proposes files/changes; you approve the plan
   ↓
ARCHITECTURE → where does this fit existing patterns?
   ↓
IMPLEMENTATION → small increments, review each diff
   ↓
TESTING → agent writes/updates tests; YOU run them
   ↓
REVIEW → security + edge cases checklist
   ↓
REFACTORING → naming, duplication, dead code
```

Keep tasks small. "Add pagination to the orders list" — not "build the admin
panel".

## Workflow 3 — Debug

```text
REPRODUCE → exact steps/error (agent can run the failing command)
   ↓
INSPECT LOGS → paste real errors, not paraphrases
   ↓
ROOT CAUSE → ask "why", demand evidence, not just a patch
   ↓
PROPOSE FIX → 2+ options with tradeoffs when possible
   ↓
APPLY FIX → smallest change that works
   ↓
RUN TESTS → full suite, not just the new test
   ↓
VERIFY → original repro now passes; nothing else broke
```

Anti-pattern: accepting the first patch without understanding the cause —
guarantees the bug returns.

## Workflow 4 — Large refactor

1. **Inspect** — agent maps affected call sites (`grep`-level evidence, not
   guesses).
2. **Plan** — staged plan, each stage independently testable; get your
   approval before touching files.
3. **Incremental changes** — one stage per commit; compile + test between
   stages. Never "big bang".
4. **Test** — tests updated *with* the refactor, run by you.
5. **Review** — diff each stage; behavior must be unchanged except the
   intended improvement.
6. **Commit** — clear messages per stage; easy revert points.

For refactors spanning days, prefer an L4+ tool with planning (or run stages
manually with an L3 agent) — long autonomous refactors on one context window
degrade badly.

> Every workflow ends with the same step: **you understood what happened**.
> See [AI coding rules](../guides/ai-coding-rules.md).
