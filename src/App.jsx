import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageWrapper from './components/layout/PageWrapper.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import ScrollProgress from './components/layout/ScrollProgress.jsx'
import LoadingScreen from './components/shared/LoadingScreen.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Industries from './pages/Industries.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'
import { initLenis, destroyLenis } from './animations/lenis'

export default function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    initLenis()
    return () => destroyLenis()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <LoadingScreen show={loading} />
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/industries" element={<PageWrapper><Industries /></PageWrapper>} />
          <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
