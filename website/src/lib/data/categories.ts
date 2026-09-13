import type { Category } from '../types'

export const categories: Category[] = [
  {
    id: 'vscode-ide-agents',
    name: 'VS Code / IDE Agents',
    description: 'AI agents that live inside your code editor and help you write, understand, refactor, and navigate code without leaving your workspace.',
    icon: 'Code2',
    color: '#6366f1',
    tags: ['VS Code', 'IDE', 'editor'],
    slug: 'vscode-ide-agents',
  },
  {
    id: 'terminal-agents',
    name: 'Terminal / CLI Agents',
    description: 'Command-line coding agents you can run from your terminal, scripts, and automation pipelines.',
    icon: 'Terminal',
    color: '#10b981',
    tags: ['CLI', 'terminal', 'command line'],
    slug: 'terminal-agents',
  },
  {
    id: 'autonomous-agents',
    name: 'Autonomous Agents',
    description: 'AI systems that can plan and execute multi-step tasks with heavier autonomy, often across files, tools, and environments.',
    icon: 'GitBranch',
    color: '#f59e0b',
    tags: ['autonomous', 'agentic', 'agent'],
    slug: 'autonomous-agents',
  },
  {
    id: 'app-builders',
    name: 'AI App Builders',
    description: 'Tools that help you generate, scaffold, and iterate on full applications using AI, from prototypes to production-grade apps.',
    icon: 'LayoutTemplate',
    color: '#ec4899',
    tags: ['app builder', 'scaffold', 'generate'],
    slug: 'app-builders',
  },
  {
    id: 'documentation-tools',
    name: 'Documentation Tools',
    description: 'AI tools that help you create, maintain, and improve documentation, READMEs, knowledge bases, and internal docs.',
    icon: 'FileText',
    color: '#8b5cf6',
    tags: ['docs', 'documentation', 'knowledge base'],
    slug: 'documentation-tools',
  },
  {
    id: 'open-source-byok',
    name: 'Open Source / BYOK / Local AI',
    description: 'Open-source, bring-your-own-key, and local-model-friendly tools that emphasize transparency, control, and cost awareness.',
    icon: 'Unlock',
    color: '#06b6d4',
    tags: ['open source', 'BYOK', 'local'],
    slug: 'open-source-byok',
  },
] as const

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id || c.slug === id)
}

export function getCategoryColor(id: string): string {
  return getCategoryById(id)?.color ?? '#6b7280'
}

export function getCategoryName(id: string): string {
  return getCategoryById(id)?.name ?? id
}
