import { useParams, Link } from 'react-router'
import { C } from '../lib/palette'
import { Tag } from '../components/ui'

const ARTICLES: Record<string, {
  cat: string
  title: string
  date: string
  mins: string
  intro: string
  img: string
  body: { heading: string; text: string }[]
}> = {
  'healthcare-ai': {
    cat: 'Healthcare Technology',
    date: 'Jul 2026',
    mins: '7',
    title: 'Why AI and Innovative Technology Are Needed in Modern Healthcare',
    intro: 'Healthcare is changing quickly. Good doctors, therapists, nurses and clinical teams will always be the heart of care, but modern healthcare also needs better digital systems, smarter tools and responsible innovation.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop&auto=format',
    body: [
      {
        heading: 'Healthcare Needs More Than Traditional Systems',
        text: 'Many healthcare problems are not only clinical problems. Patients may struggle with long waiting times, missing information, poor follow-up, confusing appointment systems and limited access to professional advice. AI and modern technology can support healthcare by making systems faster, clearer and easier to manage.',
      },
      {
        heading: 'AI Can Support Better Decisions',
        text: 'AI can help organize patient information, identify patterns, support clinical documentation and improve education. It should not replace professional judgment, but it can reduce repetitive work and help healthcare professionals focus more on patient care. Used responsibly, AI becomes a support tool, not a substitute for human expertise.',
      },
      {
        heading: 'Technology Can Improve Patient Access',
        text: 'Telehealth platforms, mobile apps, online booking systems, patient portals and automated reminders can make healthcare easier to reach. These tools are especially useful for follow-up care, education, rehabilitation guidance and communication between patients and providers.',
      },
      {
        heading: 'Innovation Must Stay Ethical and Human',
        text: 'Healthcare technology must protect privacy, avoid false claims and remain understandable for patients. The goal is not to make healthcare look futuristic. The goal is to make care safer, more organized and more accessible while keeping trust at the center.',
      },
    ],
  },

  'healthcare-websites-apps': {
    cat: 'Digital Healthcare',
    date: 'Jun 2026',
    mins: '6',
    title: 'Why Healthcare Systems Need Updated Websites and Apps',
    intro: 'A healthcare website or app is often the first place a patient looks before booking an appointment, asking a question or trusting a service. Outdated digital platforms can make even good healthcare feel difficult to access.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop&auto=format',
    body: [
      {
        heading: 'Patients Search Online First',
        text: 'Before visiting a clinic or contacting a provider, many patients search online. They look for services, timings, location, qualifications, appointment options and basic health information. If a website is outdated, slow or confusing, patients may lose trust before they even speak to anyone.',
      },
      {
        heading: 'Updated Websites Build Trust',
        text: 'A modern healthcare website should be clear, calm and professional. It should explain services in simple language, show contact details clearly and guide visitors toward the next step. Good design matters, but good structure and trustworthy content matter even more.',
      },
      {
        heading: 'Apps Can Support Ongoing Care',
        text: 'Healthcare apps can help with reminders, exercise tracking, appointment updates, educational content and follow-up instructions. For physiotherapy, rehabilitation and chronic care, apps can make the patient journey more consistent outside the clinic.',
      },
      {
        heading: 'Digital Healthcare Should Be Easy to Use',
        text: 'The best healthcare platforms are simple. Patients should not feel lost when booking, reading information or contacting a provider. Clean navigation, readable text, mobile-friendly layouts and accessible design can make healthcare services feel more reliable and easier to reach.',
      },
    ],
  },

'research-basics': {
  cat: 'Research',
  date: 'May 2026',
  mins: '5',
  title: 'Important Things to Know Before Starting a Research Project',
  intro: 'A good research project starts before writing the first chapter. It begins with a focused idea, a clear question and a realistic plan that matches your time, resources and academic requirements.',
  img: 'https://www.brookings.edu/wp-content/uploads/2023/05/shutterstock_2080621228.jpg?w=1500',
 body: [
      {
        heading: 'Start With a Clear Topic',
        text: 'Many students begin with a topic that is too broad. A subject like pain, exercise or rehabilitation is too large on its own. A better research topic should include a specific population, condition, intervention or outcome. The clearer your topic is, the easier the whole project becomes.',
      },
      {
        heading: 'Read Before You Write',
        text: 'Before writing chapters or collecting data, review existing studies. This helps you understand what is already known, where the gaps are and how your project can fit into the current literature. A strong literature base makes your introduction and discussion much easier to write.',
      },
      {
        heading: 'Choose a Realistic Method',
        text: 'Your method should match what you can actually complete. A simple, well-planned study is better than an ambitious project that becomes impossible to finish. Think about sample size, time, tools, permissions and data analysis before finalizing your plan.',
      },
      {
        heading: 'Stay Organized From the Beginning',
        text: 'Keep your references, notes, data and drafts organized from day one. Research becomes stressful when information is scattered. Using folders, reference tools, spreadsheets and a clear writing schedule can save time and reduce confusion later.',
      },
    ],
  },

  'healthcare-ux': {
    cat: 'Design',
    date: 'Apr 2026',
    mins: '6',
    title: 'Healthcare UX: What Clinicians Know That Designers Often Miss',
    intro: 'Healthcare design is different from ordinary app or website design. Patients, students and clinicians use digital tools in moments where clarity, trust and speed matter.',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&auto=format',
    body: [
      {
        heading: 'Healthcare Users Are Not Always Relaxed Users',
        text: 'A patient visiting a healthcare website may be worried, tired or searching urgently. A clinician using a dashboard may be managing multiple tasks at once. Good healthcare UX must reduce confusion and make important actions easy to find.',
      },
      {
        heading: 'Clinical Context Matters',
        text: 'Designers may focus on visual style, while clinicians notice workflow gaps. For example, a patient instruction screen must be readable, medically responsible and practical. A beautiful interface is not enough if it ignores how healthcare decisions are actually made.',
      },
      {
        heading: 'Trust Is Part of the User Experience',
        text: 'Healthcare UX should make people feel safe. Clear language, visible contact options, accessible layouts, privacy awareness and professional tone all shape trust. Small details can affect whether a patient continues or leaves.',
      },
    ],
  },

  'student-research-tools': {
    cat: 'Student Resources',
    date: 'Mar 2026',
    mins: '4',
    title: 'Useful Digital Tools for Healthcare and Physiotherapy Students',
    intro: 'Healthcare students manage lectures, notes, assignments, research papers and clinical learning at the same time. The right digital tools can make studying more organized and less stressful.',
    img: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=1200&h=600&fit=crop&auto=format',
    body: [
      {
        heading: 'Use Tools That Keep Notes Organized',
        text: 'Apps for structured notes, folders and searchable study material can save time during exams and assignments. The best tool is the one you can use consistently, not the one with the most features.',
      },
      {
        heading: 'Reference Tools Help With Research',
        text: 'When writing assignments or research projects, reference managers can help store papers and format citations. Keeping sources organized from the beginning prevents stress when deadlines get close.',
      },
      {
        heading: 'Simple Planning Tools Can Improve Consistency',
        text: 'Calendars, checklists and task boards are useful for tracking lectures, clinical duties and project deadlines. Healthcare education is demanding, so a simple planning system can make your workload easier to manage.',
      },
    ],
  },

  'flutter-healthcare-apps': {
    cat: 'Technology',
    date: 'Feb 2026',
    mins: '6',
    title: 'Why Flutter Can Be a Good Choice for Healthcare App Development',
    intro: 'Healthcare apps need to be reliable, readable and available across devices. Flutter can be a practical choice when a project needs a clean interface and cross-platform development.',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=600&fit=crop&auto=format',
    body: [
      {
        heading: 'One Codebase Can Reach More Users',
        text: 'Flutter allows developers to build apps for Android and iOS from a shared codebase. For healthcare projects, this can reduce development time and make it easier to support patients using different devices.',
      },
      {
        heading: 'Design Consistency Is Easier to Maintain',
        text: 'Healthcare apps need clear layouts, readable text and consistent interactions. Flutter gives developers strong control over UI, which can help create calm, professional and accessible app experiences.',
      },
      {
        heading: 'It Works Well for Patient-Facing Tools',
        text: 'Flutter can be useful for appointment apps, exercise tracking, patient education, reminders and simple telehealth tools. The technology is only one part of the project, but it can support a smooth and practical user experience.',
      },
    ],
  },
}

