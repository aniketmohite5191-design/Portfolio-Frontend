import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, GraduationCap, BriefcaseBusiness, Download, ExternalLink,
  MapPin, Sparkles, Terminal, Monitor, Database, Globe, Send, Sun, Moon
} from 'lucide-react'

const skills = [
  { name: 'Java', type: 'Programming', icon: Code2 },
  { name: 'Python', type: 'Programming', icon: Terminal },
  { name: 'JavaScript', type: 'Programming', icon: Code2 },
  { name: 'React.js', type: 'Frontend', icon: Globe },
  { name: 'HTML & CSS', type: 'Frontend', icon: Monitor },
  { name: 'Node.js', type: 'Backend', icon: Terminal },
  { name: 'PHP', type: 'Backend', icon: Code2 },
  { name: 'MySQL', type: 'Database', icon: Database },
  { name: 'MongoDB', type: 'Database', icon: Database },
  { name: 'Git & GitHub', type: 'Tools', icon: Github },
]

const projects = [
  {
    number: '01',
    title: 'Furniture E-Commerce',
    category: 'Full-stack web application',
    description: 'An online furniture shopping experience with product browsing, clear product details, and a responsive interface.',
    stack: ['React', 'Node.js', 'MongoDB'],
    accent: 'violet',
    link: 'https://github.com/',
  },
  {
    number: '02',
    title: 'Gym Management System',
    category: 'MERN stack project',
    description: 'A simple gym admin panel to manage member records, update details, and remove entries through CRUD operations.',
    stack: ['React', 'Express', 'MongoDB'],
    accent: 'blue',
    link: 'https://github.com/',
  },
  {
    number: '03',
    title: 'Computer & Accessories Store',
    category: 'Academic project',
    description: 'A product catalogue concept for computer and accessory shopping, built as a practical web development project.',
    stack: ['PHP', 'MySQL', 'HTML/CSS'],
    accent: 'pink',
    link: 'https://github.com/',
  },
]

