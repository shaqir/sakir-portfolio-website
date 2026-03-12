import { useScrollReveal } from '@hooks'
import { experiences, education } from '@data/siteData'
import './Experience.css'

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="section section--alt" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-label">Professional Experience</span>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-subtitle">
            A track record of delivering production software across healthcare, fintech, IoT, and
            enterprise organizations.
          </p>
        </div>
        <div className="exp__timeline">
          {experiences.map((exp, i) => (
            <div
              className={`exp__item reveal reveal-delay-${Math.min(i + 1, 3)}`}
              key={exp.title + exp.company}
            >
              <div className="exp__dot" />
              <div className="exp__content">
                <h3>{exp.title}</h3>
                <span className="exp__company">{exp.company}</span>
                <div className="exp__meta">
                  {exp.meta.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <p>{exp.description}</p>
                <div className="exp__tags">
                  {exp.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="exp__edu reveal reveal-delay-2">
          <span className="section-label">Education</span>
          <div className="exp__edu-grid">
            {education.map((edu) => (
              <div className="exp__edu-card" key={edu.degree + edu.school}>
                <h4>{edu.degree}</h4>
                <span className="exp__edu-school">{edu.school}</span>
                {edu.meta.length > 0 && (
                  <span className="exp__edu-meta">{edu.meta.join(' · ')}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
