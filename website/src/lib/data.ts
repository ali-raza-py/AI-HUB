import type { Tool, Category } from './types'
import toolsData from './data/tools.json'
import categoriesData from './data/categories.json'

export const tools = toolsData as unknown as Tool[]
export const categories = categoriesData as unknown as Category[]

export type { Tool, Category }

