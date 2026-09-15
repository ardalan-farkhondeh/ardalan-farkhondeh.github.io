import { Link } from 'react-router-dom'

function FeaturedProjects() {
  return (
    <section className="featured-projects">
      <div className="featured-projects-container">

        <div className="section-header">
          <p className="section-eyebrow">Selected Work</p>

          <h2>Featured Projects</h2>

          <p>
            A selection of projects focused on Artificial Intelligence,
            software development, and computer engineering.
          </p>
        </div>

        <div className="projects-grid">

          <article className="project-card">
            <div className="project-number">01</div>

            <h3>Intelligent Document Analysis & RAG System</h3>

            <p>
              An end-to-end Retrieval-Augmented Generation system for
              intelligent document analysis, semantic search, and
              context-aware question answering.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>AI</span>
              <span>RAG</span>
              <span>FastAPI</span>
            </div>

            <Link to="/projects">
              View Project →
            </Link>
          </article>

          <article className="project-card">
            <div className="project-number">02</div>

            <h3>Audio Classification with Deep Learning</h3>

            <p>
              A deep learning project for music genre classification,
              comparing multiple neural network architectures and
              evaluating their performance.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>Deep Learning</span>
              <span>Audio</span>
              <span>PyTorch</span>
            </div>

            <Link to="/projects">
              View Project →
            </Link>
          </article>

          <article className="project-card">
            <div className="project-number">03</div>

            <h3>5G UAV Networks for Disaster and Rescue Operations</h3>

            <p>
              Research focused on 5G-enabled UAV networks for disaster
              and rescue operations, using Reinforcement Learning for
              intelligent network resource management.
            </p>

            <div className="project-tags">
              <span>5G</span>
              <span>UAV Networks</span>
              <span>Reinforcement Learning</span>
              <span>Networking</span>
            </div>

            <Link to="/research">
              View Project →
            </Link>
          </article>

        </div>

      </div>
    </section>
  )
}

export default FeaturedProjects