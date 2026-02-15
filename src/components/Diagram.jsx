import networkNode from '../assets/network-node.svg'

function Diagram() {
  return (
    <section id="diagram" className="section">
      <div className="container">
        <h2>Architecture Diagram</h2>
        <p className="section-lead">Complete multi-layer architecture with IBC and bridge connections based on the deployed infrastructure.</p>

        <div className="network-banner panel diagram-appear slide-in-up">
          <img src={networkNode} alt="Network relationship graphic" />
        </div>

        <div className="diagram-shell diagram-appear slide-in-up" role="img" aria-label="WPD Chain architecture relationship diagram">
          <div className="diagram-row top-row">
            <div className="diagram-node node-l1">
              <h3>Layer 1: PoS Main Chain</h3>
              <p><strong>wpd-chaind</strong></p>
              <p>Security & Finality - Tendermint BFT</p>
              <div className="diagram-details">
                <p><strong>8 Core Modules:</strong> NPoS, Employment, Education, Environment, Healthcare, Finance, Agriculture, Infrastructure</p>
                <p><strong>L2B Bridge Modules:</strong> Guardian, BridgeGate, BridgeQueue</p>
                <p><strong>Tokens:</strong> PCSM (staking), LEEA (rewards)</p>
                <p><strong>Ports:</strong> RPC 26657, API 1317, gRPC 9090</p>
              </div>
            </div>
          </div>

          <div className="diagram-connections">
            <div className="diagram-arrow left-arrow">
              <div className="arrow-label">IBC Connection<br/>(Batched Proofs)</div>
              <div className="arrow-line">↙</div>
            </div>
            <div className="diagram-arrow right-arrow">
              <div className="arrow-label">gRPC/REST<br/>(Bridge Queries)</div>
              <div className="arrow-line">↘</div>
            </div>
          </div>

          <div className="diagram-row bottom-row">
            <div className="diagram-node node-l2a">
              <h3>Layer 2A: PoA Sidechain</h3>
              <p><strong>poasidechaind</strong></p>
              <div className="diagram-details">
                <p><strong>Authority:</strong> Permissioned validators</p>
                <p><strong>Performance:</strong> ~3 sec blocks, institutional throughput</p>
                <p><strong>Token:</strong> POATOKEN</p>
                <p><strong>Ports:</strong> RPC 27657, API 2317, gRPC 9092</p>
              </div>
            </div>

            <div className="diagram-node node-l2b">
              <h3>Ethereum Bridge (L2B)</h3>
              <div className="diagram-details">
                <p><strong>Smart Contracts:</strong> GravityBridge</p>
                <p><strong>Security:</strong> Guardian Multi-sig (3/5)</p>
                <p><strong>PoW Protection:</strong> 2^40 difficulty</p>
                <p><strong>RPC:</strong> localhost:8545</p>
                <p><strong>Chain ID:</strong> 31337 (Anvil)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tech-stack panel diagram-appear slide-in-up">
          <h3>Technical Stack</h3>
          <div className="tech-tags">
            <span>Cosmos SDK v0.53.5</span>
            <span>CometBFT v0.38.21</span>
            <span>IBC v10.4.0</span>
            <span>Go 1.25.6</span>
            <span>Solidity 0.8.20</span>
            <span>Foundry</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Diagram
