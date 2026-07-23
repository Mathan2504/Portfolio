import { useEffect, useState } from 'react'

const lines = [
  'Java · Spring Boot · Hibernate/JPA',
  'React.js · MySQL · REST APIs',
  '6 yrs support exp -> Full Stack Dev',
]

export default function Hero() {
  const [text, setText] = useState('')

  useEffect(() => {
    let lineIdx = 0
    let charIdx = 0
    let deleting = false
    let timeoutId

    function tick() {
      const current = lines[lineIdx]
      if (!deleting) {
        charIdx++
        setText(current.slice(0, charIdx))
        if (charIdx === current.length) {
          deleting = true
          timeoutId = setTimeout(tick, 1400)
          return
        }
      } else {
        charIdx--
        setText(current.slice(0, charIdx))
        if (charIdx === 0) {
          deleting = false
          lineIdx = (lineIdx + 1) % lines.length
        }
      }
      timeoutId = setTimeout(tick, deleting ? 28 : 45)
    }

    tick()
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <header className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-location"><i className="fas fa-location-dot"></i> Chennai, Tamil Nadu, India</div>
          <h1>Mathan R</h1>
          <div className="hero-role">Java Full Stack Developer</div>
          <p className="hero-tagline">
            Building scalable RESTful web applications with Spring Boot, Hibernate/JPA, and React.js — backed by 6 years of technical support &amp; systems experience.
          </p>
          <div className="hero-actions">
            <a href="/Mathan_R_Resume.pdf" download className="btn btn-primary">
              <i className="fas fa-download"></i> Download Resume
            </a>
            <a href="#projects" className="btn btn-outline">
              <i className="fas fa-diagram-project"></i> View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="fas fa-envelope"></i> Contact Me
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">6+</div>
              <div className="stat-label">YEARS SUPPORT &amp; SYSTEMS EXP.</div>
            </div>
            <div>
              <div className="stat-num">2</div>
              <div className="stat-label">FULL STACK PROJECTS SHIPPED</div>
            </div>
            <div>
              <div className="stat-num">15+</div>
              <div className="stat-label">REST APIS ENGINEERED</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-ring">
            <div className="portrait-inner">
              <img src="/profile.jpg" alt="Mathan R" />
            </div>
          </div>
          <div className="terminal">
            <div className="terminal-bar">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">mathan@fullstack: ~</span>
            </div>
            <div className="terminal-body">
              <div className="prompt-line"><span className="prompt-sign">$</span>whoami --stack</div>
              <div className="typewriter">{text}<span className="cursor"></span></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
