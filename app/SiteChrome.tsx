import { DigitalTwinChat } from "./DigitalTwinChat";

export function SiteNav() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="/" aria-label="Vikram Patni home">
          <span>VP</span>
          <strong>Vikram Patni</strong>
        </a>
        <div className="nav-links">
          <a href="/about">About</a>
          <a href="/journey">Journey</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div>
        <strong>Vikram Patni</strong>
        <p>Metallurgy, operations and project leadership from Vadodara, India.</p>
      </div>
      <div className="footer-links">
        <a href="mailto:patnivikram123@gmail.com">patnivikram123@gmail.com</a>
        <a
          href="https://www.linkedin.com/in/vikram-patni-b6399a26"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteNav />
      {children}
      <SiteFooter />
      <DigitalTwinChat />
    </>
  );
}
