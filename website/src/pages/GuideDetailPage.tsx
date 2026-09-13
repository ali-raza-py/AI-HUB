import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function GuideDetailPage() {
  const { guideSlug } = useParams<{ guideSlug: string }>()
  const [content, setContent] = useState<string | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    setContent(null)
    setError(false)

    if (!guideSlug) return

    const slug = guideSlug.replace(/[^a-zA-Z0-9-_/]/g, '')
    const isComparison = slug.startsWith('comparisons/')
    const assetPath = isComparison ? slug : slug.replace(/^docs\//, '')
    fetch(`${import.meta.env.BASE_URL}guides/${assetPath}.md`)
      .then(response => response.ok ? response.text() : Promise.reject(new Error('Guide not found')))
      .then(setContent)
      .catch(() => setError(true))
  }, [guideSlug])

  if (error) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-white">Guide not found</h1>
        <p className="mt-2 text-zinc-400">The guide "{guideSlug}" could not be loaded.</p>
        <Link to="/guides" className="button-secondary mt-6 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold">
          <ArrowLeft size={15} /> Back to guides
        </Link>
      </div>
    )
  }

  if (!content) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-[#8da6b2] animate-pulse">Loading guide...</p>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden"><div className="page-grid pointer-events-none absolute inset-x-0 top-0 h-80" /><div className="relative mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <nav className="mb-8 flex items-center gap-2 text-sm text-[#78929e]"><Link to="/guides" className="inline-flex items-center gap-2 hover:text-white"><ArrowLeft size={14} /> Guides</Link><span>/</span><span className="truncate text-[#b8cbd2]">{guideSlug}</span>
      </nav>
      <article className="prose-hub reveal"
        dangerouslySetInnerHTML={{
          __html: renderMarkdown(content)
        }}
      />
    </div></div>
  )
}

function renderMarkdown(md: string): string {
  let html = md
    // Remove YAML frontmatter
    .replace(/^---[\s\S]*?---\s*/m, '')
    // Headings
    .replace(/^#### (.*$)/gm, '<h4>$1</h4>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Blockquotes
    .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
    // Unordered lists
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    // Horizontal rule
    .replace(/^---$/gm, '<hr />')
    // Line breaks
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br />')

  // Wrap in paragraph
  html = `<p>${html}</p>`

  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, '')
  html = html.replace(/<p>(<h[1-4]>)/g, '$1')
  html = html.replace(/(<\/h[1-4]>)<\/p>/g, '$1')
  html = html.replace(/<p>(<li>)/g, '<ul>$1')
  html = html.replace(/(<\/li>)<\/p>/g, '$1</ul>')
  html = html.replace(/<p>(<blockquote>)/g, '$1')
  html = html.replace(/(<\/blockquote>)<\/p>/g, '$1')
  html = html.replace(/<p>(<hr \/>)/g, '$1')
  html = html.replace(/(<hr \/>)<\/p>/g, '$1')

  return html
}
