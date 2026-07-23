import Reveal from './Reveal.jsx'

const highlights = [
  {
    icon: 'fas fa-server',
    title: 'Backend-first mindset',
    text: 'Years of debugging live retail systems translate directly into disciplined API design and exception handling.',
  },
  {
    icon: 'fas fa-people-arrows',
    title: 'Vendor & client coordination',
    text: 'Comfortable gathering requirements and communicating technical issues clearly to non-technical stakeholders.',
  },
  {
    icon: 'fas fa-bolt',
    title: 'Fast, structured learner',
    text: 'Completed an intensive full stack curriculum while shipping two production-style projects in parallel.',
  },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <span className="eyebrow">About</span>
        <Reveal as="h2" className="section-title">From systems support to shipping full stack apps</Reveal>
        <Reveal as="p" className="section-sub">
          The short version of how six years on the ground floor of retail operations turned into a full stack career.
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text">
            <p>Java Full Stack Developer with hands-on, project-proven experience building RESTful web applications using Spring Boot, Hibernate/JPA, and React.js. Trained intensively at QSpiders across the full Java Full Stack curriculum, and backed by 6 years of professional experience in software support, backend coordination, and systems testing in a live retail-operations environment.</p>
            <p>Comfortable across the stack — MVC architecture, REST API design, MySQL data modeling, JUnit testing, and Git/Maven-based workflows — with a track record of reliability, fast learning, and clear communication built through direct client and vendor coordination.</p>
            <p>Currently looking for an entry-level / associate Java Full Stack Developer role in Chennai to apply and grow these skills within a product or services team.</p>
          </Reveal>
          <Reveal className="about-highlights">
            {highlights.map((h) => (
              <div className="highlight-card" key={h.title}>
                <i className={h.icon}></i>
                <div>
                  <h4>{h.title}</h4>
                  <p>{h.text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
