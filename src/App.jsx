import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function Home() {
  return <h1>Home</h1>
}

function Projects() {
  return <h1>Projects</h1>
}

function Education() {
  return <h1>Education</h1>
}

function Research() {
  return <h1>Research</h1>
}

function Experience() {
  return <h1>Experience</h1>
}

function Contact() {
  return <h1>Contact</h1>
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