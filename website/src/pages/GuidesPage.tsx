import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface Guide {
  slug: string
  title: string
}

export default function GuidesPage() {
  const [guides, setGuides] = useState<Guide[]>([])

  useEffect(() => {
    import('../lib/data/guides-index.json').then(m => {
      setGuides((m.default || m) as Guide[])
    })
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Guides</h1>
        <p className="mt-2 text-zinc-400">Learn key concepts and make informed decisions</p>
      </div>

      {guides.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-zinc-400">Loading guides...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {guides.map(guide => (
            <Link
              key={guide.slug}
              to={`/guides/${guide.slug}`}
              className="group p-5 bg-neutral-900/50 border border-white/5 rounded-lg hover:border-indigo-500/30 transition-all duration-200"
            >
              <h3 className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors">
                {guide.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-500">{guide.slug.replace(/\//g, ' → ')}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
