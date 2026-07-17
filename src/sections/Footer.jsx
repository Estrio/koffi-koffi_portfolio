import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <h2>Koffi Koffi ☕</h2>

            <p>Brewing Digital Solutions for Modern Businesses.</p>

            <div className="footer-link">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contac">Contact</a>
            </div>

            <p className="copyright">
                © {new Date().getFullYear()} Koffi Koffi. All Rights Reserved.
            </p>
        </footer>
    )
}

export default Footer;