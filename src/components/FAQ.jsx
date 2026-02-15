import { useState } from 'react'

function FAQ() {
  const [openFaq, setOpenFaq] = useState(0)

  const faqs = [
    {
      q: 'What are the 3 chains in WPD?',
      a: 'WPD includes Layer 1 PoS (security and settlement), Layer 2A PoA (institutional throughput), and an Ethereum Bridge layer for ETH/ERC20 asset flows.',
    },
    {
      q: 'How do Layer 2A transactions become final?',
      a: 'Layer 2A processes transactions quickly, then sends batched proofs to Layer 1 via IBC where they get anchored under PoS finality.',
    },
    {
      q: 'How is bridge security enforced?',
      a: 'Bridge operations use guardian multisig (3/5) and challenge-based protection. Large withdrawals also require PoW-style checks before execution.',
    },
    {
      q: 'Which endpoints should developers use first?',
      a: 'Start with RPC and API endpoints for each chain, then use gRPC for module-level integrations and monitoring endpoints for observability.',
    },
    {
      q: 'Is this architecture production-ready?',
      a: 'Yes, this deployment is structured as a production-ready ecosystem with tested chain connectivity, bridge modules, and monitoring coverage.',
    },
  ]

  return (
    <section id="faq" className="section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <p className="section-lead">Answers to common questions about architecture, operations, and integrations.</p>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index
            return (
              <article className={`panel faq-item faq-appear ${isOpen ? 'open' : ''}`} key={item.q}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="faq-answer">{item.a}</p>}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
