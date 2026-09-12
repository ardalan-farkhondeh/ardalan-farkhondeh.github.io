import { BrowserRouter, Routes, Route } from 'react-router-dom'

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

function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <BeyondCode />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
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