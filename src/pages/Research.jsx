import { Link } from 'react-router-dom'

function Research() {
  return (
    <main className="research-page">

      <section className="research-hero">
        <div className="research-hero-container">

          <p className="section-eyebrow">
            Research
          </p>

          <h1>
            Research in artificial intelligence, networking, and intelligent systems
          </h1>

          <p>
            My research background combines computer networking, artificial
            intelligence, network security, and intelligent systems, with
            experience ranging from academic research to practical AI projects.
          </p>

        </div>
      </section>


      <section className="research-list">
        <div className="research-list-container">

          {/* Research 01 */}

          <article className="research-item">

            <div className="research-number">
              01
            </div>

            <div className="research-content">

              <h2>
                Music Genre Classification from Audio Spectrograms
              </h2>

              <p>
                A comparative deep learning study on music genre
                classification using the GTZAN dataset. The research
                evaluates CNN, MLP, ResNet18, EfficientNet-B0, and Vision
                Transformer architectures using audio features and
                Mel-spectrogram representations. Vision Transformer achieved
                the highest classification accuracy, while EfficientNet-B0
                provided the best balance between performance and efficiency.
              </p>

              <div className="research-tags">
                <span>Deep Learning</span>
                <span>PyTorch</span>
                <span>GTZAN</span>
                <span>Audio Classification</span>
                <span>Vision Transformer</span>
                <span>Computer Vision</span>
              </div>

              <a
                href="https://github.com/ardalan-farkhondeh/Music-Genre-Classification-from-Audio-Spectrograms-Using-Deep-Learning-Techniques/blob/main/Music%20Genre%20Classification%20from%20Audio%20Spectrograms%20Using%20Deep%20Learning%20Techniques%20IEEE%20STANDARD.docx"
                target="_blank"
                rel="noreferrer"
              >
                View Research →
              </a>

            </div>

          </article>


          {/* Research 02 */}

          <article className="research-item">

            <div className="research-number">
              02
            </div>

            <div className="research-content">

              <h2>
                Intelligent 5G UAV and IoT Networks for Disaster and Rescue Operations
              </h2>

              <p>
                Research conducted at the Universitat Politècnica de
                Catalunya on the use of 5G millimeter-wave communications,
                UAV networks, and IoT-based rescue systems for disaster and
                emergency scenarios. The work focused on intelligent network
                resource management and resource allocation in challenging
                and dynamic environments, including the application of
                Reinforcement Learning and Mobile Edge Computing (MEC)
                approaches to improve network performance and support
                communication and coordination during rescue operations.
              </p>

              <div className="research-tags">
                <span>5G</span>
                <span>UAV Networks</span>
                <span>IoT</span>
                <span>Millimeter Wave</span>
                <span>Reinforcement Learning</span>
                <span>Resource Allocation</span>
                <span>Resource Management</span>
                <span>MEC</span>
                <span>Disaster Recovery</span>
              </div>

              <Link to="/research">
                View Research →
              </Link>

            </div>

          </article>


          {/* Research 03 */}

          <article className="research-item">

            <div className="research-number">
              03
            </div>

            <div className="research-content">

              <h2>
                Private and Unlinkable Message Exchange in Opportunistic Networks
              </h2>

              <p>
                Master's research focused on privacy-preserving communication
                in Opportunistic Networks. The work investigated a private
                and unlinkable message exchange mechanism using MIXNETs and
                a public bulletin board, with network simulations implemented
                using Java and The ONE simulator.
              </p>

              <div className="research-tags">
                <span>Opportunistic Networks</span>
                <span>Network Security</span>
                <span>Privacy</span>
                <span>MIXNETs</span>
                <span>Java</span>
                <span>The ONE Simulator</span>
              </div>

              <a
                href="https://www.researchgate.net/publication/335651098_A_Private_and_Unlinkable_Message_Exchange_Using_a_Public_bulletin_board_in_Opportunistic_Networks"
                target="_blank"
                rel="noreferrer"
              >
                View Research →
              </a>

            </div>

          </article>


          {/* Research 04 */}

          <article className="research-item">

            <div className="research-number">
              04
            </div>

            <div className="research-content">

              <h2>
                Retrieval-Augmented Generation for Intelligent Document Analysis
              </h2>

              <p>
                Current technical work focuses on building practical
                Retrieval-Augmented Generation systems for document analysis
                and question answering. The system combines document
                processing, semantic embeddings, vector databases,
                information retrieval, reranking, and local Large Language
                Models to generate grounded responses from source documents.
              </p>

              <div className="research-tags">
                <span>RAG</span>
                <span>Semantic Retrieval</span>
                <span>Vector Databases</span>
                <span>Reranking</span>
                <span>LLMs</span>
                <span>Python</span>
              </div>

              <a
                href="https://github.com/ardalan-farkhondeh/intelligent-document-analysis-rag/blob/master/README.md"
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

export default Research