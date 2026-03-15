import { useScrollReveal } from '@hooks'
import { projects } from '@data/siteData'
import './Projects.css'

const cardAccents = [
  'linear-gradient(135deg, #2997ff, #64d2ff)',
  'linear-gradient(135deg, #30d158, #64d2ff)',
  'linear-gradient(135deg, #bf5af2, #ff375f)',
  'linear-gradient(135deg, #ff9f0a, #ff375f)',
  'linear-gradient(135deg, #ff375f, #bf5af2)',
  'linear-gradient(135deg, #64d2ff, #30d158)',
]

export default function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" className="section section--alt" ref={ref}>
      <div className="container container--wide">
        <div className="section-header section-header--centered reveal--blur">
          <p className="section-eyebrow">Featured Work</p>
          <h2 className="section-headline section-headline--centered">Selected projects.</h2>
          <p className="section-desc section-desc--centered">
            Scalable architecture, real-time systems, and production-quality engineering.
          </p>
        </div>
        <div className="projects__grid" data-stagger>
          {projects.map((project, i) => (
            <div className="project reveal--scale" key={project.title}>
              <div className="project__accent" style={{ background: cardAccents[i] }} />
              <div className="project__glow" style={{ background: cardAccents[i] }} />
              <div className="project__body">
                <span className="project__tag">{project.tag}</span>
                <h3 className="project__title">{project.title}</h3>
                <p className="project__desc">{project.description}</p>
                <div className="project__tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-arrow link-arrow--small"
                    >
                      View on GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-arrow link-arrow--small"
                    >
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
