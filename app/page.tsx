const proofPoints = [
  { value: "25+", label: "years across metals, mining, operations and consulting" },
  { value: "200k MT/y", label: "copper refinery upgrade and operations leadership" },
  { value: "$20M", label: "cost reduction and additional revenue programs coordinated" },
  { value: "3 continents", label: "project exposure across India and Africa-led operations" },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Founder & CEO, Proventus Valuetech</p>
            <h1>Metallurgy leadership for complex plants, sharper economics and resilient execution.</h1>
            <p className="hero-text">
              Vikram Patni brings more than 25 years of hands-on engineering, operations and
              business leadership across non-ferrous metals, mining, consulting and large-scale
              industrial transformation.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="mailto:patnivikram123@gmail.com">
                Start a conversation
              </a>
              <a
                className="button ghost"
                href="https://www.linkedin.com/in/vikram-patni-b6399a26"
                target="_blank"
                rel="noreferrer"
              >
                View LinkedIn
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Profile snapshot">
            <div className="signal-line" />
            <p className="card-kicker">Industrial Value Architect</p>
            <h2>Process engineering, project execution and operational excellence.</h2>
            <p>
              Based in Vadodara, Gujarat, Vikram helps clients evaluate technologies, design
              plants, select vendors, structure contracts and deliver measurable performance.
            </p>
            <div className="card-footer">
              <span>Mining</span>
              <span>Metals</span>
              <span>Consulting</span>
            </div>
          </aside>
        </div>

        <div className="proof-grid" aria-label="Professional proof points">
          {proofPoints.map((item) => (
            <div className="proof-card" key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section services-section">
        <div className="section-heading">
          <p className="eyebrow">Explore</p>
          <h2>Navigate Vikram's professional profile.</h2>
        </div>
        <div className="services-grid">
          <a className="service-card" href="/about">
            <span>01</span>
            <h3>About</h3>
            <p>Executive profile, core capabilities and consulting edge.</p>
          </a>
          <a className="service-card" href="/journey">
            <span>02</span>
            <h3>Journey</h3>
            <p>Career progression from copper operations to advisory leadership.</p>
          </a>
          <a className="service-card" href="/portfolio">
            <span>03</span>
            <h3>Portfolio</h3>
            <p>Prepared space for future case studies and project stories.</p>
          </a>
        </div>
      </section>
    </main>
  );
}
