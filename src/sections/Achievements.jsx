import { useScrollReveal } from '@hooks'
import { achievements } from '@data/siteData'
import { SectionIcon } from '@components/Icons'
import './Achievements.css'

export default function Achievements() {
  const ref = useScrollReveal()

  return (
    <section id="achievements" className="section" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-label">Achievements</span>
          <h2 className="section-title">Highlights & milestones</h2>
        </div>
        <div className="achievements__grid">
          {achievements.map((item, i) => (
            <div
              className={`achievement-card reveal reveal-delay-${Math.min(Math.floor(i / 2) + 1, 3)}`}
              key={item.title}
            >
              <div className="achievement-card__icon"><SectionIcon name={item.icon} size={22} /></div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
