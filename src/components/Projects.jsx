import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

export default function Projects() {
    const projectsData = [
        {
            title: "Inventory Management System",
            description: "A comprehensive solution to track, organize, and manage stock efficiently. Built with real-time analytics and scalable architecture.",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
            tags: ["React", "Node.js", "Dashboard"],

        },
        {
            title: "Career Vision",
            description: "An intelligent platform designed to help students discover and plan their career paths through structured guidance and resources.",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
            tags: ["React", "Education", "UI/UX"],

        },
        {
            title: "Car Rental System",
            description: "A seamless online booking platform for car rentals, featuring inventory tracking, user management, and secure transactions.",
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
            tags: ["React", "Booking", "System Design"],

        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="projects-container">
                <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="project-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            data-aos-duration="1000"
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                             
                                   
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            <div className="projects-footer" data-aos="fade-up" data-aos-delay="500">
                <a href="#" className="btn btn-secondary">View All Work</a>
            </div>
        </div>
        </section >
    );
}