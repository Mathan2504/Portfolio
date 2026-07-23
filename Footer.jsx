import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Reveal className="contact-panel">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Get In Touch</span>
          <h2>Let&apos;s build something together</h2>
          <p>Open to entry-level and associate Java Full Stack Developer roles in Chennai.</p>
          <div className="contact-methods">
            <a href="mailto:mathanrsm6596@gmail.com" className="contact-method">
              <i className="fas fa-envelope"></i> mathanrsm6596@gmail.com
            </a>
            <a href="tel:+916382008656" className="contact-method">
              <i className="fas fa-phone"></i> +91-6382008656
            </a>
          </div>
          <div className="social-row">
            <a href="https://www.linkedin.com/in/mathan-rajalingam-1999rm" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Mathan2504" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://banking-application-sigma.vercel.app" target="_blank" rel="noopener noreferrer" title="Live Project">
              <i className="fas fa-rocket"></i>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
