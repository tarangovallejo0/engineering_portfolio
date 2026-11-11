const resumeUrl = "/Tomas_Arango_Vallejo_24-11-2025.pdf";

// Add further Fluent exports here; the gallery accommodates additional figures.
const fluentFigures = [
  {
    src: "/ansys_static_pressure.png",
    alt: "Ansys Fluent static-pressure field through an exhaust component, with pressure legend in pascals",
    width: 909,
    height: 596,
    caption: "Static-pressure field through an exhaust component. This view shows the local pressure distribution; a loss assessment also requires total-pressure information and defined comparison conditions.",
  },
];

// Add the actual system-model image and optional result plot when supplied.
// Use the same src / alt / width / height / caption structure as fluentFigures.
const gtPowerFigures = [];

const projects = [
  {
    title: "University Rover Challenge",
    role: "Mechanical / Electrical Systems Integration",
    summary: "Integrated mechanical hardware, electronics, and science payload systems for an international competition rover.",
    highlights: [
      "Integrated motors, actuators, pumps, sensors, and science hardware across subsystems.",
      "Designed SolidWorks brackets and mounts; supported PCB integration, soldering, and relay wiring.",
      "Troubleshot hardware during field testing and competition operations.",
    ],
    outcome: "Contributed to a rover that placed 17th internationally.",
    image: "/rover_field.jpeg",
    alt: "University Rover Challenge rover during field operations",
    caption: "Rover field operations and manipulation testing.",
    width: 1152,
    height: 1536,
  },
  {
    title: "Dynamometer Design & Testing",
    role: "CAD / Instrumentation / Data Acquisition",
    summary: "Developed a torque-load test fixture for rover arm motors, combining mechanical design with instrumentation.",
    highlights: [
      "Created a large portion of the SolidWorks assembly and supporting hardware.",
      "Integrated a load cell, torque arm, encoder, bearings, motor, and structural frame.",
      "Supported Python-based data retrieval and test instrumentation.",
    ],
    outcome: "Enabled quantitative motor evaluation under load.",
    image: "/dynamometer_CAD.png",
    alt: "SolidWorks dynamometer assembly with motor, frame, and torque measurement hardware",
    caption: "Torque-load test fixture CAD assembly.",
    width: 2239,
    height: 1231,
    contain: true,
  },
  {
    title: "Drone Systems Integration",
    role: "Integration Support / Pilot",
    summary: "Supported an Aurelia X4 platform for terrain sensing and rover-support workflows.",
    highlights: [
      "Assisted with installation of GPS, motors, batteries, and data sensors.",
      "Supported drone-to-rover communication and flight testing.",
      "Piloted off-the-shelf drones and earned a Recreational UAS Certificate.",
    ],
    outcome: "Helped extend the team's sensing capability beyond the rover.",
    image: "/aurelia_X4.jpeg",
    alt: "Aurelia X4 drone platform used for terrain sensing and field support",
    caption: "Aurelia X4 sensing and field-support platform.",
    width: 1152,
    height: 1536,
  },
];

const skillGroups = [
  ["Design & analysis", "SolidWorks · Ansys Fluent · GT-SUITE / GT-POWER · 1D engine simulation · Acoustic modeling · Thermal-fluid analysis"],
  ["Test & computation", "MATLAB · Python · Sensors & instrumentation · Data acquisition · Testing & troubleshooting"],
  ["Hardware & fabrication", "Altium PCB design · Wiring & soldering · Composite fabrication · Mill / lathe / waterjet · 3D printing"],
];

