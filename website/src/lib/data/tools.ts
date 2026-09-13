import type { Tool } from '../types'

export async function loadTools(): Promise<Tool[]> {
  const res = await import('./tools.json')
  return res.default as Tool[]
}

export async function loadToolById(id: string): Promise<Tool | null> {
  try {
    const res = await import(`./by-id/${id}.json`)
    return res.default as Tool
  } catch {
    return null
  }
}

export function searchTools(tools: Tool[], query: string): Tool[] {
  const q = query.toLowerCase().trim()
  if (!q) return tools
  return tools.filter(tool => {
    const searchable = [
      tool.name,
      tool.description,
      tool.category,
      tool.best_for || '',
      tool.strengths || '',
      tool.weaknesses || '',
      ...(tool.tags || []),
      ...(tool.capabilities || []),
    ].join(' ').toLowerCase()
    return searchable.includes(q)
  })
}

export function filterTools(
  tools: Tool[],
  filters: {
    category?: string
    subcategory?: string
    openSource?: boolean
    byok?: boolean
    localAI?: boolean
    vscode?: boolean
    cli?: boolean
    mcp?: boolean
    free?: boolean
    freeTier?: boolean
    autonomy?: 'all' | 'manual' | 'assisted' | 'partially-autonomous' | 'autonomous'
    platform?: string[]
    status?: string[]
    search?: string
  }
): Tool[] {
  return tools.filter(tool => {
    if (filters.category && tool.category !== filters.category) return false
    if (filters.subcategory && tool.subcategory !== filters.subcategory) return false
    if (filters.openSource !== undefined && tool.open_source !== filters.openSource) return false
    if (filters.byok !== undefined && tool.byok !== filters.byok) return false
    if (filters.localAI !== undefined && tool.local_models !== filters.localAI) return false
    if (filters.vscode !== undefined && tool.vscode !== filters.vscode) return false
    if (filters.cli !== undefined && tool.cli !== filters.cli) return false
    if (filters.mcp !== undefined && tool.mcp !== filters.mcp) return false
    if (filters.free !== undefined && tool.free !== filters.free) return false
    if (filters.freeTier !== undefined && tool.free_tier !== filters.freeTier) return false
    if (filters.autonomy && filters.autonomy !== 'all') {
      const level = tool.autonomy_level ?? 0
      if (filters.autonomy === 'manual' && level > 1) return false
      if (filters.autonomy === 'assisted' && (level < 2 || level > 2)) return false
      if (filters.autonomy === 'partially-autonomous' && (level < 3 || level > 4)) return false
      if (filters.autonomy === 'autonomous' && level < 5) return false
    }
    if (filters.platform && filters.platform.length > 0) {
      const hasPlatform = (() => {
        if (tool.vscode && filters.platform.includes('vscode')) return true
        if (tool.cli && filters.platform.includes('cli')) return true
        if (tool.desktop && filters.platform.includes('desktop')) return true
        if (tool.web && filters.platform.includes('web')) return true
        if (tool.api && filters.platform.includes('api')) return true
        return false
      })()
      if (!hasPlatform) return false
    }
    if (filters.status && filters.status.length > 0 && !filters.status.includes(tool.status)) return false
    return true
  })
}

export function getCategoryCounts(tools: Tool[]): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const tool of tools) {
    counts[tool.category] = (counts[tool.category] || 0) + 1
  }
  return counts
}

export function getToolsByCategory(tools: Tool[], category: string): Tool[] {
  return tools.filter(t => t.category === category)
}
