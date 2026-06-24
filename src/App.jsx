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
              rel="noopener noreferrer"
            >
              View Sweet Box
            </a>
            <a
              className="secondaryBtn"
              href="https://github.com/Viorica123333333333"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="outlineBtn"
              href="https://memory-game.infy.click/"
              target="_blank"
              rel="noopener noreferrer"
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
            Node.js, Express and MySQL.
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
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              className="secondaryBtn"
              href="https://github.com/Viorica123333333333"
              target="_blank"
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
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

          <ul>
            <li>
              <strong>Distributed Cloud Computing (Microsoft Azure)</strong> –
              Studied cloud architecture, virtualisation, scalability,
              deployment models, and cloud infrastructure management using
              Microsoft Azure.
            </li>

            <li>
              <strong>Data Mining</strong> – Applied data analysis techniques
              and predictive modelling using Python to extract insights from
              datasets and support data-driven decision making.
            </li>

            <li>
              <strong>Information Security</strong> – Studied cyber security
              principles, risk management, authentication, authorisation,
              security controls, and data protection practices.
            </li>

            <li>
              <strong>Web Development</strong> – Developed responsive web
              applications using HTML, CSS, JavaScript, PHP, and MySQL, applying
              modern web development and database design principles.
            </li>

            <li>
              <strong>Computing Project</strong> – Designed and developed a
              full-stack web application using React, Node.js, Express, and
              MySQL, implementing REST APIs, form validation, database
              integration, and responsive user interfaces.
            </li>
          </ul>
        </div>

        <div className="timelineItem">
          <h3>Pearson BTEC Level 5 HND in Computing</h3>
          <p>ICON College of Technology and Management · Feb 2023 – Jan 2025</p>
          <ul>
            <li>
              <strong>Computer Networking (Cisco Packet Tracer)</strong> –
              Developed knowledge of network design, IP addressing, routing,
              switching, network configuration, and troubleshooting using Cisco
              Packet Tracer.
            </li>

            <li>
              <strong>Cyber Security</strong> – Studied information security
              principles, risk management, common cyber threats, security
              controls, authentication, authorisation, and data protection
              practices.
            </li>

            <li>
              <strong>Database Systems (MySQL)</strong> – Designed and managed
              relational databases, created SQL queries, implemented database
              relationships, and performed data manipulation and retrieval.
            </li>

            <li>
              <strong>Professional Practice</strong> – Developed professional
              communication, teamwork, project planning, problem-solving, and
              workplace skills relevant to the IT industry.
            </li>

            <li>
              <strong>Web Development</strong> – Built responsive websites using
              HTML and CSS, applying modern design principles, accessibility
              standards, and responsive layouts.
            </li>

            <li>
              <strong>Software Development (C#)</strong> – Learned
              object-oriented programming principles, software design,
              debugging, testing, and application development using C#.
            </li>

            <li>
              <strong>Programming (Python)</strong> – Developed problem-solving
              and programming skills through Python, including data structures,
              functions, algorithms, and file handling.
            </li>

            <li>
              <strong>Computing Research Project</strong> – Conducted research
              on the impact of Big Data on social media platforms, analysing
              data-driven decision making, user behaviour, privacy concerns, and
              business applications.
            </li>

            <li>
              <strong>Internet of Things (IoT)</strong> – Designed and
              implemented IoT solutions using Arduino, sensors, actuators, and
              microcontroller-based systems.
            </li>
          </ul>

          <p>Graduated with Merit</p>
        </div>
      </section>

      <section className="section timeline">
        <h2>Experience</h2>

        <div className="timelineItem">
          <h3>Warehouse Operative</h3>
          <p>Delamode Anglia · May 2022 – Jan 2023</p>
          <ul>
            <li>
              Processed customer orders, managed order workflows, and tracked
              deliveries using warehouse management systems and company
              software.
            </li>

            <li>
              Received, inspected, and organised incoming stock and customer
              returns, identifying damaged items and ensuring accurate inventory
              records.
            </li>

            <li>
              Performed stock control activities, including stock replenishment,
              stock checks, and inventory accuracy verification.
            </li>

            <li>
              Prepared, packed, and dispatched customer orders while maintaining
              quality and productivity standards.
            </li>

            <li>
              Trained, guided, and supported new warehouse employees, helping
              them understand procedures and achieve performance targets.
            </li>

            <li>
              Identified and removed damaged products, promptly replacing items
              with quality stock to minimise delays and maintain customer
              satisfaction.
            </li>

            <li>
              Demonstrated strong teamwork skills by collaborating effectively
              with colleagues in a fast-paced warehouse environment.
            </li>

            <li>
              Maintained excellent organisational skills and the ability to
              prioritise tasks, monitor progress, and consistently meet
              deadlines.
            </li>
          </ul>
        </div>

        <div className="timelineItem">
          <h3>Warehouse Worker</h3>
          <p>Kesslers London · Aug 2020 – Mar 2022</p>
          <ul>
            <li>
              Worked effectively as part of a team in a fast-paced warehouse and
              production environment, consistently meeting operational targets.
            </li>

            <li>
              Completed and submitted dispatch documentation accurately and
              within required timeframes to support efficient order processing.
            </li>

            <li>
              Scanned, sorted, and processed packages using hand-held scanners,
              ensuring high levels of accuracy in picking and packing
              operations.
            </li>

            <li>
              Followed company health and safety procedures, quality standards,
              and operational guidelines in a dynamic working environment.
            </li>

            <li>
              Managed high-volume workloads independently, demonstrating
              initiative, reliability, and strong time-management skills while
              meeting deadlines.
            </li>

            <li>
              Followed instructions accurately and maintained productivity in
              fast-paced picking and packing operations.
            </li>

            <li>
              Maintained accurate records and documentation to support smooth
              order fulfilment and delivery processes.
            </li>

            <li>
              Maintained clean, organised, and safe working environments in
              accordance with warehouse hygiene and safety standards.
            </li>

            <li>
              Consistently achieved accuracy and productivity targets when
              processing customer orders and inventory movements.
            </li>
          </ul>
        </div>
      </section>

      <section className="contact">
        <h2>Let’s Connect</h2>
        <p>
          I am currently seeking Junior or Graduate Front-End Developer
          opportunities in the UK.
        </p>

        <form
          name="contact"
          method="POST"
          action="/success"
          data-netlify="true"
          className="contactForm"
        >
          <input type="hidden" name="form-name" value="contact" />

          <label>
            Name
            <input type="text" name="name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" required />
          </label>

          <label>
            Message
            <textarea name="message" rows="5" required></textarea>
          </label>

          <button type="submit" className="primaryBtn">
            Send Message
          </button>
        </form>

        <div className="contactLinks">
          <a
            className="secondaryBtn"
            href="https://github.com/Viorica123333333333"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            className="outlineBtn"
            href="https://www.linkedin.com/in/viorica-pogor-21937a370"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
