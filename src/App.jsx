import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Endpoints from './components/Endpoints'
import Relationships from './components/Relationships'
import Features from './components/Features'
import Ecosystem from './components/Ecosystem'
import Roadmap from './components/Roadmap'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [activeSection, setActiveSection] = useState('overview')
  const [showScrollTop, setShowScrollTop] = useState(false)

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'endpoints', label: 'Endpoints' },
    { id: 'relationships', label: 'Relationships' },
    { id: 'features', label: 'Features' },
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'faq', label: 'FAQ' },
  ]

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id)
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-30% 0px -50% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 320)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.overview-appear'))
    if (!cards.length) {
      return
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.2,
      },
    )

    cards.forEach((card) => revealObserver.observe(card))

    return () => {
      cards.forEach((card) => revealObserver.unobserve(card))
      revealObserver.disconnect()
    }
  }, [])

  // Universal animation observer for all sections
  useEffect(() => {
    const animatedElements = Array.from(document.querySelectorAll(
      '.hero-appear, .endpoint-appear, .relationship-appear, ' +
      '.feature-appear, .ecosystem-appear, .roadmap-item-appear, .faq-appear'
    ))
    
    if (!animatedElements.length) {
      return
    }

    const universalObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.15,
      },
    )

    animatedElements.forEach((el) => universalObserver.observe(el))

    return () => {
      animatedElements.forEach((el) => universalObserver.unobserve(el))
      universalObserver.disconnect()
    }
  }, [])

  return (
    <div className="site">
      <div className="bg-orb orb-left" />
      <div className="bg-orb orb-right" />
      <div className="bg-curve curve-top" />
      <div className="bg-curve curve-bottom" />

      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        navItems={navItems} 
      />

      <main id="home">
        <Hero setActiveSection={setActiveSection} />
        <Overview />
        <Endpoints />
        <Relationships />
        <Features />
        <Ecosystem />
        <Roadmap />
        <FAQ />
      </main>

      <Footer setActiveSection={setActiveSection} />
      <ScrollToTop showScrollTop={showScrollTop} />
    </div>
  )
}

export default App
