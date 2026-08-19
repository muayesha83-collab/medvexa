import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import Logo from './Logo'
import { C } from '../lib/palette'

const LINKS = [
  { label: 'Home',                 path: '/' },
  { label: 'About',                path: '/about' },
  { label: 'Services',             path: '/services' },
  { label: 'My Work',              path: '/work' },
  { label: 'Research & Education', path: '/research' },
  { label: 'Blog',                 path: '/blog' },
  { label: 'Contact',              path: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const loc = useLocation()

  /* detect dark hero pages */
  const darkPage = ['/', '/work', '/blog'].includes(loc.pathname)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => { setOpen(false) }, [loc.pathname])

  const solid = scrolled || !darkPage

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: solid ? 'rgba(245,241,234,0.96)' : 'transparent',
        backdropFilter: solid ? 'blur(14px)' : 'none',
        borderBottom: solid ? `1px solid ${C.borderL}` : 'none',
      }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/"><Logo variant={!solid ? 'light' : 'dark'} size="sm" /></Link>

        {/* desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {LINKS.map(l => (
            <Link key={l.path} to={l.path}
              className="text-xs font-bold tracking-wide transition-colors duration-150 hover:opacity-100"
              style={{
                color: !solid
                  ? loc.pathname === l.path ? C.teal : 'rgba(255,255,255,0.65)'
                  : loc.pathname === l.path ? C.teal : '#5A8A83',
                textDecoration: 'none',
              }}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: C.teal }}>
            <span className="w-1.5 h-1.5 rounded-full pulse-ring" style={{ background: C.teal }} />
            Available
          </span>
          <Link to="/contact"
            className="px-5 py-2 rounded-full text-xs font-bold transition-all hover:opacity-90"
            style={{ background: C.teal, color: '#fff', textDecoration: 'none' }}>
            Work With Me
          </Link>
        </div>

        {/* hamburger */}
        <button className="lg:hidden flex flex-col gap-1.5 p-1"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setOpen(!open)}>
          <span className="block w-5 h-0.5 transition-all" style={{ background: solid ? C.black : '#fff', transform: open ? 'rotate(45deg) translate(2px,2px)' : 'none' }} />
          <span className="block w-5 h-0.5 transition-all" style={{ background: solid ? C.black : '#fff', opacity: open ? 0 : 1 }} />
          <span className="block w-5 h-0.5 transition-all" style={{ background: solid ? C.black : '#fff', transform: open ? 'rotate(-45deg) translate(2px,-2px)' : 'none' }} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: 'rgba(245,241,234,0.98)', borderTop: `1px solid ${C.borderL}` }}>
          {LINKS.map(l => (
            <Link key={l.path} to={l.path}
              className="text-sm font-semibold py-1"
              style={{ color: C.black, textDecoration: 'none' }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact"
            className="mt-1 py-3 rounded-full text-sm font-bold text-center"
            style={{ background: C.teal, color: '#fff', textDecoration: 'none' }}>
            Work With Me
          </Link>
        </div>
      )}
    </nav>
  )
}
