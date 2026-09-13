# Model Providers

Where model access comes from. BYOK tools use these APIs directly.

| Provider | API | BYOK | Local | Notes |
| --- | --- | --- | --- | --- |
| anthropic | Anthropic API (Messages API) + native subscription auth | Yes | No | Vendor of Claude models. Enables sign-in with Claude Pro/Max subscriptions in several agen |
| openai | OpenAI API / Responses API | Yes | No | Vendor of GPT/Codex model families and the Codex agent product. |
| google | Gemini API; Vertex AI for enterprise | Yes | No | Gemini model family, Gemini CLI, Jules, Firebase Studio/IDX. |
| openrouter | OpenAI-compatible gateway over many providers | Yes | No | Single-key gateway to hundreds of hosted models; popular for BYOK. |
| ollama | OpenAI-compatible local API (:11434) | Yes | Yes | Popular local runner for Llama/Qwen/Mistral open-weight families. |
| lm-studio | OpenAI-compatible local API | Yes | Yes | Local model host with a user interface; OpenAI-compatible endpoint. |
| azure-openai | Azure OpenAI API | Yes | No | Enterprise deployment of OpenAI models on Azure. |
| amazon-bedrock | Bedrock API (Claude, Llama, Mistral, Nova, etc.) | Yes | No | Managed model gateway inside AWS; supported by Cline, Kilo Code, others. |
| vertex-ai | Vertex AI (Gemini, open models) | Yes | No | GCP managed model gateway. |
| together | OpenAI-compatible hosted inference | Yes | No | Hosted open-weight model inference. |
| groq | OpenAI-compatible fast inference | Yes | No | Very fast hosted inference; marketed for low-latency agents. |
| meta | Yes | Yes | No | Llama family. Weights downloadable; license (Llama Community) is open-weight, not OSI-open |
| alibaba | Yes | Yes | No | Qwen family; open-weight releases widely used for local agents. |
| deepseek | Yes | Yes | No | DeepSeek-V3/R1 line; open-weight releases + hosted API. |
| moonshot-ai | Yes | Yes | No | Kimi family (long-context models). |
| zhipu-ai | Yes | Yes | No | GLM family; open-weight releases used for local coding agents. |
| xai | Yes | Yes | No | Grok family; API access via x.ai console. |

*Generated from `data/tools.yaml` on a `2026-09` verification pass — edit the registry, then re-run `scripts/generate-index.py`.*
