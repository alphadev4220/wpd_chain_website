function Roadmap() {
  const roadmapItems = [
    {
      phase: 'Step 1',
      period: 'Q1 2026',
      text: 'Core three-chain infrastructure deployed, verified, and monitoring-enabled.',
    },
    {
      phase: 'Step 2',
      period: 'Q2 2026',
      text: 'Bridge operations hardening with guardian tooling and operational playbooks.',
    },
    {
      phase: 'Step 3',
      period: 'Q3 2026',
      text: 'Institutional integrations on Layer 2A and expanded settlement workflows on Layer 1.',
    },
    {
      phase: 'Step 4',
      period: 'Q4 2026',
      text: 'Developer expansion: SDK examples, relayer automation, and stronger CI pipelines.',
    },
    {
      phase: 'Step 5',
      period: 'Q1 2027',
      text: 'Ecosystem growth with more applications, asset routes, and production partners.',
    },
    {
      phase: 'Step 6',
      period: 'Q2 2027',
      text: 'Scale-up phase focused on resilience, governance maturity, and cross-chain UX.',
    },
  ]

  return (
    <section id="roadmap" className="section section-alt">
      <div className="container">
        <h2>Roadmap</h2>
        <p className="section-lead">A staged path aligned with chain growth, interoperability, and ecosystem scale.</p>
        <div className="timeline-modern roadmap-appear" role="list" aria-label="WPD roadmap timeline">
          <div className="timeline-center-line" />
          {roadmapItems.map((item, index) => (
            <article
              key={item.phase}
              className={`panel timeline-modern-item roadmap-item-appear ${index % 2 === 0 ? 'left' : 'right'}`}
              role="listitem"
            >
              <span className="timeline-dot" aria-hidden="true" />
              <p className="timeline-step">{item.phase} <span>{item.period}</span></p>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap
