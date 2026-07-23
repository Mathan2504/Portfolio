import Reveal from './Reveal.jsx'

const projects = [
  {
    pill: { icon: 'fas fa-star', label: 'Featured' },
    year: '2026',
    title: 'Banking Application',
    badges: ['React.js', 'Spring Boot', 'MySQL', 'Hibernate/JPA', 'Docker'],
    bullets: [
      <>Built a full-stack Banking system with User, Account, Loan, and Transaction modules for deposits and fund transfers.</>,
      <>Designed Spring Boot REST APIs with global exception handling using <code>@ControllerAdvice</code>.</>,
      <>Containerized the application with Docker and deployed the front end for live demo access.</>,
    ],
    demo: 'https://banking-application-sigma.vercel.app',
    repo: 'https://github.com/Mathan2504/banking-application',
  },
  {
    pill: { icon: 'fas fa-users', label: 'Full Stack' },
    year: '2025–2026',
    title: 'Full Stack Employee Management System',
    badges: ['React.js', 'Spring Boot', 'MySQL', 'Hibernate/JPA', 'JUnit', 'Mockito', 'Docker'],
    bullets: [
      <>Engineered a full-stack EMS handling 100+ employee records end to end with 15+ CRUD REST APIs.</>,
      <>Wrote unit tests with JUnit and Mockito, achieving 80%+ test coverage.</>,
    ],
    demo: 'https://employee-management-system-project-eta.vercel.app',
    repo: 'https://github.com/Mathan2504/Employee-Management-System-Project',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="eyebrow">Featured Work</span>
        <Reveal as="h2" className="section-title">Projects</Reveal>
        <Reveal as="p" className="section-sub">
          Two full stack builds covering everything from data modeling to deployment.
        </Reveal>

        <div className="projects-grid">
          {projects.map((p) => (
            <Reveal className="project-card" key={p.title}>
              <div className="project-top">
                <span className="project-featured-pill"><i className={p.pill.icon}></i> {p.pill.label}</span>
                <span className="project-tag-year">{p.year}</span>
              </div>
              <h3>{p.title}</h3>
              <div className="project-badges">
                {p.badges.map((b) => (
                  <span className="badge" key={b}>{b}</span>
                ))}
              </div>
              <ul className="project-list">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  <i className="fas fa-arrow-up-right-from-square"></i> Live Demo
                </a>
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  <i className="fab fa-github"></i> GitHub Repo
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
