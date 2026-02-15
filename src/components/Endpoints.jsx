function Endpoints() {
  return (
    <section id="endpoints" className="section section-alt">
      <div className="container">
        <h2>RPC / API / gRPC / Monitoring Endpoints</h2>
        <p className="section-lead">Live service links for each chain environment.</p>
        <div className="endpoints-grid">
          <article className="panel endpoint-card endpoint-appear slide-in-left">
            <h3>L1 (Layer 1 PoS)</h3>
            <ul>
              <li><strong>RPC:</strong> <a href="http://187.77.17.246:26657" target="_blank" rel="noreferrer">http://187.77.17.246:26657</a></li>
              <li><strong>API:</strong> <a href="http://187.77.17.246:1317" target="_blank" rel="noreferrer">http://187.77.17.246:1317</a></li>
              <li><strong>gRPC:</strong> <a href="http://187.77.17.246:9090" target="_blank" rel="noreferrer">http://187.77.17.246:9090</a></li>
              <li><strong>Monitoring:</strong> <a href="http://187.77.17.246:26660" target="_blank" rel="noreferrer">http://187.77.17.246:26660</a></li>
            </ul>
          </article>

          <article className="panel endpoint-card endpoint-appear slide-in-up">
            <h3>L2A (PoA Sidechain)</h3>
            <ul>
              <li><strong>RPC:</strong> <a href="http://187.77.17.246:27657" target="_blank" rel="noreferrer">http://187.77.17.246:27657</a></li>
              <li><strong>API:</strong> <a href="http://187.77.17.246:2317" target="_blank" rel="noreferrer">http://187.77.17.246:2317</a></li>
              <li><strong>gRPC:</strong> <a href="http://187.77.17.246:9092" target="_blank" rel="noreferrer">http://187.77.17.246:9092</a></li>
              <li><strong>Monitoring:</strong> <a href="http://187.77.17.246:27660" target="_blank" rel="noreferrer">http://187.77.17.246:27660</a></li>
            </ul>
          </article>

          <article className="panel endpoint-card endpoint-appear slide-in-right">
            <h3>L2B (Bridge Chain)</h3>
            <ul>
              <li><strong>RPC:</strong> <a href="http://187.77.17.246:28657" target="_blank" rel="noreferrer">http://187.77.17.246:28657</a></li>
              <li><strong>API:</strong> <a href="http://187.77.17.246:3317" target="_blank" rel="noreferrer">http://187.77.17.246:3317</a></li>
              <li><strong>gRPC:</strong> <a href="http://187.77.17.246:9094" target="_blank" rel="noreferrer">http://187.77.17.246:9094</a></li>
              <li><strong>Monitoring:</strong> <a href="http://187.77.17.246:28660" target="_blank" rel="noreferrer">http://187.77.17.246:28660</a></li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Endpoints
