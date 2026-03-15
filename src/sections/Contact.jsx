import { useScrollReveal } from '@hooks'
import { siteConfig, socialLinks } from '@data/siteData'
import './Contact.css'

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" className="section section--alt" ref={ref}>
      <div className="container">
        <div className="contact__content reveal--blur">
          <p className="section-eyebrow" style={{ textAlign: 'center' }}>
            Get in Touch
          </p>
          <h2 className="contact__headline">
            Let's build something
            <br />
            <em>together.</em>
          </h2>
          <p className="contact__desc">
            Open to Senior iOS, AI Engineer, and Mobile Tech Lead contract roles — especially in
            healthcare, fintech, and energy.
          </p>
          <div className="contact__actions">
            <a href={`mailto:${socialLinks.email}`} className="link-arrow">
              Send an email
            </a>
            <a href={siteConfig.resumeUrl} download className="link-arrow">
              Download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
