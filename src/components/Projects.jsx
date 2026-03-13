import { ExternalLink, Github } from "lucide-react";
import "./Projects.css";

export default function Projects() {
    const projectsData = [
        {
            title: "Inventory Management System",
            description:
                "A comprehensive solution to track, organize, and manage stock efficiently.",
            image:
                "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
            tags: ["React", "Node.js", "Dashboard"],
            liveLink: "#",
            githubLink: "#",
        },
        {
            title: "Career Vision",
            description:
                "An intelligent platform designed to help students discover career paths.",
            image:
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
            tags: ["React", "Education", "UI/UX"],
            liveLink: "#",
            githubLink: "#",
        },
        {
            title: "Car Rental System",
            description:
                "A seamless online booking platform for car rentals with user management.",
            image:
                "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
            tags: ["React", "Booking", "System Design"],
            liveLink: "#",
            githubLink: "#",
        },
    ];

    return (
        <section id="projects" className="section projects">
            <div className="projects-container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />

                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a
                                            href={project.liveLink}
                                            className="project-link-icon"
                                            target="_blank"
                                        >
                                            <ExternalLink size={24} />
                                        </a>

                                        <a
                                            href={project.githubLink}
                                            className="project-link-icon"
                                            target="_blank"
                                        >
                                            <Github size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}