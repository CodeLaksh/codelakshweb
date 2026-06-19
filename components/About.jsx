export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">About Us</span>
          <h2 className="section-title">
            Customized Solutions,
            <br />
            <span className="highlight">Expert Team</span>
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-content">
            <p>
              CodeLaksh has a team of highly skilled and experienced software developers,
              designers, and project managers who have worked on a variety of complex projects
              across multiple industries.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-check" aria-hidden="true"></i>
                </div>
                <div>
                  <h4>High-Quality Standards</h4>
                  <p>Deliver excellence in every project</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-headset" aria-hidden="true"></i>
                </div>
                <div>
                  <h4>Strong Customer Support</h4>
                  <p>24/7 dedicated assistance</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-lightbulb" aria-hidden="true"></i>
                </div>
                <div>
                  <h4>Innovative Solutions</h4>
                  <p>Creative approaches to complex problems</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-frame">
              <i className="fas fa-code" aria-hidden="true"></i>
            </div>
            <div className="image-badge">Since 2020</div>
          </div>
        </div>
      </div>
    </section>
  );
}
