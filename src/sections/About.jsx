import profileAbout from '../assets/images/profile-about.jfif'

function About() {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-image">
          <img
            src={profileAbout}
            alt="Ardalan Farkhondeh"
          />
        </div>

        <div className="about-content">
          <p className="section-eyebrow">About Me</p>

          <h2>
            Computer Engineer building intelligent software.
          </h2>

          <p>
            I'm Ardalan Farkhondeh, a Computer Engineer with a background
            in Artificial Intelligence, software development, and computer
            networking.
          </p>

          <p>
            My work focuses on building practical software systems and
            exploring how AI can be applied to real-world problems. I enjoy
            working across different areas of technology, from intelligent
            applications and RAG systems to backend development and research.
          </p>

          <div className="about-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About