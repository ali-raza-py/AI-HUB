export interface Tool {
  id: string
  name: string
  category: string
  description: string
  status: string
  official_website?: string
  official_docs?: string
  github?: string
  open_source?: boolean
  license?: string
  byok?: boolean
  local_models?: boolean
  mcp?: boolean
  terminal_execution?: boolean
  file_editing?: boolean
  repository_context?: boolean
  git_support?: boolean
  testing?: boolean
  autonomy_level?: number
  free?: boolean
  free_tier?: boolean
  pricing_summary?: string
  best_for?: string
  strengths?: string
  weaknesses?: string
  student_friendliness?: string
  hardware_requirements?: string
  cpu_only?: boolean
  alternatives?: string[]
  full_page?: boolean
  last_verified?: string
  vscode?: boolean
  cli?: boolean
  desktop?: boolean
  web?: boolean
  api?: boolean
  company?: string
  official_status_notes?: string
  tags?: string[]
  capabilities?: string[]
  platforms?: string[]
  pricing?: string
  subcategory?: string
  keywords?: string[]
}

export interface Category {
  id: string
  title?: string
  name?: string
  description: string
  icon?: string
  color?: string
  slug?: string
  tags?: string[]
  order?: number
}

export interface GuideIndex {
  slug: string
  title: string
}

export interface ComparisonIndex {
  slug: string
  title: string
}
