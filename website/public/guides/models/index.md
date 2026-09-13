# Model Families

Model families referenced across this repository. Capabilities change with every release — verify on official provider pages.

| Family | Provider | Local | Providers | Notes |
| --- | --- | --- | --- | --- |
| claude-family | Anthropic | No | anthropic, amazon-bedrock, vertex-ai | Widely used in coding agents (Claude Code, Cline, Kilo Code, Aider, Crush). Sonnet/Opus va |
| gpt-family | OpenAI | No | openai, azure-openai | Used by GitHub Copilot, codex CLI, Cursor, OpenCode, etc. |
| codex-family | OpenAI | No | openai | Model family purpose-built for coding in the Codex CLI and cloud Codex agent. Not to be co |
| gemini-family | Google | No | google, vertex-ai | Backs Gemini CLI, Jules, Firebase Studio, Trae, and many BYOK tools. |
| llama-family | Meta | Yes | ollama, lm-studio, together, groq, amazon-bedrock, openrouter | Open-weight family commonly run locally at 7B–70B sizes. |
| qwen-family | Alibaba (Qwen) | Yes | ollama, lm-studio, together, openrouter | Qwen2.5-Coder used by Refact for completions; popular for local coding. |
| deepseek-family | DeepSeek | Yes | ollama, openrouter, deepseek-api | Low-cost hosted + open weights; frequently used BYOK in Aider/Plandex/Cline. |
| kimi-family | Moonshot AI | Yes | ollama, openrouter, moonshot-api | Kimi K3 line is targeted by Open Interpreter (Rust) and Crush. |
| glm-family | Zhipu (Z.ai) | Yes | ollama, openrouter, zai-api | GLM coding agents targeted by Open Interpreter (Rust). |
| grok-family | xAI | No | xai-api, openrouter | Available in Cursor, Bolt, and many BYOK tools. |

*Generated from `data/tools.yaml` on a `2026-09` verification pass — edit the registry, then re-run `scripts/generate-index.py`.*
