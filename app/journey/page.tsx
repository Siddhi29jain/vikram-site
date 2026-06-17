const journey = [
  {
    period: "2015 - Present",
    role: "Founder & CEO",
    company: "Proventus Valuetech",
    detail:
      "Built Proventus Valuetech as a specialist advisory company for non-ferrous metallurgy, translating decades of plant and project experience into practical consulting for industrial clients.",
    highlights: [
      "Advises on smelting, leaching, SX-EW, electro-refining, electro-winning and melting of non-ferrous metals.",
      "Supports process development through bench-scale and pilot plant work, followed by basic and detailed engineering.",
      "Helps clients set up cathode plants and rod plants from copper scraps, copper cathodes and related feed streams.",
      "Designs leaching and SX-EW solutions for copper and zinc waste or by-products, including effluent stream treatment aligned with PCB requirements.",
      "Works on technology sale, collaboration and commercial routes that connect technical feasibility with project execution.",
    ],
  },
  {
    period: "2017 - 2019",
    role: "Co-Founder & Director",
    company: "VINAR Innovation and Research Center",
    detail:
      "Co-founded VINAR to create a process development, analytical and project support platform for mineral processing, metal extraction, waste treatment and recycling.",
    highlights: [
      "Established a research center in Vadodara with planned upgrades and high-tech equipment for process and project development.",
      "Focused the center on emerging recycling opportunities including e-waste treatment, Li-ion battery recycling and spent catalyst treatment.",
      "Offered bench-scale and pilot plant process development, basic and detailed engineering packages, analytical laboratory services and contract R&D.",
      "Positioned VINAR for industry certifications, including ISO, to consistently deliver quality-focused customer experience.",
      "Built partnership, consortium and alliance pathways for future research and development projects.",
    ],
  },
  {
    period: "2013 - 2015",
    role: "Project Manager, Refinery Upgradation",
    company: "Mopani Copper Mines, Glencore Group",
    detail:
      "Led the upgrade of a 200,000 T/year copper refinery from conventional starter sheet technology to state-of-the-art permanent cathode technology.",
    highlights: [
      "Managed the challenge of retrofitting modern equipment into old infrastructure while the refinery continued operating at full capacity.",
      "Prepared the feasibility project report, budget and execution plan for management approval.",
      "Evaluated available technologies and finalized the solution best suited to Mopani operations.",
      "Worked closely with Glencore Technologies, the Mopani project team and refinery operations team to deliver within the agreed budget and time frame.",
      "Targeted substantial recurring benefits through reduced work-in-progress and lower operating cost.",
    ],
  },
  {
    period: "2010 - 2012",
    role: "Refinery Superintendent",
    company: "Mopani Copper Mines, Zambia",
    detail:
      "Managed HR, safety, operations, maintenance and commercial activities for a 200,000 MT/year copper refinery, leach plant and SX-EW operation.",
    highlights: [
      "Achieved the highest cathode production since 1993 and record monthly cathode production between October and December 2010.",
      "Delivered 100% LME Grade-A cathode production and achieved the highest ever anode slimes production with a 15% increase.",
      "Designed and commissioned a 1000+ MT/annum slimes handling system.",
      "Successfully commissioned nickel removal and liberator sections.",
      "Reduced cost of production by 15% while maintaining focus on safety, operations and plant reliability.",
    ],
  },
  {
    period: "2008 - 2010",
    role: "Head, Smelter & Acid Plant Operations",
    company: "Sterlite Industries, Vedanta Group",
    detail:
      "Led smelter and sulphuric acid plant operations for a 400,000 MT/annum SBU with 700+ manpower and turnover above US$2 billion.",
    highlights: [
      "Achieved the highest ever smelter SBU production since inception, increasing capacity utilization from 87% to 94%.",
      "Coordinated ACE cost reduction and additional revenue initiatives targeting US$20 million.",
      "Led teams on converter blow time reduction, copper recovery improvement, sulphuric acid plant bed temperature optimization and oxygen plant optimization.",
      "Contributed to strategic sourcing, refinery initiatives and zero-cost production efforts by improving efficiencies, copper recovery and by-product revenues.",
      "Drove the team toward IMEA Super Platinum manufacturing recognition and RBNQA manufacturing excellence recognition in 2009-10.",
    ],
  },
  {
    period: "2007 - 2008",
    role: "Head Production",
    company: "Sterlite Industries, Silvassa",
    detail:
      "Led production for a Silvassa unit comprising a 200,000 MT/annum copper refinery and 150,000 MT/annum CCR plant with 400+ manpower.",
    highlights: [
      "Increased CCR plant production from 265 MT/day to 275 MT/day, adding approximately US$0.2 million annual revenue.",
      "Reduced production cost by 5%, delivering approximately US$1 million annual savings.",
      "Reduced petro product consumption in CCR and anode casting plants by 7%, adding another approximately US$1 million annual savings.",
      "Achieved IMEA Platinum recognition in manufacturing in 2008-09.",
      "Won first prize in QUALTECH 2007 for a TQM innovation project that developed nickel as a by-product from a waste stream.",
    ],
  },
  {
    period: "1998 - 2007",
    role: "Manager, Tankhouse and Earlier Roles",
    company: "Sterlite Industries, Silvassa",
    detail:
      "Grew through foundational copper refinery leadership roles while contributing to major expansion, quality, recovery and energy improvement programs.",
    highlights: [
      "Contributed to capacity expansion from 60,000 MT/annum to 200,000 MT/annum.",
      "Developed and patented a process for producing LME Grade cathodes from the electro-winning circuit, creating additional annual revenue.",
      "Led teams on nickel recovery from electrolyte, gold and silver recovery improvement and power consumption reduction.",
      "Earned Employee of the Month recognition for increasing plant capacity by 4% without substantial investment, adding major revenue and profit impact.",
      "Reduced steam consumption from 290 Kg/MT to 80 Kg/MT and contributed to the Tuticorin greenfield project achieving rapid commissioning and low-cost producer status.",
      "Became a Certified Quality Engineer in 2005 and joined the Quality Council for reviewing TQM project progress.",
    ],
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
                <div className="milestone-list">
                  {item.highlights.map((highlight) => (
                    <p key={highlight}>{highlight}</p>
                  ))}
                </div>
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
