import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { C } from '../lib/palette'
import { Tag, Pill, SecLabel, BtnPrimary, BtnOutline } from '../components/ui'

/* ── floating hero badge ── */
function FloatBadge({ icon, title, sub, delay }: { icon: string; title: string; sub: string; delay: string }) {
  return (
    <div className="float px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-xl"
      style={{ animationDelay: delay, background: 'rgba(245,241,234,0.92)', backdropFilter: 'blur(12px)', border: `1px solid rgba(245,241,234,0.5)` }}>
      <div className="w-8 h-8 rounded-xl flex items-center justify-center text-base flex-shrink-0"
        style={{ background: 'rgba(47,169,155,0.15)' }}>{icon}</div>
      <div>
        <p className="text-xs font-extrabold" style={{ color: C.black }}>{title}</p>
        <p className="text-xs" style={{ color: '#5A8A83' }}>{sub}</p>
      </div>
    </div>
  )
}

/* ── service preview card ── */
function ServiceCard({
  icon,
  label,
  items,
  tone,
  delay,
}: {
  icon: string
  label: string
  items: string[]
  tone: string
  delay: string
}) {
  const [hov, setHov] = useState(false)

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="service-float-card p-6 rounded-2xl cursor-default"
      style={{
        background: tone,
        border: '1px solid rgba(255,255,255,0.55)',
        boxShadow: hov
          ? '0 26px 70px rgba(18,59,58,0.18)'
          : '0 18px 45px rgba(18,59,58,0.09)',
        animationDelay: delay,
      }}
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-7"
        style={{
          background: 'rgba(255,255,255,0.62)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.6)',
        }}
      >
        {icon}
      </div>

      <p className="text-xs font-extrabold tracking-widest uppercase mb-4" style={{ color: C.darkTeal }}>
        {label}
      </p>

      <div className="flex flex-wrap gap-2">
        {items.map(i => <Pill key={i}>{i}</Pill>)}
      </div>
    </div>
  )
}

