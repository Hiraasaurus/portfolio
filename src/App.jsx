import { useState } from 'react'
import './App.css'

const projects = [
  ['01', 'Signal / Dashboard', 'PRODUCT DESIGN + BUILD', 'A real-time operations cockpit that turns noisy infrastructure data into decisions a team can act on.', ['React', 'TypeScript', 'WebSockets'], 'project-signal'],
  ['02', 'Orbit Commerce', 'E-COMMERCE PLATFORM', 'A fast, editorial storefront for a small-batch studio, built around clear browsing and confident checkout.', ['Next.js', 'Stripe', 'Postgres'], 'project-orbit'],
  ['03', 'Field Notes', 'KNOWLEDGE SYSTEM', 'A quiet publishing tool for collecting technical research, connecting ideas, and sharing what matters.', ['React', 'Node.js', 'SQLite'], 'project-notes'],
]

const skillGroups = [
  ['Frontend', ['React', 'JavaScript', 'TypeScript', 'CSS', 'Accessibility']],
  ['Backend', ['Node.js', 'REST APIs', 'Python', 'Authentication']],
  ['Databases', ['PostgreSQL', 'SQLite', 'Redis', 'Prisma', 'FireStore']],
  ['Tools + DevOps', ['Git', 'Docker', 'Vercel', 'Figma', 'CI/CD']],
]

function App() {
  const [isLight, setIsLight] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`)
    const body = encodeURIComponent(`${data.get('message')}\n\nReply to: ${data.get('email')}`)
    window.location.href = `mailto:hello@alexmorgan.dev?subject=${subject}&body=${body}`
  }

  return (
    <div className={isLight ? 'site light-mode' : 'site'}>
      <header className="topbar">
        <a className="brand" href="#top"><span className="brand-mark">[AM]</span> IZZA SYAHIRA</a>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        <button className="theme-toggle" type="button" onClick={() => setIsLight(!isLight)} aria-label="Toggle color theme"><span className="toggle-dot" /> {isLight ? 'LIGHT' : 'DARK'}</button>
      </header>
      <main id="top">
        <section className="hero" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS <span className="eyebrow-id">/ 2024—25</span></p><h1 id="hero-title">DIGITAL<br /><span>CRAFT,</span><br />MADE CLEAR.</h1><p className="hero-intro">I’m Izza Syahira, a Software Engineer and product-minded builder. I make digital experiences that feel direct, useful, and a little unexpected.</p><div className="hero-actions"><a className="button button-pink" href="#work">View selected work <span>↘</span></a><a className="button button-quiet" href="mailto:hello@alexmorgan.dev">Start a conversation <span>↗</span></a></div></div><div className="hero-meta"><div className="scanline" /><p>FRONTEND ENGINEER<br />&amp; PRODUCT BUILDER</p><p>BASED IN BROOKLYN<br />WORKING WORLDWIDE</p><div className="hero-stamp">AM<br /><small>EST. 2018</small></div></div></section>
        <section className="ticker" aria-label="Skills ticker"><span>RESEARCH</span><i>✳</i><span>DESIGN</span><i>✳</i><span>ENGINEERING</span><i>✳</i><span>DETAIL</span></section>
        <section className="content-section" id="work" aria-labelledby="work-title"><div className="section-heading"><p className="section-label">01 / SELECTED WORK</p><h2 id="work-title">A FEW THINGS<br /><em>IN MOTION.</em></h2><p className="section-note">A small selection of recent collaborations, experiments, and products I’ve helped bring into the world.</p></div><div className="project-list">{projects.map(([number, title, type, description, stack, className]) => <article className="project-card" key={number}><div className={`project-visual ${className}`}><span className="project-number">{number}</span><div className="visual-ui"><span /><span /><span /></div><div className="visual-word">{number === '01' ? 'SIGNAL' : number === '02' ? 'ORBIT' : 'FIELD'}</div></div><div className="project-info"><p className="project-type">{type}</p><h3>{title}</h3><p>{description}</p><div className="project-footer"><div className="tags">{stack.map((item) => <span key={item}>{item}</span>)}</div><a href="#contact">View case ↗</a></div></div></article>)}</div></section>
        <section className="content-section split-section" id="about" aria-labelledby="about-title"><div className="section-heading"><p className="section-label">02 / THE PRACTICE</p><h2 id="about-title">CURIOUS BY<br /><em>DEFAULT.</em></h2></div><div className="about-copy"><p className="lead">Good software is a conversation between a sharp idea and a thoughtful interface.</p><p>I care about the parts of digital work that often go unnoticed: the rhythm of a transition, the right amount of information, the feeling that a tool is working with you. My practice sits between design and engineering, where the best questions tend to live.</p><p>These days, I’m focused on building calm, capable products for teams doing ambitious work.</p><a className="text-link" href="mailto:hello@alexmorgan.dev">More about my approach <span>↗</span></a></div></section>
        <section className="content-section capabilities" aria-labelledby="skills-title"><div className="section-heading"><p className="section-label">03 / CAPABILITIES</p><h2 id="skills-title">THE TOOLKIT<br /><em>BEHIND THE WORK.</em></h2></div><div className="skill-grid">{skillGroups.map(([title, skills]) => <div className="skill-group" key={title}><h3>{title}</h3><div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>
        <section className="content-section credentials" aria-labelledby="credentials-title"><div className="section-heading"><p className="section-label">04 / CREDENTIALS</p><h2 id="credentials-title">SIGNALS OF<br /><em>THE CRAFT.</em></h2></div><div className="credential-list">{['AWS Certified Cloud Practitioner', 'Meta Front-End Developer', 'Google UX Design Certificate'].map((credential, index) => <a href="#contact" className="credential" key={credential}><span className="credential-icon">{index === 0 ? 'AWS' : index === 1 ? '∞' : 'GCP'}</span><span><strong>{credential}</strong><small>{index === 0 ? 'Amazon Web Services / 2023' : index === 1 ? 'Meta / 2022' : 'Google / 2021'}</small></span><span>↗</span></a>)}</div></section>
        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div><p className="section-label">05 / CONTACT</p><h2 id="contact-title">LET’S MAKE<br /><em>SOMETHING USEFUL.</em></h2><p className="contact-note">Have a product in mind, a tricky interface, or just a good question? Drop me a line.</p><a className="email-link" href="mailto:izz.syhira@gmail.com">izz.syhira@gmail.com ↗</a></div><form onSubmit={handleSubmit}><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@company.com" /></label><label>Message<textarea name="message" required rows="4" placeholder="Tell me a little about it..." /></label><button className="button button-pink" type="submit">Send enquiry <span>↗</span></button></form></section>
      </main>
      <footer><span>© 2026 IZZA SYAHIRA</span><span>BUILT WITH INTENT / <a href="https://github.com/Hiraasaurus" target="_blank" rel="noreferrer">GITHUB ↗</a> / <a href="https://www.linkedin.com/in/izzasyahira/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></span></footer>
    </div>
  )
}

export default App
