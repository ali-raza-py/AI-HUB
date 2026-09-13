import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const links = [
    { to: '/tools', label: 'Explore tools' },
    { to: '/categories', label: 'Categories' },
    { to: '/compare', label: 'Compare' },
    { to: '/guides', label: 'Guides' },
  ]

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <nav className="site-nav sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div className="nav-frame mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-none bg-[#f5c542] text-[#111315] transition-transform group-hover:rotate-3">
            <span className="font-display text-lg font-bold">A</span>
          </span>
          <span className="font-display text-base font-bold tracking-tight text-white">AI<span className="text-[#f5c542]">-HUB</span></span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(link => {
            const active = location.pathname.startsWith(link.to)
            return <Link key={link.to} to={link.to} className={`relative border px-3 py-2 text-[11px] font-mono uppercase tracking-wider transition-colors ${active ? 'border-[#f5c542] bg-[#f5c542] text-[#111315]' : 'border-transparent text-[#91aab5] hover:border-[#5d6463] hover:text-white'}`}>
              {link.label}
              {active && <span className="absolute -right-px -top-px h-1.5 w-1.5 bg-[#111315]" />}
            </Link>
          })}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <button aria-label="Toggle color theme" onClick={toggle} className="grid h-9 w-9 place-items-center rounded-lg text-[#91aab5] transition hover:bg-white/5 hover:text-white">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Link to="/tools" className="inline-flex items-center gap-2 border border-[#f5c542] bg-[#f5c542] px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-[#111315] transition hover:bg-[#fff0a9]">
            Start exploring <ArrowUpRight size={15} />
          </Link>
        </div>
        <button aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(value => !value)} className="grid h-10 w-10 place-items-center rounded-none border border-transparent text-[#b9d0d7] transition hover:border-[#f5c542] hover:bg-[#f5c542]/10 md:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && <div className="nav-mobile-panel border-t border-white/10 bg-[#0b1821] px-4 py-4 md:hidden">
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          {links.map(link => <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className={`rounded-lg px-3 py-3 text-sm ${location.pathname.startsWith(link.to) ? 'bg-white/8 text-white' : 'text-[#9bb1ba]'}`}>{link.label}</Link>)}
          <button onClick={toggle} className="mt-2 flex items-center gap-2 border-t border-white/10 px-3 pt-4 text-left text-sm text-[#9bb1ba]">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />} Switch to {theme === 'dark' ? 'light' : 'dark'} mode
          </button>
        </div>
      </div>}
    </nav>
  )
}
