import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services"
import Portfolio from "./sections/Portfolio";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About/>
            <Services/>
            <Portfolio/>
        </> 
    );
}

export default App;