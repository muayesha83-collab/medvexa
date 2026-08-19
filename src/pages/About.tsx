import { Link } from 'react-router'
import { C } from '../lib/palette'
import { SecLabel, Tag, Pill, BtnPrimary } from '../components/ui'

export default function About() {
  return (
    <div>
      {/* ── hero strip ── */}
      <section className="pt-28 pb-12" style={{ background: C.darkTeal }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-extrabold tracking-widest uppercase mb-4" style={{ color: 'rgba(115, 205, 194, 0.7)' }}>
            About
          </p>
          <h1 className="font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(30px,5vw,50px)', color: C.white }}>
            Healthcare background.<br />Digital mindset.
          </h1>
          <p className="text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
            MEDVEXA by Ayesha Mustafa — a professional digital and healthcare-focused creative brand.
          </p>
        </div>
      </section>

      {/* ── story ── */}
      <section className="py-24" style={{ background: C.ivory }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <SecLabel num="Story" text="Who I Am" />
              <p className="text-base leading-relaxed mb-4" style={{ color: '#5A8A83' }}>
                I’m Dr. Ayesha Mustafa, a healthcare professional working across research, technology, design, and digital development, with a focus on practical applications of AI and technology in healthcare. </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#5A8A83' }}>
                MEDVEXA is my professional platform for showcasing work across healthcare, research, technology, design, and digital development.
                My projects include healthcare-focused research, mobile and web applications, UI/UX design, digital content, and technology-driven solutions. I’m particularly interested in how AI and emerging technologies can improve healthcare, research, education, and patient-facing services.
                This website brings my work together in one place and will continue to expand as I develop new digital healthcare projects and services. </p>
              <p className="text-base leading-relaxed" style={{ color: '#5A8A83' }}>
                MEDVEXA exists at the intersection of those two worlds. It's not a hospital, and it's not a generic freelance profile. It's a professional digital studio with genuine healthcare expertise built in.
                <br />
                <br /> Work With Me

                For freelance projects, collaborations, or professional inquiries, you can contact me through my Upwork profile or get in touch directly through this website.</p>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl" style={{ height: 420 }}>
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop&auto=format"
                  alt="Ayesha Mustafa" className="w-full h-full object-cover" style={{ filter: 'brightness(0.9) contrast(1.05)' }} />
              </div>
              <div className="absolute -bottom-6 -right-4 p-5 rounded-2xl shadow-lg"
                style={{ background: C.black, border: `1px solid ${C.borderD}` }}>
                <p className="text-xs font-extrabold tracking-widest uppercase mb-1" style={{ color: C.teal }}>MEDVEXA</p>
                <p className="text-xs" style={{ color: C.textDim }}>Healthcare × Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── timeline ── */}
      <section className="py-24" style={{ background: C.black }}>
        <div className="max-w-4xl mx-auto px-6">
          <SecLabel num="Journey" text="Timeline" dark />
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 bottom-2 w-px" style={{ background: 'rgba(47,169,155,0.25)' }} />
            {[
              { year: '2021–2026', title: 'Educational and Clinical Journey', desc: 'Doctor of Physical Therapy — clinical training, research methodology and patient care.' },
              { year: '2022+', title: 'Digital Work ', desc: 'Built websites, apps and design projects alongside clinical studies.' },
              { year: '2026', title: 'MEDVEXA Launch', desc: 'Official launch of MEDVEXA as a professional digital and healthcare creative brand.' },
              { year: '2027', title: 'Clinical Services', desc: 'Online physiotherapy and clinical services will be available soon.' },
            ].map(item => (
              <div key={item.year} className="relative mb-10 last:mb-0">
                <div className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full border-2"
                  style={{ background: C.black, borderColor: C.teal }} />
                <p className="text-xs font-extrabold tracking-wider mb-1" style={{ color: C.teal }}>{item.year}</p>
                <p className="font-bold mb-1" style={{ color: C.white }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: C.textDim }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── skills ── */}
      <section className="py-24" style={{ background: C.white }}>
        <div className="max-w-6xl mx-auto px-6">
          <SecLabel num="Skills" text="What I Work With" />
          <div className="flex flex-wrap gap-2.5 mb-12">
            {['Healthcare', 'Physiotherapy', 'Clinical Research', 'Literature Reviews', 'SPSS', 'Thesis Writing',
              'Web Development', 'React', 'Flutter', 'Dart', 'Figma', 'UI/UX', 'Shopify', 'SEO Copywriting',
              'Healthcare Content', 'Branding', 'Logo Design', 'Supabase'].map(s => <Pill key={s}>{s}</Pill>)}
          </div>
          <div className="text-center">
            <Link to="/contact"><BtnPrimary>Work With Me →</BtnPrimary></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
