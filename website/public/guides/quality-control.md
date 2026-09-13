# Quality Control

How accuracy and consistency are maintained in AI Hub, and what was checked in
the September 2026 pass.

## Transparency: how content is produced

This knowledge base is produced with **AI-assisted research**: drafting,
cross-source aggregation, and consistency checking are AI-accelerated. Every
important fact (features, pricing, status, capabilities) is then **reviewed and
verified against official sources** — vendor sites, official docs, canonical
GitHub repositories — before it enters the registry. Values that cannot be
verified are stored as `Unknown`, never guessed. Nothing is presented as
personally tested unless it explicitly was, and no benchmarks or statistics are
invented.

## Automated checks (must pass before every commit; also enforced by CI)

```powershell
python scripts/validate-data.py         # registry consistency — RESULT: VALID
python scripts/generate-tool-pages.py   # regenerate 102 tool pages
python scripts/generate-index.py        # regenerate indexes + comparisons
python scripts/check-links.py           # 0 broken internal links
python scripts/check-external-links.py  # best-effort live URL check (report-only)
npx markdownlint-cli2 "**/*.md"         # markdown style (CI also runs this)
```

The validator enforces:

- unique tool ids and slugs, known category/subcategory pairs
- allowed `status` values (`unknown` allowed but warned)
- `alternatives` referencing only registered tool ids (catches stale names)
- enum validity (`open_source`, `student_friendliness`, `autonomy_level`)
- platform fields (`vscode`, `cli`, `terminal`, `web`, `desktop`, …) must be
  `true`, `false`, or `"unknown"`
- URL shape for official links (unverified links must be `Unknown`, not junk)
- required fields on model and provider registries
- `open_source: true` requires a recorded GitHub repository

CI (`.github/workflows/validate.yml`) additionally fails when generated files
are out of sync with the registry, and lints all Markdown.

## Manual checks performed (September 2026 pass)

- Live verification of surprising statuses against official sources:
  **OpenCode** is under active development again (the old sst/opencode archive
  note had wrongly marked the product archived — corrected, with the current
  repository), while **Roo Code's** May 15, 2026 shutdown and **gpt-engineer's**
  April 2026 archive were confirmed and are correctly marked.
- Fixed a copy-paste data error: Gemini CLI's `best_for` referenced AWS Bedrock.
- Duplicate detection (102 unique entries; cross-category duplicates like
  Cline/Kilo Code are stored once and referenced, not duplicated).
- Category sanity, including the new subcategories (open agents, code-review
  bots, local-AI runtimes, terminal assistants).
- Outdated names kept with explicit status: CodeWhisperer → Amazon Q Developer;
  OpenDevin → OpenHands; watsonx Code Assistant → IBM Bob.
- Open-source labels corrected: Amazon Kiro and GitLab Duo are proprietary
  products despite vendor open-source associations.
- BYOK labels checked against each tool's documented key configuration.
- MCP claims kept only where officially documented.
- Autonomy levels assigned from capabilities (see
  [autonomy-scale.md](autonomy-scale.md)), not marketing.
- No fabricated benchmarks anywhere; comparisons stay qualitative unless a
  cited benchmark exists.
- Unverifiable values marked `Unknown` with `last_verified: 2026-09`.

## Ongoing policy

- Re-verify pricing and free-tier limits against official pages before any
  release; pricing drifts fastest.
- Keep discontinued/archived entries — with status — rather than deleting.
- Any new entry needs: official website, status, license, and at least one
  source; everything else may be `Unknown`.
- Compatibility verdicts (🟢🟡🔴) are derived from documented requirements and
  hardware reasoning — they are not personal benchmarks.
