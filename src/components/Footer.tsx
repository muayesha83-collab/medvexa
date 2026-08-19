import { Link } from 'react-router'
import Logo from './Logo'
import { C } from '../lib/palette'

export default function Footer() {
  return (
    <footer style={{ background: C.black, borderTop: `1px solid ${C.borderD}` }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div className="max-w-xs">
            <Logo variant="light" size="sm" />
            <p className="text-sm leading-relaxed mt-4" style={{ color: C.textDim }}>
              A professional digital and healthcare-focused creative brand. Combining healthcare knowledge with technology, research, design and content.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="text-xs font-extrabold tracking-widest uppercase mb-4" style={{ color: C.teal }}>Pages</p>
              {[['About', '/about'], ['Services', '/services'], ['My Work', '/work']].map(([l, p]) => (
                <Link key={p} to={p} className="block mb-2.5 font-medium transition-colors hover:text-white"
                  style={{ color: C.textDim, textDecoration: 'none' }}>{l}</Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-extrabold tracking-widest uppercase mb-4" style={{ color: C.teal }}>Resources</p>
              {[['Research', '/research'], ['Blog', '/blog'], ['Contact', '/contact']].map(([l, p]) => (
                <Link key={p} to={p} className="block mb-2.5 font-medium transition-colors hover:text-white"
                  style={{ color: C.textDim, textDecoration: 'none' }}>{l}</Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-extrabold tracking-widest uppercase mb-4" style={{ color: C.teal }}>Connect</p>
              <a href="https://www.upwork.com/freelancers/~01aefb577e2b815482?mp_source=share" target="_blank" rel="noreferrer" className="block mb-2.5 font-medium hover:text-white" style={{ color: C.textDim, textDecoration: 'none' }}>Upwork</a>
              <a href="https://www.facebook.com/profile.php?id=61592390681403" target="_blank" rel="noreferrer" className="block mb-2.5 font-medium hover:text-white" style={{ color: C.textDim, textDecoration: 'none' }}>Facebook</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${C.borderD}` }} className="pt-6 flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs" style={{ color: '#4A6A66' }}>© 2026 MEDVEXA by Ayesha Mustafa. All rights reserved.</p>
          <p className="text-xs" style={{ color: '#3A5552' }}>Clinical services are not currently available.</p>
        </div>
      </div>
    </footer>
  )
}
