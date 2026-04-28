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
          {experiences.map((exp) => (
            <div
              className={`exp__item reveal${exp.roles ? ' exp__item--multi' : ''}`}
              key={exp.company + (exp.title || '')}
            >
              {exp.roles ? (
                <>
                  <div className="exp__company-header">
                    {exp.logo &&
                      (exp.website ? (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="exp__logo-link"
                        >
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="exp__logo"
                            loading="lazy"
                          />
                        </a>
                      ) : (
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="exp__logo"
                          loading="lazy"
                        />
                      ))}
                    <div className="exp__company-info">
                      {exp.website ? (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="exp__company exp__company--lead"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <span className="exp__company exp__company--lead">{exp.company}</span>
                      )}
                      {exp.meta && (
                        <div className="exp__company-meta">
                          {exp.meta.join(' · ')}
                        </div>
                      )}
                    </div>
                  </div>
                  <ol className="exp__roles">
                    {exp.roles.map((role) => (
                      <li className="exp__role-item" key={role.title}>
                        <h4 className="exp__role">{role.title}</h4>
                        <div className="exp__meta">
                          <span className="exp__location">{role.meta[0]}</span>
                          <span className="exp__separator">·</span>
                          <span className="exp__duration">{role.meta[1]}</span>
                        </div>
                        <p className="exp__desc">{role.description}</p>
                        <div className="exp__tags">
                          {role.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ol>
                </>
              ) : (
                <>
                  <div className="exp__header">
                    <div className="exp__title-row">
                      {exp.logo &&
                        (exp.website ? (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="exp__logo-link"
                          >
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="exp__logo"
                              loading="lazy"
                            />
                          </a>
                        ) : (
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="exp__logo"
                            loading="lazy"
                          />
                        ))}
                      <div>
                        <h3 className="exp__role">{exp.title}</h3>
                        {exp.website ? (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="exp__company"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <span className="exp__company">{exp.company}</span>
                        )}
                        <div className="exp__meta">
                          <span className="exp__location">{exp.meta[0]}</span>
                          <span className="exp__separator">·</span>
                          <span className="exp__duration">{exp.meta[1]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="exp__desc">{exp.description}</p>
                  <div className="exp__tags">
                    {exp.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="exp__edu reveal">
          <h3 className="exp__edu-heading">Education</h3>
          <div className="exp__edu-grid">
            {education.map((edu) => (
              <div className="exp__edu-item" key={edu.degree + edu.school}>
                {edu.logo && (
                  <a
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp__edu-logo-link"
                  >
                    <img
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      className="exp__edu-logo"
                      loading="lazy"
                    />
                  </a>
                )}
                <div className="exp__edu-info">
                  <h4 className="exp__edu-degree">{edu.degree}</h4>
                  <a
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp__edu-school"
                  >
                    {edu.school}
                  </a>
                  {edu.meta.length > 0 && (
                    <div className="exp__edu-meta-row">
                      <span className="exp__location">{edu.meta[0]}</span>
                      {edu.meta[1] && (
                        <>
                          <span className="exp__separator">·</span>
                          <span className="exp__duration">{edu.meta[1]}</span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
