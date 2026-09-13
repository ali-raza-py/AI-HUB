# Changelog

All notable changes to this knowledge base. Only record updates actually
performed — never pre-write planned entries.

## 2026-09

- Initial build of the repository architecture: registry (`data/*.yaml`),
  validation, page generation, index generation, link checking.
- Registered **80 tools** across 6 categories (VS Code/IDE agents, terminal
  agents, open-source/BYOK, autonomous agents, AI app builders, documentation
  tools), including explicit archived/discontinued entries.
- Added model families (10) and model providers (17) registries.
- Generated 80 tool pages, 9 comparison pages, category indexes, and the
  master comparison matrix from the registry.
- Verified GitHub repositories for open-source entries; corrected
  open-source licensing labels (Amazon Kiro, GitLab Duo are proprietary
  products).
- Added prompt-required documentation tools: Document360, pdoc, Doxygen,
  DocFX, plus Swimm, Fern, Redoc, TypeDoc, JSDoc, Sphinx coverage.
- Wrote core guides: beginner concepts, concepts/definitions, autonomy scale,
  MCP, security, privacy, hardware, student workflow, prompt templates,
  quality control, pricing analysis, decision tree, tool overlap, and the
  Ali-specific stack.
- All values not verifiable against official sources are marked `Unknown`
  with a September 2026 verification date.

## 2026-09 — AI Hub pass (second pass)

- Rebranded the project as **AI Hub** (README, docs, license header) and
  rewrote the root README with working links into `ai-coding-tools/` (previous
  root links were broken because content lives in the subfolder).
- Registry grown **80 → 102 tools** with a verified additions batch: Ollama,
  llama.cpp, LM Studio, GPT4All, Jan (local runtimes); Qwen Code, Cursor CLI,
  ShellGPT, LLM (terminal); AutoGPT, Devika, MetaGPT, gpt-engineer (open
  agents); CodeRabbit, Greptile (code-review bots); Theia IDE, CodeGeeX
  (IDE/autocomplete); MkDocs, Starlight, VitePress (docs generators); Onlook,
  bolt.diy (app/UI builders). Official sources checked per tool.
- Added platform availability fields (`vscode`, `jetbrains`, `zed`, `cli`,
  `terminal`, `web`, `desktop`) across the registry — the comparison matrix's
  VS Code/CLI columns previously rendered `Unknown` for every tool.
- Detailed (full) tool pages expanded **22 → 40**; all 102 pages regenerated
  with the single consistent template, including a 🟢🟡🔴 hardware-compatibility
  verdict per tool and an explicit "derived, not personally benchmarked" note.
- Corrected against live official sources: **OpenCode** marked active again
  (current repo `anomalyco/opencode`; old archive note conflated the sst repo
  history), **Roo Code** shutdown (2026-05-15) and **gpt-engineer** archive
  (2026-04-22) confirmed; **Continue** note updated (repo read-only, final
  2.0.0 release); fixed Gemini CLI `best_for` copy-paste error (it referenced
  AWS Bedrock).
- Backfilled ~25 `official_docs`/`official_website` URLs (Cline, Aider, Cursor,
  Claude Code → code.claude.com, Gemini CLI, Zed, Junie, Tabnine, Qodo, docs
  generators, code-review bots, local runtimes, etc.).
- New subcategories: `open-agent`, `code-review-bot`, `local-ai-runtime`,
  `terminal-assistant`.
- New script `check-external-links.py` (best-effort HEAD/GET check, report-only).
- Added GitHub Actions CI (`.github/workflows/validate.yml`): data validation,
  duplicate/required-field checks, regeneration parity, internal link check,
  Markdown lint; weekly external-link report.
- Added `.markdownlint-cli2.jsonc`, `.gitignore`; rewrote
  `comparisons/best-stack-for-ali.md` as the **My Setup** hardware-compatibility
  guide (🟢🟡🔴 + honesty note); extended quality-control and contributing docs
  with the transparency statement (AI-assisted research, human verification).
- Fixed generator bugs: stray `>` blockquote marker inside the pricing note on
  every page; hand-written flag comment moved to an HTML comment (was breaking
  Markdown block semantics); unknown status now renders a proper line.
- Validator: removed the noisy "active tool without a full page" warning
  (concise pages are intended); added platform-field enum validation.
