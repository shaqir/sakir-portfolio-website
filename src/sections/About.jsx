import { useScrollReveal } from '@hooks'
import { aboutText, aboutHighlights } from '@data/siteData'
import { SectionIcon } from '@components/Icons'
import './About.css'

const highlightColors = ['#2997ff', '#bf5af2', '#30d158', '#ff9f0a']

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="section section--alt" ref={ref}>
      <div className="container">
        <div className="about__content reveal--blur">
          <div className="about__left">
            <p className="section-eyebrow">About</p>
            <h2 className="section-headline">
              A decade of shipping
              <br />
              <span className="about__headline-gradient">software that matters.</span>
            </h2>
            <div className="about__prose">
              {aboutText.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>

          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-number" style={{ color: '#2997ff' }}>
                10+
              </span>
              <span className="about__stat-label">Years in Production</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number" style={{ color: '#bf5af2' }}>
                15+
              </span>
              <span className="about__stat-label">Products Shipped</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number" style={{ color: '#30d158' }}>
                5+
              </span>
              <span className="about__stat-label">Industries Served</span>
            </div>
          </div>
        </div>

        <div className="about__highlights" data-stagger>
          {aboutHighlights.map((item, i) => (
            <div
              className="about__highlight reveal--scale"
              key={item.title}
              style={{ '--highlight-accent': highlightColors[i] }}
            >
              <span className="about__highlight-icon">
                <SectionIcon name={item.icon} size={20} />
              </span>
              <h4 className="about__highlight-title">{item.title}</h4>
              <p className="about__highlight-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
