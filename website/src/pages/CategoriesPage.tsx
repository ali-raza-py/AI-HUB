import { Link } from 'react-router-dom'
import type { Tool, Category } from '../lib/types'

interface CategoriesPageProps {
  tools: Tool[]
  categories: Category[]
}

export default function CategoriesPage({ tools, categories }: CategoriesPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Categories</h1>
        <p className="mt-2 text-zinc-400">Explore tools by category</p>
      </div>

      <div className="space-y-12">
        {categories.map(cat => {
          const catTools = tools.filter(t => t.category === cat.id)
          return (
            <section key={cat.id} id={cat.id} className="scroll-mt-20">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-white">{cat.title}</h2>
                  {cat.description && <p className="mt-1 text-sm text-zinc-400">{cat.description}</p>}
                </div>
                <span className="text-sm text-zinc-500">{catTools.length} tools</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {catTools.slice(0, 6).map(tool => (
                  <Link
                    key={tool.id}
                    to={`/tools/${tool.id}`}
                    className="group p-4 bg-neutral-900/50 border border-white/5 rounded-lg hover:border-indigo-500/30 transition-all duration-200"
                  >
                    <div className="font-medium text-white group-hover:text-indigo-300 transition-colors">
                      {tool.name}
                    </div>
                    <p className="mt-1 text-sm text-zinc-400 line-clamp-1">{tool.description}</p>
                  </Link>
                ))}
              </div>
              {catTools.length > 6 && (
                <Link
                  to={`/tools?category=${cat.id}`}
                  className="inline-block mt-3 text-sm text-indigo-400 hover:text-indigo-300"
                >
                  View all {catTools.length} tools →
                </Link>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}
