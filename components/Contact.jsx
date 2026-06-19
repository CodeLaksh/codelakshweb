'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Contact Us</span>
          <h2 className="section-title">
            Let&apos;s Build
            <br />
            <span className="highlight">Something Amazing</span>
          </h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              </div>
              <div>
                <h4>Visit Our Office</h4>
                <p>
                  CodeLaksh Office, Sangram Nagar
                  <br />
                  Aurangabad, India
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone-alt" aria-hidden="true"></i>
              </div>
              <div>
                <h4>Call Us</h4>
                <p>+91-9834684866</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope" aria-hidden="true"></i>
              </div>
              <div>
                <h4>Email Us</h4>
                <p>codelaksh@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-clock" aria-hidden="true"></i>
              </div>
              <div>
                <h4>Working Hours</h4>
                <p>Mon-Sat: 10 AM to 7 PM</p>
              </div>
            </div>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#" aria-label="GitHub">
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
            {submitted ? (
              <p>Thanks for reaching out! We&apos;ll get back to you soon.</p>
            ) : (
              <>
                <div className="form-row">
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                </div>
                <input type="tel" placeholder="Phone Number" />
                <select defaultValue="">
                  <option value="">Select Service</option>
                  <option>AI Chatbot Development</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>Machine Learning</option>
                  <option>Digital Marketing</option>
                </select>
                <textarea placeholder="Tell us about your project" rows={5}></textarea>
                <button type="submit" className="btn btn-primary">
                  Send Message <i className="fas fa-paper-plane" aria-hidden="true"></i>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
