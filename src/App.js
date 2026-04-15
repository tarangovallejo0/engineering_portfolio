export default function TomasEngineeringPortfolio() {
  const projects = [
    {
      title: "University Rover Challenge",
      period: "2024-2025",
      role: "Mechanical / Electrical Systems Integration",
      summary:
        "Worked across PCB integration, rover wiring, actuation systems, science subsystem development, and field testing for a competition rover built for manipulation and scientific analysis.",
      highlights: [
        "Contributed to PCB schematic design for the arm power distribution board and science system board",
        "Performed extensive soldering, relay wiring, and subsystem electrical integration",
        "Helped wire actuators, servos, end effectors, and science hardware",
        "Supported Python-based linear actuator position feedback tracking",
        "Integrated rover science workflow for sample collection, pump control, and spectrometer testing",
        "Participated in real-world testing and troubleshooting during field operations",
      ],
      technical: [
        "PCB integration and field wiring",
        "Power distribution and relay control",
        "Actuator / servo system integration",
        "Sensor and science payload integration",
      ],
      outcome:
        "Contributed to a rover system that placed 17th internationally while gaining experience in full-system integration under competition constraints.",
      image: "/rover_field.jpeg",
      caption: "URC rover field operations and robotic manipulation testing.",
    },
    {
      title: "Drone Systems Integration",
      period: "2024-2025",
      role: "Integration Support / Pilot",
      summary:
        "Helped install and integrate hardware on the Aurelia X4 drone platform to support terrain sensing and rover communication workflows.",
      highlights: [
        "Assisted with installation of GPS, motors, battery modules, and data sensors",
        "Supported drone-to-rover communication for object recognition and terrain sensing",
        "Piloted off-the-shelf drones and supported flight testing",
        "Hold a recreational UAS license",
      ],
      technical: [
        "Drone hardware integration",
        "Flight system setup",
        "Field operations",
        "Remote sensing support",
      ],
      outcome:
        "Expanded project capability beyond the rover itself by supporting aerial sensing and mission awareness.",
      image: "/aurelia_X4.jpeg",
      caption:
        "Aurelia X4 platform used for sensing, scouting, and field support.",
    },
    {
      title: "Dynamometer Design and Testing",
      period: "2024-2025",
      role: "CAD / Instrumentation / Data Acquisition",
      summary:
        "Helped design and develop a dynamometer used for torque-load testing of rover arm electric motors.",
      highlights: [
        "Created a large portion of the CAD for the dynamometer assembly",
        "Supported integration of the load cell measurement setup",
        "Helped with Python code used to retrieve torque data from the dynamometer",
        "Worked on a test platform that enabled data-driven validation of motor performance",
      ],
      technical: [
        "SolidWorks CAD",
        "Test fixture design",
        "Load cell integration",
        "Python-based data collection",
      ],
      outcome:
        "Enabled more quantitative motor evaluation and gave the team a way to test performance under load rather than relying only on assumptions.",
      image: "/dynamometer_CAD.png",
      caption: "CAD view of the dynamometer assembly for torque-load testing.",
    },
    {
      title: "Formula SAE Restrictor Optimization",
      period: "2025",
      role: "CFD / Performance Design",
      summary:
        "Designed a rules-compliant restrictor and used simulation to improve airflow through the throat geometry.",
      highlights: [
        "Designed the restrictor around FSAE competition requirements",
        "Used flow simulation to study pressure loss and airflow behavior",
        "Iterated geometry to improve flow through the throat geometry",
        "Balanced performance goals with manufacturing constraints",
      ],
      technical: [
        "SolidWorks",
        "Flow simulation / CFD",
        "Design iteration",
        "Performance optimization",
      ],
      outcome:
        "Built a stronger understanding of intake geometry tradeoffs and delivered a more optimized design under strict rules.",
      image: "/restrictor.png",
      caption:
        "Restrictor CAD / simulation work developed for FSAE performance optimization.",
    },
  ];

  const skills = [
    "SolidWorks CAD",
    "PCB design",
    "Wiring and soldering",
    "Electrical integration",
    "Python",
    "Actuators and sensors",
    "Drone operations",
    "Testing and troubleshooting",
    "CFD / flow simulation",
  ];

  return (
    <div className="portfolio-page">
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <p className="eyebrow">Engineering Portfolio</p>
              <h1>Tomas Arango Vallejo</h1>
              <p className="hero-subtext">
                Mechanical engineering student building real systems across
                robotics, electrical integration, CAD, testing, and simulation.
              </p>

              <div className="pill-row">
                <span className="pill pill-dark">
                  UC Berkeley Mechanical Engineering
                </span>
                <span className="pill">Robotics + Hardware Integration</span>
                <span className="pill">Automotive Design + Simulation</span>
              </div>

              <div className="action-row">
                <a
                  href="/Tomas_Arango_Vallejo_24-11-2025.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="resume-button"
                >
                  View Resume (PDF)
                </a>
              </div>
            </div>

            <div className="profile-card">
              <h2>Quick Profile</h2>
              <p>
                <strong>Email:</strong> tomavallejo@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 734-660-5062
              </p>
              <p>
                <strong>Location:</strong> Berkeley, California
              </p>
              <p>
                <strong>Education:</strong> B.S. Mechanical Engineering, UC
                Berkeley (Expected 2027)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">About Me</p>
          <h2>Hands-on, multidisciplinary, and field-tested.</h2>
          <p className="section-intro">
            My engineering experience has centered around team-based projects
            where the goal is to build systems that perform under real
            constraints. I enjoy projects that combine mechanical design,
            electrical hardware, software support, and rapid troubleshooting.
            Most of my strongest experience comes from rover systems, actuators,
            circuits and performance focused projects where I helped turn ideas
            into working hardware.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">Selected Projects</p>
          <h2>Engineering work with real systems behind it.</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div>
                  <div className="project-top">
                    <h3>{project.title}</h3>
                    <span className="project-tag">{project.period}</span>
                  </div>

                  <div className="project-role">{project.role}</div>
                  <p className="project-summary">{project.summary}</p>

                  <div className="project-columns">
                    <div>
                      <div className="label">What I Did</div>
                      <ul className="highlights-list">
                        {project.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="label">Technical Focus</div>
                      <div className="tech-tags">
                        {project.technical.map((item) => (
                          <span className="tech-tag" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="label" style={{ marginTop: "22px" }}>
                        Outcome
                      </div>
                      <p className="outcome-text">{project.outcome}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="image-box">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  </div>
                  <div className="image-note">
                    <strong>Project Visual:</strong> {project.caption}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col-grid">
            <div className="info-card">
              <p className="eyebrow">Skills</p>
              <h3>Technical Toolkit</h3>
              <div className="skill-wrap">
                {skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="info-card">
              <p className="eyebrow">Education</p>
              <h3>Academic Background</h3>
              <p>
                <strong>University of California, Berkeley</strong>
                <br />
                B.S. Mechanical Engineering
                <br />
                Expected 2027
              </p>
              <p>
                <strong>Saddleback College</strong>
                <br />
                A.S. Mechanical Engineering
                <br />
                2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
