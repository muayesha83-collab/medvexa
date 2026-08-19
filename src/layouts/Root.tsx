import { Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Root() {
  const loc = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [loc.pathname])
  return (
    <>
      <Nav />
      <main><Outlet /></main>
      <Footer />
    </>
  )
}
