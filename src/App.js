import { useRef, useState } from "react";
import "./App.scss";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/Navbar/NavBar";
import Packages from "./Components/Packages/Packages";
import ProductLines from "./Components/ProductLines/ProductLines";
import Artists from "./Components/Artists/Artists";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const heroRef = useRef(null);
  const packagesRef = useRef(null);
  const productLinesRef = useRef(null);
  const artistsRef = useRef(null);

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
            sections={{ heroRef, packagesRef, productLinesRef, artistsRef }}isOpen={isOpen}setIsOpen={setIsOpen}
          />
        </nav>
      </header>
      <main className="test2">
        <section id="home" ref={heroRef}>
          <Hero />
        </section>
        <section id="packages" ref={packagesRef}>
          <Packages />
        </section>
        <section id="product-lines" ref={productLinesRef}>
          <ProductLines />
        </section>
        <section id="artists" ref={artistsRef}>
          <Artists />
        </section>
      </main>
    </div>
  );
}

export default App;
