import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <p className="mt-4 text-xl text-zinc-300">Page not found</p>
        <p className="mt-2 text-zinc-500">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-md text-sm font-medium hover:bg-indigo-500/20 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
