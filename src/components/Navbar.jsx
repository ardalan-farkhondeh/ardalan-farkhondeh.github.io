import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/education">Education</NavLink>
      <NavLink to="/research">Research</NavLink>
      <NavLink to="/experience">Experience</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Navbar