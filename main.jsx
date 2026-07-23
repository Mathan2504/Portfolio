import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    function onScroll() {
      const fromTop = window.scrollY + 120
      const sections = document.querySelectorAll('section[id], header[id]')
      sections.forEach((sec) => {
        if (sec.offsetTop <= fromTop && sec.offsetTop + sec.offsetHeight > fromTop) {
          setActive(sec.id)
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${open ? ' open' : ''}`} id="navbar">
      <div className="container">
        <a href="#home" className="logo">Mathan<span className="dot">.</span>R</a>
        <ul className="nav-links" id="navLinks">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.slice(1) ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <a href="/Mathan_R_Resume.pdf" download className="btn btn-outline btn-sm">
            <i className="fas fa-download"></i> Resume
          </a>
          <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setOpen((o) => !o)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  )
}
