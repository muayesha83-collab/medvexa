/* ─── Project detail page ─── */
import { useParams, Link } from 'react-router'
import { C } from '../lib/palette'
import { Tag, Pill } from '../components/ui'

type Project = {
  tag: string
  title: string
  sub: string
  year: string
  overview: string
  whatIBuilt: string
  img: string
  techs: string[]
  features: string[]
  status: string
}

const PROJECTS: Record<string, Project> = {

  /* ─────────────────────────────
     FITTRACK
  ───────────────────────────── */
  fittrack: {
    tag: 'Mobile App',
    title: 'FITTRACK',
    sub: 'Voice-powered fitness & exercise tracking app',
    year: '2026',

    overview:
      'FitTrack is a fitness tracking application designed to make workout logging more interactive and convenient. It combines exercise tracking, workout history and scheduling with voice-powered repetition counting, allowing users to record reps while keeping their attention on the exercise.',

    whatIBuilt:
      'I designed the interface in Figma and developed the application in Flutter using Dart. The app includes exercise categories, default and custom exercises, manual workout logging, scheduled workout days, workout history and calorie estimation. I also implemented voice-based rep counting using Vosk, with text-to-speech feedback for rep and set completion. Supabase is used for profile-related data and the application includes a reward-based system for unlocking additional exercise content.',

    img:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=700&fit=crop&auto=format',

    techs: [
      'Flutter',
      'Dart',
      'Figma',
      'Vosk',
      'Text-to-Speech',
      'Supabase',
      'Material 3',
    ],

    features: [
      'Voice-powered rep counting',
      'Exercise categories',
      'Default & custom exercises',
      'Manual workout logging',
      'Workout scheduling',
      'Workout history',
      'Calorie estimation',
      'Voice commands',
      'Set completion feedback',
      'Rewarded feature unlocking',
      'User profile storage',
      'Smartwatch integration concept',
    ],

    status:
      'Complete — personal digital product project.',
  },


  /* ─────────────────────────────
     HEALTHCARE WEBSITE
  ───────────────────────────── */
  'healthcare-website': {
    tag: 'Healthcare Web',
    title: 'Healthcare / Telehealth Website',
    sub: 'Healthcare website and digital consultation platform',
    year: '2026',

    overview:
      'A healthcare-focused website concept designed around clear communication, accessible digital services and a modern patient experience. The project explores how healthcare websites can move beyond static information pages toward useful digital platforms.',

    whatIBuilt:
      'I worked on the interface structure, visual design and responsive layouts with healthcare users in mind. The concept includes healthcare service presentation, patient-oriented navigation and a foundation for future telehealth functionality. The design focuses on clarity, trust and making important information easy to find rather than overwhelming users with unnecessary interface elements.',

    img:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=700&fit=crop&auto=format',

    techs: [
      'React',
      'Figma',
      'UI/UX',
      'Responsive Design',
      'Tailwind CSS',
    ],

    features: [
      'Responsive healthcare website',
      'Healthcare service pages',
      'Patient-oriented navigation',
      'Telehealth interface concept',
      'Appointment flow',
      'Clear calls to action',
      'Mobile-friendly layouts',
      'Healthcare-focused UI/UX',
    ],

    status:
      'Design and development project — portfolio concept.',
  },


  /* ─────────────────────────────
     DRIVE EASE
  ───────────────────────────── */
  driveease: {
    tag: 'Web Development',
    title: 'DriveEase',
    sub: 'Car rental website with vehicle browsing and booking UI',
    year: '2026',

    overview:
      'DriveEase is a car rental website concept focused on vehicle discovery, clear information and a straightforward booking-oriented experience. The project was designed around making it easy for users to browse vehicles and move toward a rental decision.',

    whatIBuilt:
      'I worked on the website structure, interface design and user flow, including vehicle presentation, browsing and booking-oriented interactions. The interface was designed to keep navigation simple while giving users the information they need when comparing rental options.',

    img:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=700&fit=crop&auto=format',

    techs: [
      'Web Development',
      'UI/UX',
      'Figma',
      'Responsive Design',
    ],

    features: [
      'Vehicle browsing',
      'Vehicle presentation',
      'Booking-oriented flow',
      'Responsive layout',
      'Clear navigation',
      'Automotive-focused interface',
      'User-friendly calls to action',
    ],

    status:
      'Complete — web design and development project.',
  },


  /* ─────────────────────────────
     DIETFEAST
  ───────────────────────────── */
  dietfeast: {
    tag: 'UI/UX & App',
    title: 'DietFeast',
    sub: 'Nutrition-focused app interface for meal planning and tracking',
    year: '2026',

    overview:
      'DietFeast is a nutrition-focused digital product concept designed around meal planning, food tracking and a simple way of organizing nutrition-related information.',

    whatIBuilt:
      'I worked on the application interface and user experience, focusing on clear navigation and structured presentation of meal and nutrition information. The project combines healthcare-related subject understanding with mobile UI/UX and app development principles.',

    img:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=700&fit=crop&auto=format',

    techs: [
      'Flutter',
      'Figma',
      'UI/UX',
      'Mobile Design',
    ],

    features: [
      'Meal planning interface',
      'Nutrition-focused design',
      'Food and meal tracking',
      'Structured navigation',
      'Mobile-first interface',
      'Clear information hierarchy',
      'User-friendly layouts',
    ],

    status:
      'Digital product project — design and development work.',
  },


  /* ─────────────────────────────
     MEDICAL DASHBOARD
  ───────────────────────────── */
  'medical-dashboard': {
    tag: 'Healthcare UI/UX',
    title: 'Medical Dashboard UI',
    sub: 'Healthcare dashboard and patient information interface',
    year: '2026',

    overview:
      'A medical dashboard interface designed to organize healthcare information into a clear digital workspace. The project explores how clinical and patient-related information can be presented without creating unnecessary visual complexity.',

    whatIBuilt:
      'I designed the dashboard interface with an emphasis on information hierarchy, readability and healthcare-oriented workflows. The design uses structured cards, data visualization and clearly separated information areas to make important information easier to scan and understand.',

    img:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop&auto=format',

    techs: [
      'Figma',
      'UI/UX',
      'Dashboard Design',
      'Data Visualization',
    ],

    features: [
      'Patient information overview',
      'Healthcare dashboard',
      'Data visualization',
      'Statistics and summary cards',
      'Information hierarchy',
      'Clinical interface concepts',
      'Responsive design considerations',
    ],

    status:
      'UI/UX project — healthcare dashboard concept.',
  },


  /* ─────────────────────────────
     E-COMMERCE
  ───────────────────────────── */
  ecommerce: {
    tag: 'E-commerce',
    title: 'E-commerce Store',
    sub: 'Shopify store design, development & customization',
    year: '2026',

    overview:
      'An e-commerce website project focused on creating and customizing a practical online storefront. The work combines Shopify development with product presentation, navigation and user-focused interface design.',

    whatIBuilt:
      'I worked with Shopify stores and their storefront interfaces, including product listings, website structure, visual customization and responsive presentation. My work with e-commerce also includes working with Shopify themes and Liquid-based customization to adapt storefronts to specific requirements.',

    img:
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=700&fit=crop&auto=format',

    techs: [
      'Shopify',
      'Liquid',
      'Web Development',
      'UI/UX',
      'Responsive Design',
    ],

    features: [
      'Shopify storefront',
      'Product listing interfaces',
      'Collection structure',
      'Theme customization',
      'Liquid customization',
      'Responsive layouts',
      'E-commerce UI/UX',
      'Product-focused navigation',
    ],

    status:
      'Complete — Shopify and e-commerce development project.',
  },
}


