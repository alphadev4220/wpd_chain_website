import wpdLogo from '../assets/wpd-logo.jpeg'

function Header({ activeSection, setActiveSection, navItems }) {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#home" onClick={() => setActiveSection('overview')}>
          <img src={wpdLogo} alt="WPD logo" />
          <span>WPD Chain</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
