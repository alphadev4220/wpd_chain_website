function Ecosystem() {
  return (
    <section id="ecosystem" className="section section-alt">
      <div className="container">
        <h2>WPD Ecosystem Highlights</h2>
        <p className="section-lead">
          Based on the official WPD publication, the ecosystem focuses on scalable Layer 1 performance,
          EVM compatibility, utility-driven token design, and long-term decentralized governance.
        </p>

        <div className="cards-grid">
          <article className="panel card ecosystem-appear slide-in-left">
            <h3>Powerful Layer 1 Foundation</h3>
            <ul>
              <li>DPoS-oriented validator incentives and low-latency finality</li>
              <li>EVM-compatible execution for Solidity-based development</li>
              <li>Fast block cadence and scalable throughput design</li>
              <li>Low and predictable gas profile for production dApps</li>
            </ul>
          </article>

          <article className="panel card ecosystem-appear slide-in-up">
            <h3>Launch Strategy</h3>
            <ul>
              <li>Native ecosystem expansion with DeFi, NFT, DAO, and bridge-ready apps</li>
              <li>Planned stable-value liquidity rail (WPDS) for payments and DeFi utility</li>
              <li>PCSM migration direction with emphasis on continuity of utility rights</li>
              <li>Developer grants, incentives, and ecosystem bootstrapping programs</li>
            </ul>
          </article>

          <article className="panel card ecosystem-appear slide-in-right">
            <h3>PCSM Utility on WPD</h3>
            <ul>
              <li>Gas utility and staking-based network participation</li>
              <li>Governance voting and proposal participation</li>
              <li>Wallet-integrated utility features and reward pathways</li>
              <li>Cross-chain ecosystem access through interoperability infrastructure</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Ecosystem
