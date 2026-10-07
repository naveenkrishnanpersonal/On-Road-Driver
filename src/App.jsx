import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyOrd from "./components/WhyOrd";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="page">
      <NavBar />
      <Hero />
      <Services />
      <WhyOrd />
      <About />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
