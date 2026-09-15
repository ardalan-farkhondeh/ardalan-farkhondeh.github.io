function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-container">
          <p className="section-eyebrow">
            Contact
          </p>

          <h1>
            Let's build something meaningful.
          </h1>

          <p>
            I'm open to opportunities in software engineering,
            artificial intelligence, and research.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-intro">
           

            <h2>
              Get in touch.
            </h2>

            <p>
              Feel free to reach out if you'd like to discuss an opportunity,
              technical project, research, or simply connect.
            </p>
          </div>

          <div className="contact-links">
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ardalan.farkhonde@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
            >
              <span className="contact-link-label">
                Email
              </span>

              <span className="contact-link-value">
                ardalan.farkhonde@gmail.com
              </span>

              <span className="contact-link-arrow">
                →
              </span>
            </a>

            <a
              href="https://github.com/ardalan-farkhondeh"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-link-label">
                GitHub
              </span>

              <span className="contact-link-value">
                github.com/ardalan-farkhondeh
              </span>

              <span className="contact-link-arrow">
                →
              </span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-link-label">
                LinkedIn
              </span>

              <span className="contact-link-value">
                linkedin.com/in/ardalan-farkhondeh
              </span>

              <span className="contact-link-arrow">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact