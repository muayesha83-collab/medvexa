import { useState } from 'react'
import { Link } from 'react-router'
import { C } from '../lib/palette'
import { Tag } from '../components/ui'

const POSTS = [
  {
    id: 'healthcare-ai',
    cat: 'Healthcare Technology',
    title: 'Why AI and Innovative Technology Are Needed in Modern Healthcare',
    mins: '7',
    date: 'Jul 2026',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=450&fit=crop&auto=format',
  },
  {
    id: 'healthcare-websites-apps',
    cat: 'Digital Healthcare',
    title: 'Why Healthcare Systems Need Updated Websites and Apps',
    mins: '6',
    date: 'Jun 2026',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&h=450&fit=crop&auto=format',
  },
  {
    id: 'research-basics',
    cat: 'Research',
    title: 'Important Things to Know Before Starting a Research Project',
    mins: '5',
    date: 'May 2026',
img: 'https://www.brookings.edu/wp-content/uploads/2023/05/shutterstock_2080621228.jpg?w=1500',
},
  {
    id: 'healthcare-ux',
    cat: 'Design',
    title: 'Healthcare UX: What Clinicians Know That Designers Often Miss',
    mins: '6',
    date: 'Apr 2026',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&h=450&fit=crop&auto=format',
  },
  {
    id: 'student-research-tools',
    cat: 'Student Resources',
    title: 'Useful Digital Tools for Healthcare and Physiotherapy Students',
    mins: '4',
    date: 'Mar 2026',
    img: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=700&h=450&fit=crop&auto=format',
  },
  {
    id: 'flutter-healthcare-apps',
    cat: 'Technology',
    title: 'Why Flutter Can Be a Good Choice for Healthcare App Development',
    mins: '6',
    date: 'Feb 2026',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=700&h=450&fit=crop&auto=format',
  },
]

const CATS = ['All', 'Healthcare Technology', 'Digital Healthcare', 'Research', 'Design', 'Student Resources', 'Technology']

function PostCard({ p }: { p: typeof POSTS[0] }) {
  const [hov, setHov] = useState(false)

  return (
    <Link to={`/blog/${p.id}`} style={{ textDecoration: 'none' }}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="h-full rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
        style={{
          background: C.white,
          border: `1px solid ${C.borderL}`,
          transform: hov ? 'translateY(-4px)' : 'none',
        }}
      >
        <div style={{ height: 200, overflow: 'hidden' }}>
          <img
            src={p.img}
            alt={p.title}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{ transform: hov ? 'scale(1.05)' : 'scale(1)', filter: 'brightness(0.88)' }}
          />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Tag>{p.cat}</Tag>
            <span className="text-xs" style={{ color: '#8BA0A0' }}>{p.date} · {p.mins} min read</span>
          </div>

          <h3 className="font-extrabold text-base leading-snug mb-2" style={{ color: C.black }}>{p.title}</h3>

          <p className="text-xs font-bold mt-auto pt-4" style={{ color: C.teal }}>Read Article →</p>
        </div>
      </div>
    </Link>
  )
}

export default function Blog() {
  const [cat, setCat] = useState('All')
  const filtered = POSTS.filter(p => cat === 'All' || p.cat === cat)

  return (
    <div style={{ background: C.ivory, minHeight: '100vh' }}>
      <section className="pt-24 pb-14" style={{ background: C.black }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-extrabold tracking-widest uppercase mb-4" style={{ color: C.textDim }}>
            Journal
          </p>

          <h1 className="font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(30px,4.5vw,48px)', color: C.white }}>
            Ideas, research &<br />things I'm learning.
          </h1>

          <p className="text-base max-w-lg" style={{ color: C.textDim }}>
            Writing on healthcare, technology, research and digital systems for modern care.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-2.5 mb-10">
            {CATS.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className="px-5 py-2 rounded-full text-xs font-bold transition-all"
                style={{
                  background: cat === c ? C.teal : C.white,
                  color: cat === c ? '#fff' : '#5A8A83',
                  border: `1px solid ${cat === c ? C.teal : C.borderL}`,
                  cursor: 'pointer',
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(p => <PostCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>
    </div>
  )
}