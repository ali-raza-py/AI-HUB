import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import type { Tool, Category } from '../lib/types'

interface Props {
  tools: Tool[]
  categories: Category[]
}

export default function ToolsPage({ tools, categories }: Props) {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('all')
  const [status, setStatus] = useState('all')
  const [oss, setOss] = useState(false)
  const [byok, setByok] = useState(false)
  const [mcp, setMcp] = useState(false)
  const [free, setFree] = useState(false)
  const [vscode, setVscode] = useState(false)
  const [cli, setCli] = useState(false)

  const statuses = useMemo(() => {
    const s = new Set<string>()
    tools.forEach(t => s.add(t.status || 'unknown'))
    return Array.from(s).sort()
  }, [tools])

  const filtered = useMemo(() => {
    let r = tools
    if (search) {
      const q = search.toLowerCase()
      r = r.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.description?.toLowerCase().includes(q) ||
        t.best_for?.toLowerCase().includes(q) ||
        t.tags?.some(tag => tag.toLowerCase().includes(q)) ||
        t.capabilities?.some(c => c.toLowerCase().includes(q))
      )
    }
    if (cat !== 'all') r = r.filter(t => t.category === cat)
    if (status !== 'all') r = r.filter(t => (t.status || 'unknown') === status)
    if (oss) r = r.filter(t => t.open_source)
    if (byok) r = r.filter(t => t.byok)
    if (mcp) r = r.filter(t => t.mcp)
    if (free) r = r.filter(t => t.free || t.free_tier)
    if (vscode) r = r.filter(t => t.vscode)
    if (cli) r = r.filter(t => t.cli)
    return r
  }, [tools, search, cat, status, oss, byok, mcp, free, vscode, cli])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Tools</h1>
        <p className="mt-2 text-zinc-400">Browse and filter {tools.length} AI developer tools</p>
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 transition-colors"
        />
      </div>
      <div className="flex flex-wrap gap-3 mb-8">
        <select value={cat} onChange={e => setCat(e.target.value)} className="px-3 py-2 bg-neutral-900 border border-white/10 rounded-md text-sm text-zinc-300">
          <option value="all">All Categories</option>
          {categories.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
        </select>
        <select value={status} onChange={e => setStatus(e.target.value)} className="px-3 py-2 bg-neutral-900 border border-white/10 rounded-md text-sm text-zinc-300">
          <option value="all">All Statuses</option>
          {statuses.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <Toggle label="Open Source" active={oss} onClick={() => setOss(!oss)} />
        <Toggle label="BYOK" active={byok} onClick={() => setByok(!byok)} />
        <Toggle label="MCP" active={mcp} onClick={() => setMcp(!mcp)} />
        <Toggle label="Free" active={free} onClick={() => setFree(!free)} />
        <Toggle label="VS Code" active={vscode} onClick={() => setVscode(!vscode)} />
        <Toggle label="CLI" active={cli} onClick={() => setCli(!cli)} />
      </div>
      <div className="mb-4 text-sm text-zinc-500">Showing {filtered.length} of {tools.length} tools</div>
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-zinc-400 text-lg">No tools match your filters</p>
          <p className="text-zinc-500 text-sm mt-2">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(tool => <ToolCard key={tool.id} tool={tool} />)}
        </div>
      )}
    </div>
  )
}


function Toggle({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick}
      className={'px-3 py-2 text-sm rounded-md border transition-colors ' + (active ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300' : 'bg-neutral-900 border-white/10 text-zinc-400 hover:text-zinc-200')}
    >{label}</button>
  )
}

function ToolCard({ tool }: { tool: Tool }) {
  const catName = tool.category?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Unknown'
  return (
    <Link to={'/tools/' + tool.id}
      className="group block p-5 bg-neutral-900/50 border border-white/5 rounded-lg hover:border-indigo-500/30 hover:bg-neutral-900 transition-all duration-200">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">{tool.name}</h3>
          <p className="mt-1 text-sm text-zinc-400 line-clamp-2">{tool.description}</p>
        </div>
        {tool.open_source && <span className="shrink-0 px-2 py-0.5 text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">OSS</span>}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className="px-2 py-0.5 text-xs bg-neutral-800 text-zinc-400 rounded">{catName}</span>
        {tool.mcp && <span className="px-2 py-0.5 text-xs bg-indigo-500/10 text-indigo-400 rounded">MCP</span>}
        {tool.byok && <span className="px-2 py-0.5 text-xs bg-amber-500/10 text-amber-400 rounded">BYOK</span>}
        {(tool.free || tool.free_tier) && <span className="px-2 py-0.5 text-xs bg-emerald-500/10 text-emerald-400 rounded">Free</span>}
        {tool.vscode && <span className="px-2 py-0.5 text-xs bg-blue-500/10 text-blue-400 rounded">VS Code</span>}
        {tool.cli && <span className="px-2 py-0.5 text-xs bg-purple-500/10 text-purple-400 rounded">CLI</span>}
      </div>
      {tool.autonomy_level !== undefined && (
        <div className="mt-3 flex items-center gap-2">
          <span className="text-xs text-zinc-500">Autonomy:</span>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(l => <div key={l} className={'w-2 h-2 rounded-full ' + (l <= (tool.autonomy_level||0) ? 'bg-indigo-400' : 'bg-neutral-700')} />)}
          </div>
        </div>
      )}
    </Link>
  )
}

