import { Link } from 'react-router-dom'
import { ArrowLeft, Compass } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4"><div className="glass-panel max-w-md rounded-2xl px-8 py-12 text-center"><Compass size={30} className="mx-auto text-[#7edce3]" /><p className="eyebrow mt-6">Signal lost</p><h1 className="mt-3 font-display text-5xl font-semibold text-white">404</h1><p className="mt-4 text-lg text-[#c2d4da]">That page is not in the index.</p><p className="mt-2 text-sm text-[#819aa5]">The link may have moved or never existed.</p><Link to="/" className="button-primary mt-7 inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition"><ArrowLeft size={15} /> Return home</Link>
      </div>
    </div>
  )
}
