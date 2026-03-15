import { useScrollReveal } from '@hooks'
import { experiences, education } from '@data/siteData'
import './Experience.css'

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container container--wide">
        <div className="section-header reveal--blur">
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-headline">Where I've built.</h2>
          <p className="section-desc">
            A track record of delivering production software across healthcare, fintech, IoT, and
            enterprise organizations.
          </p>
        </div>
        <div className="exp__list" data-stagger>
          {experiences.map((exp, i) => (
            <div
              className="exp__item reveal"
              key={exp.title + exp.company}
            >
              <div className="exp__header">
                <div>
                  <h3 className="exp__role">{exp.title}</h3>
                  <span className="exp__company">{exp.company}</span>
                </div>
                <span className="exp__date">{exp.meta[0]}</span>
              </div>
              <p className="exp__desc">{exp.description}</p>
              <div className="exp__tags">
                {exp.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="exp__edu reveal">
          <h3 className="exp__edu-heading">Education</h3>
          <div className="exp__edu-grid">
            {education.map((edu) => (
              <div className="exp__edu-item" key={edu.degree + edu.school}>
                <h4 className="exp__edu-degree">{edu.degree}</h4>
                <span className="exp__edu-school">{edu.school}</span>
                {edu.meta.length > 0 && (
                  <span className="exp__edu-meta">{edu.meta.join(' \u00b7 ')}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
