import { ArrowDown, Download } from 'lucide-react'
import { siteConfig, socialLinks, heroStats } from '@data/siteData'
import { GithubIcon, LinkedInIcon, MediumIcon } from '@components/Icons'
import profilePhoto from '@assets/profile.png'
import './Hero.css'

export default function Hero() {
  const [titlePart1, titlePart2] = siteConfig.title.split(' and ')

  return (
    <section className="hero" id="hero">
      <div className="hero__glow" />
      <div className="hero__glow hero__glow--secondary" />
      <div className="container">
        <div className="hero__layout">
          {/* Left — content */}
          <div className="hero__content">
            <div className="hero__badge" style={{ animationDelay: '0s' }}>
              <span className="hero__pulse" />
              {siteConfig.availability}
            </div>

            <h1 className="hero__name" style={{ animationDelay: '0.1s' }}>
              {siteConfig.name}
            </h1>

            <p className="hero__title" style={{ animationDelay: '0.15s' }}>
              <span className="hero__title-accent">{titlePart1}</span>
              {titlePart2 && (
                <>
                  <span className="hero__title-sep"> & </span>
                  <span className="hero__title-secondary">{titlePart2}</span>
                </>
              )}
            </p>

            <p className="hero__tagline" style={{ animationDelay: '0.2s' }}>
              {siteConfig.tagline}
            </p>

            <div className="hero__stats" style={{ animationDelay: '0.25s' }}>
              {heroStats.map((stat) => (
                <div className="hero__stat" key={stat.label}>
                  <span className="hero__stat-number">{stat.number}</span>
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="hero__actions" style={{ animationDelay: '0.3s' }}>
              <a href="#about" className="btn btn--primary">
                <ArrowDown size={16} />
                Explore My Work
              </a>
              <a href={siteConfig.resumeUrl} download className="btn btn--secondary">
                <Download size={16} />
                Resume
              </a>
            </div>

            <div className="hero__socials" style={{ animationDelay: '0.35s' }}>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hero__social-btn"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hero__social-btn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={socialLinks.medium}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
                className="hero__social-btn"
              >
                <MediumIcon size={18} />
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="hero__right">
            <div className="hero__photo-wrapper" style={{ animationDelay: '0.15s' }}>
              <div className="hero__photo-ring" />
              <img
                src={profilePhoto}
                alt={siteConfig.name}
                className="hero__photo"
                width="360"
                height="360"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span />
      </div>
    </section>
  )
}
