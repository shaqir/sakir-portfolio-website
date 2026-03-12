import { useScrollReveal } from '@hooks'
import { projects } from '@data/siteData'
import { GithubIcon } from '@components/Icons'
import { ExternalLink } from 'lucide-react'
import './Projects.css'

export default function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-label">Featured Projects</span>
          <h2 className="section-title">Selected work</h2>
          <p className="section-subtitle">
            Projects that demonstrate scalable architecture, real-time systems, and
            production-quality engineering.
          </p>
        </div>
        <div className="projects__grid">
          {projects.map((project, i) => (
            <div
              className={`project-card reveal reveal-delay-${Math.min(i + 1, 3)}`}
              key={project.title}
            >
              <div className="project-card__body">
                <div className="project-card__number">
                  {project.number} — {project.tag}
                </div>
                <h3>{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <GithubIcon size={14} />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
              <div className="project-card__meta">
                <span className="project-card__impact">{project.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
