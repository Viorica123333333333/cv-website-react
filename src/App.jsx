import "./App.css";

function App() {
  return (
    <main className="portfolio">
      <section className="hero">
        <div className="heroText">
          <p className="tag">Junior / Graduate Front-End Developer</p>
          <h1>Viorica Pogor</h1>
          <p className="intro">
            Recent Computing graduate building responsive, user-focused web
            applications with React, JavaScript, PHP and MySQL.
          </p>

          <div className="heroButtons">
            <a href="https://sweet-box.netlify.app/" target="_blank">
              View Sweet Box
            </a>
            <a href="https://github.com/Viorica123333333333" target="_blank">
              GitHub
            </a>
            <a
              href="https://viorica-memory-game.infinityfreeapp.com/"
              target="_blank"
            >
              View Memory Game
            </a>
          </div>
        </div>

        <div className="heroCard">
          <h2>Portfolio Focus</h2>
          <p>React • JavaScript • Responsive Design • REST APIs • MySQL</p>
        </div>
      </section>

      <section className="section">
        <h2>About Me</h2>
        <p>
          I am a recent BSc Computing graduate seeking my first Front-End
          Developer role. I enjoy creating clean, responsive and interactive web
          interfaces, with a strong interest in user experience and practical
          problem solving.
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
            <a href="https://sweet-box.netlify.app/" target="_blank">
              Live Demo
            </a>
            <a href="https://github.com/Viorica123333333333" target="_blank">
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
              href="https://viorica-memory-game.infinityfreeapp.com/"
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
          <a href="mailto:viorica20272027@gmail.com">Email Me</a>
          <a href="https://github.com/Viorica123333333333" target="_blank">
            GitHub Profile
          </a>
          <a href="https://www.linkedin.com/in/viorica-pogor/" target="_blank">
            LinkedIn Profile
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
