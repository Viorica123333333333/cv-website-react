import { useEffect, useRef, useState } from "react";
import "./App.css";

const skills = [
  { name: "React", group: "Front end", level: "Core" },
  { name: "JavaScript", group: "Front end", level: "Core" },
  { name: "HTML5", group: "Front end", level: "Core" },
  { name: "CSS3", group: "Front end", level: "Core" },
  { name: "React Router", group: "Front end", level: "Applied" },
  { name: "Responsive UI", group: "Design", level: "Core" },
  { name: "Node.js", group: "Back end", level: "Applied" },
  { name: "Express.js", group: "Back end", level: "Applied" },
  { name: "REST APIs", group: "Integration", level: "Applied" },
  { name: "PHP", group: "Back end", level: "Applied" },
  { name: "MySQL", group: "Data", level: "Applied" },
  { name: "Git / GitHub", group: "Tooling", level: "Daily" },
];

const education = [
  {
    period: "2025 — 2026",
    title: "BSc (Hons) Computing Top-Up",
    place: "Arden University",
    note: "Cloud computing, data mining, information security, full-stack web development and a major computing project.",
    modules: [
      "Microsoft Azure",
      "Python",
      "Information Security",
      "React",
      "Node.js",
      "MySQL",
    ],
  },
  {
    period: "2023 — 2025",
    title: "Pearson BTEC Level 5 HND in Computing",
    place: "ICON College of Technology and Management",
    note: "Graduated with Merit. Studied networking, databases, software development, research, IoT and web technologies.",
    modules: [
      "Cisco Packet Tracer",
      "C#",
      "Python",
      "MySQL",
      "Arduino",
      "Web Development",
    ],
  },
];

