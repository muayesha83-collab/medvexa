/* ─── Research service detail page template ───
   /research/:id — populated from SERVICES map */
import { useParams, Link } from 'react-router'
import { C } from '../lib/palette'
import { Tag } from '../components/ui'

const SERVICES: Record<string, {
  icon: string; title: string; tag: string; intro: string; howItWorks: string; includes: string[];
}> = {
  thesis: {
    icon: '📝', title: 'Thesis Guidance', tag: 'Research',
    intro: 'Support at every stage of your thesis — from choosing a research question through to the final write-up.',
    howItWorks: 'We start by understanding where you are in your thesis journey. I then provide structured feedback, guidance on methodology choices, chapter-by-chapter support and help with academic writing conventions. All sessions are tailored to your specific topic and level.',
    includes: ['Research question framing', 'Chapter structure planning', 'Methodology guidance', 'Literature positioning', 'Academic writing feedback', 'Referencing (APA, Vancouver, Harvard)', 'Presentation design'],
  },
  literature: {
    icon: '📚', title: 'Literature Reviews', tag: 'Research',
    intro: 'Systematic guidance on finding, evaluating and organising healthcare literature.',
    howItWorks: 'I walk you through the process of conducting a literature search — which databases to use, how to set inclusion/exclusion criteria, how to evaluate sources and how to synthesise findings into a coherent narrative.',
    includes: ['Database search strategy', 'PubMed / Google Scholar / Cochrane', 'PRISMA flow diagrams', 'Critical appraisal tools', 'Note organisation methods', 'Synthesis guidance', 'Referencing support'],
  },
  spss: {
    icon: '📊', title: 'SPSS & Research Methods', tag: 'Statistics',
    intro: 'Make sense of your data. Guidance on SPSS, statistical concepts and research design.',
    howItWorks: 'I help you understand which statistical test fits your data, how to run it in SPSS and how to interpret the output for your results chapter. Suitable for undergraduate and postgraduate healthcare research.',
    includes: ['Descriptive statistics', 'Inferential statistics', 't-tests, ANOVA, Chi-square', 'Correlation & regression overview', 'Results interpretation', 'Tables & figures guidance', 'Research design concepts'],
  },
  academic: {
    icon: '🎓', title: 'Academic Support', tag: 'Education',
    intro: 'Tutoring and guidance to help you understand topics, structure your work and improve your academic writing.',
    howItWorks: "Sessions are tailored to what you need — whether that's understanding a clinical concept, planning an assignment structure, improving your academic writing style or preparing a presentation.",
    includes: ['Topic explanation & tutoring', 'Assignment structure guidance', 'Academic writing style', 'Referencing', 'Presentation planning', 'Revision support'],
  },
  writing: {
    icon: '✍️', title: 'Research & Healthcare Writing', tag: 'Writing',
    intro: 'Professionally written healthcare content — accurate, clear and patient-friendly.',
    howItWorks: 'I write healthcare articles, research summaries and patient-facing content grounded in clinical knowledge. Suitable for healthcare blogs, websites, reports and educational resources.',
    includes: ['Healthcare blog posts', 'Research summaries', 'Patient information resources', 'Website healthcare content', 'Academic content writing'],
  },
  lectures: {
    icon: '🎤', title: 'Online Lectures', tag: 'Tutoring',
    intro: 'One-to-one and small-group teaching for healthcare and physiotherapy students.',
    howItWorks: 'Sessions cover anatomy, physiology, kinesiology, exercise therapy, rehabilitation and research methods. I explain difficult topics clearly, at the pace that works for you, using examples and clinical context.',
    includes: ['Anatomy', 'Physiology', 'Kinesiology', 'Exercise Therapy', 'Rehabilitation', 'Research Methods', 'Flexible scheduling'],
  },
}

export default function ResearchProject() {
  const { id } = useParams<{ id: string }>()
  const s = id ? SERVICES[id] : undefined

  if (!s) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24" style={{ background: C.ivory }}>
        <h2 className="text-2xl font-extrabold mb-4">Service not found</h2>
        <Link to="/research" style={{ color: C.teal, fontWeight: 700 }}>← Back to Research</Link>
      </div>
    )
  }

  return (
    <div style={{ background: C.ivory, minHeight: '100vh' }}>
      {/* header */}
      <section className="pt-36 pb-20" style={{ background: C.darkTeal }}>
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/research" className="text-xs font-bold mb-8 inline-flex items-center gap-2"
            style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>← Research & Education</Link>
          <div className="flex items-center gap-5 mt-6 mb-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
              style={{ background: 'rgba(47,169,155,0.2)' }}>{s.icon}</div>
            <div>
              <Tag>{s.tag}</Tag>
              <h1 className="font-extrabold text-3xl md:text-4xl mt-2" style={{ color: C.white }}>{s.title}</h1>
            </div>
          </div>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.intro}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-extrabold text-xl mb-3" style={{ color: C.black }}>How It Works</h2>
              <p className="text-base leading-relaxed" style={{ color: '#5A8A83' }}>{s.howItWorks}</p>
            </div>
            <div className="p-6 rounded-2xl" style={{ background: 'rgba(47,169,155,0.07)', border: `1px solid rgba(47,169,155,0.15)` }}>
              <p className="text-xs font-extrabold tracking-widest uppercase mb-1" style={{ color: C.teal }}>Important</p>
              <p className="text-sm leading-relaxed" style={{ color: '#4A7A72' }}>
                All sessions are tutoring and guidance — supporting your own learning and understanding. This service does not complete assessed academic work on your behalf.
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <div className="p-6 rounded-2xl" style={{ background: C.white, border: `1px solid ${C.borderL}` }}>
              <p className="text-xs font-extrabold tracking-widest uppercase mb-4" style={{ color: C.teal }}>Includes</p>
              <ul className="space-y-2">
                {s.includes.map(i => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#5A8A83' }}>
                    <span style={{ color: C.teal, marginTop: 2 }}>✓</span> {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl text-center" style={{ background: C.black }}>
              <p className="text-sm font-bold mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>Ready to get started?</p>
              <Link to="/contact"
                className="inline-block px-5 py-2.5 rounded-full text-sm font-bold"
                style={{ background: C.teal, color: '#fff', textDecoration: 'none' }}>
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
