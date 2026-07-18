import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="home">

            <div className="hero-bg"></div>

            <div className="container">

                <div className="hero-wrapper">

                    <span className="hero-badge">
                        ☕ Brewing Digital Solutions
                    </span>

                    <h1>
                        We Build Powerful
                        <br />
                        Digital Experiences.
                    </h1>

                    <p>
                        Custom websites, desktop software,
                        mobile applications, and business
                        automation designed for modern companies.
                    </p>

                    <div className="hero-buttons">

                        <button className="primary-btn">
                            Start Your Project
                        </button>

                        <button className="secondary-btn">
                            View Projects
                        </button>

                    </div>

                    <div className="tech-card">

                        <h4>Built With</h4>

                        <div className="tech-list">

                            <span>React</span>
                            <span>Electron</span>
                            <span>Python</span>
                            <span>Firebase</span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;