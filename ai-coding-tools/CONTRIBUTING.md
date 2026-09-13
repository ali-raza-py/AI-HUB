# Contributing

Thanks for helping keep this reference accurate. AI tooling changes weekly, so
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
# 5. add a CHANGELOG.md entry (only for changes you actually made)
```

## Style

Professional developer documentation: clear headings, tables, short
paragraphs, code blocks, warnings where needed. No marketing language, no
unnecessary emojis, no exaggerated claims. Be honest about weaknesses.
