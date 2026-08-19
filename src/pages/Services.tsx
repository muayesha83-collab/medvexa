import { useState } from 'react'
import { Link } from 'react-router'
import { C } from '../lib/palette'
import { SecLabel, Tag, Pill, BtnPrimary } from '../components/ui'

function ServiceGroup({ icon, label, desc, items, dark }: {
  icon: string; label: string; desc: string; items: string[]; dark?: boolean
}) {
  const [hov, setHov] = useState(false)
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className="p-8 rounded-2xl transition-all duration-300"
      style={{
        background: dark
          ? hov ? 'rgba(47,169,155,0.07)' : 'rgba(255,255,255,0.03)'
          : hov ? 'rgba(47,169,155,0.06)' : C.white,
        border: `1px solid ${dark ? C.borderD : hov ? 'rgba(47,169,155,0.3)' : C.borderL}`,
        transform: hov ? 'translateY(-4px)' : 'none',
      }}>
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-6"
        style={{ background: dark ? 'rgba(47,169,155,0.12)' : 'rgba(47,169,155,0.1)' }}>{icon}</div>
      <p className="text-xs font-extrabold tracking-widest uppercase mb-2" style={{ color: C.teal }}>{label}</p>
      <p className="text-sm leading-relaxed mb-5" style={{ color: dark ? C.textDim : '#5A8A83' }}>{desc}</p>
      <div className="flex flex-wrap gap-2">
        {items.map(i => <Pill key={i} dark={dark}>{i}</Pill>)}
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <div>
      {/* header */}
      <section className="pt-28 pb-12" style={{ background: C.darkTeal }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-extrabold tracking-widest uppercase mb-4" style={{ color: 'rgba(47,169,155,0.6)' }}> Services</p>
          <h1 className="font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(30px,5vw,50px)', color: C.white }}>
            Different skills.<br />One purpose.
          </h1>
          <p className="text-base max-w-lg" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Healthcare knowledge meets digital craft. Everything built to function, communicate and deliver real value.
          </p>
        </div>
      </section>

      {/* BUILD + DESIGN — ivory */}
      <section className="py-18" style={{ background: C.ivory }}>
        <div className="max-w-6xl mx-auto px-6">
          <SecLabel num="" text="Build & Design" />
          <div className="grid sm:grid-cols-2 gap-5">
            <ServiceGroup icon="🚀" label="Build"
              desc="Websites, landing pages, e-commerce stores, Flutter apps and custom features — built to be fast, accessible and easy to manage."
              items={['Websites', 'Landing Pages', 'Flutter Apps', 'Shopify Stores', 'New Features', 'Custom Development']} />
            <ServiceGroup icon="🎨" label="Design"
              desc="UI/UX design, Figma prototypes, website redesigns, dashboards, logos and graphics."
              items={['UI/UX', 'Figma Prototypes', 'Redesign', 'Dashboards', 'Logos', 'Graphics', 'Branding']} />
          </div>
        </div>
      </section>

      {/* WRITE + RESEARCH — black */}
      <section className="py-18" style={{ background: C.black }}>
        <div className="max-w-6xl mx-auto px-6">
          <SecLabel num="" text="Write & Research" dark />
          <div className="grid sm:grid-cols-2 gap-5">
            <ServiceGroup icon="✍️" label="Write" dark
              desc="Website content, healthcare blog posts, product copy and professional healthcare writing."
              items={['Blog Posts', 'Website Content', 'Healthcare Articles', 'Product Copy', 'Patient Resources']} />
            <ServiceGroup icon="🔬" label="Research & Learn" dark
              desc="Thesis guidance, literature reviews, SPSS support, academic writing and online lectures for healthcare students."
              items={['Thesis Guidance', 'Literature Reviews', 'SPSS Guidance', 'Academic Support', 'Online Lectures', 'Research Writing']} />
          </div>
          <p className="text-xs mt-6 text-center" style={{ color: '#3A5552' }}>
            Research services provide guidance and tutoring — not completing assessed work on behalf of students.
          </p>
        </div>
      </section>

      {/* make it better — beige */}
      <section className="py-18" style={{ background: C.beige }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-3xl p-10 md:p-14 text-center"
            style={{ background: C.white, border: `1px solid ${C.borderL}` }}>
            <Tag>Already Have a Website?</Tag>
            <h2 className="font-extrabold mt-6 mb-4" style={{ fontSize: 'clamp(24px,3.5vw,36px)', color: C.black }}>
              Let's make it better.
            </h2>
            <p className="text-base max-w-lg mx-auto mb-8" style={{ color: '#5A8A83' }}>
              Redesign outdated interfaces, add new features, improve responsiveness or turn an existing idea into something professional.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: '🔄', t: 'Redesign',          d: 'Modernize an existing website.' },
                { icon: '⚙️', t: 'New Features',      d: 'Add the functionality you need.' },
                { icon: '🚀', t: 'Build From Scratch', d: 'Turn an idea into a digital product.' },
              ].map(c => (
                <div key={c.t} className="p-5 rounded-2xl" style={{ background: C.ivory, border: `1px solid ${C.borderL}` }}>
                  <span className="text-2xl block mb-2">{c.icon}</span>
                  <p className="font-bold text-sm mb-1">{c.t}</p>
                  <p className="text-xs" style={{ color: '#5A8A83' }}>{c.d}</p>
                </div>
              ))}
            </div>
            <Link to="/contact"><BtnPrimary>Tell Me What You Need →</BtnPrimary></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
