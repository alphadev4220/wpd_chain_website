function Overview() {
  return (
    <section id="overview" className="section section-alt">
      <div className="container">
        <h2>Multi-Layer Architecture Overview</h2>
        <p className="section-lead">WPD Chain implements a multi-layer blockchain architecture designed for scalability, security, and specialized functionality.</p>

        <div className="cards-grid">
          <article className="panel card card-large overview-appear slide-in-left">
            <h3>Layer 1: PoS Main Chain</h3>
            <p><strong>Purpose:</strong> Primary security and finality layer with integrated L2B bridge modules</p>
            <ul>
              <li><strong>Consensus:</strong> Tendermint BFT with Nominated Proof of Stake (NPoS)</li>
              <li><strong>8 Core Modules:</strong> NPoS, Employment, Education, Environment, Healthcare, Finance, Agriculture, Infrastructure</li>
              <li><strong>Tokens:</strong> PCSM (staking), LEEA (rewards)</li>
              <li><strong>Bridge Modules:</strong> Guardian, BridgeGate, BridgeQueue</li>
            </ul>
          </article>

          <article className="panel card card-large overview-appear slide-in-up delay-1">
            <h3>Layer 2A: PoA Sidechain</h3>
            <p><strong>Purpose:</strong> Government and institutional applications with high-throughput permissioned operations</p>
            <ul>
              <li><strong>Consensus:</strong> Proof of Authority (PoA) with ~3 second blocks</li>
              <li><strong>Features:</strong> Permissioned validators for regulatory compliance</li>
              <li><strong>Security:</strong> Batched proof submission to Layer 1 via IBC</li>
            </ul>
          </article>

          <article className="panel card card-large overview-appear slide-in-right delay-2">
            <h3>Ethereum Bridge (L2B)</h3>
            <p><strong>Purpose:</strong> External blockchain asset bridging with guardian-based multi-signature security</p>
            <ul>
              <li><strong>Smart Contract:</strong> GravityBridge.sol (570 lines)</li>
              <li><strong>Security:</strong> 5 guardians with 3/5 threshold</li>
              <li><strong>PoW Protection:</strong> 2^40 difficulty for withdrawals &gt; 1 ETH</li>
              <li><strong>Support:</strong> ETH and ERC20 tokens</li>
              <li><strong>Integration:</strong> Bridge modules on Layer 1</li>
              <li><strong>Features:</strong> Deposit/withdrawal with challenge periods</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Overview
