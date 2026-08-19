import { C } from '../lib/palette'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

/* Geometric MEDVEXA mark — two interlocked rhombuses forming an M/V shape */
export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const s    = size === 'sm' ? 0.78 : size === 'lg' ? 1.25 : 1
  const w    = Math.round(38 * s)
  const h    = Math.round(38 * s)
  const name = variant === 'dark' ? C.black : C.white
  const sub  = variant === 'dark' ? '#5A8A83' : C.textDim

  return (
    <div className="flex items-center gap-2.5 select-none" style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* ── Geometric mark ── */}
      <svg width={w} height={h} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Base hexagonal container */}
        <rect x="1" y="1" width="36" height="36" rx="10" fill={C.darkTeal} />

        {/* Geometric M-shape via two V-forms layered:
            outer wide V → inner narrow inverted peak */}

        {/* Left arm of M */}
        <path d="M7 28 L13.5 10" stroke={C.white} strokeWidth="2.4" strokeLinecap="round" />
        {/* Left-to-center descent */}
        <path d="M13.5 10 L19 20" stroke={C.white} strokeWidth="2.4" strokeLinecap="round" />
        {/* Center-to-right ascent */}
        <path d="M19 20 L24.5 10" stroke={C.white} strokeWidth="2.4" strokeLinecap="round" />
        {/* Right arm of M */}
        <path d="M24.5 10 L31 28" stroke={C.white} strokeWidth="2.4" strokeLinecap="round" />

        {/* Teal accent dot at the center valley */}
        <circle cx="19" cy="20" r="2.5" fill={C.teal} />

        {/* Teal top-left and top-right corner dots */}
        <circle cx="13.5" cy="10" r="1.8" fill={C.teal} />
        <circle cx="24.5" cy="10" r="1.8" fill={C.teal} />
      </svg>

      {/* ── Wordmark ── */}
      <div>
        <p style={{
          color: name,
          fontSize: size === 'sm' ? 15 : size === 'lg' ? 22 : 18,
          fontWeight: 800,
          letterSpacing: '0.06em',
          lineHeight: 1,
        }}>
          MEDVEXA
        </p>
        <p style={{
          color: sub,
          fontSize: size === 'sm' ? 7.5 : size === 'lg' ? 10 : 8.5,
          fontWeight: 600,
          letterSpacing: '0.14em',
          marginTop: 3,
          textTransform: 'uppercase',
        }}>
          Healthcare × Technology
        </p>
      </div>
    </div>
  )
}
