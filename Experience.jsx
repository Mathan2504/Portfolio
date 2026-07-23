import Reveal from './Reveal.jsx'

const items = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Java Full Stack Developer Training',
    org: 'QSpiders Software Training Institute, Chennai',
    meta: '2025 – 2026',
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'Manonmaniam Sundaranar University',
    meta: '70% · 2016 – 2019',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <span className="eyebrow">Training &amp; Education</span>
        <Reveal as="h2" className="section-title">Foundation</Reveal>
        <Reveal as="p" className="section-sub">
          Formal education paired with intensive, project-based full stack training.
        </Reveal>

        <div className="edu-grid">
          {items.map((it) => (
            <Reveal className="edu-card" key={it.title}>
              <div className="edu-icon"><i className={it.icon}></i></div>
              <h4>{it.title}</h4>
              <div className="edu-org">{it.org}</div>
              <div className="edu-meta">{it.meta}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
