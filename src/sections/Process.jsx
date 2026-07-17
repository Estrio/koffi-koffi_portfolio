import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import {FaComments, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";

import "./Process.css";

const steps = [
    {
        icon: <FaComments />,
        title: "01. Discovery",
        description: 
            "We discuss your goals, business challenges, and project requirements."
    },
    
    {
        icon: <FaPencilRuler />,
        title: "02, Design",
        description:
            "We create wireframes and user-focused designs before development begins."
    },

    {
        icon: <FaCode />,
        title: "03, Development",
        description:
            "We build fast, scalable, and reliable software using modern technologies."
    },

    {
        icon: <FaRocket />,
        title: "04. Launch",
        description:
            "We deploy your project, provide support, and help it continue to grow."
    }
];

function Process() {
    return (
        <section className="process" id="process">
            <Container>
                <SectionTitle 
                    subtitle="Our Process"
                    titlet="From Coffee to Code"
                />

                <div className="process-grid">

                    {steps.map((step,index) => (
                        <div className="process-card" key={index}>

                            <div className="process-icon">
                                {step.icon}
                            </div>

                            <h3>{step.title}</h3>

                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Process;