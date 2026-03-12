import { useScrollReveal } from '@hooks'
import { aboutText, aboutHighlights } from '@data/siteData'
import { SectionIcon } from '@components/Icons'
import './About.css'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-label">About</span>
          <h2 className="section-title">The story so far</h2>
        </div>

        <div className="about__top reveal reveal-delay-1">
          <p className="about__lead">{aboutText[0]}</p>
          <p>{aboutText[1]}</p>
        </div>

        <div className="about__bottom reveal reveal-delay-2">
          <div className="about__secondary">
            <p>{aboutText[2]}</p>
            <p>{aboutText[3]}</p>
          </div>
          <div className="about__highlights">
            {aboutHighlights.map((item) => (
              <div className="highlight-card" key={item.title}>
                <span className="highlight-card__icon"><SectionIcon name={item.icon} size={18} /></span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
