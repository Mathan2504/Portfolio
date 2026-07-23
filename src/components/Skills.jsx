import Reveal from './Reveal.jsx'

const groups = [
  {
    icon: 'fas fa-code',
    title: 'Languages',
    badges: ['Java (Core, OOP)', 'Collections', 'Exception Handling', 'JavaScript (ES6+)'],
  },
  {
    icon: 'fas fa-layer-group',
    title: 'Frameworks & Frontend',
    badges: [
      'Spring Boot', 'Spring Framework', 'Hibernate (JPA)', 'React.js',
      'HTML5', 'CSS3', 'React Hooks', 'Context API', 'Axios', 'React Router',
    ],
  },
  {
    icon: 'fas fa-database',
    title: 'Databases & Architecture',
    badges: ['MySQL', 'Oracle SQL', 'REST APIs', 'MVC Architecture', 'CRUD Operations', '@ControllerAdvice'],
  },
  {
    icon: 'fas fa-toolbox',
    title: 'Tools & Deployment',
    badges: ['Docker', 'Vercel', 'Render', 'Railway', 'Postman', 'Git', 'GitHub', 'Maven'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="eyebrow">Technical Skills</span>
        <Reveal as="h2" className="section-title">The stack I build with</Reveal>
        <Reveal as="p" className="section-sub">
          Organized the way I actually use them day to day — from language fundamentals to deployment.
        </Reveal>

        <div className="skills-grid">
          {groups.map((g) => (
            <Reveal className="skill-card" key={g.title}>
              <div className="skill-card-icon"><i className={g.icon}></i></div>
              <h4>{g.title}</h4>
              <div className="badge-row">
                {g.badges.map((b) => (
                  <span className="badge" key={b}>{b}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
