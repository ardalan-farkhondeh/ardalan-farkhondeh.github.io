import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'

import Hero from './sections/Hero'
import About from './sections/About'
import FeaturedProjects from './sections/FeaturedProjects'
import Skills from './sections/Skills'
import BeyondCode from './sections/BeyondCode'

import Projects from './pages/Projects'
import Education from './pages/Education'
import Research from './pages/Research'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

import './App.css'
import './styles/navbar.css'
import './styles/home.css'
import './styles/pages/projects.css'
import './styles/pages/education.css'
import './styles/pages/research.css'
import './styles/pages/experience.css'
import './styles/pages/contact.css'
import './styles/responsive.css'


/* =========================================================
   SCROLL TO TOP
   ========================================================= */

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}


/* =========================================================
   HOME
   ========================================================= */

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <BeyondCode />
    </main>
  )
}


/* =========================================================
   APP
   ========================================================= */

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/education" element={<Education />} />

        <Route path="/research" element={<Research />} />

        <Route path="/experience" element={<Experience />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App