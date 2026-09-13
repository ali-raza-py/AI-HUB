# MCP — Model Context Protocol

> Last verified: September 2026. MCP is an **open standard** originally
> introduced by Anthropic in late 2024 and since adopted widely (OpenAI,
> Google and many tools support it). Verify current details at
> [modelcontextprotocol.io](https://modelcontextprotocol.io/).

## What MCP is

A protocol that lets an AI agent discover and call **external tools** through
a standardized interface. Instead of every tool hand-writing integrations for
every capability, developers run **MCP servers** that expose capabilities, and
any MCP-capable agent can use them.

## Why coding agents use it

An agent's built-in abilities are limited: read/write files, run shell
commands, search code. Real work needs more — query a database, drive a
browser, read Linear tickets, fetch API docs. MCP provides that, uniformly.

## Core pieces

- **MCP host/client** — the agent (Cline, Claude Code, Kilo Code, Continue…)
- **MCP server** — a process exposing tools/resources (e.g. a Postgres
  server, a Playwright browser server, a GitHub server)
- **Tools** — callable functions the model can invoke
  (`run_query(sql)`, `click(selector)`)
- **Resources** — data the agent can read (files, schemas, documents)

## Common use cases

- Query a real database during development instead of pasting schemas
- Browser automation for testing web UIs (Playwright MCP)
- GitHub integration: issues, PRs, reviews
- Reading internal API documentation or design docs
- Connecting to Supabase/Firebase projects directly

## How MCP differs from plugins

| | Plugin/extension | MCP server |
| --- | --- | --- |
| Scope | Tied to one product | Any MCP-capable client |
| Interface | Vendor-specific API | Open standard |
| Packaging | Editor marketplace | Any process (stdio, HTTP) |
| Trust model | Marketplace review | You vet each server yourself |

## Security — read this before adding any server

- An MCP server is **arbitrary code your agent can invoke**. A malicious or
  compromised server can exfiltrate files, inject prompts, or run commands.
- Add servers deliberately, one at a time, from sources you trust; prefer
  well-known open-source servers you can read.
- Scope credentials: a read-only DB user, a limited-scope GitHub token —
  never your admin credentials.
- Watch for **tool poisoning / prompt injection** via tool descriptions from
  untrusted servers. Review what tools a server exposes before enabling it.
- Revisit enabled servers periodically; remove what you don't use.

See [ai-coding-security.md](security/ai-coding-security.md) for the full
threat model.

## Why developers should care

MCP turns agents from "text generators with a file editor" into systems that
can see your real environment. For a student, one practical MCP server (e.g.
Supabase or Playwright) teaches more about agentic architecture than ten
plugins — and MCP skills transfer across every MCP-capable tool.
