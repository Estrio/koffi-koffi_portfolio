import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

import "./Hero.css";

import coffee from "../assets/logo/koffi_logo.png";

function Hero() {
    return (
        <section className="hero" id="home">
            <Container>

                <div className="hero-content">

                    <div className="hero-text">

                        <span className="hero-tag">
                            ☕ BREWING DIGITAL SOLUTIONS
                        </span>

                        <h1>
                            We Turn Coffee
                            <br />
                            Into Clean Code.
                        </h1>

                        <p>
                            Koffi Koffi crafts modern websites,
                            software, and mobile applications that
                            help businesses automate, grow, and
                            stand out in today's digital world.
                        </p>

                        <div className="hero-buttons">
                            <Button>Start Your Project</Button>

                            <button className="outline-btn">
                                View Portfolio
                            </button>
                        </div>

                    </div>

                    <div className="hero-image">

                        <img
                            src={coffee}
                            alt="Coffee"
                        />

                    </div>

                </div>

            </Container>
        </section>
    );
}

export default Hero;