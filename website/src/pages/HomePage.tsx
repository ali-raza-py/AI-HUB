import { ArrowRight, ArrowUpRight, Boxes, Check, ChevronRight, Command, GitCompare, Search, Sparkles, WandSparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import CursorPixelField from '../components/CursorPixelField'
import type { Category, Tool } from '../lib/types'

interface HomePageProps {
  tools: Tool[]
  categories: Category[]
}

export default function HomePage({ tools, categories }: HomePageProps) {
  const featured = tools.slice(0, 6)
  const signalTools = tools.slice(0, 5)

  return <div className="homepage relative overflow-hidden">
    <CursorPixelField className="hero-reference premium-hero">
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-grid-meta"><span>AI-HUB / INDEX 2026</span><span>THE BUILDER'S SIGNAL</span></div>
      <div className="hero-content-wrap">
        <div className="hero-headline-block reveal">
          <div className="hero-kicker"><span className="status-dot" /> Curated intelligence for modern builders</div>
          <h1 className="hero-headline">The signal<br /><span className="hero-pixel-word">inside AI.</span></h1>
          <p className="hero-lede">An open, opinionated index of the tools, models, and workflows shaping what gets built next.</p>
          <div className="hero-inline-actions">
            <Link to="/tools" className="hero-cta">EXPLORE THE INDEX <ArrowUpRight size={16} /></Link>
            <Link to="/guides" className="hero-secondary"><span className="hero-play">↗</span> READ THE FIELD NOTES</Link>
          </div>
        </div>
        <div className="hero-side reveal reveal-delay-2">
          <div className="signal-console" aria-label="AI-HUB signal map">
            <div className="console-top"><span><span className="live-dot" /> SIGNAL MAP / LIVE</span><span className="mono">0xAIHUB</span></div>
            <div className="signal-orbit signal-orbit-one" />
            <div className="signal-orbit signal-orbit-two" />
            <div className="signal-core"><WandSparkles size={23} /><span>AI<br />HUB</span></div>
            {signalTools.map((tool, index) => <div key={tool.id} className={`signal-node signal-node-${index + 1}`}><span>{tool.name.slice(0, 2).toUpperCase()}</span><small>{tool.name}</small></div>)}
            <div className="console-readout"><span>INDEXED NODES</span><strong>{tools.length}</strong><span className="readout-bar"><i /></span></div>
          </div>
          <div className="hero-proof"><strong>{tools.length}</strong> tools indexed <span className="hero-divider" /><strong>{categories.length}</strong> routes to explore</div>
        </div>
      </div>
      <div className="hero-brand-strip"><span>OPEN REGISTRY</span><span>SEARCH / COMPARE / BUILD</span><span>MADE FOR THE CURIOUS</span><span>SCROLL TO EXPLORE ↓</span></div>
    </CursorPixelField>

    <section className="home-section home-overview relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="section-intro reveal"><div><div className="eyebrow flex items-center gap-2"><Sparkles size={13} /> Less noise. Better decisions.</div><h2 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Your next best tool is probably already here.</h2></div><p className="max-w-sm text-base leading-7 text-[#9aa5a8]">Skip the launch-day hype. Search by how you work, compare the tradeoffs, and find a stack that actually fits.</p></div>
      <div className="overview-grid mt-14">
        <div className="explorer-panel glass-panel reveal">
          <div className="panel-heading"><div><div className="eyebrow">Live index</div><p className="mt-2 text-sm text-[#c4ccca]">A calmer way to explore the ecosystem</p></div><span className="panel-icon"><Search size={17} /></span></div>
          <div className="explorer-search"><Search size={16} /><span>Search tools, capabilities, workflows...</span><kbd><Command size={11} /> K</kbd></div>
          <div className="explorer-list">{featured.slice(0, 4).map((tool, index) => <Link key={tool.id} to={`/tools/${tool.id}`} className="explorer-row"><span className="row-index">0{index + 1}</span><span className="min-w-0 flex-1"><strong>{tool.name}</strong><small>{tool.category?.replace(/-/g, ' ') || 'developer tool'}</small></span><span className="row-status"><Check size={12} /> indexed</span><ChevronRight size={15} /></Link>)}</div>
          <Link to="/tools" className="panel-link">Open the full index <ArrowRight size={15} /></Link>
        </div>
        <div className="metric-stack reveal reveal-delay-1"><div className="metric-card"><span className="metric-label">TOOLS INDEXED</span><strong>{tools.length}<sup>+</sup></strong><span className="metric-foot">and growing every week</span></div><div className="metric-card metric-card-accent"><span className="metric-label">WAYS TO START</span><strong>{categories.length}</strong><span className="metric-foot">from models to shipping</span></div></div>
      </div>
    </section>

    <section className="home-section category-section border-y border-white/8 bg-white/[.018]"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"><div className="section-heading-row"><div><div className="eyebrow">Choose a direction</div><h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">Find your starting point.</h2></div><Link to="/categories" className="text-link">View all categories <ArrowRight size={15} /></Link></div><div className="category-grid mt-10">{categories.slice(0, 6).map((category, index) => <Link key={category.id} to={`/tools?category=${category.id}`} className="category-card reveal" style={{ animationDelay: `${index * 60}ms` }}><div className="category-number">0{index + 1}</div><span className="category-icon">{index === 0 ? <Boxes size={18} /> : index === 1 ? <GitCompare size={18} /> : <Sparkles size={18} />}</span><h3>{category.title || category.name}</h3><p>{category.description}</p><ArrowUpRight className="category-arrow" size={17} /></Link>)}</div></div></section>

    <section className="home-section mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"><div className="section-heading-row"><div><div className="eyebrow">Curated starting points</div><h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">Worth a closer look.</h2></div><Link to="/compare" className="text-link">Compare tools <GitCompare size={15} /></Link></div><div className="featured-grid mt-10">{featured.map((tool, index) => <Link key={tool.id} to={`/tools/${tool.id}`} className="featured-card reveal" style={{ animationDelay: `${index * 50}ms` }}><div className="featured-top"><span className="tool-monogram">{tool.name.charAt(0)}</span><span className="tool-index">0{index + 1} / {tool.category?.replace(/-/g, ' ')}</span><ArrowUpRight size={16} /></div><h3>{tool.name}</h3><p>{tool.description}</p><div className="featured-bottom"><span>{tool.pricing_summary || tool.pricing || 'Explore details'}</span><span className="card-arrow"><ArrowRight size={14} /></span></div></Link>)}</div></section>
  </div>
}