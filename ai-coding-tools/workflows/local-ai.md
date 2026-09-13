# Local AI Workflow

See [best tools for local AI](../comparisons/best-for-local-ai.md) and the
[hardware guide](../docs/guides/hardware.md).

**Setup:** Ollama → pull a small coder model (3B on 8 GB RAM; 7B/8B if you
close everything else) → Continue (IDE) or Aider (terminal) pointed at
`http://localhost:11434`. **Use for:** offline chat, privacy practice,
understanding model behavior. **Don't use for:** heavy agentic coding on
CPU-only 8 GB — too slow. Hybrid is the answer: local for cheap tasks, cloud
for hard ones.
