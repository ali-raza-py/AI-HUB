import { Link } from 'react-router-dom'
import type { Tool, Category } from '../lib/types'

interface HomePageProps {
  tools: Tool[]
  categories: Category[]
}

export default function HomePage({ tools, categories }: HomePageProps) {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-neutral-950 to-neutral-950 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">AI HUB</h1>
            <p className="mt-6 text-xl sm:text-2xl text-zinc-300 font-medium">AI Developer Tools, Organized.</p>
            <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              AI Hub is a structured knowledge base for discovering, understanding, and comparing modern AI developer tools. Browse {tools.length} tools across {categories.length} categories.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/tools" className="inline-flex items-center justify-center px-6 py-3 border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium rounded-md hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all duration-200">Explore Tools</Link>
              <Link to="/compare" className="inline-flex items-center justify-center px-6 py-3 border border-zinc-700 bg-zinc-800/50 text-zinc-300 text-sm font-medium rounded-md hover:bg-zinc-700/50 transition-all duration-200">Compare Tools</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