function TechnicalFigure({ src, alt, caption, width, height, eager = false }) {
  return (
    <figure className="technical-figure">
      <a className="figure-link" href={src} target="_blank" rel="noreferrer" aria-label={`${alt}. Open full-resolution image in a new tab.`}>
        <img src={src} alt={alt} width={width} height={height} loading={eager ? "eager" : "lazy"} />
        <span className="figure-open" aria-hidden="true">Full resolution ↗</span>
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function ChapterHeading({ number, label, title, id }) {
  return (
    <header className="chapter-heading">
      <p className="eyebrow"><span className="chapter-number">{number}</span>{label}</p>
      <h3 id={id}>{title}</h3>
    </header>
  );
}

export default function TomasEngineeringPortfolio() {
  return (
    <div className="portfolio-page">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-nav">
        <div className="container nav-inner">
          <a className="nav-brand" href="#top">TA / Engineering</a>
          <nav className="nav-links" aria-label="Portfolio navigation">
            <a href="#exhaust">Exhaust Case Study</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href={resumeUrl} target="_blank" rel="noreferrer">Resume ↗</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="name">
          <div className="container hero-inner">
            <div>
              <p className="eyebrow">UC Berkeley · Mechanical Engineering</p>
              <h1 id="name">Tomas Arango Vallejo</h1>
              <p className="hero-subtext">Mechanical design and thermal-fluid systems, from engine and exhaust simulation to instrumentation and physical validation.</p>
              <div className="action-row">
                <a href="#exhaust" className="button button-primary">Explore exhaust case study <span aria-hidden="true">↓</span></a>
                <a href={resumeUrl} target="_blank" rel="noreferrer" className="text-link">Resume ↗</a>
                <a href="https://www.linkedin.com/in/tomas-arango-vallejo" target="_blank" rel="noreferrer" className="text-link">LinkedIn ↗</a>
              </div>
            </div>
            <aside className="profile-summary" aria-label="Quick profile">
              <p>Berkeley Formula Racing <span>Engine team</span></p>
              <p>B.S. Mechanical Engineering <span>Expected December 2027</span></p>
              <a href="mailto:tomavallejo@gmail.com">tomavallejo@gmail.com</a>
              <span className="location">Berkeley, California</span>
            </aside>
          </div>
        </section>

        <section className="case-study" id="exhaust" aria-labelledby="exhaust-title">
          <div className="container">
            <header className="case-study-header">
              <p className="eyebrow">Featured engineering case study <span className="case-period">2026–Present</span></p>
              <h2 id="exhaust-title">Formula SAE<br className="desktop-break" /> Exhaust System Development</h2>
              <p className="case-study-lead">Connecting exhaust geometry, localized flow analysis, engine-cycle modeling, and hardware testing.</p>
              <p className="project-status">Ongoing development at Berkeley Formula Racing. GT-POWER modeling and backpressure correlation are being developed alongside CAD, CFD, and synchronized sound testing.</p>
            </header>

            <article className="chapter chapter-design" id="system-design" aria-labelledby="design-title">
              <div className="design-layout">
                <TechnicalFigure
                  src="/exhaust_system_cad.png"
                  alt="Formula SAE exhaust CAD assembly showing the exhaust routing, cylindrical attenuation hardware, and vehicle-side mounting"
                  width={1066} height={979} eager
                  caption="Exhaust-system CAD: routing, attenuation hardware, and mounting developed as one physical package."
                />
                <div className="design-brief">
                  <ChapterHeading number="01" label="Problem + system design" title="Balance sound, flow, and packaging." id="design-title" />
                  <p>The design must meet Formula SAE sound requirements while limiting unnecessary exhaust restriction and pumping losses, and preserving useful exhaust-wave behavior.</p>
                  <dl className="brief-list">
                    <div><dt>Physical constraints</dt><dd>Vehicle packaging, manufacturing, mounting, and serviceability.</dd></div>
                    <div><dt>Design approach</dt><dd>A SolidWorks assembly with modular attenuation hardware so configurations can be changed without rebuilding the entire exhaust.</dd></div>
                    <div><dt>Engineering tradeoff</dt><dd>Evaluate sound-control concepts together with their flow behavior and interaction with the engine.</dd></div>
                  </dl>
                </div>
              </div>
            </article>

            <nav className="chapter-nav" aria-label="Exhaust case study chapters">
              <a href="#system-design"><span>01</span> System design</a>
              <a href="#localized-cfd"><span>02</span> Localized CFD</a>
              <a href="#system-model"><span>03</span> GT-POWER</a>
              <a href="#physical-validation"><span>04</span> Physical validation</a>
            </nav>

            <article className="chapter" id="localized-cfd" aria-labelledby="cfd-title">
              <ChapterHeading number="02" label="Localized CFD / Ansys Fluent" title="Resolve the flow within the geometry." id="cfd-title" />
              <div className="chapter-intro">
                <p>3D CFD provides spatial detail that a 1D engine model cannot resolve. I use steady-state Fluent studies to examine local pressure and velocity behavior through bends, area changes, and muffler flow paths, and to investigate geometric sources of restriction.</p>
                <p>The question is how a component changes the flow: where it accelerates, separates, recirculates, or recovers pressure. Those observations help guide geometry comparisons before assessing the complete engine system.</p>
              </div>
              <div className="evidence-gallery fluent-gallery">
                {fluentFigures.map((figure) => <TechnicalFigure key={figure.src} {...figure} />)}
              </div>
              <dl className="interpretation-list">
                <div><dt>Static pressure</dt><dd>Shows local pressure distribution and recovery associated with geometry and flow acceleration. A contour alone does not establish irreversible loss.</dd></div>
                <div><dt>Total pressure & flow</dt><dd>Total-pressure comparisons at defined stations and matched flow conditions help assess component loss; velocity and mass flow provide context.</dd></div>
                <div><dt>Local flow structure</dt><dd>Velocity fields reveal separation and recirculation; Mach number helps assess compressibility where relevant. Mesh and convergence checks support confidence in comparisons.</dd></div>
              </dl>
              <p className="method-note">Component pressure loss and engine pumping penalty are different questions. Their connection requires the engine's transient operating conditions and comparison against hardware.</p>
            </article>

            <article className="chapter" id="system-model" aria-labelledby="gt-title">
              <ChapterHeading number="03" label="GT-SUITE / GT-POWER" title="Connect the exhaust to the engine cycle." id="gt-title" />
              <div className="model-layout">
                <div className="chapter-copy">
                  <p>GT-POWER complements Fluent by modeling the transient behavior of the engine and exhaust network. It is intended to connect exhaust geometry with valve events, pressure-wave timing, mass flow, gas temperature, scavenging behavior, and predicted engine performance.</p>
                  <p>A component's steady-flow behavior is only part of the picture. The system model examines when pressure waves reach the cylinder relative to valve events, and how the engine and exhaust interact over the cycle.</p>
                </div>
                <dl className="model-inputs">
                  <div><dt>Geometry & operating state</dt><dd>Exhaust network, engine speed, and gas temperatures.</dd></div>
                  <div><dt>Valve & cylinder-head inputs</dt><dd>Cam-lobe lift versus crank angle and cylinder-head flow coefficients.</dd></div>
                  <div><dt>System questions</dt><dd>Pressure and mass-flow histories, wave behavior, and predicted torque / power effects.</dd></div>
                </dl>
              </div>
              {/* The gallery occupies no space until actual GT-POWER figures are supplied. */}
              {gtPowerFigures.length > 0 && (
                <div className="evidence-gallery gt-gallery">
                  {gtPowerFigures.map((figure) => <TechnicalFigure key={figure.src} {...figure} />)}
                </div>
              )}
              <p className="method-note">Model fidelity depends on input fidelity. Geometry, valve lift, flow coefficients, and thermal assumptions must be characterized, and predictions need experimental correlation before they can support confident design decisions.</p>
            </article>

            <article className="chapter chapter-validation" id="physical-validation" aria-labelledby="validation-title">
              <ChapterHeading number="04" label="Physical validation" title="Bring the models back to hardware." id="validation-title" />
              <div className="chapter-intro">
                <p>Sound-level and engine-speed logs were collected and synchronized to evaluate exhaust configurations under real operating conditions. Aligning the signals makes it possible to relate the acoustic response to what the engine was doing.</p>
                <p>These traces document the measurement workflow. Evaluating a configuration requires comparable engine conditions; a single peak sound level cannot isolate the effect of the attenuation hardware.</p>
              </div>
              <div className="evidence-gallery sound-gallery">
                <TechnicalFigure
                  src="/sound_test_baseline.png"
                  alt="Baseline no-disc, no-packing test showing synchronized engine speed in RPM and sound level in dBC versus time"
                  width={1331} height={821}
                  caption="Baseline — no discs, no packing. Engine speed and C-weighted sound level aligned on the sound-meter time base."
                />
                <TechnicalFigure
                  src="/sound_test_4disk.png"
                  alt="Four-disc, no-packing test showing synchronized engine speed in RPM and sound level in dBC versus time"
                  width={1288} height={800}
                  caption="Four discs — no packing. A second configuration recorded with synchronized engine-speed and sound-level data."
                />
              </div>
              <p className="method-note">The plots use different axis ranges and RPM histories. They do not, by themselves, establish an attenuation improvement or demonstrate competition sound compliance.</p>

              <div className="backpressure-layout">
                <div className="chapter-copy">
                  <p className="eyebrow">Pressure measurement + correlation</p>
                  <h4>Measure the flow cost of sound control.</h4>
                  <p>The pressure-instrumentation section is designed to add measured backpressure to the validation workflow. Comparing pressure at a corresponding model location and operating condition provides another check on CFD and GT-POWER predictions.</p>
                  <p>Sound and pressure measurements together can help assess the tradeoff between attenuation and restriction. A useful correlation must account for the pressure reference, measurement location, engine conditions, and whether the comparison concerns mean or time-resolved pressure.</p>
                  <p>This comparison is intended to identify disagreement between model and hardware and guide the next geometry or modeling iteration.</p>
                </div>
                <TechnicalFigure
                  src="/backpressure_instrumentation_cad.png"
                  alt="Exhaust pipe CAD with pressure tap, looped tubing, and fittings for backpressure instrumentation"
                  width={1255} height={943}
                  caption="Pressure-instrumentation CAD developed for backpressure measurement and simulation-to-test comparison."
                />
              </div>
            </article>

            <div className="case-study-close">
              <p className="eyebrow">The development loop</p>
              <p className="loop-sequence">Design <span>→</span> Local CFD <span>→</span> System model <span>→</span> Hardware test <span>→</span> Correlate & iterate</p>
              <p>The next design decision should follow from what the analysis and test evidence support, with the limits of each method kept visible.</p>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="container">
            <p className="eyebrow">Selected earlier work · 2024–2025</p>
            <h2 id="projects-title">Mechanical & electromechanical projects</h2>
            <p className="section-intro">Hardware integration, test-fixture development, and field operations across rover and aerial systems.</p>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project" key={project.title}>
                  <figure className={`project-figure${project.contain ? " project-figure-cad" : ""}`}>
                    <img src={project.image} alt={project.alt} width={project.width} height={project.height} loading="lazy" />
                    <figcaption>{project.caption}</figcaption>
                  </figure>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p className="project-role">{project.role}</p>
                    <p>{project.summary}</p>
                    <ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                    <p className="project-outcome"><strong>Outcome</strong> {project.outcome}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section credentials-section" id="skills" aria-labelledby="skills-title">
          <div className="container credentials-grid">
            <div>
              <p className="eyebrow">Skills</p>
              <h2 id="skills-title">Technical toolkit</h2>
              <dl className="skills-list">{skillGroups.map(([title, skills]) => <div key={title}><dt>{title}</dt><dd>{skills}</dd></div>)}</dl>
            </div>
            <div className="education">
              <p className="eyebrow">Education</p>
              <h3>Academic background</h3>
              <p><strong>University of California, Berkeley</strong><br />B.S. Mechanical Engineering<br /><span>Expected December 2027</span></p>
              <p><strong>Saddleback College</strong><br />Mechanical Engineering · 2025</p>
              <p className="coursework"><strong>Relevant coursework</strong><br />Fluid Dynamics · Aerodynamics · Heat Transfer · Dynamic Systems & Feedback · Finite Element Analysis · Product Development</p>
            </div>
          </div>
        </section>

        <footer className="footer-cta">
          <div className="container footer-inner">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let's talk engineering.</h2>
              <p>Interested in mechanical, thermal-fluid, propulsion, test, robotics, and vehicle engineering roles.</p>
            </div>
            <div className="footer-actions">
              <a href="mailto:tomavallejo@gmail.com">tomavallejo@gmail.com ↗</a>
              <a href={resumeUrl} target="_blank" rel="noreferrer">Resume ↗</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
