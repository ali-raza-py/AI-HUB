# Prompt Engineering for Coding Agents

The difference between a bad and good prompt is the difference between a
demo and a working feature.

## Bad prompt

> "Build my app."

Vague goal + no context + no constraints = generic boilerplate, wrong
assumptions, wasted tokens, and code you'll delete.

## Better prompt

> "This is a FastAPI + Supabase backend (`app/`) with Next.js 14 frontend
> (`web/`). **Task:** add an endpoint `POST /api/orders` that validates the
> payload with Pydantic, inserts into the `orders` table via the existing
> `db.py` session helper, and returns 201 with the row.
> **Constraints:** follow patterns in `app/api/users.py`; no new
> dependencies; parameterized queries only; secrets from env vars.
> **Acceptance criteria:** pytest tests in `tests/test_orders.py` covering
> happy path + invalid payload + unauthorized user; existing tests still
> pass. **Output:** plan first for approval, then implement."

Repository, requirements, constraints, architecture, acceptance criteria,
testing, expected output — all present.

## Reusable templates

### New feature
```text
Context: <stack, relevant files/patterns>
Task: <one sentence>
Constraints: <patterns to follow, deps, security>
Acceptance criteria: <testable list>
Output: plan first; small diffs; update tests
```

### Bug fix
```text
Symptom: <exact error + repro steps>
Expected: <what should happen>
Evidence: <logs, stack trace, file:line>
Task: find root cause, explain it, propose smallest fix
Constraints: no behavior changes beyond the fix; add a regression test
```

### Refactor
```text
Goal: <e.g. "extract shared validation into app/validators.py">
Scope: <files in/out>
Invariants: public behavior unchanged; all tests pass after each stage
Plan: staged, one commit per stage, compile+test between stages
```

### Debugging
```text
Repro: <exact steps>
Observed vs expected: <both, precisely>
Task: reproduce, form hypotheses, verify against logs/code,
explain root cause BEFORE patching
```

### Code review
```text
Review <files/PR> for: security, authorization, error handling,
edge cases, test quality, performance. For each finding: severity,
file:line, why it matters, suggested fix. No style nits unless asked.
```

### Testing
```text
Target: <module/function>
Cover: happy path, boundary values, invalid input, authz failure,
one integration path. Use existing fixtures/conventions in tests/.
Reject: tests that don't assert real behavior.
```

### Documentation
```text
Generate <README module section / docstrings> for <scope>.
Audience: <new contributor>. Include: purpose, usage example, caveats.
Do not invent behavior — only document what the code does; mark
anything unclear as a question.
```

### Migration
```text
From <old> to <new>. Strategy: <strangler/in-place/big-bang + why>.
Compatibility: <what must keep working>.
Plan: stages with verification per stage; rollback point per stage.
```

### Performance optimization
```text
Problem: <measured symptom — "list endpoint takes 2.3s at 1k rows">
Baseline: <how measured>
Task: profile, identify top 2 causes, fix with evidence of improvement.
Constraints: no premature caching layers; measure again after.
```

### Security audit
```text
Scope: <files/area>
Check: injection, authz gaps, secrets, unsafe deserialization,
dependency risk. Report: severity, location, exploit sketch, fix.
Read-only task — do not modify code.
```

## Universal rules

1. **Give evidence, not vibes** — errors, file paths, logs.
2. **Demand the plan before the code** for anything multi-file.
3. **Make acceptance criteria testable** — "works" is not testable.
4. **Scope tightly** — one feature, not one app.
5. **Ask for "unknowns" explicitly** — "list assumptions; ask before guessing."
