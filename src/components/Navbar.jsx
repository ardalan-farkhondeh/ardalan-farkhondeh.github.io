import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Ardalan Farkhondeh
      </div>

      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/research">Research</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar