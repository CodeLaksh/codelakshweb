const services = [
  {
    icon: 'fa-robot',
    title: 'AI Chatbots',
    description: 'Intelligent conversational AI bots trained on your data for 24/7 customer support.',
  },
  {
    icon: 'fa-brain',
    title: 'Machine Learning',
    description: 'Custom ML models for prediction, classification, and business automation.',
  },
  {
    icon: 'fa-code',
    title: 'Web Development',
    description: 'Modern responsive websites and web applications using React, Node.js, Python.',
  },
  {
    icon: 'fa-mobile-alt',
    title: 'App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android platforms.',
  },
  {
    icon: 'fa-cloud',
    title: 'Cloud Solutions',
    description: 'Cloud architecture, migration and management on AWS, Azure, GCP.',
  },
  {
    icon: 'fa-chart-line',
    title: 'Digital Marketing',
    description: 'SEO, social media marketing and growth strategies to scale your business.',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Services</span>
          <h2 className="section-title">
            Comprehensive
            <br />
            <span className="highlight">Digital Solutions</span>
          </h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">
                <i className={`fas ${service.icon}`} aria-hidden="true"></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">
                Learn More <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
