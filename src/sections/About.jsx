import { useScrollReveal } from '@hooks'
import { aboutText, aboutHighlights } from '@data/siteData'
import { SectionIcon } from '@components/Icons'
import profilePhoto from '@assets/profile.png'
import './About.css'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="section section--alt" ref={ref}>
      <div className="container">
        <div className="about__top reveal--blur">
          <img
            src={profilePhoto}
            alt="Sakir Saiyed"
            className="about__photo"
            width="140"
            height="140"
          />
          <div className="about__header">
            <p className="section-eyebrow">About</p>
            <h2 className="section-headline">A decade of shipping software that matters.</h2>
            <div className="about__prose">
              {aboutText.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="about__highlights" data-stagger>
          {aboutHighlights.map((item) => (
            <div className="about__highlight reveal--scale" key={item.title}>
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
