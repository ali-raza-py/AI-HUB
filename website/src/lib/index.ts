import { tools, categories } from './data'
import type { Tool, Category } from './types'

export { tools, categories }
export type { Tool, Category }

export function getToolById(id: string): Tool | undefined {
  return tools.find(t => t.id === id)
}

export function getToolsByCategory(categoryId: string): Tool[] {
  return tools.filter(t => t.category === categoryId)
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id)
}

export async function getGuideIndex(): Promise<{ slug: string; title: string }[]> {
  const m = await import('./data/guides-index.json')
  return (m.default || m) as { slug: string; title: string }[]
}

export async function getComparisonIndex(): Promise<{ slug: string; title: string }[]> {
  const m = await import('./data/comparisons-index.json')
  return (m.default || m) as { slug: string; title: string }[]
}

