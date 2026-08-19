import { C } from '../lib/palette'
import { Tag } from '../components/ui'

export default function Contact() {
  return (
    <div style={{ background: C.black, minHeight: '100vh' }}>
      <section className="pt-36 pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Tag>Get In Touch</Tag>
          <h1 className="font-extrabold mt-6 mb-4" style={{ fontSize: 'clamp(32px,5vw,52px)', color: C.white }}>
            Have a project in mind?
          </h1>
          <p className="text-base mb-16" style={{ color: C.textDim }}>
            Tell me what you're working on and where you'd like to take it. Since client work runs through Upwork, that's the quickest way to get started.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 max-w-xl mx-auto">
           <a href="https://www.upwork.com/freelancers/~01aefb577e2b815482?mp_source=share"
              target="_blank"
              rel="noreferrer"
             
              className="flex flex-col items-center gap-4 p-8 rounded-2xl text-center hover:-translate-y-1 transition-all duration-200 group"
              style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.borderD}`, textDecoration: 'none' }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: 'rgba(47,169,155,0.15)' }}>💼</div>
              <div>
                <p className="font-extrabold text-lg mb-1" style={{ color: C.white }}>Hire on Upwork</p>
                <p className="text-sm mb-4" style={{ color: C.textDim }}>
                  View my profile, see client reviews and hire directly. Best for project-based work.
                </p>
                <span className="inline-block px-5 py-2 rounded-full text-xs font-bold"
                  style={{ background: C.teal, color: '#fff' }}>View Upwork Profile →</span>
              </div>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61592390681403"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-4 p-8 rounded-2xl text-center hover:-translate-y-1 transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.borderD}`, textDecoration: 'none' }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: 'rgba(47,169,155,0.15)' }}>📘</div>
              <div>
                <p className="font-extrabold text-lg mb-1" style={{ color: C.white }}>Connect on Facebook</p>
                <p className="text-sm mb-4" style={{ color: C.textDim }}>
                  Follow my work, reach out directly or get in touch informally.
                </p>
                <span className="inline-block px-5 py-2 rounded-full text-xs font-bold"
                  style={{ border: `1.5px solid rgba(255,255,255,0.2)`, color: 'rgba(255,255,255,0.7)' }}>Visit Facebook →</span>
              </div>
            </a>
          </div>

          {/* founding offer reminder */}
          <div className="mt-12 p-6 rounded-2xl max-w-xl mx-auto"
            style={{ background: 'rgba(110,36,40,0.1)', border: `1px solid rgba(155,61,63,0.25)` }}>
            <p className="text-xs font-extrabold tracking-widest uppercase mb-2" style={{ color: C.red }}>◆ Founding Client Offer</p>
            <p className="text-sm leading-relaxed" style={{ color: C.textDim }}>
              First 10 orders under $500 receive a special introductory discount. Mention this when you get in touch.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