const experience = [
  {
    period: "2022 — 2023",
    title: "Warehouse Operative",
    place: "Delamode Anglia",
    points: [
      "Processed and tracked customer orders using warehouse management systems.",
      "Maintained accurate stock records and resolved damaged-item issues.",
      "Supported and trained new colleagues in a fast-paced operation.",
    ],
  },
  {
    period: "2020 — 2022",
    title: "Warehouse Worker",
    place: "Kesslers London",
    points: [
      "Consistently met accuracy and productivity targets.",
      "Processed packages and dispatch documentation using digital systems.",
      "Demonstrated reliability, organisation and strong time management.",
    ],
  },
];

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(skills[0]);
  const [formStatus, setFormStatus] = useState("");
  const orbRef = useRef(null);

  useReveal();

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (!orbRef.current || window.matchMedia("(pointer: coarse)").matches)
        return;

      const x = (event.clientX / window.innerWidth - 0.5) * 18;
      const y = (event.clientY / window.innerHeight - 0.5) * 18;

      orbRef.current.style.setProperty("--orb-x", `${x}px`);
      orbRef.current.style.setProperty("--orb-y", `${y}px`);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("Sending…");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      setFormStatus("Message sent. Thank you.");
    } catch (error) {
      console.error(error);
      setFormStatus("The message could not be sent. Please try again.");
    }
  };

  return (
    <main className="siteShell">
      <div className="noise" aria-hidden="true" />
      <div className="cursorGlow" aria-hidden="true" />

      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="Viorica Pogor home">
          VP<span>.</span>
        </a>

        <button
          className="menuButton"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
          <span className="srOnly">Toggle navigation</span>
        </button>

        <nav
          id="primary-navigation"
          className={`siteNav ${menuOpen ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#journey" onClick={closeMenu}>
            Journey
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <a className="headerCta" href="#contact">
          Available for work
        </a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <div className="eyebrow" data-reveal>
            <span className="statusDot" />
            Junior front-end developer · London
          </div>

          <h1 data-reveal>
            I build digital
            <span>experiences with clarity.</span>
          </h1>

          <p className="heroIntro" data-reveal>
            React developer creating responsive interfaces, connected products
            and thoughtful web experiences with JavaScript, Node.js and MySQL.
          </p>

          <div className="heroActions" data-reveal>
            <a className="button buttonPrimary" href="#work">
              Explore selected work
              <span aria-hidden="true">↘</span>
            </a>
            <a
              className="button buttonGhost"
              href="https://github.com/Viorica123333333333"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="heroMeta" data-reveal>
            <div>
              <span>Focus</span>
              React · UI engineering
            </div>
            <div>
              <span>Stack</span>
              JavaScript · Node · MySQL
            </div>
            <div>
              <span>Status</span>
              Open to UK opportunities
            </div>
          </div>
        </div>

        <div className="heroVisual" aria-hidden="true" data-reveal>
          <div className="orbScene" ref={orbRef}>
            <div className="orbit orbitOne" />
            <div className="orbit orbitTwo" />
            <div className="orbit orbitThree" />
            <div className="identityOrb">
              <span>VP</span>
            </div>
            <div className="orbLabel orbLabelTop">REACT</div>
            <div className="orbLabel orbLabelRight">UI / UX</div>
            <div className="orbLabel orbLabelBottom">FULL STACK</div>
            <div className="orbMetric">
              <strong>02</strong>
              <span>featured builds</span>
            </div>
          </div>
        </div>

        <a className="scrollCue" href="#work" aria-label="Scroll to projects">
          <span>Scroll to explore</span>
          <i />
        </a>
      </section>

      <section className="introStatement sectionFrame" data-reveal>
        <p className="sectionIndex">01 / PROFILE</p>
        <div>
          <p className="statementLead">
            I turn technical requirements into interfaces that feel simple,
            responsive and considered.
          </p>
          <p className="statementBody">
            I am completing a BSc in Computing and have built full-stack
            academic projects using React, JavaScript, PHP, Node.js, Express,
            REST APIs and MySQL. I am now looking for a junior or graduate
            front-end role where I can contribute, learn and grow.
          </p>
        </div>
      </section>

      <section className="workSection" id="work">
        <div className="sectionHeading sectionFrame" data-reveal>
          <div>
            <p className="sectionIndex">02 / SELECTED WORK</p>
            <h2>Projects built to solve, not decorate.</h2>
          </div>
          <p>
            Product thinking, interface design and practical engineering brought
            together in complete web experiences.
          </p>
        </div>

        <article className="project projectFeatured" data-reveal>
          <div className="projectVisual sweetBoxVisual">
            <div className="browserBar">
              <span />
              <span />
              <span />
              <p>sweet-box.netlify.app</p>
            </div>
            <div className="productMock">
              <div className="mockSidebar">
                <span className="mockLogo">SB</span>
                <i />
                <i />
                <i />
              </div>
              <div className="mockContent">
                <p>BUILD YOUR BOX</p>
                <h3>Choose your flavour.</h3>
                <div className="macaronGrid">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <span key={index} style={{ "--i": index }} />
                  ))}
                </div>
                <div className="mockPrice">£24.00</div>
              </div>
            </div>
          </div>

          <div className="projectCopy">
            <div className="projectTopline">
              <span>01</span>
              <p>Full-stack commerce experience</p>
            </div>
            <h3>Sweet Box</h3>
            <p className="projectDescription">
              A responsive macaron customisation platform with dynamic pricing,
              checkout validation, REST API integration and structured order
              storage.
            </p>
            <ul className="projectFacts">
              <li>
                <span>Front end</span> React · CSS · responsive UI
              </li>
              <li>
                <span>Back end</span> Node.js · Express · REST
              </li>
              <li>
                <span>Data</span> MySQL order storage
              </li>
            </ul>
            <div className="projectLinks">
              <a
                href="https://sweet-box.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live experience <span>↗</span>
              </a>
              <a
                href="https://github.com/Viorica123333333333"
                target="_blank"
                rel="noreferrer"
              >
                Source code <span>↗</span>
              </a>
            </div>
          </div>
        </article>

        <article className="project projectReverse" data-reveal>
          <div className="projectVisual memoryVisual">
            <div className="memoryHeader">
              <p>MEMORY / 01</p>
              <span>00:42</span>
            </div>
            <div className="memoryGrid">
              {["◇", "✦", "○", "△", "✦", "◇", "△", "○"].map((symbol, index) => (
                <div
                  key={`${symbol}-${index}`}
                  className={index === 1 || index === 4 ? "matched" : ""}
                >
                  {symbol}
                </div>
              ))}
            </div>
            <div className="memoryFooter">
              <span>Moves 12</span>
              <span>Pairs 4/4</span>
            </div>
          </div>

          <div className="projectCopy">
            <div className="projectTopline">
              <span>02</span>
              <p>Interactive browser game</p>
            </div>
            <h3>Memory Game</h3>
            <p className="projectDescription">
              An interactive browser game developed with PHP, JavaScript, HTML,
              CSS and MySQL, combining game logic with a responsive interface.
            </p>
            <ul className="projectFacts">
              <li>
                <span>Logic</span> Interactive matching system
              </li>
              <li>
                <span>Interface</span> Responsive game layout
              </li>
              <li>
                <span>Data</span> MySQL-backed handling
              </li>
            </ul>
            <div className="projectLinks">
              <a
                href="https://memory-game.social-networking.me/"
                target="_blank"
                rel="noreferrer"
              >
                Play project <span>↗</span>
              </a>
            </div>
          </div>
        </article>
      </section>

      <section className="skillsSection" id="skills">
        <div className="sectionHeading sectionFrame" data-reveal>
          <div>
            <p className="sectionIndex">03 / CAPABILITY SYSTEM</p>
            <h2>Tools connected to real work.</h2>
          </div>
          <p>
            Select a capability to see how it fits into my current development
            practice.
          </p>
        </div>

        <div className="skillsInterface sectionFrame" data-reveal>
          <div className="skillList" role="list">
            {skills.map((skill, index) => (
              <button
                type="button"
                key={skill.name}
                className={activeSkill.name === skill.name ? "active" : ""}
                onMouseEnter={() => setActiveSkill(skill)}
                onFocus={() => setActiveSkill(skill)}
                onClick={() => setActiveSkill(skill)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {skill.name}
              </button>
            ))}
          </div>

          <div className="skillDisplay">
            <div className="skillDisplayOrb">
              <span>{activeSkill.name.slice(0, 2).toUpperCase()}</span>
            </div>
            <p className="skillLabel">{activeSkill.group}</p>
            <h3>{activeSkill.name}</h3>
            <p>
              Used across responsive interfaces, application logic, integration
              work and production-ready project builds.
            </p>
            <div className="skillMeta">
              <div>
                <span>Level</span>
                {activeSkill.level}
              </div>
              <div>
                <span>Context</span>Project based
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="journeySection" id="journey">
        <div className="sectionHeading sectionFrame" data-reveal>
          <div>
            <p className="sectionIndex">04 / JOURNEY</p>
            <h2>Learning, building and moving forward.</h2>
          </div>
          <p>
            A concise view of the education and professional experience shaping
            how I work.
          </p>
        </div>

        <div className="journeyGrid sectionFrame">
          <div className="journeyColumn">
            <p className="journeyLabel" data-reveal>
              Education
            </p>
            {education.map((item) => (
              <article className="journeyCard" key={item.title} data-reveal>
                <p className="journeyPeriod">{item.period}</p>
                <h3>{item.title}</h3>
                <p className="journeyPlace">{item.place}</p>
                <p>{item.note}</p>
                <div className="moduleTags">
                  {item.modules.map((module) => (
                    <span key={module}>{module}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="journeyColumn">
            <p className="journeyLabel" data-reveal>
              Experience
            </p>
            {experience.map((item) => (
              <article className="journeyCard" key={item.title} data-reveal>
                <p className="journeyPeriod">{item.period}</p>
                <h3>{item.title}</h3>
                <p className="journeyPlace">{item.place}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="principles sectionFrame" data-reveal>
        <p className="sectionIndex">05 / APPROACH</p>
        <h2>I build with clarity before complexity.</h2>
        <div className="principlesGrid">
          <article>
            <span>01</span>
            <h3>Make it understandable</h3>
            <p>
              Clear hierarchy, purposeful components and readable interactions.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Make it reliable</h3>
            <p>
              Responsive layouts, validation and practical technical decisions.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Make it memorable</h3>
            <p>
              Distinctive details that support the product instead of
              distracting.
            </p>
          </article>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="contactIntro" data-reveal>
          <p className="sectionIndex">06 / CONTACT</p>
          <h2>Let’s build something useful.</h2>
          <p>
            I am currently seeking junior or graduate front-end developer
            opportunities in the UK.
          </p>
          <div className="contactSocials">
            <a
              href="https://github.com/Viorica123333333333"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span>↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/viorica-pogor-21937a370"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span>↗</span>
            </a>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="contactForm"
          data-reveal
        >
          <input type="hidden" name="form-name" value="contact" />

          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              required
              placeholder="Your name"
            />
          </label>

          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
            />
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Tell me about the opportunity."
            />
          </label>

          <div className="formFooter">
            <p role="status" aria-live="polite">
              {formStatus}
            </p>
            <button type="submit">
              Send message
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </form>
      </section>

      <footer>
        <a className="brand" href="#top">
          VP<span>.</span>
        </a>
        <p>Designed and built by Viorica Pogor.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}

export default App;
