import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services"
import Portfolio from "./sections/Portfolio";
import Process from "./sections/Process";
import WhyChoose from "./sections/WhyChoose";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About/>
            <Services/>
            <Portfolio/>
            <Process/>
            <WhyChoose />
        </> 
    );
}

export default App;