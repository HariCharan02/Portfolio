import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-up" data-aos-duration="1000">
          <p className="hero-greeting" data-aos="fade-in" data-aos-duration="1000">Hello, I'm</p>
          <h1 className="hero-title" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1000">Hari Charan</h1>
          <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Software Developer <span className="highlight">|</span> Web Developer</h2>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            I specialize in building visually stunning, high-performance web applications. Let's craft elegant digital experiences together.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}