import { Mail, MapPin, ArrowUpRight, Download } from 'lucide-react'
import { useScrollReveal } from '@hooks'
import { siteConfig, socialLinks } from '@data/siteData'
import { GithubIcon, LinkedInIcon, MediumIcon } from '@components/Icons'
import './Contact.css'

const socialCards = [
  {
    href: socialLinks.linkedin,
    icon: <LinkedInIcon size={20} />,
    label: 'LinkedIn',
    value: 'Sakir Saiyed',
    external: true,
  },
  {
    href: socialLinks.github,
    icon: <GithubIcon size={20} />,
    label: 'GitHub',
    value: '@shaqir',
    external: true,
  },
  {
    href: socialLinks.medium,
    icon: <MediumIcon size={20} />,
    label: 'Blog',
    value: 'Medium',
    external: true,
  },
]

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <div className="contact__grid">
          {/* Left — headline + CTA */}
          <div className="contact__left reveal">
            <span className="section-label">Get in Touch</span>
            <h2 className="contact__heading">
              Let's build something <em>together</em>
            </h2>
            <p className="contact__desc">
              I'm open to Senior iOS, AI Engineer, and Mobile Tech Lead roles — especially in
              healthcare, fintech, and energy.
            </p>

            <div className="contact__cta">
              <a href={`mailto:${socialLinks.email}`} className="btn btn--primary">
                <Mail size={16} />
                {socialLinks.email}
              </a>
              <a href={siteConfig.resumeUrl} download className="btn btn--secondary">
                <Download size={16} />
                Resume
              </a>
            </div>

            <div className="contact__location">
              <MapPin size={14} />
              <span>{siteConfig.location}</span>
              <span className="contact__divider">&middot;</span>
              <span>Remote & hybrid worldwide</span>
            </div>
          </div>

          {/* Right — social cards + availability */}
          <div className="contact__right reveal reveal-delay-1">
            <div className="contact__availability">
              <span className="contact__pulse" />
              <span>{siteConfig.availability}</span>
            </div>

            <div className="contact__socials">
              {socialCards.map((card) => (
                <a
                  key={card.label}
                  href={card.href}
                  className="contact-card"
                  {...(card.external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  <div className="contact-card__icon">{card.icon}</div>
                  <div className="contact-card__info">
                    <span className="contact-card__label">{card.label}</span>
                    <span className="contact-card__value">{card.value}</span>
                  </div>
                  <ArrowUpRight size={14} className="contact-card__arrow" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
