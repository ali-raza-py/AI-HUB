import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import type { Tool, Category } from '../lib/types'

interface ComparePageProps {
  tools: Tool[]
  categories: Category[]
}

export default function ComparePage({ tools, categories }: ComparePageProps) {
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : prev.length < 6 ? [...prev, id] : prev
    )
  }

  const selectedTools = useMemo(
    () => tools.filter(t => selected.includes(t.id)),
    [tools, selected]
  )

  const compareFields: { key: string; label: string; getValue: (t: Tool) => string }[] = [
    { key: 'category', label: 'Category', getValue: t => categories.find(c => c.id === t.category)?.title || t.category || 'Unknown' },
    { key: 'open_source', label: 'Open Source', getValue: t => t.open_source ? 'Yes' : t.open_source === false ? 'No' : 'Unknown' },
    { key: 'byok', label: 'BYOK', getValue: t => t.byok ? 'Yes' : t.byok === false ? 'No' : 'Unknown' },
    { key: 'local_models', label: 'Local Models', getValue: t => t.local_models ? 'Yes' : t.local_models === false ? 'No' : 'Unknown' },
    { key: 'mcp', label: 'MCP', getValue: t => t.mcp ? 'Yes' : t.mcp === false ? 'No' : 'Unknown' },
    { key: 'vscode', label: 'VS Code', getValue: t => t.vscode ? 'Yes' : t.vscode === false ? 'No' : 'Unknown' },
    { key: 'cli', label: 'CLI', getValue: t => t.cli ? 'Yes' : t.cli === false ? 'No' : 'Unknown' },
    { key: 'desktop', label: 'Desktop', getValue: t => t.desktop ? 'Yes' : t.desktop === false ? 'No' : 'Unknown' },
    { key: 'free', label: 'Free', getValue: t => t.free ? 'Yes' : t.free === false ? 'No' : 'Unknown' },
    { key: 'autonomy_level', label: 'Autonomy', getValue: t => t.autonomy_level !== undefined ? `${t.autonomy_level}/5` : 'Unknown' },
    { key: 'license', label: 'License', getValue: t => t.license || 'Unknown' },
    { key: 'status', label: 'Status', getValue: t => t.status || 'Unknown' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Compare Tools</h1>
        <p className="mt-2 text-zinc-400">Select up to 6 tools to compare side by side</p>
      </div>

      {/* Tool selector */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-4 bg-neutral-900/50 border border-white/5 rounded-lg">
          {tools.map(tool => (
            <button
              key={tool.id}
              onClick={() => toggle(tool.id)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                selected.includes(tool.id)
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                  : 'bg-neutral-800 text-zinc-400 border border-white/5 hover:border-white/15'
              }`}
            >
              {tool.name}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-zinc-500">{selected.length}/6 selected</p>
      </div>

      {/* Comparison */}
      {selectedTools.length < 2 ? (
        <div className="text-center py-16">
          <p className="text-zinc-400 text-lg">Select at least 2 tools to compare</p>
          <p className="text-zinc-500 text-sm mt-2">Click on tools above to add them to the comparison</p>
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-3 text-left text-sm font-medium text-zinc-400 border-b border-white/10 sticky left-0 bg-neutral-950">
                    Feature
                  </th>
                  {selectedTools.map(t => (
                    <th key={t.id} className="p-3 text-left text-sm font-medium text-white border-b border-white/10 min-w-[140px]">
                      <Link to={`/tools/${t.id}`} className="hover:text-indigo-300 transition-colors">
                        {t.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareFields.map(field => (
                  <tr key={field.key} className="hover:bg-neutral-900/30">
                    <td className="p-3 text-sm text-zinc-400 border-b border-white/5 font-medium sticky left-0 bg-neutral-950">
                      {field.label}
                    </td>
                    {selectedTools.map(t => (
                      <td key={t.id} className="p-3 text-sm text-zinc-300 border-b border-white/5">
                        {field.getValue(t)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {selectedTools.map(tool => (
              <div key={tool.id} className="p-4 bg-neutral-900/50 border border-white/5 rounded-lg">
                <Link to={`/tools/${tool.id}`} className="text-lg font-semibold text-white hover:text-indigo-300">
                  {tool.name}
                </Link>
                <div className="mt-3 space-y-2">
                  {compareFields.map(field => (
                    <div key={field.key} className="flex justify-between text-sm">
                      <span className="text-zinc-500">{field.label}</span>
                      <span className="text-zinc-300">{field.getValue(tool)}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
