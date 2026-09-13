import { Link } from 'react-router-dom'
import { ArrowUpRight, BookOpen } from 'lucide-react'
import guidesData from '../lib/data/guides-index.json'

interface Guide {
  slug: string
  title: string
}

export default function GuidesPage() {
  const guides = guidesData as Guide[]

  return (
    <div className="relative overflow-hidden"><div className="page-grid pointer-events-none absolute inset-x-0 top-0 h-80" /><div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="reveal mb-12 border-b border-white/10 pb-8"><div className="eyebrow flex items-center gap-2"><BookOpen size={13} /> Field notes</div><h1 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">Learn the<br /><span className="text-[#f5c542]">landscape.</span></h1><p className="mt-4 max-w-xl text-base leading-7 text-[#a6a99f]">Short, practical guides for understanding the ecosystem and making better tooling decisions.</p>
      </div>

      {guides.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-zinc-400">Loading guides...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {guides.map((guide, index) => (
            <Link
              key={guide.slug}
              to={`/guides/${guide.slug}`}
              className="resource-card interactive group reveal rounded-2xl p-5"
              style={{ animationDelay: `${index * 55}ms` }}
            >
              <div className="flex items-start justify-between gap-4"><span className="grid h-10 w-10 place-items-center rounded-none bg-[#f5c542]/10 font-mono text-sm text-[#f5c542]">{String(index + 1).padStart(2, '0')}</span><ArrowUpRight size={17} className="text-[#777b72] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f5c542]" /></div>
              <h3 className="mt-6 text-base font-semibold text-white group-hover:text-[#f5c542]">{guide.title}</h3>
              <p className="mt-2 text-xs font-mono uppercase tracking-wider text-[#6f8b96]">{guide.slug.replace(/\//g, ' / ')}</p>
            </Link>
          ))}
        </div>
      )}
    </div></div>
  )
}
