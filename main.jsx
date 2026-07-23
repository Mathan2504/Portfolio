:root {
  --bg: #0f172a;
  --bg-soft: #0b1324;
  --card: #1e293b;
  --card-glass: rgba(30, 41, 59, 0.55);
  --border: #334155;
  --accent: #3b82f6;
  --accent-2: #06b6d4;
  --gradient: linear-gradient(135deg, var(--accent), var(--accent-2));
  --text: #f8fafc;
  --text-muted: #94a3b8;
  --radius: 12px;
  --radius-lg: 20px;
  --max-w: 1200px;
  --font-display: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  line-height: 1.6;
  overflow-x: hidden;
}

h1, h2, h3, h4, .logo, .btn, .nav-links a {
  font-family: var(--font-display);
}

a { color: inherit; text-decoration: none; }
ul { list-style: none; }
img { max-width: 100%; display: block; }

.container {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 24px;
}

section { padding: 80px 0; position: relative; }

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  color: var(--accent-2);
  text-transform: uppercase;
  margin-bottom: 14px;
}

.eyebrow::before {
  content: '';
  width: 18px;
  height: 2px;
  background: var(--gradient);
  display: inline-block;
  border-radius: 2px;
}

.section-title {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  margin-bottom: 12px;
  letter-spacing: -0.02em;
}

.section-sub {
  color: var(--text-muted);
  max-width: 620px;
  margin-bottom: 48px;
  font-size: 1rem;
}

::selection { background: var(--accent); color: var(--text); }

::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 10px; }
::-webkit-scrollbar-thumb:hover { background: var(--accent); }

.ambient-glow {
  position: fixed;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(600px circle at 15% 10%, rgba(59, 130, 246, 0.18), transparent 60%),
    radial-gradient(500px circle at 85% 30%, rgba(6, 182, 212, 0.14), transparent 60%),
    var(--bg);
}

/* ---------- Navbar ---------- */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.logo {
  font-weight: 700;
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo .dot { color: var(--accent-2); }

.nav-links {
  display: flex;
  align-items: center;
  gap: 34px;
}

.nav-links a {
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text-muted);
  position: relative;
  padding: 6px 0;
  transition: color var(--transition);
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: var(--gradient);
  border-radius: 2px;
  transition: width var(--transition);
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text);
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

.nav-cta {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-toggle {
  display: none;
  background: none;
  border: 1px solid var(--border);
  color: var(--text);
  width: 42px;
  height: 42px;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
}

/* ---------- Buttons ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 24px;
  border-radius: 10px;
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  transition: transform var(--transition), box-shadow var(--transition), background var(--transition), border-color var(--transition);
  white-space: nowrap;
}

.btn-primary {
  background: var(--gradient);
  color: #051019;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(59, 130, 246, 0.35);
}

.btn-outline {
  background: transparent;
  border-color: var(--border);
  color: var(--text);
}

.btn-outline:hover {
  border-color: var(--accent-2);
  color: var(--accent-2);
  transform: translateY(-3px);
}

.btn-sm { padding: 10px 18px; font-size: 0.85rem; }

/* ---------- Hero ---------- */
.hero {
  padding-top: 168px;
  padding-bottom: 100px;
}

.hero .container {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 60px;
  align-items: center;
}

.hero-location {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-bottom: 18px;
}

.hero-location i { color: var(--accent-2); }

.hero h1 {
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 14px;
}

.hero-role {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  font-weight: 600;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 22px;
}

.hero-tagline {
  color: var(--text-muted);
  font-size: 1.05rem;
  max-width: 560px;
  margin-bottom: 36px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 44px;
}

.hero-stats {
  display: flex;
  gap: 34px;
}

.hero-stats .stat-num {
  font-family: var(--font-mono);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text);
}

.hero-stats .stat-label {
  font-size: 0.78rem;
  color: var(--text-muted);
  letter-spacing: 0.03em;
}

.hero-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
}

.portrait-ring {
  position: relative;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  padding: 6px;
  background: conic-gradient(from 0deg, var(--accent), var(--accent-2), var(--accent));
  animation: spin 8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.portrait-ring .portrait-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: var(--bg);
  animation: spin-reverse 8s linear infinite;
}

@keyframes spin-reverse {
  to { transform: rotate(-360deg); }
}

.portrait-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.terminal {
  width: 100%;
  max-width: 340px;
  background: var(--card-glass);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  backdrop-filter: blur(10px);
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.35);
}

.terminal-bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px 14px;
  background: rgba(51, 65, 85, 0.5);
  border-bottom: 1px solid var(--border);
}

.terminal-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.terminal-dot.red { background: #ef4444; }
.terminal-dot.yellow { background: #f59e0b; }
.terminal-dot.green { background: #22c55e; }

.terminal-title {
  margin-left: 6px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
}

.terminal-body {
  padding: 16px 18px;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  min-height: 130px;
  color: #a7f3d0;
}

.terminal-body .prompt-line { color: var(--text-muted); margin-bottom: 4px; }
.terminal-body .prompt-line .prompt-sign { color: var(--accent-2); margin-right: 6px; }

.typewriter { color: #e2e8f0; }

.cursor {
  display: inline-block;
  width: 7px;
  height: 1em;
  background: var(--accent-2);
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: blink 1s step-end infinite;
}

@keyframes blink { 50% { opacity: 0; } }

/* ---------- About ---------- */
.about-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 50px;
  align-items: start;
}

.about-text p {
  color: var(--text-muted);
  font-size: 1.02rem;
  margin-bottom: 18px;
}

.about-highlights {
  display: grid;
  gap: 14px;
}

.highlight-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 22px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition: transform var(--transition), border-color var(--transition);
}

.highlight-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
}

.highlight-card i {
  font-size: 1.2rem;
  color: var(--accent-2);
  margin-top: 3px;
}

.highlight-card h4 {
  font-size: 0.98rem;
  margin-bottom: 4px;
}

.highlight-card p {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0;
}

/* ---------- Skills ---------- */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.skill-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 26px 22px;
  transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
}

