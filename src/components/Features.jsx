function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <h2>Core Capabilities</h2>
        <div className="feature-grid">
          <article className="panel feature-appear slide-in-left">
            <h3>Security-First Bridge</h3>
            <p>3/5 multisig guardians, challenge windows, and PoW gate for high-value exits.</p>
          </article>
          <article className="panel feature-appear slide-in-up delay-1">
            <h3>Scalable Throughput</h3>
            <p>PoA sidechain handles speed-sensitive workloads while PoS anchors trust.</p>
          </article>
          <article className="panel feature-appear slide-in-up delay-2">
            <h3>Interoperability</h3>
            <p>IBC and Ethereum bridge expand ecosystem reach beyond a single chain domain.</p>
          </article>
          <article className="panel feature-appear slide-in-right">
            <h3>Operational Readiness</h3>
            <p>Monitoring stack with Prometheus and Grafana for production visibility.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Features
