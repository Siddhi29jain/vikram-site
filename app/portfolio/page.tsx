export default function PortfolioPage() {
  return (
    <main className="page-shell">
      <section className="section portfolio-section page-hero-section">
        <div className="portfolio-panel">
          <p className="eyebrow">Portfolio</p>
          <h1>Future case studies will live here.</h1>
          <p>
            This space is prepared for detailed project stories: plant modernization, process
            development, recycling pathways, cost transformation, technology partnerships and
            measurable operating outcomes.
          </p>
          <a className="button primary" href="/contact">
            Discuss a project
          </a>
        </div>
        <div className="portfolio-slots" aria-label="Future portfolio categories">
          <div>
            <span>01</span>
            <strong>Refinery Upgrades</strong>
          </div>
          <div>
            <span>02</span>
            <strong>Recycling & Recovery</strong>
          </div>
          <div>
            <span>03</span>
            <strong>Process Development</strong>
          </div>
        </div>
      </section>
    </main>
  );
}
