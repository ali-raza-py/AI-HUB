import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  return (
    <nav className="bg-zinc-950/80 backdrop-blur border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14 gap-8">
          <Link to="/" className="font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
            AI HUB
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
            <Link to="/tools" className={location.pathname.startsWith('/tools') ? 'text-white' : 'hover:text-white'}>Tools</Link>
            <Link to="/categories" className={location.pathname.startsWith('/categories') ? 'text-white' : 'hover:text-white'}>Categories</Link>
            <Link to="/compare" className={location.pathname.startsWith('/compare') ? 'text-white' : 'hover:text-white'}>Compare</Link>
            <Link to="/guides" className={location.pathname.startsWith('/guides') ? 'text-white' : 'hover:text-white'}>Guides</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
