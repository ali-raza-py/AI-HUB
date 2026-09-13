import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Boxes, ChevronRight, GitCompare, Search, Sparkles } from 'lucide-react'
import type { Tool, Category } from '../lib/types'

interface HomePageProps {
  tools: Tool[]
  categories: Category[]
}

export default function HomePage({ tools, categories }: HomePageProps) {
  const featured = tools.slice(0, 6)
  return (
    <div className="relative overflow-hidden">
      <div className="page-grid pointer-events-none absolute inset-0 h-[760px]" />
      <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full border border-[#76dce5]/10 [animation:pulse-ring_7s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute right-8 top-40 h-64 w-64 rounded-full border border-[#76dce5]/10 [animation:float-slow_8s_ease-in-out_infinite]" />
      <section className="reference-hero relative">
        <div className="reference-hero-grid relative h-[310px] overflow-hidden border-y border-white/10 sm:h-[380px]">
          <div className="reference-grid-glow" />
          <div className="absolute bottom-7 left-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.2em] text-[#8fa4ad] sm:left-8"><span className="h-px w-8 bg-[#7edce3]" />Scroll for more <span className="reference-arrow">↓</span></div>
          <div className="absolute right-5 top-6 font-mono text-[10px] uppercase tracking-[.18em] text-[#526b77] sm:right-8">AI-HUB / INDEX 2026</div>
          <div className="hero-scanline" />
        </div>
        <div className="reference-hero-copy relative px-4 py-16 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="eyebrow text-[#1b8da0]">A practical index for modern builders</div>
            <h1 className="reference-title mt-7 max-w-[1100px] font-display font-medium text-[#eaf4f4]">A clearer way to find <span className="reference-bracket">[ AI tools ]</span><br className="hidden sm:block" /> for smarter workflows.</h1>
            <div className="mt-10 grid max-w-4xl gap-7 lg:grid-cols-[1fr_auto] lg:items-end"><p className="max-w-xl text-base leading-7 text-[#a1b7bd] sm:text-lg">Discover, compare, and understand the tools changing how software gets built. {tools.length} tools, {categories.length} categories, one open registry.</p><div className="flex flex-wrap gap-3"><Link to="/tools" className="button-primary inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition">Explore the index <ArrowRight size={16} /></Link><Link to="/guides" className="button-secondary inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition"><BookOpen size={16} /> Guides</Link></div></div>
          </div>
        </div>
        <div className="reference-marquee overflow-hidden border-y border-white/10 bg-[#0b1922] py-3"><div className="reference-marquee-track flex min-w-max items-center gap-8 font-mono text-[10px] uppercase tracking-[.18em] text-[#75909a]"><span>102 tools indexed</span><i /> <span>6 focused categories</span><i /> <span>Open registry</span><i /> <span>Search less. Build better.</span><i /><span>102 tools indexed</span><i /><span>6 focused categories</span><i /></div></div>
      </section>
      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 sm:pb-28 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[.86fr_1.14fr]"><div className="reveal"><div className="eyebrow flex items-center gap-2"><Sparkles size={13} /> Start somewhere useful</div><h2 className="mt-4 max-w-md font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">See the ecosystem<br /><span className="text-[#8fe5e5]">at a glance.</span></h2><p className="mt-5 max-w-md text-base leading-7 text-[#91aab5]">A live index for choosing tools based on how you work, not how loudly they market themselves.</p><Link to="/categories" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#8fe5e5] hover:text-white">Explore categories <ArrowRight size={15} /></Link></div><div className="relative reveal reveal-delay-2"><div className="glass-panel relative overflow-hidden rounded-3xl p-5 sm:p-6"><div className="mb-5 flex items-center justify-between"><div><div className="eyebrow">Live index</div><p className="mt-2 text-sm text-[#bdd0d7]">A calmer way to explore the ecosystem</p></div><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7edce3]/10 text-[#7edce3]"><Search size={17} /></div></div><div className="mb-4 flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-[#6e8995]"><Search size={16} /> Search 102 tools...</div><div className="space-y-2">{featured.slice(0, 4).map((tool, index) => <Link key={tool.id} to={`/tools/${tool.id}`} className="resource-card interactive flex items-center gap-3 rounded-xl p-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/6 text-xs font-bold text-[#8fe5e5]">0{index + 1}</span><span className="min-w-0 flex-1"><strong className="block truncate text-sm font-semibold text-white">{tool.name}</strong><span className="block truncate text-xs text-[#829ba6]">{tool.description}</span></span><ChevronRight size={16} className="text-[#5e7985]" /></Link>)}</div><Link to="/tools" className="mt-5 flex items-center justify-between rounded-xl border border-dashed border-[#7edce3]/25 px-4 py-3 text-sm text-[#8fe5e5] transition hover:bg-[#7edce3]/5"><span>Browse the full registry</span><ArrowRight size={15} /></Link></div></div></div>
      </section>
      <section className="relative border-y border-white/8 bg-white/[.018]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="eyebrow">Start somewhere useful</div><h2 className="mt-3 font-display text-3xl font-semibold text-white">Explore by intent</h2></div><Link to="/categories" className="inline-flex items-center gap-1 text-sm font-semibold text-[#8fe5e5] hover:text-white">View all categories <ArrowRight size={15} /></Link></div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => <Link key={category.id} to={`/tools?category=${category.id}`} className="resource-card interactive group rounded-2xl p-5 reveal" style={{ animationDelay: `${index * 60}ms` }}>
              <div className="flex items-start justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#7edce3]/10 text-[#8fe5e5]">{index === 0 ? <Boxes size={18} /> : index === 1 ? <GitCompare size={18} /> : <Sparkles size={18} />}</span><ArrowRight size={17} className="text-[#5a7783] transition group-hover:-rotate-45 group-hover:text-[#8fe5e5]" /></div>
              <h3 className="mt-5 text-base font-semibold text-white">{category.title || category.name}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-[#839ca7]">{category.description}</p>
            </Link>)}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="eyebrow">Curated starting points</div><h2 className="mt-3 font-display text-3xl font-semibold text-white">Worth a closer look</h2></div><Link to="/compare" className="inline-flex items-center gap-1 text-sm font-semibold text-[#8fe5e5] hover:text-white">Compare tools <GitCompare size={15} /></Link></div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{featured.map((tool, index) => <Link key={tool.id} to={`/tools/${tool.id}`} className="resource-card interactive group rounded-2xl p-5 reveal" style={{ animationDelay: `${index * 50}ms` }}><div className="flex items-center justify-between"><span className="text-xs font-mono uppercase tracking-wider text-[#6f8b96]">{tool.category?.replace(/-/g, ' ')}</span>{tool.open_source && <span className="rounded-full border border-[#72d5b3]/25 bg-[#72d5b3]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#7de0bc]">Open source</span>}</div><h3 className="mt-5 text-lg font-semibold text-white group-hover:text-[#9becef]">{tool.name}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-[#839ca7]">{tool.description}</p><div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4 text-xs text-[#78929e]"><span>{tool.pricing_summary || tool.pricing || 'See details'}</span><ChevronRight size={15} className="transition group-hover:translate-x-1 group-hover:text-[#8fe5e5]" /></div></Link>)}</div>
      </section>
    </div>
  )
}
