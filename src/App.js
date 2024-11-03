import { useRef, useState } from "react";
import "./App.scss";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/Navbar/NavBar";
import Packages from "./Components/Packages/Packages";
import ProductLines from "./Components/ProductLines/ProductLines";
import Artists from "./Components/Artists/Artists";
import ContactUs from "./Components/ContactUs/ContactUs";
import CallToAct from "./Components/CallToAct/CallToAct";
import Footer from "./Components/Footer/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const heroRef = useRef(null);
  const packagesRef = useRef(null);
  const productLinesRef = useRef(null);
  const artistsRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false)
  };

  return (
    <div>
      <header className="test">
        <nav>
          <NavBar
            scrollToSection={scrollToSection}
            sections={{ heroRef, packagesRef, productLinesRef, artistsRef, contactUsRef }}isOpen={isOpen}setIsOpen={setIsOpen}
          />
        </nav>
      </header>
      <main className="test2">
        <section id="home" ref={heroRef}>
          <Hero scrollToSection={scrollToSection} productLinesRef={productLinesRef}  />
        </section>
        <section id="packages" ref={packagesRef}>
          <Packages scrollToSection={scrollToSection}  productLinesRef={productLinesRef} />
        </section>
        <section id="product-lines" ref={productLinesRef}>
          <ProductLines />
        </section>
        <CallToAct scrollToSection={scrollToSection}  contactUsRef={contactUsRef} />
        <section id="artists" ref={artistsRef}>
          <Artists  />
        </section>
        <section id="contact-us" ref={contactUsRef}>
          <ContactUs />
        </section>
      </main>
      <footer>
        <Footer scrollToSection={scrollToSection}
            sections={{ heroRef, packagesRef, productLinesRef, artistsRef, contactUsRef }} />
      </footer>
    </div>
  );
}

export default App;
