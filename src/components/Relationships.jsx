function Relationships() {
  return (
    <section id="relationships" className="section section-alt">
      <div className="container">
        <h2>Data Flow & Chain Relationships</h2>
        <p className="section-lead">Understanding how transactions and assets flow between chains in the WPD ecosystem.</p>

        <div className="security-model panel relationship-appear slide-in-up">
          <h3>Security Model</h3>
          <div className="security-grid">
            <div>
              <h4>Layer 1 Security</h4>
              <ul>
                <li>Tendermint BFT with 67% Byzantine fault tolerance</li>
                <li>NPoS validator nomination prevents centralization</li>
                <li>Economic security through staked PCSM</li>
                <li>L2B bridge modules with guardian multi-sig</li>
              </ul>
            </div>
            <div>
              <h4>Layer 2A Security</h4>
              <ul>
                <li>PoA permissioned validators</li>
                <li>Authority module controls validator set</li>
                <li>Batched proofs to Layer 1 for ultimate finality</li>
                <li>Fast finality for institutional operations</li>
              </ul>
            </div>
            <div>
              <h4>Ethereum Bridge Security</h4>
              <ul>
                <li>Guardian multi-signature (3/5 threshold)</li>
                <li>PoW protection for large withdrawals (2^40)</li>
                <li>Challenge period for dispute resolution</li>
                <li>Event-based verification on both chains</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Relationships
