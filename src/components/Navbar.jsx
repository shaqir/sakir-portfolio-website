import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '@data/siteData'
import './Navbar.css'

export default function Navbar({ theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const offset = 60
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="container container--wide nav__inner">
        <a href="#hero" className="nav__brand" onClick={(e) => handleLinkClick(e, '#hero')}>
          Home
        </a>

        <div className={`nav__right ${mobileOpen ? 'active' : ''}`}>
          <ul className="nav__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>

        <button
          className="nav__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </nav>
  )
}