export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const p = id ? PROJECTS[id] : undefined

  if (!p) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center pt-24"
        style={{ background: C.ivory }}
      >
        <h2
          className="text-2xl font-extrabold mb-4"
          style={{ color: C.black }}
        >
          Project not found
        </h2>

        <Link
          to="/work"
          style={{
            color: C.teal,
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          ← Back to Work
        </Link>
      </div>
    )
  }

  return (
    <div
      style={{
        background: C.ivory,
        minHeight: '100vh',
      }}
    >

      {/* ─────────────────────────
          HERO
      ───────────────────────── */}
      <div
        className="relative pt-20"
        style={{ height: 400 }}
      >
        <img
          src={p.img}
          alt={p.title}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.58)' }}
        />

        <div
          className="absolute inset-0 flex flex-col justify-end p-10"
          style={{
            background:
              'linear-gradient(to top, rgba(11,17,19,0.9) 0%, rgba(11,17,19,0.15) 70%)',
          }}
        >
          <div className="max-w-4xl mx-auto w-full">

            <Tag>{p.tag}</Tag>

            <h1
              className="font-extrabold mt-4 mb-2"
              style={{
                fontSize: 'clamp(22px,4vw,45px)',
                color: C.white,
              }}
            >
              {p.title}
            </h1>

            <p
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: 16,
              }}
            >
              {p.sub} · {p.year}
            </p>

          </div>
        </div>
      </div>


      {/* ─────────────────────────
          BODY
      ───────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 py-10">

        <Link
          to="/work"
          className="text-sm font-bold mb-8 inline-flex items-center gap-2"
          style={{
            color: C.teal,
            textDecoration: 'none',
          }}
        >
          ← Back to Work
        </Link>


        <div className="grid md:grid-cols-3 gap-12 mt-4">

          {/* MAIN CONTENT */}
          <div className="md:col-span-2 space-y-8">

            <div>
              <h2
                className="font-extrabold text-xl mb-3"
                style={{ color: C.black }}
              >
                Overview
              </h2>

              <p
                className="text-base leading-relaxed"
                style={{ color: '#5A8A83' }}
              >
                {p.overview}
              </p>
            </div>


            <div>
              <h2
                className="font-extrabold text-xl mb-3"
                style={{ color: C.black }}
              >
                What I Built
              </h2>

              <p
                className="text-base leading-relaxed"
                style={{ color: '#5A8A83' }}
              >
                {p.whatIBuilt}
              </p>
            </div>


            <div>
              <h2
                className="font-extrabold text-xl mb-4"
                style={{ color: C.black }}
              >
                Features
              </h2>

              <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">

                {p.features.map(feature => (
                  <span
                    key={feature}
                    className="flex items-start gap-2 text-sm font-semibold"
                    style={{ color: '#4A7A72' }}
                  >
                    <span
                      style={{
                        color: C.teal,
                        fontWeight: 900,
                      }}
                    >
                      ✓
                    </span>

                    {feature}
                  </span>
                ))}

              </div>
            </div>


            {/* STATUS */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: C.white,
                border: `1px solid ${C.borderL}`,
              }}
            >
              <p
                className="text-xs font-extrabold tracking-widest uppercase mb-1"
                style={{ color: C.teal }}
              >
                Project Status
              </p>

              <p
                className="text-sm"
                style={{ color: '#5A8A83' }}
              >
                {p.status}
              </p>
            </div>

          </div>


          {/* SIDEBAR */}
          <div className="space-y-6">

            {/* TECHNOLOGY */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: C.white,
                border: `1px solid ${C.borderL}`,
              }}
            >
              <p
                className="text-xs font-extrabold tracking-widest uppercase mb-4"
                style={{ color: C.teal }}
              >
                Technology
              </p>

              <div className="flex flex-wrap gap-2">
                {p.techs.map(tech => (
                  <Pill key={tech}>
                    {tech}
                  </Pill>
                ))}
              </div>
            </div>


            {/* CTA */}
            <div
              className="p-6 rounded-2xl text-center"
              style={{
                background: C.darkTeal,
                border: '1px solid rgba(47,169,155,0.2)',
              }}
            >
              <p
                className="text-sm font-bold mb-3"
                style={{
                  color: 'rgba(255,255,255,0.75)',
                }}
              >
                Interested in a similar project?
              </p>

              <Link
                to="/contact"
                className="inline-block px-5 py-2.5 rounded-full text-sm font-bold"
                style={{
                  background: C.teal,
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                Work With Me
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}