const education = [
  { period: '2026 — Present', title: 'Master of Computer Applications (MCA)', place: 'Pune, Maharashtra', detail: 'Currently pursuing MCA.' },
  { period: 'Completed 2026', title: 'Bachelor of Computer Applications (BCA)', place: 'Mudhoji College, Phaltan', detail: 'CGPA: 7.8 · 75.38%' },
  { period: '2025', title: 'Python Full Stack Developer Certificate', place: 'Mudhoji College, Phaltan City', detail: 'Foundational full-stack development training.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') || 'dark' } catch { return 'dark' }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('portfolio-theme', theme) } catch { /* storage is optional */ }
  }, [theme])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact']
      const current = sections.find((id) => {
        const el = document.getElementById(id)
        return el && window.scrollY >= el.offsetTop - 180 && window.scrollY < el.offsetTop + el.offsetHeight - 180
      })
      if (current) setActive(current.charAt(0).toUpperCase() + current.slice(1))
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const goToContact = (event) => {
    event.preventDefault()
    closeMenu()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Resume', 'Contact']

  return (
    <>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">A<span>.</span></span>
          <span>ANIKET<span className="brand-muted"> MOHITE</span></span>
        </a>
        <div className="header-controls">
          <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}<span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className={active === item ? 'active' : ''}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={goToContact}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES <span className="eyebrow-line" /></div>
            <p className="hero-kicker">Hello, I'm</p>
            <h1>Aniket<br /><span className="gradient-text">Mohite.</span></h1>
            <h2>Aspiring Full-Stack <span>Developer</span></h2>
            <p className="hero-description">I build clean, responsive web experiences and enjoy turning ideas into useful digital products. Currently learning, building, and growing one project at a time.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#contact" onClick={goToContact}>Get in touch <Mail size={16} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> Phaltan, Maharashtra, India</span>
              <span className="meta-separator" />
              <span><Sparkles size={15} /> MCA Student · 2026</span>
            </div>
          </div>
          <div className="hero-art reveal reveal-delay">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="hero-card">
              <div className="card-top"><span className="window-dots"><i /><i /><i /></span><span className="card-label">DEVELOPER PROFILE</span></div>
              <div className="avatar-wrap"><div className="avatar">AM<img src="/aniket-photo.jpg" alt="Aniket Mohite" onError={(event) => { event.currentTarget.style.display = 'none' }} /><span>✦</span></div></div>
              <div className="code-line"><span className="code-purple">const</span> developer = <span className="code-yellow">{'{'}</span></div>
              <div className="code-line code-indent"><span className="code-blue">name</span>: <span className="code-green">'Aniket Mohite'</span>,</div>
              <div className="code-line code-indent"><span className="code-blue">focus</span>: <span className="code-green">'Full Stack'</span>,</div>
              <div className="code-line code-indent"><span className="code-blue">mindset</span>: <span className="code-green">'Always learning'</span></div>
              <div className="code-line"><span className="code-yellow">{'}'}</span><span className="cursor">▍</span></div>
              <div className="hero-card-footer"><span className="footer-pill"><span className="status-dot" /> Building something new</span><span className="footer-bracket">/&gt;</span></div>
            </div>
            <div className="float-chip chip-react"><span className="chip-icon">⚛</span> React.js</div>
            <div className="float-chip chip-java"><span className="chip-icon">☕</span> Java</div>
            <div className="float-chip chip-db"><Database size={15} /> MongoDB</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="section-wrap section-block" id="about">
          <div className="section-heading reveal"><span className="section-index">01 / ABOUT</span><h2>A little about <span className="gradient-text">me.</span></h2></div>
          <div className="about-grid">
            <div className="about-intro reveal">
              <p className="lead">Curious mind. Practical builder. <span className="text-accent">Future developer.</span></p>
              <p>I'm Aniket, a computer applications graduate from Phaltan, Maharashtra, currently pursuing my MCA in Pune. I enjoy learning how web applications work—from the user interface to the database behind it.</p>
              <p>My current focus is strengthening my fundamentals, building real projects, and becoming a dependable full-stack developer. I believe consistent practice and curiosity make a real difference.</p>
              <a href="#contact" className="text-link">Let's connect <ArrowUpRight size={16} /></a>
            </div>
            <div className="about-stats reveal reveal-delay">
              <div className="stat-card"><span className="stat-number">03<span>+</span></span><span className="stat-label">Practice projects</span><span className="stat-note">Learning by building</span></div>
              <div className="stat-card"><span className="stat-number">10<span>+</span></span><span className="stat-label">Technologies explored</span><span className="stat-note">Always learning</span></div>
              <div className="stat-card stat-wide"><div className="stat-icon"><GraduationCap size={22} /></div><div><span className="stat-label">Currently pursuing</span><strong>Master of Computer Applications</strong><span className="stat-note">Pune, Maharashtra</span></div></div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <div className="section-heading reveal"><span className="section-index">02 / TOOLKIT</span><h2>Skills & <span className="gradient-text">technologies.</span></h2><p className="section-subtitle">The tools I'm learning and using to bring ideas to life.</p></div>
          <div className="skills-grid">
            {skills.map(({ name, type, icon: Icon }, index) => <div className="skill-card reveal" style={{ '--delay': `${index * 45}ms` }} key={name}><div className="skill-icon"><Icon size={20} /></div><div><strong>{name}</strong><span>{type}</span></div><ArrowUpRight className="skill-arrow" size={15} /></div>)}
          </div>
          <p className="small-note"><span className="status-dot" /> Skills are a work in progress — I'm continuously practicing and improving.</p>
        </section>

        <section className="section-wrap section-block" id="projects">
          <div className="section-heading reveal"><span className="section-index">03 / SELECTED WORK</span><h2>Things I've <span className="gradient-text">built.</span></h2><p className="section-subtitle">Academic and practice projects that help me learn by doing.</p></div>
          <div className="projects-grid">
            {projects.map((project) => <article className={`project-card ${project.accent} reveal`} key={project.number}>
              <div className="project-top"><span className="project-number">{project.number}</span><a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} link`} className="project-open"><ArrowUpRight size={19} /></a></div>
              <div className="project-visual"><div className="mock-window"><div className="mock-bar"><i /><i /><i /><span>project-preview.app</span></div><div className="mock-content"><div className="mock-sidebar"><b /><i /><i /><i /></div><div className="mock-main"><span className="mock-label">{project.category}</span><div className="mock-title-line" /><div className="mock-cards"><i /><i /><i /></div><div className="mock-bottom-line" /></div></div></div><div className="visual-glow" /></div>
              <div className="project-body"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.link} target="_blank" rel="noreferrer">Project link <ExternalLink size={14} /></a></div>
            </article>)}
          </div>
          <div className="project-disclaimer"><Sparkles size={16} /><span>Replace the sample GitHub links with your actual project repositories before publishing.</span></div>
        </section>

        <section className="section-wrap section-block" id="education">
          <div className="section-heading reveal"><span className="section-index">04 / JOURNEY</span><h2>Education & <span className="gradient-text">learning.</span></h2></div>
          <div className="timeline">
            {education.map((item, index) => <div className="timeline-item reveal" key={item.title}><div className="timeline-marker"><span>{index + 1}</span></div><div className="timeline-card"><span className="timeline-period">{item.period}</span><h3>{item.title}</h3><p className="timeline-place"><GraduationCap size={15} /> {item.place}</p><p className="timeline-detail">{item.detail}</p></div></div>)}
          </div>
        </section>


        <section className="section-wrap section-block" id="resume">
          <div className="resume-panel reveal">
            <div className="resume-icon"><Download size={24} /></div>
            <div className="resume-copy">
              <span className="section-index">05 / RESUME</span>
              <h2>Want the details? <span className="gradient-text">Here's my resume.</span></h2>
              <p>Download a first-draft resume and update your contact details, links, and any information that has changed before sharing it with recruiters.</p>
            </div>
            <a className="button button-primary resume-button" href="/Aniket-Mohite-Resume.pdf" download>Download Resume <Download size={16} /></a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="section-heading reveal"><span className="section-index">06 / GET IN TOUCH</span><h2>Have a project in <span className="gradient-text">mind?</span></h2><p className="section-subtitle">I'm always happy to connect, learn, and talk about opportunities.</p></div>
            <div className="contact-card reveal reveal-delay">
              <div className="contact-card-copy"><div className="contact-icon"><Send size={22} /></div><h3>Let's build something<br /><span className="gradient-text">meaningful.</span></h3><p>Have an opportunity, idea, or just want to say hello? Send me a message.</p></div>
              <div className="contact-form-wrap">
                <p className="form-intro">Fill in the form and your message will be sent to my email.</p>
                <form className="contact-form" action="https://formsubmit.co/aniketmohite5191@gmail.com" method="POST">
                  <input type="hidden" name="_subject" value="New message from Aniket's portfolio" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="true" />
                  <label htmlFor="visitor-name">Your name</label>
                  <input id="visitor-name" type="text" name="name" placeholder="Enter your name" autoComplete="name" required />
                  <label htmlFor="visitor-email">Your email</label>
                  <input id="visitor-email" type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
                  <label htmlFor="visitor-message">Message</label>
                  <textarea id="visitor-message" name="message" rows="4" placeholder="Write your message here..." required />
                  <button className="button button-primary form-submit" type="submit">Send message <Send size={16} /></button>
                  <p className="form-note">Email delivery activates after you replace the placeholder email and confirm it with FormSubmit once.</p>
                </form>
                <div className="contact-social-links">
                  <a href="https://github.com/aniketmohite5191-design/support-agent/upload/aniketmohite5191-design/support-agent/uploa/" target="_blank" rel="noreferrer" className="contact-link"><span className="contact-link-icon"><Github size={18} /></span><span><small>Find my code</small><strong>GitHub profile</strong></span><ArrowUpRight size={17} /></a>
                  <a href="https://www.linkedin.com/in/aniket-mohite-4478032a9?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="contact-link"><span className="contact-link-icon"><Linkedin size={18} /></span><span><small>Connect with me</small><strong>LinkedIn profile</strong></span><ArrowUpRight size={17} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a href="#home" className="brand footer-brand"><span className="brand-mark">A<span>.</span></span><span>ANIKET<span className="brand-muted"> MOHITE</span></span></a><p>Designed with curiosity. Built with React.</p><a href="#home" className="back-top">Back to top <ArrowUpRight size={15} /></a><span className="copyright">© {new Date().getFullYear()} Aniket Mohite</span></footer>
    </>
  )
}

export default App
