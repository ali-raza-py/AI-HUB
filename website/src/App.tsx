import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ToolsPage from './pages/ToolsPage'
import ToolDetailPage from './pages/ToolDetailPage'
import CategoriesPage from './pages/CategoriesPage'
import ComparePage from './pages/ComparePage'
import GuidesPage from './pages/GuidesPage'
import GuideDetailPage from './pages/GuideDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import type { Tool, Category } from './lib/types'

// Static imports for reliable bundling
import toolsData from './lib/data/tools.json'
import categoriesData from './lib/data/categories.json'

const tools = toolsData as unknown as Tool[]
const categories = categoriesData as unknown as Category[]

export default function App() {
  const [ready] = useState(true)

  if (!ready) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b0d12' }}>
        <div style={{ color: '#a6afc2', fontSize: '14px' }}>Loading AI Hub…</div>
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage tools={tools} categories={categories} />} />
        <Route path="tools" element={<ToolsPage tools={tools} categories={categories} />} />
        <Route path="tools/:toolId" element={<ToolDetailPage tools={tools} />} />
        <Route path="categories" element={<CategoriesPage tools={tools} categories={categories} />} />
        <Route path="compare" element={<ComparePage tools={tools} categories={categories} />} />
        <Route path="guides" element={<GuidesPage />} />
        <Route path="guides/:guideSlug" element={<GuideDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
