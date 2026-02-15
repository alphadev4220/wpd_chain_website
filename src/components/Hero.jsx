import wpdLogo from '../assets/wpd-logo.jpeg'

function Hero({ setActiveSection }) {
  return (
    <section className="hero section">
      <div className="container hero-appear slide-in-up">
        <div className="hero-showcase">
          <div className="hero-image-panel">
            <img className="hero-main-image" src={wpdLogo} alt="WPD coin" />
          </div>

          <div>
            <p className="eyebrow">Production-ready 3-chain blockchain ecosystem</p>
            <h1>A Future Built on Stability and Decentralization</h1>
            <p className="hero-text">
              WPD is more than a blockchain — it&apos;s a platform designed for sustainable development,
              financial inclusion, and real-world impact. By fusing the security of a modern Layer 1
              network with a natively issued stablecoin and deeply integrated ecosystem, WPD is positioned
              to become a hub for decentralized economic coordination.
            </p>
            <p className="hero-text">
              With the launch of the WPD mainnet, a new era begins for the PCSM community and beyond —
              offering greater sovereignty, better scalability, and full-stack control over the digital
              financial experience.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#overview" onClick={() => setActiveSection('overview')}>Explore Chains</a>
              <a className="btn btn-secondary" href="#endpoints" onClick={() => setActiveSection('endpoints')}>View Endpoints</a>
            </div>
            <div className="hero-tags">
              <span>Cosmos SDK</span>
              <span>IBC Enabled</span>
              <span>ETH + ERC20 Bridge</span>
              <span>3/5 Guardian Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
