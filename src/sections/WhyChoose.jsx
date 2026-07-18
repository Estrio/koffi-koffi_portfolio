import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import {FaCheckCircle,FaBolt,FaHeadset,FaLightbulb } from "react-icons/fa";

import "./WhyChoose.css"

const features = [
    {
        icon: <FaCheckCircle />,
        title: "Tailor-Made Solutions",
        description: 
            "Every project is built around your business goals-not from generic templates."
    },

    {
        icon: <FaBolt />,
        title: "Fast & Reliable",
        description:
            "We focus on performance, security, and delivering projects on time"
    },

    {
        icon: <FaLightbulb />,
        title: "Modern Technology",
        description:
            "React, Electron, Python, Firebase, MySQL, and other up-to-date technologies."
    },

    {
        icon: <FaHeadset />,
        titlet: "Continouos Support",
        description:
            "We don't disappear after launch, We're here to help you grow."
    }
]

function WhyChoose() {
    return (
        <Container>
        <SectionTitle 
            subtitle="Why Choose Us"
            titlet="More Than Just Developers"
            />
            
            <div className="why-grid"></div>
                {features.map((feature, index) => (
                    <div className="why-card" key={index}>

                        <div className="why-icon">
                            {feature.icon}
                        </div>

                        <h3>{feature.title}</h3>

                        <p>{feature.description}</p>
                    </div>
                ))}
        </Container>
    )
}
  
export default WhyChoose;