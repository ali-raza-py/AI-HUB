# Quality Control

How consistency is maintained in this repository, and what was checked in the
September 2026 pass.

## Automated checks (must pass before every commit)

```powershell
python scripts/validate-data.py        # registry consistency — RESULT: VALID
python scripts/generate-tool-pages.py  # regenerate 80 tool pages
python scripts/generate-index.py       # regenerate indexes + comparisons
python scripts/check-links.py          # 0 broken internal links
```

The validator enforces:

- unique tool ids and slugs, known category/subcategory pairs
- allowed `status` values (`unknown` allowed but warned)
- `alternatives` referencing only registered tool ids (catches stale names)
- enum validity (`open_source`, `student_friendliness`, `autonomy_level`)
- URL shape for official links (unverified links must be `Unknown`, not junk)
- required fields on model and provider registries
- `open_source: true` requires a recorded GitHub repository

## Manual checks performed (September 2026)

- Duplicate tool detection (80 unique entries; cross-category duplicates like
  Cline/Kilo Code are stored once and referenced, not duplicated).
- Category sanity: every tool in the right category (e.g. Firebase Studio
  treated as browser IDE; Amazon Q CLI distinct from Amazon Q Developer).
- Outdated names: CodeWhisperer → Amazon Q Developer; OpenDevin → OpenHands;
  Azure-specific naming avoided where products were unified.
- Open-source labels corrected: **Amazon Kiro** and **GitLab Duo** are
  proprietary products despite their vendors' open-source associations.
- BYOK labels checked against each tool's documented key configuration.
- MCP claims kept only where officially documented.
- Autonomy levels assigned from capabilities (see
  [autonomy-scale.md](autonomy-scale.md)), not marketing.
- No fabricated benchmarks anywhere in the repository; comparisons are
  qualitative unless a cited benchmark exists.
- Unverifiable values marked `Unknown` with `last_verified: 2026-09`.

## Ongoing policy

- Re-verify pricing and free-tier limits against official pages before any
  release; pricing drifts fastest.
- Keep discontinued/archived entries — with status — rather than deleting.
- Any new entry needs: official website, status, license, and at least one
  source; everything else may be `Unknown`.
