import { useScrollReveal } from '@hooks'
import { achievements } from '@data/siteData'
import { SectionIcon } from '@components/Icons'
import './Achievements.css'

export default function Achievements() {
  const ref = useScrollReveal()

  return (
    <section id="achievements" className="section section--alt" ref={ref}>
      <div className="container container--wide">
        <div className="section-header section-header--centered reveal">
          <p className="section-eyebrow">Achievements</p>
          <h2 className="section-headline section-headline--centered">
            Highlights & milestones.
          </h2>
        </div>
        <div className="achievements__grid">
          {achievements.map((item, i) => (
            <div
              className={`achievement reveal reveal-delay-${Math.min(Math.floor(i / 3) + 1, 3)}`}
              key={item.title}
            >
              <span className="achievement__icon">
                <SectionIcon name={item.icon} size={20} />
              </span>
              <h4 className="achievement__title">{item.title}</h4>
              <p className="achievement__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
