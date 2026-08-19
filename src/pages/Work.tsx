import { useState } from 'react'
import { Link } from 'react-router'
import { C } from '../lib/palette'
import { Tag, Pill } from '../components/ui'

const PROJECTS = [
  {
    id: 'fittrack', tag: 'Apps', title: 'FITTRACK',
    sub: 'Voice-powered fitness & exercise app with rep counting and workout tracking.',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=550&fit=crop&auto=format',
    techs: ['Flutter', 'Dart', 'Vosk', 'Supabase'], featured: true,
  },
  {
    id: 'healthcare-website', tag: 'Websites', title: 'Healthcare / Telehealth Website',
    sub: 'Modern healthcare website and telehealth interface concept.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=550&fit=crop&auto=format',
    techs: ['React', 'UI/UX', 'Figma'], featured: false,
  },
  {
    id: 'driveease', tag: 'Websites', title: 'DriveEase',
    sub: 'Car rental website with vehicle browsing and booking-oriented UI.',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=550&fit=crop&auto=format',
    techs: ['Web Dev', 'UI/UX'], featured: false,
  },
  {
    id: 'dietfeast', tag: 'UI/UX', title: 'DietFeast',
    sub: 'Nutrition-focused app interface with meal tracking and planning.',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=550&fit=crop&auto=format',
    techs: ['Flutter', 'UI/UX', 'Figma'], featured: false,
  },
  {
    id: 'medical-dashboard', tag: 'UI/UX', title: 'Medical Dashboard UI',
    sub: 'Patient management dashboard with clean data visualisation.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=550&fit=crop&auto=format',
    techs: ['Figma', 'UI/UX', 'Design'], featured: false,
  },
  {
    id: 'ecommerce', tag: 'Websites', title: 'E-commerce Store',
    sub: 'Shopify store design and build for a retail brand.',
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=550&fit=crop&auto=format',
    techs: ['Shopify', 'Web Dev'], featured: false,
  },
]

const FILTERS = ['All', 'Apps', 'Websites', 'UI/UX', 'Templates']

function ProjectCard({ p }: { p: typeof PROJECTS[0] }) {
  const [hov, setHov] = useState(false)
  return (
    <Link to={`/work/${p.id}`} className="h-full block" style={{ textDecoration: 'none' }}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="h-full rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
        style={{
          background: C.white,
          border: `1px solid ${C.borderL}`,
          transform: hov ? 'translateY(-5px)' : 'none',
        }}>
        <div style={{ height: 220, overflow: 'hidden' }}>
          <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500"
            style={{ transform: hov ? 'scale(1.05)' : 'scale(1)', filter: 'brightness(0.88)' }} />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <Tag>{p.tag}</Tag>

          <h3 className="font-extrabold text-lg mt-3 mb-1.5" style={{ color: C.black }}>
            {p.title}
          </h3>

          <p className="text-sm mb-4" style={{ color: '#5A8A83' }}>
            {p.sub}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {p.techs.map(t => <Pill key={t}>{t}</Pill>)}
          </div>

          <p className="text-xs font-bold mt-auto pt-4" style={{ color: C.teal }}>
            View Project →
          </p>
        </div>
      </div>
    </Link>
  )
}

export default function Work() {
  const [filter, setFilter] = useState('All')
  const filtered = PROJECTS.filter(p => filter === 'All' || p.tag === filter)

  return (
    <div style={{ background: C.ivory, minHeight: '100vh' }}>
      {/* header */}
      <section className="pt-28 pb-12" style={{ background: '#1B1F1F' }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-extrabold tracking-widest uppercase mb-4" style={{ color: C.textDim }}>My Work</p>
          <h1 className="font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(30px,5vw,50px)', color: C.white }}>
            Websites, apps &<br />digital products.
          </h1>
          <p className="text-base max-w-lg" style={{ color: C.textDim }}>
            A selection of projects I've designed and built — from healthcare tools to e-commerce.
          </p>
        </div>
      </section>

      {/* grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* filters */}
          <div className="flex flex-wrap gap-2.5 mb-12">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className="px-5 py-2 rounded-full text-xs font-bold transition-all"
                style={{
                  background: filter === f ? C.teal : C.white,
                  color: filter === f ? '#fff' : '#5A8A83',
                  border: `1px solid ${filter === f ? C.teal : C.borderL}`,
                  cursor: 'pointer',
                }}>
                {f}
              </button>
            ))}
          </div>

          {filter === 'Templates' ? (
            <div className="rounded-2xl p-12 text-center" style={{ background: C.white, border: `1px solid ${C.borderL}` }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4" style={{ background: 'rgba(47,169,155,0.1)' }}>🎨</div>
              <h3 className="font-extrabold text-xl mb-2" style={{ color: C.black }}>Templates Coming Soon</h3>
              <p style={{ color: '#5A8A83' }} className="text-sm">Healthcare, Business, Portfolio and E-commerce templates — launching soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map(p => <ProjectCard key={p.id} p={p} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
