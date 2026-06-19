export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span> AI Solutions & Software Development
          </div>
          <h1 className="hero-title">
            <span>Code Your Vision</span>
            <span className="highlight">With Innovation</span>
          </h1>
          <p className="hero-subtitle">
            We deliver customized software solutions with expert team of developers, designers &
            project managers. Transform your business with cutting-edge AI technology.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get Started <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#portfolio" className="btn btn-outline">
              View Work
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Team</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card card-main">
            <i className="fas fa-rocket" aria-hidden="true"></i>
            <h3>Innovation</h3>
            <p>Cutting-edge solutions</p>
          </div>
          <div className="hero-card card-1">
            <i className="fas fa-robot" aria-hidden="true"></i>
            <span>AI Chatbots</span>
          </div>
          <div className="hero-card card-2">
            <i className="fas fa-code" aria-hidden="true"></i>
            <span>Web Dev</span>
          </div>
          <div className="hero-card card-3">
            <i className="fas fa-mobile-alt" aria-hidden="true"></i>
            <span>App Dev</span>
          </div>
        </div>
      </div>
    </section>
  );
}
