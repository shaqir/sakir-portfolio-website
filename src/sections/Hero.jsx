import { siteConfig, heroStats, heroTechSkills } from '@data/siteData'
import profilePhoto from '@assets/profile.png'
import './Hero.css'

export default function Hero() {
  const [titlePart1, titlePart2] = siteConfig.title.split(' and ')

  return (
    <section className="hero" id="hero">
      {/* Animated gradient orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__grid">
        {/* Left — Content */}
        <div className="hero__content">
          <div className="hero__availability" style={{ animationDelay: '0.2s' }}>
            <div className="hero__availability-top">
              <span className="hero__availability-dot" />
              <span className="hero__availability-text">{siteConfig.availability}</span>
            </div>
            <span className="hero__availability-roles">{siteConfig.targetRoles}</span>
          </div>

          <h1 className="hero__headline" style={{ animationDelay: '0.35s' }}>
            {siteConfig.name}.
          </h1>

          <p className="hero__subhead" style={{ animationDelay: '0.5s' }}>
            <span className="hero__subhead-line">{titlePart1}</span>
            {titlePart2 && (
              <>
                <span className="hero__subhead-amp"> & </span>
                <span className="hero__subhead-line">{titlePart2}</span>
              </>
            )}
          </p>

          <p className="hero__tagline" style={{ animationDelay: '0.65s' }}>
            {siteConfig.tagline}
          </p>

          <div className="hero__actions" style={{ animationDelay: '0.8s' }}>
            <a href="#projects" className="link-arrow">
              View my work
            </a>
            <a href={siteConfig.resumeUrl} download className="link-arrow">
              Download resume
            </a>
          </div>
        </div>

        {/* Center — Stats (vertical) */}
        <div className="hero__stats-col" style={{ animationDelay: '0.95s' }}>
          {heroStats.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <span className="hero__stat-number">{stat.number}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Right — Photo + Tech */}
        <div className="hero__sidebar" style={{ animationDelay: '0.5s' }}>
          <div className="hero__photo-col">
            <div className="hero__photo-frame">
              <img
                src={profilePhoto}
                alt={siteConfig.name}
                className="hero__photo"
                width="280"
                height="280"
              />
            </div>
          </div>

          <div className="hero__tech" style={{ animationDelay: '1.1s' }}>
            <span className="hero__tech-label">Tech Stack</span>
            <div className="hero__tech-pills">
              {heroTechSkills.map((skill) => (
                <span className="hero__tech-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
