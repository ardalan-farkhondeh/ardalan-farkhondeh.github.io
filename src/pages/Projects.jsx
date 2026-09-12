function Projects() {
  return (
    <main className="projects-page">

      <section className="projects-hero">
        <div className="projects-hero-container">

          <p className="section-eyebrow">Projects</p>

          <h1>
            Selected work and technical projects.
          </h1>

          <p>
            A collection of projects covering artificial intelligence,
            software development, deep learning, and computer networking.
          </p>

        </div>
      </section>

      <section className="projects-list">
        <div className="projects-list-container">

          <article className="project-detail">

            <div className="project-detail-number">
              01
            </div>

            <div className="project-detail-content">

              <p className="project-category">
                Artificial Intelligence
              </p>

              <h2>
                Intelligent Document Analysis & RAG System
              </h2>

              <p>
                An end-to-end Retrieval-Augmented Generation system designed
                for intelligent document analysis, semantic search, and
                context-aware question answering.
              </p>

              <div className="project-detail-tags">
                <span>Python</span>
                <span>RAG</span>
                <span>FastAPI</span>
                <span>ChromaDB</span>
                <span>Sentence Transformers</span>
              </div>

              <a href="#">
                View Project →
              </a>

            </div>

          </article>

          <article className="project-detail">

            <div className="project-detail-number">
              02
            </div>

            <div className="project-detail-content">

              <p className="project-category">
                Deep Learning
              </p>

              <h2>
                Audio Classification with Deep Learning
              </h2>

              <p>
                A deep learning project for music genre classification,
                comparing multiple neural network architectures and
                evaluating their accuracy, F1 score, inference time,
                and model complexity.
              </p>

              <div className="project-detail-tags">
                <span>Python</span>
                <span>PyTorch</span>
                <span>Deep Learning</span>
                <span>Audio</span>
                <span>GTZAN</span>
              </div>

              <a href="#">
                View Project →
              </a>

            </div>

          </article>

          <article className="project-detail">

            <div className="project-detail-number">
              03
            </div>

            <div className="project-detail-content">

              <p className="project-category">
                Computer Networking
              </p>

              <h2>
                Computer Networking Research
              </h2>

              <p>
                Research and development work focused on computer networks,
                network engineering, and intelligent approaches to
                communication systems.
              </p>

              <div className="project-detail-tags">
                <span>Networking</span>
                <span>Research</span>
                <span>Python</span>
                <span>Network Engineering</span>
              </div>

              <a href="#">
                View Project →
              </a>

            </div>

          </article>

        </div>
      </section>

    </main>
  )
}

export default Projects