
import PortraitReveal from "./components/PortraitReveal";
import "./App.css";

function App() {
  return (
    <main>
      {/* =========================
          NAVIGATION
      ========================= */}
      <header className="site-header">
        <a href="#home" className="logo">
          Ladywa<span>.</span>
        </a>

        <nav className="main-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* =========================
          HERO
      ========================= */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-label">JUNIOR SOFTWARE DEVELOPER</p>

          <h1>
            Hi, I'm
            <br />
            <span>Ladywa.</span>
          </h1>

          <p className="hero-description">
            I combine business understanding with technology to analyst problems,
            improve processes, and create practical digital solutions 
            
          </p>

          <div className="hero-actions">
            <a href="#projects">View Projects</a>
            <a href="#contact">Contact Me</a>
          </div>
        </div>

        <div className="hero-visual">
          <PortraitReveal />
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================= */}
      <section className="section about-section" id="about">
        <div className="section-label">ABOUT ME</div>

        <div className="about-grid">
          <div>
            <h2>
              Business thinking,
              <br />
              <em>technology mindset.</em>
            </h2>
          </div>

          <div className="about-content">
            <p>
              I am a career changer with a background in Industrial
              Management and Logistics, currently developing my skills
              in software development and digital product design.
            </p>

            <p>
              My previous experience in operations, data management,
              reporting and coordination helped me understand how
              business processes work in real situations.
            </p>

            <p>
              Through software development projects, I became interested
              in how technology can turn business needs into practical
              digital solutions. I enjoy working across business,
              design and technology.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          EXPERIENCE
      ========================= */}
      <section className="section experience-section" id="experience">
        <div className="section-label">EXPERIENCE</div>

        <div className="section-heading">
          <h2>Experience</h2>
          <p>
            Experience in operations, administration, coordination and
            software development projects.
          </p>
        </div>

        <div className="experience-list">
          <article className="experience-item">
            <div className="experience-date">2025 — 2026</div>

            <div className="experience-main">
              <h3>Finished Goods Receiving Administrator</h3>
              <h4>Naraya</h4>

              <p>
                Managed finished goods receiving, quantity and damage
                checking, QC coordination and daily/monthly receiving
                reports.
              </p>

              <div className="tag-list">
                <span>Operations</span>
                <span>Reporting</span>
                <span>Coordination</span>
                <span>Data Management</span>
              </div>
            </div>
          </article>

          <article className="experience-item">
            <div className="experience-date">2025</div>

            <div className="experience-main">
              <h3>Administrative Officer</h3>
              <h4>Goals GPS</h4>

              <p>
                Handled VAT document input, training schedules,
                allowances, overtime, payslips, management reports and
                GPS system checking for customers.
              </p>

              <div className="tag-list">
                <span>Administration</span>
                <span>Documentation</span>
                <span>Reporting</span>
              </div>
            </div>
          </article>

          <article className="experience-item">
            <div className="experience-date">2021 — 2023</div>

            <div className="experience-main">
              <h3>Owner / Sales & Operations</h3>
              <h4>Date Palm Business</h4>

              <p>
                Managed customer inquiries, orders, pricing, stock,
                packing, shipping and sales records while coordinating
                with farms and customers.
              </p>

              <div className="tag-list">
                <span>Sales</span>
                <span>Operations</span>
                <span>Customer Communication</span>
                <span>Problem Solving</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =========================
          PROJECTS
      ========================= */}
      <section className="section projects-section" id="projects">
        <div className="section-label">PROJECTS</div>

        <div className="section-heading">
          <h2>Selected Project</h2>
          <p>
            A team project developed during the Generation Thailand
            Junior Software Developer Bootcamp.
          </p>
        </div>

        <article className="project-card">
          <div className="project-number">01</div>

          <div className="project-info">
            <p className="project-type">TEAM PROJECT / WEB APPLICATION</p>

            <h3>GoThailand</h3>

            <p className="project-description">
              A travel booking platform designed to help users book
              accommodation, car rental and local guide services in one
              place.
            </p>

            <div className="project-role">
              <strong>My Role</strong>
              <p>
                UI/UX Design & Frontend Development — contributed to
                interface design, user flow and frontend implementation.
              </p>
            </div>

            <div className="tag-list project-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>UI/UX</span>
              <span>Git</span>
            </div>

            <a
              href="https://gt-monorepo.vercel.app/accommodations"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View GitHub ↗
            </a>
          </div>
        </article>
      </section>

      {/* =========================
          EDUCATION
      ========================= */}
      <section className="section education-section" id="education">
        <div className="section-label">EDUCATION</div>

        <div className="education-list">
          <article className="education-item">
            <div className="education-year">2026</div>

            <div>
              <h3>
                Generation Thailand — Junior Software Developer
                Bootcamp
              </h3>

              <p>
                Intensive software development training covering
                frontend, backend, databases, Git/GitHub and team
                projects.
              </p>
            </div>
          </article>

          <article className="education-item">
            <div className="education-year">2014 — 2017</div>

            <div>
              <h3>Pathumthani University</h3>

              <p>
                Bachelor of Business Administration
                <br />
                Industrial Management and Logistics
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* =========================
          SKILLS
      ========================= */}
      <section className="section skills-section" id="skills">
        <div className="section-label">SKILLS</div>

        <div className="skills-grid">
          <div className="skill-group">
            <h3>Technical Skills</h3>

            <div className="skill-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>SQL</span>
              <span>MongoDB</span>
              <span>Git / GitHub</span>
            </div>
          </div>

          <div className="skill-group">
            <h3>Soft Skills</h3>

            <div className="skill-list">
              <span>Problem Solving</span>
              <span>Communication</span>
              <span>Coordination</span>
              <span>Attention to Detail</span>
              <span>Adaptability</span>
              <span>Teamwork</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CONTACT
      ========================= */}
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <p className="section-label">CONTACT</p>

          <h2>
            Let's work
            <br />
            <em>together.</em>
          </h2>

          <p>
            I am open to opportunities in software development,
            business analysis and roles connecting business needs with
            technology.
          </p>

          <a
            href="mailto:kusuma.pkmn@gmail.com"
            className="contact-email"
          >
           kusuma.pkmn@gmail.com 
          </a>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}
      <footer className="footer">
        <p>© 2026 Ladywa. All rights reserved.</p>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>

          <a
            href="https://github.com/Lady-Ladywaa"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GH
          </a>

          <a
            href="https://line.me/"
            target="_blank"
            rel="noreferrer"
            aria-label="LINE"
          >
            LINE
          </a>

          <a
            href="mailto:kusuma.pkm@gmail.com"
            aria-label="Email"
          >
            @
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;

