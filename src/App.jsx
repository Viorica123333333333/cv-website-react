import "./App.css";

function App() {
  return (
    <main className="portfolio">
      <section className="hero">
        <div className="heroText">
          <p className="tag">Junior / Graduate Front-End Developer</p>

          <h1>Viorica Pogor</h1>

          <p className="techLine">React • JavaScript • PHP • MySQL</p>

          <p className="intro">
            Front-End Developer focused on React, JavaScript and responsive UI
            development. Built full-stack academic projects using React, PHP,
            MySQL, REST APIs and modern deployment tools.
          </p>

          <div className="heroButtons">
            <a
              className="primaryBtn"
              href="https://sweet-box.netlify.app/"
              target="_blank"
            >
              View Sweet Box
            </a>

            <a
              className="secondaryBtn"
              href="https://github.com/Viorica123333333333"
              target="_blank"
            >
              GitHub
            </a>

            <a
              className="outlineBtn"
              href="https://memory-game.infy.click/"
              target="_blank"
            >
              Memory Game
            </a>
          </div>
        </div>

        <aside className="heroCard">
          <div className="avatar">VP</div>
          <h2>Portfolio Focus</h2>
          <p>
            Responsive interfaces, React components, form validation, API
            integration and database-connected web applications.
          </p>
        </aside>
      </section>

      <section className="section">
        <h2>About Me</h2>
        <p>
          Computing student currently completing a BSc degree, with practical
          experience developing web applications using React, JavaScript, HTML,
          CSS, Node.js, and MySQL. Built Sweet Box, a React-based customisation
          platform with dynamic pricing, checkout validation, and backend
          integration. Seeking a Junior Front-End Developer role to apply and
          expand my technical skills in a professional environment.
        </p>
      </section>

      <section className="section">
        <h2>Technical Skills</h2>
        <div className="skillsGrid">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>React Router</span>
          <span>Git / GitHub</span>
          <span>PHP</span>
          <span>MySQL</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>REST APIs</span>
          <span>Responsive Design</span>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>

        <div className="projectCard featured">
          <p className="projectTag">Featured Project</p>
          <h3>Sweet Box – Full-Stack Web Application</h3>
          <p>
            A responsive macaron box customisation platform built with React,
            Node.js, Express and MySQL. The application allows users to select
            box sizes, mix flavours, view dynamic pricing and complete a
            validated checkout process.
          </p>

          <ul>
            <li>Built responsive UI using React and CSS</li>
            <li>Implemented dynamic pricing and flavour customisation</li>
            <li>Connected frontend to Express REST API</li>
            <li>Used MySQL for structured order storage</li>
            <li>Applied validation and basic backend security controls</li>
          </ul>

          <div className="links">
            <a
              className="primaryBtn"
              href="https://sweet-box.netlify.app/"
              target="_blank"
            >
              Live Demo
            </a>
            <a
              className="secondaryBtn"
              href="https://github.com/Viorica123333333333"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="projectCard">
          <h3>Memory Game – Web Application</h3>
          <p>
            Interactive browser-based memory game developed using PHP, HTML,
            CSS, JavaScript and MySQL.
          </p>

          <ul>
            <li>Created game logic and interactive gameplay</li>
            <li>Designed responsive user interface</li>
            <li>Used MySQL for game-related data handling</li>
          </ul>

          <div className="links">
            <a
              className="outlineBtn"
              href="https://memory-game.infy.click/"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </div>
      </section>

      <section className="section timeline">
        <h2>Education</h2>

        <div className="timelineItem">
          <h3>BSc (Hons) Computing Top-Up</h3>
          <p>Arden University · Sep 2025 – May 2026</p>
        </div>

        <div className="timelineItem">
          <h3>Pearson BTEC Level 5 HND in Computing</h3>
          <p>ICON College of Technology and Management · Feb 2023 – Jan 2025</p>
          <p>Graduated with Merit</p>
        </div>
      </section>

      <section className="section timeline">
        <h2>Experience</h2>

        <div className="timelineItem">
          <h3>Warehouse Operative</h3>
          <p>Delamode Anglia · May 2022 – Jan 2023</p>
          <p>
            Developed strong organisation, teamwork, attention to detail and
            software-based order processing skills.
          </p>
        </div>

        <div className="timelineItem">
          <h3>Warehouse Worker</h3>
          <p>Kesslers London · Aug 2020 – Mar 2022</p>
          <p>
            Worked in fast-paced environments, meeting deadlines while
            maintaining accuracy and operational standards.
          </p>
        </div>
      </section>

      <section className="contact">
        <h2>Let’s Connect</h2>
        <p>
          I am currently seeking Junior or Graduate Front-End Developer
          opportunities in the UK.
        </p>

        <div className="contactLinks">
          <a className="primaryBtn" href="mailto:viorica20272027@gmail.com">
            Email Me
          </a>
          <a
            className="secondaryBtn"
            href="https://github.com/Viorica123333333333"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="outlineBtn"
            href="www.linkedin.com/in/viorica-pogor-21937a370"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
