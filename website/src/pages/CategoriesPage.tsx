import { Link } from 'react-router-dom'
import { ArrowRight, Boxes, ChevronRight } from 'lucide-react'
import type { Tool, Category } from '../lib/types'

interface CategoriesPageProps {
  tools: Tool[]
  categories: Category[]
}

export default function CategoriesPage({ tools, categories }: CategoriesPageProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="page-grid pointer-events-none absolute inset-x-0 top-0 h-80" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="reveal mb-12 flex flex-col justify-between gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
        <div><div className="eyebrow flex items-center gap-2"><Boxes size={13} /> Organize your search</div><h1 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">Explore by<br /><span className="text-[#8fe5e5]">category.</span></h1><p className="mt-4 max-w-xl text-base leading-7 text-[#8da6b2]">Start with the kind of work you want to do, then narrow down to the tools that fit.</p></div>
        <Link to="/tools" className="inline-flex items-center gap-2 text-sm font-semibold text-[#8fe5e5] hover:text-white">See all {tools.length} tools <ArrowRight size={15} /></Link>
      </div>

      <div className="space-y-7">
        {categories.map((cat, index) => {
          const catTools = tools.filter(t => t.category === cat.id)
          return (
            <section key={cat.id} id={cat.id} className="surface-panel scroll-mt-24 rounded-2xl p-5 sm:p-6 reveal" style={{ animationDelay: `${index * 70}ms` }}>
              <div className="flex flex-col justify-between gap-4 border-b border-white/8 pb-5 sm:flex-row sm:items-start">
                <div>
                  <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#7edce3]/10 font-mono text-sm text-[#8fe5e5]">0{index + 1}</span><h2 className="font-display text-xl font-semibold text-white">{cat.title || cat.name}</h2></div>
                  {cat.description && <p className="mt-3 max-w-2xl text-sm leading-6 text-[#829ba6]">{cat.description}</p>}
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#6f8b96]">{catTools.length} tools</span>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {catTools.slice(0, 6).map(tool => (
                  <Link
                    key={tool.id}
                    to={`/tools/${tool.id}`}
                    className="resource-card interactive group rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between gap-3 font-semibold text-white group-hover:text-[#9becef]">
                      {tool.name}
                      <ChevronRight size={15} className="text-[#607c87] transition group-hover:translate-x-1 group-hover:text-[#8fe5e5]" />
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm leading-5 text-[#839ca7]">{tool.description}</p>
                  </Link>
                ))}
              </div>
              {catTools.length > 6 && (
                <Link
                  to={`/tools?category=${cat.id}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#8fe5e5] hover:text-white"
                >
                  View all {catTools.length} tools <ArrowRight size={14} />
                </Link>
              )}
            </section>
          )
        })}
      </div>
      </div>
    </div>
  )
}
