# AI Coding Rules — Never Blindly Accept

> The single most important page in this repository for a student.

## The core rule

> **AI should accelerate software engineering, not replace understanding.**

An agent that writes 500 lines you cannot explain has not made you a better
engineer — it has made you a passenger. Interviews, debugging at 2 AM, and
production incidents all require the understanding you skipped.

## Never blindly accept AI code

Before accepting any generated change, review:

| Area | Ask |
| --- | --- |
| **Security** | Any injection risk? Input validated? Auth enforced? |
| **Dependencies** | New packages? Are they real, maintained, minimal? (hallucinated packages are a real attack vector) |
| **Authentication** | Are sessions/tokens handled correctly? |
| **Authorization** | Can user A read user B's data? (the most common AI-omitted check) |
| **Database queries** | Parameterized? N+1 loops? Migrations reversible? |
| **API keys / secrets** | Any key hardcoded or logged? Env vars only? |
| **Error handling** | Failures handled or swallowed with empty `except`? |
| **Edge cases** | Empty input, huge input, unicode, concurrency? |
| **Tests** | Do tests exist and do they *actually* assert behavior? |
| **Performance** | Obvious complexity blowups? Unbounded loops? |
| **Architecture** | Does this fit the codebase, or fight it? |

## Practical discipline

1. **Read every diff** before accepting — no exceptions, especially for
   multi-file changes.
2. **Run the tests yourself.** "The agent said tests pass" is not evidence.
3. **Small tasks.** Agents degrade on vague, huge prompts. Decompose.
4. **Commit in steps.** Reviewable checkpoints, easy revert.
5. **Understand before you build on top.** If you can't explain a function,
   ask the agent to explain it — then verify the explanation.
6. **Use AI to learn, not to skip.** Ask "why this approach?" not just "do X".

## What a student should still learn manually

Programming fundamentals, data structures & algorithms, Git, Linux/terminal
basics, networking, databases and SQL, APIs (REST), testing, debugging,
software architecture, security basics. AI makes learning these *faster*
(instant explanations, infinite patient examples) — it does not remove the
need to learn them.

> Installing 100 coding agents is pointless. The goal is to understand the
> ecosystem and choose a small, powerful stack. Learn many → evaluate →
> choose few → master them.
