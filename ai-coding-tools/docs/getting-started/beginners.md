# Beginner Guide — AI Coding Concepts in Plain English

Ten concepts, each with a one-line definition and a simple example.

## 1. AI autocomplete
Your editor predicts the next lines as you type. *Example: you type
`def fibonacci(` and the editor ghosts in the whole function — Tab accepts it.*

## 2. AI chat
You ask questions in a side panel; it answers, but doesn't touch your files.
*Example: "What does this regex do?" — paste, ask, read the answer.*

## 3. AI coding assistant
Umbrella term for autocomplete + chat + inline edits inside your editor
(GitHub Copilot, Codeium, Tabnine, Twinny).

## 4. AI coding agent
You give a goal; it makes a **plan and acts**: reads your repo, edits multiple
files, runs commands. *Example: "add rate limiting to the login endpoint" — it
finds the endpoint, edits code, runs the tests.*

## 5. Autonomous agent
An agent that works with minimal supervision, often in the cloud or
background, on longer tasks. *Example: you open a GitHub issue; Devin/Jules/
Codex produce a branch with a PR for review.*

## 6. Coding model
The LLM doing the code reasoning (Claude, GPT, Gemini, Qwen, DeepSeek…). The
same agent can behave very differently depending on the model plugged in.

## 7. BYOK (bring your own key)
The tool is free/open and uses **your** API key — you pay the model provider
directly per token. *Example: Cline + an OpenRouter key. The tool costs $0;
token usage is your real cost.*

## 8. MCP (Model Context Protocol)
An open standard that lets an agent connect to external tools — databases,
browsers, issue trackers — through "MCP servers". Like USB for AI tools.
See the [MCP guide](../mcp-guide.md).

## 9. RAG (retrieval-augmented generation)
Instead of stuffing everything into the prompt, the tool **retrieves**
relevant chunks (via embeddings/search) first, then generates with that
context. *Example: a docs chatbot that searches your manual and answers with
cited excerpts.*

## 10. Repository context
The agent's awareness of your whole project — structure, conventions, related
files — not just the open file. This is what separates a good agent from
fancy autocomplete: it changes `utils.py` *and* every caller.

## The one rule that outranks all ten

> Never blindly accept AI code. Read every diff, run the tests, understand
> what changed and why. AI should accelerate your engineering, not replace
> your understanding. See [AI coding rules](../guides/ai-coding-rules.md).
