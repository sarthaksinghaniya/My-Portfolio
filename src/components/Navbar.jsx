import React from 'react'
import { useTheme } from './ThemeProvider'
import { profile } from '../data/content'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [active, setActive] = React.useState('#home')

  React.useEffect(() => {
    const ids = links.map(l => l.href.replace('#',''))
    const sections = ids
      .map(id => document.getElementById(id))
      .filter(Boolean)
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`)
        }
      })
    }, { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.5, 1] })
    sections.forEach(sec => obs.observe(sec))
    return () => obs.disconnect()
  }, [])
  return (
    <header className="fixed top-0 inset-x-0 z-50 nav-blur">
      <nav className="container flex items-center justify-between h-16">
        <a href="#home" className="font-heading text-lg font-bold flex items-center gap-2" aria-label="Home">
          <img src="/icons/profile.jpeg" alt="Sarthak profile logo" className="h-8 w-8 rounded-full object-cover" loading="eager" />
          <span className="hidden sm:inline">Sarthak<span className="text-violet-400">.</span></span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => {
            const isActive = active === l.href
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative transition-colors ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`}
              >
                {l.label}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-violet-600 transition-all ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></span>
              </a>
            )
          })}
          <a
            href={profile.links.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-slate-300 hover:text-white transition"
            title="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
            </svg>
          </a>
          <button aria-label="Toggle theme" onClick={toggle} className="btn btn-ghost">
            {theme === 'dark' ? '🌙' : '🌟'}
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggle} className="btn btn-ghost" aria-label="Toggle theme">{theme === 'dark' ? '🌙' : '☀️'}</button>
        </div>
      </nav>
    </header>
  )
}
