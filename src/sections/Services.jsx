import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import {FaLaptopCode, FaMobileAlt, FaDesktop, FaCloud} from "react-icons/fa";

import "./Services.css";

function Services() {
    const services=[
        {
            icon:<FaLaptopCode/>,
            title: "Web Development",
            description:
                "Modern, Responsive, and scalable websites tailored for your business."
        },

        {
            icon:<FaMobileAlt/>,
            title: "Mobile Apps",
            description:
                "Android and cross-platform applications with intuitive user experience."
        },

        {
            icon:<FaDesktop/>,
            title: "Desktop System",
            description: 
                "Powerful desktop software for hospitals, offices, and businesses automation."
        },

        {
            icon:<FaCloud/>,
            title: "Cloud Solutions",
            description:
                "Secure database, hosting, and cloud inegrations for growing business."
        }
    ];

    return (
        <section className="services" id="services">
            <Container>

                <SectionTitle
                subtitle="Our Services"
                title="Freshly Brewed Digital Solutions."
                />

                <div className="services-grid">
                    {services.map((services,index)=> (
                        <div className="services-card" key={index}>

                            <div className="service-icon">
                                {services.icon}
                            </div>

                            <h3>{services.title}</h3>

                            <p>{services.description}</p>

                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Services;