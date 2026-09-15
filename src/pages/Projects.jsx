function Projects() {
  return (
    <main className="projects-page">

      <section className="projects-hero">
        <div className="projects-hero-container">

          <p className="section-eyebrow">Projects</p>

          <h1>
            Selected projects
          </h1>

          <p>
            A collection of projects covering artificial intelligence,
            deep learning, software development, and frontend engineering.
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
                An end-to-end Retrieval-Augmented Generation system for
                intelligent document analysis and question answering.
                The system processes PDF documents, retrieves relevant
                information, reranks results, and generates grounded
                answers using a local Large Language Model.
              </p>

              <div className="project-detail-tags">
                <span>Python</span>
                <span>FastAPI</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>ChromaDB</span>
                <span>Ollama</span>
              </div>

              <a
                href="https://github.com/ardalan-farkhondeh/intelligent-document-analysis-rag"
                target="_blank"
                rel="noreferrer"
              >
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
                Music Genre Classification from Audio Spectrograms
              </h2>

              <p>
                A comparative deep learning project for music genre
                classification using the GTZAN dataset, evaluating
                multiple neural network architectures including CNN,
                ResNet18, EfficientNetB0, and Vision Transformer.
              </p>

              <div className="project-detail-tags">
                <span>Python</span>
                <span>PyTorch</span>
                <span>Librosa</span>
                <span>Deep Learning</span>
                <span>GTZAN</span>
                <span>Vision Transformer</span>
              </div>

              <a
                href="https://github.com/ardalan-farkhondeh/Music-Genre-Classification-from-Audio-Spectrograms-Using-Deep-Learning-Techniques"
                target="_blank"
                rel="noreferrer"
              >
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
                Web Development
              </p>

              <h2>
                E-Commerce Website
              </h2>

              <p>
                A React-based e-commerce application implementing
                product browsing, routing, authentication, and
                application functionality using Firebase and
                modern React libraries.
              </p>

              <div className="project-detail-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>Firebase</span>
                <span>React Router</span>
                <span>Node Sass</span>
              </div>

              <a
                href="https://github.com/ardalan-farkhondeh/ecommerce-website"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>

            </div>

          </article>

          <article className="project-detail">

            <div className="project-detail-number">
              04
            </div>

            <div className="project-detail-content">

              <p className="project-category">
                Software Testing
              </p>

              <h2>
                React & Redux Component Testing
              </h2>

              <p>
                A testing-focused React and Redux project demonstrating
                component testing, shallow rendering, integration
                testing, PropTypes validation, and application state
                testing with Jest and Enzyme.
              </p>

              <div className="project-detail-tags">
                <span>React</span>
                <span>Redux</span>
                <span>Jest</span>
                <span>Enzyme</span>
                <span>Testing</span>
              </div>

              <a
                href="https://github.com/ardalan-farkhondeh/testing-jest-enzym-reactComponent-reduxStore-proptypes-shallowTest-intergrationTest"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>

            </div>

          </article>

          <article className="project-detail">

            <div className="project-detail-number">
              05
            </div>

            <div className="project-detail-content">

              <p className="project-category">
                Frontend Development
              </p>

              <h2>
                React & Redux Mobile Store
              </h2>

              <p>
                A React and Redux-based mobile store application
                demonstrating component-based development, centralized
                state management, and a complete set of store features.
              </p>

              <div className="project-detail-tags">
                <span>React</span>
                <span>Redux</span>
                <span>JavaScript</span>
                <span>Frontend</span>
                <span>State Management</span>
              </div>

              <a
                href="https://github.com/ardalan-farkhondeh/react-redux-a-mobilestore-with-compelete-options"
                target="_blank"
                rel="noreferrer"
              >
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