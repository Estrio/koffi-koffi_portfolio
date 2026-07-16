import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";

import "./Portfolio.css";

const projects = [
    {
        title: "Hospital Queueing System",
        category: "Desktop Application",
        image: "https://placehold.co/600x400"
    },
    {
        title: "Asset QR Generator",
        category: "Python Application",
        image: "https://placehold.co/600x400"
    },
    {
        title: "AI Fire Extinguisher",
        category: "IoT + Artificial Intelligence",
        image: "https://placehold.co/600x400"
    },
    {
        title: "Friendzy Messaging Platform",
        category: "Web Application",
        image: "https://placehold.co/600x400"
    },
    {
        title: "Payroll & Attendance System",
        category: "In Development",
        image: "https://placehold.co/600x400"
    }
];

function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <Container>

                <SectionTitle
                    subtitle="Our Work"
                    title="Projects We've Brewed"
                />

                <div className="portfolio-grid">

                    {projects.map((project, index) => (
                        <div className="portfolio-card" key={index}>

                            <img
                                src={project.image}
                                alt={project.title}
                            />

                            <div className="portfolio-content">

                                <span>{project.category}</span>

                                <h3>{project.title}</h3>

                            </div>

                        </div>
                    ))}

                </div>

            </Container>
        </section>
    );
}

export default Portfolio;