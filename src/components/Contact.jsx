import { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import './Contact.css';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ submitted: false, success: false, message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ submitted: false, success: false, message: '' });

        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formsubmit.co/ajax/thumanapllyharicharan@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitStatus({ 
                    submitted: true, 
                    success: true, 
                    message: 'Thank you! Your message has been sent successfully.' 
                });
                form.reset();
            } else {
                setSubmitStatus({ 
                    submitted: true, 
                    success: false, 
                    message: 'Oops! Something went wrong. Please try again.' 
                });
            }
        } catch (error) {
            setSubmitStatus({ 
                submitted: true, 
                success: false, 
                message: 'Network error. Please try again later.' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section contact">
            <div className="contact-container">
                <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>

                <div className="contact-content">
                    <div className="contact-info" data-aos="fade-right" data-aos-duration="1000">
                        <h3>Let's build something extraordinary together</h3>
                        <p className="contact-desc">
                            Whether you have a project in mind, are looking for a developer to join your team, or simply want to connect, I'd love to hear from you.
                        </p>

                        <div className="contact-details">
                            <a href="mailto:thumanapllyharicharan@gmail.com" className="contact-item" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                <div className="contact-icon-wrapper">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p>thumanapllyharicharan@gmail.com</p>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--accent-blue-text)', fontWeight: 500 }}>Send Email &rarr;</span>
                                </div>
                            </a>

                            <div className="contact-item">
                                <div className="contact-icon-wrapper">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91 9701345072</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon-wrapper">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Hyderabad, Telangana</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn"><Linkedin size={22} /></a>
                            <a href="https://github.com/HariCharan02/HariCharan02" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub"><Github size={22} /></a>
                        </div>
                    </div>

                    <div className="contact-form-wrapper" data-aos="fade-left" data-aos-duration="1000">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            {submitStatus.submitted && (
                                <div style={{ 
                                    padding: '12px', 
                                    marginBottom: '20px', 
                                    borderRadius: '8px', 
                                    backgroundColor: submitStatus.success ? '#d4edda' : '#f8d7da',
                                    color: submitStatus.success ? '#155724' : '#721c24',
                                    fontSize: '0.95rem',
                                    border: `1px solid ${submitStatus.success ? '#c3e6cb' : '#f5c6cb'}`
                                }}>
                                    {submitStatus.message}
                                    {!submitStatus.success && ' Please verify formsubmit by directly submitting once without ajax if this persists.'}
                                </div>
                            )}
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="_subject" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
                            </div>

                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_captcha" value="false" />

                            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}