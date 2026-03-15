import { useScrollReveal } from '@hooks'
import { aboutText, aboutHighlights } from '@data/siteData'
import { SectionIcon } from '@components/Icons'
import profilePhoto from '@assets/profile.png'
import './About.css'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="section section--alt" ref={ref}>
      <div className="container container--wide">
        <div className="about__intro reveal">
          <img
            src={profilePhoto}
            alt="Sakir Saiyed"
            className="about__photo"
            width="120"
            height="120"
          />
          <div className="section-header">
            <p className="section-eyebrow">About</p>
            <h2 className="section-headline">A decade of shipping software that matters.</h2>
          </div>
        </div>

        <div className="about__body reveal reveal-delay-1">
          <div className="about__prose">
            <p>{aboutText[0]}</p>
            <p>{aboutText[1]}</p>
          </div>
          <div className="about__prose">
            <p>{aboutText[2]}</p>
            <p>{aboutText[3]}</p>
          </div>
        </div>

        <div className="about__highlights reveal reveal-delay-2">
          {aboutHighlights.map((item) => (
            <div className="about__highlight" key={item.title}>
              <span className="about__highlight-icon">
                <SectionIcon name={item.icon} size={20} />
              </span>
              <div>
                <h4 className="about__highlight-title">{item.title}</h4>
                <p className="about__highlight-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
