/* Shared primitives */
import { C } from '../lib/palette'

export function SecLabel({ num, text, dark }: { num: string; text: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-xs font-extrabold tracking-widest" style={{ color: C.teal }}>{num}</span>
      <div className="h-px w-5" style={{ background: C.teal }} />
      <span className="text-xs font-bold tracking-widest uppercase" style={{ color: dark ? '#5A8A83' : '#8BA0A0' }}>{text}</span>
    </div>
  )
}

export function Tag({ children, variant = 'teal' }: { children: React.ReactNode; variant?: 'teal' | 'burg' | 'dark' }) {
  const styles = {
    teal: { background: 'rgba(47,169,155,0.12)', color: C.teal },
    burg: { background: 'rgba(110,36,40,0.1)',   color: C.red  },
    dark: { background: C.black,                 color: C.white },
  }
  return (
    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
      style={styles[variant]}>{children}</span>
  )
}

export function Pill({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full"
      style={dark
        ? { background: 'rgba(255,255,255,0.07)', color: '#8BA8A4', border: `1px solid rgba(255,255,255,0.1)` }
        : { background: 'rgba(11,17,19,0.06)',    color: '#4A7A72', border: `1px solid rgba(11,17,19,0.08)` }}>
      {children}
    </span>
  )
}

export function BtnPrimary({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick}
      className="px-6 py-3 rounded-full font-bold text-sm transition-all hover:opacity-90"
      style={{ background: C.teal, color: '#fff', border: 'none', cursor: 'pointer' }}>
      {children}
    </button>
  )
}

export function BtnOutline({ children, onClick, dark }: { children: React.ReactNode; onClick?: () => void; dark?: boolean }) {
  return (
    <button onClick={onClick}
      className="px-6 py-3 rounded-full font-bold text-sm transition-all"
      style={{ border: `1.5px solid ${dark ? 'rgba(255,255,255,0.2)' : C.teal}`, color: dark ? 'rgba(255,255,255,0.8)' : C.teal, background: 'none', cursor: 'pointer' }}>
      {children}
    </button>
  )
}
