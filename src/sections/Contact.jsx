import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import {FaEnvelope, FaPhoneAlt, FaMapMarkedAlt} from "react-icons/fa";

import "./Contact.css"

function Contact() {
    return(
        <section className="contact" id="contact">
            <Container>
                <SectionTitle 
                    subtitle="Get In Touch"
                    titlet="Let's Brew Your Next Project"
                />

                <div className="contact-grid"></div>
                    <div className="contact-info">
                        <div className="info-card">
                            <FaEnvelope />
                            <div>
                                <h4>Email</h4>
                                <p>hello@koffikoffi.dev</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <FaPhoneAlt />
                            <div>
                                <h4>Phone</h4>
                                <p>+63 XXX XXX XXXX</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <FaMapMarkedAlt />
                            <div>
                                <h4>Location</h4>
                                <p>Philippines</p>
                            </div>
                        </div>

                    </div>

                    <form className="contact-form">
                        <input 
                        text="text"
                        placeholder="Your Name"
                        />

                        <input 
                        text="email"
                        placeholder="Email Address"
                        />

                        <input 
                        text="text"
                        placeholder="Company (Optional)"
                        />         

                        <textarea 
                        rows="6"
                        placeholder="Tell us about your project..."
                        ></textarea>

                        <button type="Submit">
                            Send Message
                        </button>
                    </form>
            </Container>
        </section>
    )
}

export default Contact;