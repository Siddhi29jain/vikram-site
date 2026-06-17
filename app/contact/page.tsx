const contactLinks = [
  {
    label: "Email",
    value: "patnivikram123@gmail.com",
    href: "mailto:patnivikram123@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "vikram-patni-b6399a26",
    href: "https://www.linkedin.com/in/vikram-patni-b6399a26",
  },
  {
    label: "Location",
    value: "Vadodara, Gujarat, India",
    href: "https://www.google.com/maps/search/Vadodara,+Gujarat,+India",
  },
];

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="section split page-hero-section">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Start a conversation about industrial value creation.</h1>
        </div>
        <div className="copy-stack">
          <p>
            Reach out for discussions around non-ferrous metallurgy, plant upgrades, process
            development, technology evaluation, strategic sourcing, project execution or operational
            performance improvement.
          </p>
          <div className="contact-grid">
            {contactLinks.map((link) => (
              <a
                className="contact-card"
                href={link.href}
                key={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
