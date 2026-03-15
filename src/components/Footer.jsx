import { siteConfig, socialLinks } from '@data/siteData'
import { GithubIcon, LinkedInIcon, MediumIcon } from '@components/Icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__links">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={16} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={16} />
          </a>
          <a href={socialLinks.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium">
            <MediumIcon size={16} />
          </a>
        </div>
        <p className="footer__location">
          {siteConfig.location} &middot; Remote & hybrid worldwide
        </p>
        <p className="footer__copy">
          Copyright &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
