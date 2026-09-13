# Contributing

Thanks for helping keep AI Hub accurate. AI tooling changes weekly, so
corrections are the most valuable contributions.

## Ground rules

1. **The registry is the source of truth.** Edit `data/tools.yaml` (or
   `models.yaml` / `providers.yaml` / `categories.yaml`) — never generated
   pages (`tools/*.md`, `docs/*/index.md`, `comparisons/best-*.md`,
   `docs/tool-index.md`).
2. **Cite official sources.** Every factual claim (pricing, models, features,
   status) should be verifiable on the vendor's site/docs/GitHub. Third-party
   blogs are not pricing evidence.
3. **Never guess.** If a value can't be verified, use `Unknown` and note it.
   Wrong information is worse than missing information.
4. **No fabricated benchmarks.** No "X is 35% faster" without a credible,
   current, cited benchmark. Qualitative wording (Strong/Good/Moderate/Limited)
   is fine.
5. **No over-ranking.** Say "best for X", never "the #1 best agent".
6. **Archive, don't delete.** Discontinued tools stay in the registry with
   `status: archived|discontinued|renamed|acquired` and a note.
7. **Update `last_verified`** on any entry you actually verified.
8. **Platform fields** (`vscode`, `cli`, `terminal`, `web`, `desktop`, `zed`,
   `jetbrains`) must be `true`, `false`, or `"unknown"` — set them only when
   the official source supports the value.

## Workflow

```powershell
# 1. edit data/tools.yaml
# 2. validate
python scripts/validate-data.py        # must report: RESULT: VALID
# 3. regenerate outputs
python scripts/generate-tool-pages.py
python scripts/generate-index.py
# 4. verify links
python scripts/check-links.py          # must report 0 broken links
python scripts/check-external-links.py # optional: live check, report-only
# 5. add a CHANGELOG.md entry (only for changes you actually made)
```

CI runs steps 2–4 plus Markdown lint on every push/PR, and fails if generated
files are out of sync with the registry.

## Transparency

Content in this repository is produced with AI-assisted research, but every
important fact is reviewed and verified against official sources before it is
committed to the registry. Keep it that way: never import a claim you have not
checked against a primary source, and never present derived compatibility
verdicts (🟢🟡🔴) as personal test results.

## Style

Professional developer documentation: clear headings, tables, short
paragraphs, code blocks, warnings where needed. No marketing language, no
excessive emojis (the 🟢🟡🔴 compatibility verdicts are the deliberate
exception), no exaggerated claims. Be honest about weaknesses.
