import { siteConfig, heroTechSkills } from '@data/siteData'
import profilePhoto from '@assets/profile.png'
import './Hero.css'

const heroStats = [
  { number: '10+', keyword: 'Years', sub: 'in Production', color: '#2997ff' },
  { number: '15+', keyword: 'Products', sub: 'Shipped', color: '#bf5af2' },
  { number: '5+', keyword: 'Industries', sub: 'Served', color: '#30d158' },
]

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Animated gradient orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__grid">
        {/* Left — Content */}
        <div className="hero__content">
          <h1 className="hero__headline" style={{ animationDelay: '0.2s' }}>
            {siteConfig.name}
            <span className="hero__headline-dot">.</span>
          </h1>

          <p className="hero__subhead" style={{ animationDelay: '0.35s' }}>
            <span className="hero__role hero__role--ai">AI Engineer</span>
            <span className="hero__role-amp">&</span>
            <span className="hero__role hero__role--mobile">Senior Mobile Developer</span>
          </p>

          <p className="hero__tagline" style={{ animationDelay: '0.5s' }}>
            {siteConfig.tagline}
          </p>

          <div className="hero__availability" style={{ animationDelay: '0.65s' }}>
            <div className="hero__availability-top">
              <span className="hero__availability-dot" />
              <span className="hero__availability-text">{siteConfig.availability}</span>
            </div>
            <span className="hero__availability-roles">{siteConfig.targetRoles}</span>
          </div>

          <div className="hero__actions" style={{ animationDelay: '0.8s' }}>
            <a href="#projects" className="hero__cta-primary">
              View my work
              <span className="hero__cta-arrow">&rsaquo;</span>
            </a>
            <a href={siteConfig.resumeUrl} download className="hero__cta-secondary">
              Download resume
              <span className="hero__cta-arrow">&rsaquo;</span>
            </a>
          </div>
        </div>

        {/* Center — Stats */}
        <div className="hero__stats-col" style={{ animationDelay: '0.9s' }}>
          {heroStats.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <span className="hero__stat-number" style={{ color: stat.color }}>
                {stat.number}
              </span>
              <span className="hero__stat-label">
                <span className="hero__stat-keyword">{stat.keyword}</span> {stat.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Right — Photo + Tech */}
        <div className="hero__sidebar" style={{ animationDelay: '0.5s' }}>
          <div className="hero__photo-frame">
            <img
              src={profilePhoto}
              alt={siteConfig.name}
              className="hero__photo"
              width="340"
              height="340"
            />
          </div>
          <div className="hero__tech" style={{ animationDelay: '1s' }}>
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
