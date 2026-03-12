import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '@data/siteData'
import profilePhoto from '@assets/profile.png'
import './Navbar.css'

export default function Navbar({ theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const offset = 80
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="container nav__inner">
        <a href="#" className="nav__logo" aria-label="Home">
          <img src={profilePhoto} alt={siteConfig.name} className="nav__avatar" width="36" height="36" />
        </a>

        <ul className={`nav__links ${mobileOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </li>
        </ul>

        <button
          className="nav__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  )
}
