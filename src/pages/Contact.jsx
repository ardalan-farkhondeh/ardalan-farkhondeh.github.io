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
            I'm always interested in discussing software engineering,
            artificial intelligence, research, and interesting technical
            ideas.
          </p>

        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">

          <div className="contact-intro">

            <p className="contact-label">
              Get in touch
            </p>

            <h2>
              Have a project, opportunity, or idea?
            </h2>

            <p>
              Whether you're interested in working together, discussing
              a technical project, or simply connecting, feel free to
              reach out.
            </p>

          </div>

          <div className="contact-links">

            <a
              href="mailto:your-email@example.com"
              className="contact-link"
            >
              <span className="contact-link-label">
                Email
              </span>

              <span className="contact-link-value">
                your-email@example.com
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
                LinkedIn Profile
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