.skill-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-2);
  box-shadow: 0 16px 30px rgba(6, 182, 212, 0.12);
}

.skill-card-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: rgba(59, 130, 246, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-2);
  font-size: 1.1rem;
  margin-bottom: 16px;
}

.skill-card h4 {
  font-size: 1.02rem;
  margin-bottom: 14px;
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.badge {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  padding: 5px 10px;
  border-radius: 6px;
  background: rgba(51, 65, 85, 0.5);
  border: 1px solid var(--border);
  color: #cbd5e1;
  transition: border-color var(--transition), color var(--transition);
}

.badge:hover {
  border-color: var(--accent-2);
  color: var(--text);
}

/* ---------- Projects ---------- */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.project-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 30px;
  display: flex;
  flex-direction: column;
  transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
  box-shadow: 0 22px 40px rgba(59, 130, 246, 0.14);
}

.project-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}

.project-tag-year {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
}

.project-featured-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 5px 11px;
  border-radius: 999px;
  background: rgba(6, 182, 212, 0.12);
  border: 1px solid rgba(6, 182, 212, 0.4);
  color: var(--accent-2);
}

.project-card h3 {
  font-size: 1.28rem;
  margin-bottom: 14px;
}

.project-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}

.project-list {
  margin-bottom: 24px;
  flex-grow: 1;
}

.project-list li {
  position: relative;
  padding-left: 20px;
  color: var(--text-muted);
  font-size: 0.92rem;
  margin-bottom: 10px;
}

.project-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: var(--gradient);
}

.project-links {
  display: flex;
  gap: 12px;
}

/* ---------- Experience ---------- */
.exp-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 34px;
  position: relative;
  overflow: hidden;
}

.exp-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--gradient);
}

.exp-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 6px;
}

.exp-head h3 { font-size: 1.15rem; }

.exp-dates {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--accent-2);
}

.exp-company {
  color: var(--text-muted);
  font-size: 0.92rem;
  margin-bottom: 18px;
}

.exp-list li {
  position: relative;
  padding-left: 20px;
  color: var(--text-muted);
  font-size: 0.94rem;
  margin-bottom: 12px;
}

.exp-list li::before {
  content: '\2192';
  position: absolute;
  left: 0;
  color: var(--accent-2);
}

/* ---------- Education ---------- */
.edu-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.edu-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 26px;
  transition: transform var(--transition), border-color var(--transition);
}

.edu-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
}

.edu-card .edu-icon {
  width: 38px;
  height: 38px;
  border-radius: 9px;
  background: rgba(59, 130, 246, 0.14);
  color: var(--accent-2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
}

.edu-card h4 { font-size: 1.02rem; margin-bottom: 4px; }
.edu-card .edu-org { color: var(--text-muted); font-size: 0.88rem; margin-bottom: 10px; }
.edu-card .edu-meta {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--accent-2);
}

/* ---------- Contact ---------- */
.contact-panel {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 56px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.contact-panel::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(500px circle at 50% 0%, rgba(59,130,246,0.14), transparent 65%);
  pointer-events: none;
}

.contact-panel h2 { font-size: clamp(1.6rem, 3vw, 2.1rem); margin-bottom: 14px; }
.contact-panel p { color: var(--text-muted); margin-bottom: 30px; }

.contact-methods {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 34px;
  position: relative;
}

.contact-method {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(51, 65, 85, 0.4);
  border: 1px solid var(--border);
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 0.9rem;
  transition: border-color var(--transition), transform var(--transition);
}

.contact-method:hover {
  border-color: var(--accent-2);
  transform: translateY(-3px);
}

.contact-method i { color: var(--accent-2); }

.social-row {
  display: flex;
  justify-content: center;
  gap: 14px;
  position: relative;
}

.social-row a {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: transform var(--transition), border-color var(--transition), color var(--transition), background var(--transition);
}

.social-row a:hover {
  transform: translateY(-4px);
  border-color: transparent;
  background: var(--gradient);
  color: #051019;
}

/* ---------- Footer ---------- */
.footer {
  padding: 32px 0;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
  border-top: 1px solid var(--border);
}

.footer strong { color: var(--text); }

/* ---------- Scroll reveal ---------- */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* ---------- Responsive ---------- */
@media (max-width: 1024px) {
  .hero .container { grid-template-columns: 1fr; }
  .hero-visual { order: -1; }
  .about-grid { grid-template-columns: 1fr; }
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
  .projects-grid { grid-template-columns: 1fr; }
  .edu-grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  section { padding: 60px 0; }
  .nav-links, .nav-cta .btn-outline { display: none; }
  .nav-toggle { display: flex; align-items: center; justify-content: center; }
  .navbar.open .nav-links {
    display: flex;
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background: var(--bg-soft);
    flex-direction: column;
    padding: 24px;
    gap: 20px;
    border-bottom: 1px solid var(--border);
  }
  .hero { padding-top: 140px; }
  .hero-stats { gap: 24px; }
  .skills-grid { grid-template-columns: 1fr; }
  .contact-panel { padding: 36px 22px; }
}

@media (max-width: 480px) {
  .hero-actions { flex-direction: column; align-items: stretch; }
  .hero-actions .btn { justify-content: center; }
  .portrait-ring { width: 200px; height: 200px; }
}
