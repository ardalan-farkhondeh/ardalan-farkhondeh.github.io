import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Full-Stack Developer • AI & Networking • IT Specialist</p>

        <h1>
          Hi, I'm Ardalan.
          <br />
          I turn ideas into intelligent systems.
        </h1>

        <p className="hero-description">
          Computer Engineer with experience in Artificial Intelligence, software development, and computer networking.
        </p>

        <div className="hero-actions">
          <Link to="/projects">View Projects</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero