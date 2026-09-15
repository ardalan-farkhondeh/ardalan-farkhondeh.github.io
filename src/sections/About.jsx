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
            Computer Engineer specializing in AI, Software, and Networking
          </h2>

          <p>
            I'm Ardalan Farkhondeh, a Computer Engineer with a background in artificial intelligence, software development, and computer networking.
          </p>

          <p>
            My experience combines software development with academic research in AI and computer networking. I have worked on intelligent networking, Reinforcement Learning, network security, and practical AI systems, while also building web and software applications.
            I currently focus on building practical AI systems and exploring how intelligent technologies can be applied to real-world problems.
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