/* ── featured project card ── */
function FeatCard({ tag, title, sub, img, href }: { tag: string; title: string; sub: string; img: string; href: string }) {
  const [hov, setHov] = useState(false)
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.borderD}`, transform: hov ? 'translateY(-4px)' : 'none' }}>
      <div className="overflow-hidden" style={{ height: 200 }}>
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hov ? 'scale(1.05)' : 'scale(1)', filter: 'brightness(0.72)' }} />
      </div>
      <div className="p-6">
        <Tag>{tag}</Tag>
        <h3 className="font-extrabold text-lg mt-3 mb-1" style={{ color: C.white }}>{title}</h3>
        <p className="text-sm mb-4" style={{ color: C.textDim }}>{sub}</p>
        <Link to={href} style={{ color: C.teal, textDecoration: 'none', fontSize: 13, fontWeight: 700 }}>
          View Project →
        </Link>
      </div>
    </div>
  )
}

/* ── blog preview card ── */
function BlogCard({ cat, title, mins, img, href }: { cat: string; title: string; mins: string; img: string; href: string }) {
  const [hov, setHov] = useState(false)
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{ background: C.white, border: `1px solid ${C.borderL}`, transform: hov ? 'translateY(-3px)' : 'none' }}>
      <div className="overflow-hidden" style={{ height: 160 }}>
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hov ? 'scale(1.05)' : 'scale(1)', filter: 'brightness(0.9)' }} />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2"><Tag>{cat}</Tag><span className="text-xs" style={{ color: '#8BA0A0' }}>{mins} min</span></div>
        <h3 className="font-bold text-sm leading-snug mb-3" style={{ color: C.black }}>{title}</h3>
        <Link to={href} style={{ color: C.teal, fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>Read →</Link>
      </div>
    </div>
  )
}

/* ── notification modal ── */
function NotifyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(11,17,19,0.6)', backdropFilter: 'blur(8px)' }} onClick={onClose}>
      <div className="rounded-2xl p-8 max-w-sm w-full relative shadow-2xl"
        style={{ background: C.ivory, border: `1px solid ${C.borderL}` }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer', color: '#8BA0A0', fontSize: 18 }}>✕</button>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ background: C.tealSoft }}>🩺</div>
        <Tag>Coming Soon</Tag>
        <h3 className="text-lg font-extrabold mt-4 mb-2" style={{ color: C.black }}>Clinical Services</h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#5A8A83' }}>
          Online clinical services will be available soon. Leave your email to be notified when they launch.
        </p>
        <input placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl text-sm outline-none"
          style={{ background: C.beige, border: `1px solid ${C.borderL}`, color: C.black }} />
        <button className="mt-3 w-full py-3 rounded-xl text-sm font-bold hover:opacity-90"
          style={{ background: C.teal, color: '#fff', border: 'none', cursor: 'pointer' }}>Notify Me</button>
      </div>
    </div>
  )
}
function AboutShuffleCards() {
  const [active, setActive] = useState(false)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const timerRef = useRef<number | null>(null)

  const cards = [
    {
      icon: '🎨',
      label: 'UI/UX Design',
      desc: 'Figma · Prototyping · Wireframes · App & Web Design',
      bg: '#F4E8DC',
      color: C.burg,
    },
    {
      icon: '💻',
      label: 'Web Development',
      desc: 'Websites · React · Responsive Design · Shopify',
      bg: '#E7F0F4',
      color: '#1F5D68',
    },
    {
      icon: '📱',
      label: 'App Development',
      desc: 'Flutter · Mobile Apps · Features · UI Implementation',
      bg: '#E9EEF7',
      color: '#294E7A',
    },
    {
      icon: '🔬',
      label: 'Research Support',
      desc: 'Thesis · SPSS · Literature Reviews · Academic Writing',
      bg: '#EAF4EE',
      color: '#2F6F5E',
    },
    {
      icon: '✍️',
      label: 'Content & SEO',
      desc: 'Blogs · SEO Content · Healthcare Writing · Copywriting',
      bg: '#F5E7EA',
      color: C.red,
    },
    {
      icon: '📄',
      label: 'Professional Documents',
      desc: 'CVs · Resumes · Presentations · Academic Documents',
      bg: '#E0F5F2',
      color: C.darkTeal,
    },
  ]

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (timerRef.current) window.clearTimeout(timerRef.current)

          setActive(false)

          timerRef.current = window.setTimeout(() => {
            setActive(true)
          }, 80)
        } else {
          setActive(false)
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(el)

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={wrapRef} className={`about-shuffle-wrap ${active ? 'is-active' : ''}`}>
      {cards.map((c, index) => (
        <div
          key={c.label}
          className="about-shuffle-card p-5 rounded-2xl text-center"
          style={{
            background: c.bg,
            border: `1px solid rgba(11,17,19,0.08)`,
            boxShadow: '0 18px 45px rgba(18,59,58,0.08)',
            transitionDelay: `${index * 0.06}s`,
          }}
        >
          <div
            className="w-12 h-12 mx-auto mb-3 rounded-2xl flex items-center justify-center text-2xl"
            style={{ background: 'rgba(255,255,255,0.65)' }}
          >
            {c.icon}
          </div>
          <p className="font-extrabold text-sm mb-1" style={{ color: c.color }}>{c.label}</p>
          <p className="text-xs leading-relaxed" style={{ color: '#5A8A83' }}>{c.desc}</p>
        </div>
      ))}
    </div>
  )
}
/* ════════════════════════ PAGE ════════════════════════ */
export default function Home() {
  const [notifyOpen, setNotifyOpen] = useState(false)

  return (
    <div>
      <NotifyModal open={notifyOpen} onClose={() => setNotifyOpen(false)} />

      {/* ══ HERO — deep black ══ */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
        style={{ background: C.black }}>
        {/* subtle noise texture via radial dots */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(47,169,155,0.07) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        {/* top-right glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(18,59,58,0.5) 0%, transparent 65%)' }} />

        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* left */}
            <div className="fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-xs font-semibold"
                style={{ background: 'rgba(47,169,155,0.1)', border: `1px solid rgba(47,169,155,0.2)`, color: C.teal }}>
                <span className="w-1.5 h-1.5 rounded-full pulse-ring" style={{ background: C.teal }} />
                Available for freelance projects
              </div>
              <p className="text-xs font-extrabold tracking-widest uppercase mb-5" style={{ color: C.textDim }}>
                Healthcare · Developer · Researcher · Designer
              </p>
              <h1 className="font-extrabold leading-[1.08] mb-4"
                style={{ fontSize: 'clamp(30px, 4.3vw, 50px)', color: C.white }}>
                Healthcare<br />knowledge.<br />
                <span style={{ color: C.teal }}>Digital creativity.</span><br />
                Real solutions.
              </h1>
              <p className="text-base leading-relaxed mb-10 max-w-md" style={{ color: C.textDim }}>
                MEDTECHXA combines healthcare, technology, research and design to create useful digital products, websites, applications and content.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/work">
                  <BtnPrimary>Explore My Work</BtnPrimary>
                </Link>
                <Link to="/contact">
                  <BtnOutline dark>Work With Me</BtnOutline>
                </Link>
              </div>
            </div>

            {/* right — portrait + float badges */}
            <div className="relative flex justify-center items-center mt-8 md:mt-0">
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl"
                style={{ border: `1px solid rgba(47,169,155,0.2)` }}>
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=640&h=800&fit=crop&auto=format"
                  alt="Ayesha Mustafa — MEDTECHXA"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.8) contrast(1.05)' }}
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(11,17,19,0.55) 0%, transparent 55%)' }} />
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs font-bold" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em' }}>MEDTECHXA</p>
                </div>
              </div>
              <div className="absolute -left-6 top-8"><FloatBadge icon="🎓" title="Medical" sub="Healthcare" delay="0s" /></div>
              <div className="absolute -right-4 top-20"><FloatBadge icon="📱" title="Flutter" sub="App Dev" delay="0.7s" /></div>
              <div className="absolute -left-8 bottom-24"><FloatBadge icon="🔬" title="Research" sub="Healthcare" delay="1.2s" /></div>
              <div className="absolute -right-6 bottom-10"><FloatBadge icon="🎨" title="UI / UX" sub="Design" delay="1.8s" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SHORT ABOUT — ivory ══ */}
      <section style={{ background: C.ivory }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SecLabel num="" text="About MEDTECHXA" />
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-extrabold leading-tight mb-5" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: C.black }}>
                Healthcare background.<br />Digital mindset.
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#5A8A83' }}>
                H, I am DR. Ayesha Mustafa , **MEDTECHXA** is my professional website and digital workspace, where I showcase my freelance work across healthcare, research, design, development, and content creation. With a background in physiotherapy and healthcare, I bring both subject knowledge and digital skills to the projects I work on.

                <br />
                <br /> MEDTECHXA is also growing into a healthcare platform. Soon, I plan to offer online physiotherapy consultations and telehealth services, bringing professional healthcare support directly to patients through a convenient digital experience.
              </p>
              <Link to="/about">
                <BtnOutline>Learn More →</BtnOutline>
              </Link>
            </div>
            <AboutShuffleCards />
          </div>
        </div>
      </section>

      {/* ══ SERVICES PREVIEW — white ══ */}
      <section style={{ background: C.white }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SecLabel num="" text="Services" />
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <h2 className="font-extrabold" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: C.black }}>
              Different skills.<br />One purpose.
            </h2>
            <Link to="/services"><BtnPrimary>All Services →</BtnPrimary></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ServiceCard
              icon="🚀"
              label="Build"
              items={['Websites', 'Flutter Apps', 'Shopify', 'Features']}
              tone="linear-gradient(135deg, #3e9386 0%, #FFFFFF 52%, #D8EFEA 100%)"
              delay="0s"
            />
            <ServiceCard
              icon="🎨"
              label="Design"
              items={['UI/UX', 'Figma', 'Logos', 'Redesign']}
              tone="linear-gradient(135deg, #df8f3f 0%, #FFFFFF 54%, #E7F0F4 100%)"
              delay="0.45s"
            />
            <ServiceCard
              icon="✍️"
              label="Write"
              items={['Blog Posts', 'Healthcare Content', 'SEO']}
              tone="linear-gradient(135deg, #822438 0%, #FFFFFF 55%, #E0F5F2 100%)"
              delay="0.9s"
            />
            <ServiceCard
              icon="🔬"
              label="Research"
              items={['Thesis', 'Literature Reviews', 'SPSS', 'Lectures']}
              tone="linear-gradient(135deg, #465d89 0%, #FFFFFF 52%, #EAF4EE 100%)"
              delay="1.35s"
            />
          </div>
        </div>
      </section>

      {/* ══ FEATURED PROJECTS — deep black ══ */}
      <section style={{ background: C.black }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SecLabel num="" text="Featured Work" dark />
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <h2 className="font-extrabold" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: C.white }}>
              Projects I have been working on      </h2>
            <Link to="/work"><BtnOutline dark>View All Work →</BtnOutline></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <FeatCard tag="Flutter App" title="FITTRACK"
              sub="Voice-powered fitness & exercise app with rep counting and workout tracking."
              img="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&h=450&fit=crop&auto=format"
              href="/work/fittrack" />
            <FeatCard tag="Web Design" title="Healthcare Website"
              sub="Modern telehealth interface and healthcare website concept."
              img="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&h=450&fit=crop&auto=format"
              href="/work/healthcare-website" />
            <FeatCard tag="Web Dev" title="DriveEase"
              sub="Car rental website with vehicle browsing and booking-oriented UI."
              img="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&h=450&fit=crop&auto=format"
              href="/work/driveease" />
          </div>
        </div>
      </section>

      {/* ══ RESEARCH PREVIEW — ivory ══ */}
      <section style={{ background: C.ivory }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SecLabel num="" text="Research & Education" />
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-extrabold leading-tight mb-5" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', color: C.black }}>
                Healthcare research,<br />explained clearly.
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#5A8A83' }}>
                Thesis guidance, literature reviews, SPSS support, academic writing and online lectures — all framed as tutoring and guidance, not replacing your own work.
              </p>
              <Link to="/research"><BtnPrimary>Research Services →</BtnPrimary></Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['Thesis Guidance', 'Literature Reviews', 'SPSS Guidance', 'Online Lectures', 'Academic Support', 'Research Writing'].map(s => (
                <div key={s} className="flex items-center gap-3 p-4 rounded-xl"
                  style={{ background: C.white, border: `1px solid ${C.borderL}` }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: C.teal }} />
                  <span className="text-sm font-semibold" style={{ color: C.black }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ BLOG PREVIEW — beige ══ */}
      <section style={{ background: C.beige }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SecLabel num="" text="Journal" />
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <h2 className="font-extrabold" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', color: C.black }}>
              Ideas, research &<br />things to learn.
            </h2>
            <Link to="/blog"><BtnOutline>All Articles →</BtnOutline></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">

            <BlogCard
              cat="Healthcare Technology"
              title="Why AI and Innovative Technology Are Needed in Modern Healthcare"
              mins="7"
              img="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&auto=format"
              href="/blog/healthcare-ai"
            />

            <BlogCard
              cat="Design"
              title="Healthcare UX: What Clinicians Know That Designers Often Miss"
              mins="6"
              img="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&auto=format"
              href="/blog/healthcare-ux"
            />

            <BlogCard
              cat="Technology"
              title="Why Flutter Can Be a Good Choice for Healthcare App Development"
              mins="6"
              img="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop&auto=format"
              href="/blog/flutter-healthcare-apps"
            />

          </div>
        </div>
      </section>

      {/* ══ CLINICAL — soft teal strip ══ */}
      <section style={{ background: 'rgba(47,169,155,0.08)', borderTop: `1px solid rgba(47,169,155,0.15)`, borderBottom: `1px solid rgba(47,169,155,0.15)` }} className="py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <SecLabel num="" text="Clinical Services" />
          <h2 className="font-extrabold text-2xl mb-2" style={{ color: C.black }}>Clinical Services</h2>
          <p className="text-base mb-6" style={{ color: '#5A8A83' }}>Online clinical services coming soon.</p>
          <button onClick={() => setNotifyOpen(true)}
            className="px-6 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-all"
            style={{ background: C.darkTeal, color: C.white, border: 'none', cursor: 'pointer' }}>
            Notify Me When Available →
          </button>
        </div>
      </section>

      {/* ══ LAUNCH OFFER — ivory with burgundy accent ══ */}
      <section style={{ background: C.ivory }} className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
            style={{ background: C.black, border: `1px solid rgba(110,36,40,0.3)` }}>
            {/* burgundy accent glow top-right */}
            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at top right, rgba(110,36,40,0.25) 0%, transparent 65%)' }} />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1.5 rounded-full text-xs font-extrabold tracking-widest uppercase mb-6"
                style={{ background: 'rgba(155,61,63,0.15)', color: C.red, border: `1px solid rgba(155,61,63,0.25)` }}>
                ◆ Founding Client Offer · 10 Orders Only
              </span>
              <h2 className="font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', color: C.white }}>
                Limited introductory discount<br />for your first project.
              </h2>
              <p className="text-base leading-relaxed mb-8 max-w-xl" style={{ color: C.textDim }}>
                MEDTECHXA is accepting a small number of founding clients at a special introductory rate for projects under $500. This is a one-time offer — once the first 10 orders are placed, standard pricing applies.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                {['Websites', 'Flutter Apps', 'UI/UX Design', 'Content', 'Research Support'].map(s => (
                  <span key={s} className="flex items-center gap-2 text-sm font-semibold"
                    style={{ color: C.textDim }}>
                    <span style={{ color: C.teal }}>✓</span> {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/contact">
                  <BtnPrimary>Claim the Offer →</BtnPrimary>
                </Link>
                <p className="text-xs" style={{ color: '#5A7A76' }}>
                  Discount applied automatically — no code needed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT CTA — deep black ══ */}
      <section style={{ background: C.black }} className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Tag>Get In Touch</Tag>
          <h2 className="font-extrabold mt-6 mb-4" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: C.white }}>
            Have a project in mind?
          </h2>
          <p className="text-base mb-10" style={{ color: C.textDim }}>
            Tell me what you're working on and where you'd like to take it.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <a href="https://www.upwork.com/freelancers/~01aefb577e2b815482?mp_source=share"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl text-left hover:-translate-y-1 transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.borderD}`, textDecoration: 'none' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ background: 'rgba(47,169,155,0.15)' }}>💼</div>
              <div>
                <p className="font-bold text-sm" style={{ color: C.white }}>Hire on Upwork</p>
                <p className="text-xs" style={{ color: C.teal }}>View Upwork Profile →</p>
              </div>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61592390681403"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl text-left hover:-translate-y-1 transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.borderD}`, textDecoration: 'none' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ background: 'rgba(47,169,155,0.15)' }}>📘</div>
              <div>
                <p className="font-bold text-sm" style={{ color: C.white }}>Connect on Facebook</p>
                <p className="text-xs" style={{ color: C.teal }}>Visit Facebook →</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
