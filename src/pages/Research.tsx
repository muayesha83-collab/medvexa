import { Link } from 'react-router'
import { C } from '../lib/palette'
import { SecLabel, Tag, BtnPrimary } from '../components/ui'

const SERVICES = [
  {
    id: 'thesis', icon: '📝', title: 'Thesis Guidance',
    desc: 'Structure, methodology guidance and writing feedback at each stage of your thesis.',
    items: ['Research structure', 'Chapter planning', 'Methodology support', 'Writing feedback', 'Presentation design'],
  },
  {
    id: 'literature', icon: '📚', title: 'Literature Reviews',
    desc: 'Help finding, evaluating and organising healthcare research for your literature review.',
    items: ['Database searching', 'Source evaluation', 'Note organisation', 'Synthesis guidance', 'APA / Vancouver referencing'],
  },
  {
    id: 'spss', icon: '📊', title: 'SPSS & Research Methods',
    desc: 'Data analysis concepts, interpretation guidance and statistical methodology support.',
    items: ['SPSS navigation', 'Descriptive stats', 'Inferential stats', 'Results interpretation', 'Research design'],
  },
  {
    id: 'academic', icon: '🎓', title: 'Academic Support',
    desc: 'Help understanding topics, structuring assignments and improving academic writing.',
    items: ['Topic explanation', 'Assignment structure', 'Academic writing', 'Referencing', 'Presentations'],
  },
  {
    id: 'writing', icon: '✍️', title: 'Research & Healthcare Writing',
    desc: 'Clear, accurate written content for healthcare blogs, reports and patient resources.',
    items: ['Healthcare articles', 'Research summaries', 'Patient resources', 'Academic content', 'Blog posts'],
  },
  {
    id: 'lectures', icon: '🎤', title: 'Online Lectures',
    desc: 'One-to-one tutoring on anatomy, physiology, kinesiology and research methods.',
    items: ['Anatomy', 'Physiology', 'Kinesiology', 'Exercise Therapy', 'Rehabilitation', 'Research Methods'],
  },
]

export default function Research() {
  return (
    <div>
      {/* header */}
      <section className="pt-28 pb-12" style={{ background: C.darkTeal }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-extrabold tracking-widest uppercase mb-4" style={{ color: 'rgba(47,169,155,0.6)' }}>Research & Education</p>
          <h1 className="font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(30px,5vw,50px)', color: C.white }}>
            Healthcare research,<br />explained clearly.
          </h1>
          <p className="text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Guidance, support and tutoring — framed around your own learning and understanding, not completing assessed work for you.
          </p>
        </div>
      </section>

      {/* service cards — ivory */}
      <section className="py-18" style={{ background: C.ivory }}>
        <div className="max-w-6xl mx-auto px-6">
          <SecLabel num="" text="What I Offer" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(s => (
              <Link key={s.id} to={`/research/${s.id}`} style={{ textDecoration: 'none' }}>
                <div className="p-7 rounded-2xl h-full transition-all duration-300 group hover:-translate-y-1"
                  style={{ background: C.white, border: `1px solid ${C.borderL}`, cursor: 'pointer' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-5"
                    style={{ background: 'rgba(47,169,155,0.1)' }}>{s.icon}</div>
                  <h3 className="font-extrabold text-base mb-2" style={{ color: C.black }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#5A8A83' }}>{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.slice(0, 3).map(i => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-full font-semibold"
                        style={{ background: C.ivory, color: '#4A7A72', border: `1px solid ${C.borderL}` }}>
                        {i}
                      </span>
                    ))}
                    {s.items.length > 3 && (
                      <span className="text-xs px-2.5 py-1 rounded-full" style={{ color: C.teal }}>+{s.items.length - 3} more</span>
                    )}
                  </div>
                  <p className="text-xs font-bold mt-5" style={{ color: C.teal }}>Learn More →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* disclaimer — beige */}
      <section className="py-16" style={{ background: C.beige }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="p-8 rounded-2xl" style={{ background: C.white, border: `1px solid ${C.borderL}` }}>
            <Tag>Important Note</Tag>
            <h3 className="font-extrabold text-lg mt-4 mb-3" style={{ color: C.black }}>Guidance & Tutoring Only</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#5A8A83' }}>
              All research services are provided as educational guidance and tutoring to support your own learning. This service does not involve completing assessed coursework, dissertations or examination work on your behalf.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: C.black }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-extrabold text-2xl mb-4" style={{ color: C.white }}>Ready to get started?</h2>
          <p className="text-base mb-8" style={{ color: C.textDim }}>Reach out through Upwork or Facebook to discuss your needs.</p>
          <Link to="/contact"><BtnPrimary>Get In Touch →</BtnPrimary></Link>
        </div>
      </section>
    </div>
  )
}
