#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { execSync } from "node:child_process"
import path from "node:path"

const ROOT = process.env.REPO_ROOT || "C:/Users/HP/AI-HUB"
const OUT = process.env.OUT || "C:/Users/HP/AI-HUB/website/src/lib/data"

// Use Python to parse YAML (reliable)
function loadYaml(p) {
  const result = execSync(
    `python -c "import yaml,json,sys; print(json.dumps(yaml.safe_load(open(sys.argv[1]))))" "${p}"`,
    { encoding: "utf-8", maxBuffer: 50 * 1024 * 1024 }
  )
  return JSON.parse(result)
}

const toolsData = loadYaml(`${ROOT}/ai-coding-tools/data/tools.yaml`)
const catsData = loadYaml(`${ROOT}/ai-coding-tools/data/categories.yaml`)

mkdirSync(OUT, { recursive: true })

const tools = toolsData.tools || []
const categories = catsData.categories || []

writeFileSync(`${OUT}/tools.json`, JSON.stringify(tools, null, 2))
writeFileSync(`${OUT}/categories.json`, JSON.stringify(categories, null, 2))
writeFileSync(`${OUT}/index.json`, JSON.stringify({ tools, categories }, null, 2))

// Build per-tool files
const byIdDir = `${OUT}/by-id`
mkdirSync(byIdDir, { recursive: true })
for (const tool of tools) {
  if (tool.id) {
    writeFileSync(`${byIdDir}/${tool.id}.json`, JSON.stringify(tool, null, 2))
  }
}

// Build search index
const searchIndex = tools.map(t => ({
  id: t.id,
  name: (t.name || t.id || "").toLowerCase(),
  description: (t.description || "").toLowerCase(),
  category: (t.category || "").toLowerCase(),
  capabilities: ((t.capabilities || []).join(" ") + " " + ((t.tags || []).join(" "))).toLowerCase(),
  bestFor: (t.best_for || t.bestFor || "").toLowerCase(),
  platforms: ((t.platforms || []).join(" ")).toLowerCase(),
  keywords: ((t.keywords || []).join(" ")).toLowerCase(),
}))
writeFileSync(`${OUT}/search-index.json`, JSON.stringify(searchIndex, null, 2))

// Build guides index
function scanDir(dir, base) {
  const out = []
  let entries
  try {
    entries = require("node:fs").readdirSync(dir, { withFileTypes: true })
  } catch (e) {
    return out
  }
  for (const entry of entries) {
    const rel = base ? `${base}/${entry.name}` : entry.name
    if (entry.isDirectory()) {
      out.push(...scanDir(`${dir}/${entry.name}`, rel))
    } else if (entry.name.endsWith(".md") && entry.name !== "index.md") {
      out.push({
        slug: rel.replace(/\.md$/, ""),
        title: entry.name.replace(/\.md$/, "").replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
      })
    }
  }
  return out
}

const docsDir = `${ROOT}/ai-coding-tools/docs`
const compsDir = `${ROOT}/ai-coding-tools/comparisons`
writeFileSync(`${OUT}/guides-index.json`, JSON.stringify(scanDir(docsDir, ""), null, 2))
writeFileSync(`${OUT}/comparisons-index.json`, JSON.stringify(scanDir(compsDir, ""), null, 2))

// Build category counts
const counts = {}
for (const t of tools) {
  const cat = t.category || "unknown"
  counts[cat] = (counts[cat] || 0) + 1
}
writeFileSync(`${OUT}/category-counts.json`, JSON.stringify(counts, null, 2))

console.log(`Built ${tools.length} tools and ${categories.length} categories`)
