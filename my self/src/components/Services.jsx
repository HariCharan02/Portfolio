import { Code, Cpu, PenTool } from 'lucide-react';
import './Services.css';

export default function Services() {
    const servicesData = [
        {
            icon: <Code size={40} className="service-icon" />,
            title: "Web Development",
            description: "Building responsive, high-performance web applications tailored to your business needs using React.js and modern frameworks."
        },
        {
            icon: <Cpu size={40} className="service-icon" />,
            title: "Software Development",
            description: "Architecting robust software systems and implementing scalable solutions that drive real-world productivity."
        },
        {
            icon: <PenTool size={40} className="service-icon" />,
            title: "UI/UX Design",
            description: "Crafting clean, intuitive, and premium user interfaces that provide seamless digital experiences inspired by leading brands."
        }
    ];

    return (
        <section id="services" className="section services">
            <div className="services-container">
                <h2 className="section-title" data-aos="fade-up">My Expertise</h2>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="service-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            data-aos-duration="1000"
                        >
                            <div className="icon-wrapper">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                            <div className="service-hover-indicator"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}