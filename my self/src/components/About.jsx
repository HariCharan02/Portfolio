import './About.css';
import profileImg from '../assets/img.jpeg';

export default function About() {
    return (
        <section id="about" className="section about">
            <div className="about-container">
                <h2 className="section-title" data-aos="fade-up">About Me</h2>

                <div className="about-content">
                    <div className="about-image" data-aos="fade-right" data-aos-duration="1000">
                        <div className="image-wrapper">
                            <img
                                src={profileImg}
                                alt="Charan Kannaaa - Software Developer"
                            />
                            <div className="image-experience-badge">
                                <span className="years">Passionate</span>
                                <span className="text">Developer</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-text" data-aos="fade-left" data-aos-duration="1000">
                        <h3>Crafting Digital Solutions with Precision and Passion</h3>
                        <p>
                            I am a dedicated Software Developer specializing in building robust, scalable applications. With a strong foundation in React.js and modern web technologies, I transform complex problems into intuitive, minimalist digital experiences.
                        </p>
                        <p>
                            My approach blends technical excellence with refined design principles—inspired by premium brands that value elegance and performance. I believe that well-written code is just as important as a flawless user interface.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">React</span>
                                <span className="stat-label">Frontend Expert</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">UI/UX</span>
                                <span className="stat-label">Modern Design</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">Clean</span>
                                <span className="stat-label">Architecture</span>
                            </div>
                        </div>

                        <a href="#contact" className="btn btn-primary about-btn">Let's Connect</a>
                    </div>
                </div>
            </div>
        </section>
    );
}