export default function BlogArticle() {
  const { id } = useParams<{ id: string }>()
  const a = id ? ARTICLES[id] : undefined

  if (!a) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24" style={{ background: C.ivory }}>
        <h2 className="text-2xl font-extrabold mb-4">Article not found</h2>
        <Link to="/blog" style={{ color: C.teal, fontWeight: 700 }}>← Back to Blog</Link>
      </div>
    )
  }

  return (
    <div style={{ background: C.ivory, minHeight: '100vh' }}>
      <div className="relative" style={{ height: 380 }}>
        <img src={a.img} alt={a.title} className="w-full h-full object-cover" style={{ filter: 'brightness(0.55)' }} />

        <div
          className="absolute inset-0 flex flex-col justify-end pb-12 px-6"
          style={{ background: 'linear-gradient(to top, rgba(11,17,19,0.85) 0%, transparent 50%)' }}
        >
          <div className="max-w-3xl mx-auto w-full">
            <Tag>{a.cat}</Tag>

            <h1 className="font-extrabold mt-4 leading-snug" style={{ fontSize: 'clamp(22px,3.5vw,40px)', color: C.white }}>
              {a.title}
            </h1>

            <p className="mt-2 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {a.date} · {a.mins} min read · Ayesha Mustafa
            </p>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <Link
          to="/blog"
          className="text-sm font-bold inline-flex items-center gap-2 mb-6"
          style={{ color: C.teal, textDecoration: 'none' }}
        >
          ← Back to Blog
        </Link>

        <p className="text-lg leading-relaxed font-medium mb-8" style={{ color: '#3A6A62' }}>
          {a.intro}
        </p>

        {a.body.map(section => (
          <div key={section.heading} className="mb-8">
            <h2 className="font-extrabold text-xl mb-3" style={{ color: C.black }}>
              {section.heading}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#5A8A83' }}>
              {section.text}
            </p>
          </div>
        ))}

        <div className="mt-12 pt-8" style={{ borderTop: `1px solid ${C.borderL}` }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-extrabold" style={{ color: C.black }}>Ayesha Mustafa</p>
              <p className="text-sm" style={{ color: '#5A8A83' }}>
                DPT Graduate · Developer · Designer · MEDTECHXA
              </p>
            </div>

            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90"
              style={{ background: C.teal, color: '#fff', textDecoration: 'none' }}
            >
              Work With Me
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}