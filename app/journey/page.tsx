const journey = [
  {
    period: "2015 - Present",
    role: "Founder & CEO",
    company: "Proventus Valuetech",
    detail:
      "Leads specialist consulting for non-ferrous metallurgy, including process development, engineering, cathode and rod plants, leaching/SX-EW plants, effluent treatment and technology collaborations.",
  },
  {
    period: "2017 - 2019",
    role: "Co-Founder & Director",
    company: "VINAR Innovation and Research Center",
    detail:
      "Built process development and analytical capabilities for mineral processing, metal extraction, waste treatment, recycling, e-waste, Li-ion battery recycling and spent catalyst treatment.",
  },
  {
    period: "2013 - 2015",
    role: "Project Manager, Refinery Upgradation",
    company: "Mopani Copper Mines, Glencore Group",
    detail:
      "Managed a 200,000 T/year copper refinery modernization from starter-sheet technology to permanent cathode technology while the plant continued full-capacity operations.",
  },
  {
    period: "2010 - 2012",
    role: "Refinery Superintendent",
    company: "Mopani Copper Mines, Zambia",
    detail:
      "Led HR, safety, operations, maintenance and commercial activities, achieving record cathode production, 100% LME Grade-A cathode output and 15% production cost reduction.",
  },
  {
    period: "1998 - 2010",
    role: "Production & Operations Leadership",
    company: "Sterlite Industries, Vedanta Group",
    detail:
      "Advanced from tankhouse leadership to head of production and smelter operations, driving capacity expansion, patented process development, energy savings and manufacturing excellence awards.",
  },
];

const outcomes = [
  "Developed and patented a process for LME-grade cathodes from electro-winning circuits.",
  "Increased copper CCR plant output and reduced production costs through targeted operating improvements.",
  "Led TQM and strategic sourcing initiatives with multi-million-dollar recurring impact.",
  "Commissioned nickel removal, liberator and slimes handling systems in complex operating environments.",
];

export default function JourneyPage() {
  return (
    <main className="page-shell">
      <section className="section journey-section page-hero-section">
        <div className="section-heading">
          <p className="eyebrow">Career Journey</p>
          <h1>A progression from copper production to advisory leadership.</h1>
        </div>
        <div className="timeline">
          {journey.map((item) => (
            <article className="timeline-item" key={`${item.period}-${item.company}`}>
              <div className="timeline-meta">{item.period}</div>
              <div className="timeline-body">
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section outcomes-section">
        <div className="outcomes-card">
          <p className="eyebrow">Selected Impact</p>
          <h2>Measured gains, engineered under pressure.</h2>
          <div className="outcome-list">
            {outcomes.map((outcome) => (
              <p key={outcome}>{outcome}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
