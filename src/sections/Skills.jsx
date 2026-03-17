import { useScrollReveal } from '@hooks'
import { skillCategories } from '@data/siteData'
import { SectionIcon } from '@components/Icons'
import './Skills.css'

const cardAccents = ['#2997ff', '#bf5af2', '#30d158', '#ff9f0a', '#64d2ff', '#ff375f']

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container container--wide">
        <div className="section-header section-header--centered reveal--blur">
          <p className="section-eyebrow">Expertise</p>
          <h2 className="section-headline section-headline--centered">Technical toolkit.</h2>
          <p className="section-desc section-desc--centered">
            A decade of hands-on engineering across mobile platforms, AI/ML systems, and full-stack
            infrastructure.
          </p>
        </div>
        <div className="skills__grid" data-stagger>
          {skillCategories.map((category, i) => (
            <div
              className="skills__card reveal--scale"
              key={category.title}
              style={{ '--card-accent': cardAccents[i] }}
            >
              <div className="skills__card-header">
                <span className="skills__card-icon">
                  <SectionIcon name={category.icon} size={20} />
                </span>
                <h3 className="skills__title">{category.title}</h3>
              </div>
              <div className="skills__tags">
                {category.skills.map((skill) => (
                  <span
                    className={`skills__tag ${skill.primary ? 'skills__tag--primary' : ''}`}
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
