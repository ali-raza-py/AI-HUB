import { useParams, Link } from 'react-router-dom'
import type { Tool } from '../lib/types'

interface Props { tools: Tool[] }

export default function ToolDetailPage({ tools }: Props) {
  const { toolId } = useParams<{ toolId: string }>()
  const tool = tools.find(t => t.id === toolId)

  if (!tool) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold text-white">Tool not found</h1>
        <p className="mt-2 text-zinc-400">No tool with ID &quot;{toolId}&quot; exists in the registry.</p>
        <Link to="/tools" className="mt-4 inline-block text-indigo-400 hover:text-indigo-300">Back to tools</Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <Link to="/tools" className="text-sm text-zinc-500 hover:text-zinc-300">All tools</Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-white">{tool.name}</h1>
              {tool.open_source && <span className="px-2 py-0.5 text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">Open Source</span>}
            </div>
            <p className="text-zinc-400 text-lg">{tool.description}</p>
            {tool.company && <p className="mt-1 text-sm text-zinc-500">{tool.company}</p>}
          </div>
          <div className="bg-neutral-900/50 border border-white/5 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Quick Facts</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Fact label="Status" value={tool.status} />
              <Fact label="Category" value={tool.category?.replace(/-/g, ' ')} />
              <Fact label="License" value={tool.license} />
              <Fact label="BYOK" value={tool.byok ? 'Yes' : 'No'} />
              <Fact label="Local Models" value={tool.local_models ? 'Yes' : 'No'} />
              <Fact label="MCP" value={tool.mcp ? 'Yes' : 'No'} />
              <Fact label="VS Code" value={tool.vscode ? 'Yes' : 'No'} />
              <Fact label="CLI" value={tool.cli ? 'Yes' : 'No'} />
              <Fact label="Autonomy Level" value={tool.autonomy_level ? tool.autonomy_level + '/5' : undefined} />
              <Fact label="Free Tier" value={tool.free_tier ? 'Yes' : tool.free ? 'Yes' : 'No'} />
              <Fact label="Last Verified" value={tool.last_verified} />
            </dl>
          </div>
          {tool.capabilities && tool.capabilities.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">Capabilities</h2>
              <div className="flex flex-wrap gap-2">
                {tool.capabilities.map(cap => (
                  <span key={cap} className="px-3 py-1 text-sm bg-neutral-800 text-zinc-300 rounded-md border border-white/5">{cap}</span>
                ))}
              </div>
            </div>
          )}
          {tool.platforms && tool.platforms.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">Platforms</h2>
              <div className="flex flex-wrap gap-2">
                {tool.platforms.map(p => (
                  <span key={p} className="px-3 py-1 text-sm bg-indigo-500/10 text-indigo-300 rounded-md border border-indigo-500/20">{p}</span>
                ))}
              </div>
            </div>
          )}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Pricing</h2>
            <p className="text-zinc-400">{tool.pricing_summary || tool.pricing || 'Unknown'}</p>
          </div>
          {tool.best_for && (
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">Best For</h2>
              <p className="text-zinc-400">{tool.best_for}</p>
            </div>
          )}
        </div>
        <div className="space-y-6">
          <div className="bg-neutral-900/50 border border-white/5 rounded-lg p-6 sticky top-20">
            <h2 className="text-lg font-semibold text-white mb-4">Official Resources</h2>
            <div className="space-y-3">
              {tool.official_website && <ResourceLink label="Website" url={tool.official_website} />}
              {tool.official_docs && <ResourceLink label="Documentation" url={tool.official_docs} />}
              {tool.github && <ResourceLink label="GitHub" url={tool.github} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Fact({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <dt className="text-sm text-zinc-500">{label}</dt>
      <dd className="mt-0.5 text-sm text-zinc-200 capitalize">{value || 'Unknown'}</dd>
    </div>
  )
}

function ResourceLink({ label, url }: { label: string; url: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
      {label}
    </a>
  )
}
