function Skills() {
  return (
    <section className="skills">
      <div className="skills-container">

        <div className="section-header">
          <p className="section-eyebrow">Technical Skills</p>

          <h2>
            Technologies I work with.
          </h2>

          <p>
            A combination of software engineering, artificial intelligence,
            networking, and modern development technologies.
          </p>
        </div>

        <div className="skills-grid">

          <div className="skill-category">
            <h3>Programming</h3>

            <div className="skill-list">
              <span>Python</span>
              <span>C++</span>
              <span>Java</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Artificial Intelligence</h3>

            <div className="skill-list">
              <span>Machine Learning</span>
              <span>Deep Learning</span>
              <span>RAG</span>
              <span>Natural Language Processing</span>
              <span>Reinforcement Learning</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Software Development</h3>

            <div className="skill-list">
              <span>React</span>
              <span>REST APIs</span>
              <span>FastAPI</span>
              <span>PostgreSQL</span>
              <span>Docker</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Systems & Networking</h3>

            <div className="skill-list">
              <span>Computer Networks</span>
              <span>Linux</span>
              <span>AWS</span>
              <span>CI/CD</span>
              <span>Network Engineering</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills