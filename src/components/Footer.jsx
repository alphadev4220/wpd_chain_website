import wpdLogo from '../assets/wpd-logo.jpeg'

function Footer({ setActiveSection }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="brand footer-brand" href="#home" onClick={() => setActiveSection('overview')}>
            <img src={wpdLogo} alt="WPD logo" />
            <span>World Peace Development</span>
          </a>
          <p className="footer-copy">
            Next-generation blockchain infrastructure focused on secure, stable,
            and decentralized real-world utility.
          </p>
        </div>

        <div>
          <h4>Official Links</h4>
          <div className="footer-links">
            <a href="https://pcsmecosys.com" target="_blank" rel="noreferrer">pcsmecosys.com</a>
            <a href="https://pcsmecosys.com/white-paper/" target="_blank" rel="noreferrer">White Paper</a>
            <a href="https://pcsmecosys.com/tokenomics/" target="_blank" rel="noreferrer">Tokenomics</a>
            <a href="mailto:info@peaceism.org">info@peaceism.org</a>
          </div>
        </div>

        <div>
          <h4>Community</h4>
          <div className="footer-links">
            <a className="social-link" href="https://www.linkedin.com/company/worldpeacedevelopment" target="_blank" rel="noreferrer"><span className="social-icon linkedin">in</span>LinkedIn</a>
            <a className="social-link" href="https://www.facebook.com/worldpeacedevelopment" target="_blank" rel="noreferrer"><span className="social-icon facebook">f</span>Facebook</a>
            <a className="social-link" href="https://www.instagram.com/worldpeacedevelopment_" target="_blank" rel="noreferrer"><span className="social-icon instagram">◎</span>Instagram</a>
            <a className="social-link" href="https://x.com/worldpeacedeve" target="_blank" rel="noreferrer"><span className="social-icon x">𝕏</span>X (Twitter)</a>
            <a className="social-link" href="https://www.youtube.com/@worldpeacedevelopment" target="_blank" rel="noreferrer"><span className="social-icon youtube">▶</span>YouTube</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 WPD Chain Ecosystem. Inspired by official WPD public resources.</p>
        <a href="https://github.com/alphadev4220/wpd_chain" target="_blank" rel="noreferrer">GitHub Repository</a>
      </div>
    </footer>
  )
}

export default Footer
