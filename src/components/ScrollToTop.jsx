function ScrollToTop({ showScrollTop }) {
  return (
    <button
      className={`scroll-top ${showScrollTop ? 'show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}

export default ScrollToTop
