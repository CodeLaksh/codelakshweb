const projects = [
  { icon: 'fa-store', title: 'E-Commerce Platform', category: 'Web Development' },
  { icon: 'fa-robot', title: 'AI Customer Support', category: 'Chatbot Development' },
  { icon: 'fa-mobile-alt', title: 'Mobile App', category: 'App Development' },
  { icon: 'fa-brain', title: 'ML Analytics Dashboard', category: 'Machine Learning' },
];

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Work</span>
          <h2 className="section-title">
            Featured
            <br />
            <span className="highlight">Projects</span>
          </h2>
        </div>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div className="portfolio-item" key={project.title}>
              <div className="portfolio-image">
                <i className={`fas ${project.icon}`} aria-hidden="true"></i>
              </div>
              <div className="portfolio-info">
                <h4>{project.title}</h4>
                <p>{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
