import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <span className="eyebrow">Work Experience</span>
        <Reveal as="h2" className="section-title">Where the discipline came from</Reveal>
        <Reveal as="p" className="section-sub">
          Six years of real-world systems and client work, now applied to software development.
        </Reveal>

        <Reveal className="exp-card">
          <div className="exp-head">
            <h3>Sales Executive &amp; Software Support Coordinator</h3>
            <span className="exp-dates">Jun 2019 – May 2025</span>
          </div>
          <div className="exp-company">Annai Stores, Chennai</div>
          <ul className="exp-list">
            <li>Coordinated with software vendors on backend updates, data maintenance, and store-management-system upgrades — the same debugging and requirements-gathering muscle now applied to full stack development.</li>
            <li>Tested system updates, identified and logged application issues, and streamlined technical support and reporting processes.</li>
            <li>Managed ₹15+ lakh in monthly wholesale revenue across 80+ client accounts with 99% billing accuracy on 50+ daily orders.</li>
            <li>Built and maintained relationships with 30+ suppliers and 80+ customers; trained junior staff on billing systems and process.</li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
