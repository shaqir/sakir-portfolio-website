import { useScrollReveal } from '@hooks'
import { skillCategories } from '@data/siteData'
import { SectionIcon } from '@components/Icons'
import './Skills.css'

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" className="section section--alt" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-label">Skills & Expertise</span>
          <h2 className="section-title">Technical toolkit</h2>
          <p className="section-subtitle">
            A decade of hands-on engineering across mobile platforms, AI/ML systems, and full-stack
            infrastructure.
          </p>
        </div>
        <div className="skills__grid">
          {skillCategories.map((category, i) => (
            <div
              className={`skill-category reveal reveal-delay-${Math.min(Math.floor(i / 2) + 1, 3)}`}
              key={category.title}
            >
              <h3>
                <span className="skill-category__icon"><SectionIcon name={category.icon} size={16} /></span>
                {category.title}
              </h3>
              <div className="skill-category__items">
                {category.skills.map((skill) => (
                  <span
                    className={`skill-tag ${skill.primary ? 'skill-tag--primary' : ''}`}
                    key={skill.name}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
