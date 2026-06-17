const capabilities = [
  "Technology evaluation",
  "Plant design and engineering",
  "Project planning and execution",
  "Process development",
  "Strategic sourcing",
  "Commissioning and ramp-up",
  "Commercial contracts",
  "HSE-led operating excellence",
];

const services = [
  {
    title: "Metallurgical Process Advisory",
    description:
      "Bench-scale and pilot plant development across smelting, leaching, SX-EW, electro-refining, electro-winning, recycling and waste treatment.",
  },
  {
    title: "Plant Performance Transformation",
    description:
      "Capacity, recovery, cost, energy and by-product initiatives built for measurable EBITDA impact and safer operating discipline.",
  },
  {
    title: "Project & Technology Execution",
    description:
      "Feasibility studies, vendor evaluation, bid reviews, engineering packages, commissioning plans and high-stakes retrofit delivery.",
  },
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="section split page-hero-section">
        <div>
          <p className="eyebrow">About Vikram</p>
          <h1>Executive discipline with shop-floor depth.</h1>
        </div>
        <div className="copy-stack">
          <p>
            Vikram Patni is an engineering and business professional with a track record of leading
            operations and projects for multinational organizations in India and Africa. His work
            sits at the intersection of metallurgical process know-how, commercial judgment,
            technology selection and plant-level execution.
          </p>
          <p>
            He specializes in building practical routes from technical idea to operating result:
            feasibility, design, bid evaluation, procurement, vendor alignment, commissioning,
            ramp-up and performance improvement. Across each mandate, HSE and stakeholder value
            remain central to the operating model.
          </p>
        </div>
      </section>

      <section className="section capability-section">
        <div className="section-heading">
          <p className="eyebrow">Core Capabilities</p>
          <h2>Built for high-consequence industrial decisions.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <span key={capability}>{capability}</span>
          ))}
        </div>
      </section>

      <section className="section services-section">
        <div className="section-heading">
          <p className="eyebrow">Consulting Edge</p>
          <h2>From process insight to plant-scale value.</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
