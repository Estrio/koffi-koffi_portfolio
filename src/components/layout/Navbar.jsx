import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

import logo from "../../assets/logo/koffi_logo.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={scrolled ? "navbar scrolled" : "navbar"}>
            <div className="container navbar-content">

                <div className="logo">
                    <img src={logo} alt="Koffi Koffi" />
                </div>

                <nav className={menuOpen ? "nav active" : "nav"}>

                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>

                </nav>

                <button className="cta-btn">
                    Let's Talk
                </button>

                <div
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

            </div>
        </header>
    );
}

export default Navbar;