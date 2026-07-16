import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";

import "./About.css";

import team from "../assets/logo/koffi_logo.png"

function About() {
    return (
        <section className="about" id="about">
            <Container>

                <div className="about-grid">

                    <div className="about-image">
                        <img src={team} alt="About Koffi Koffi"/>
                    </div>

                    <div className="about-content">

                        <SectionTitle 
                            subtitle="Whoe We Are"
                            title="Brewing Digital Success for Every Business"
                        />

                        <p>
                            At Koffi Koffi, we believe great software is like
                            great coffee—it should be carefully crafted,
                            reliable, and leave a lasting impression.
                        </p>

                        <p>
                            We specialize in custom websites, desktop systems,
                            mobile applications, and business automation
                            solutions tailored to your needs.
                        </p>

                        <div className="about-stats">

                            <div className="stat">
                                <h2>10+</h2>
                                <span>Custom Solutions</span>
                            </div>

                            <div className="stat">
                                <h2>24/7</h2>
                                <span>Support</span>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About;