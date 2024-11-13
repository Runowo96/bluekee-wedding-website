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
import Divider from "./Components/Divider/Divider";

function App() {
  const [isOpen, setIsOpen] = useState(false);

// Initialize cart state directly from localStorage
const [cart, setCart] = useState(() => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
});

  const heroRef = useRef(null);
  const packagesRef = useRef(null);
  const productLinesRef = useRef(null);
  const artistsRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div>
      <header className="test">
        <nav>
          <NavBar
            scrollToSection={scrollToSection}
            sections={{
              heroRef,
              packagesRef,
              productLinesRef,
              artistsRef,
              contactUsRef,
            }}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </nav>
      </header>
      <main className="test2">
        <section id="home" ref={heroRef}>
          <Hero
            scrollToSection={scrollToSection}
            productLinesRef={productLinesRef}
          />
        </section>
        <Divider />
        <section id="packages" ref={packagesRef}>
          <Packages
            scrollToSection={scrollToSection}
            productLinesRef={productLinesRef}
          />
        </section>
        <Divider />

        <section id="product-lines" ref={productLinesRef}>
          <ProductLines cart={cart} setCart={setCart} />
        </section>
        <CallToAct
          scrollToSection={scrollToSection}
          contactUsRef={contactUsRef}
        />
        <Divider />

        <section id="artists" ref={artistsRef}>
          <Artists />
        </section>
        <Divider />

        <section id="contact-us" ref={contactUsRef}>
          <ContactUs cart={cart} setCart={setCart} />
        </section>
      </main>
      <footer>
        <Footer
          scrollToSection={scrollToSection}
          sections={{
            heroRef,
            packagesRef,
            productLinesRef,
            artistsRef,
            contactUsRef,
          }}
        />
      </footer>
    </div>
  );
}

export default App;
