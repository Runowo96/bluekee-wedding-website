import { useEffect, useRef, useState, React } from "react";
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
import CartIcon from "./Components/CartIcon/CartIcon";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize cart state directly from localStorage
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // React.useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  const heroRef = useRef(null);
  const packagesRef = useRef(null);
  const productLinesRef = useRef(null);
  const artistsRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((cartItem) => cartItem.id !== itemToRemove.id));
  };

  const toggleCartItem = (item) => {
    const itemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (itemInCart) {
      // Remove item from cart
      setCart((prevCart) =>
        prevCart.filter((cartItem) => cartItem.id !== item.id)
      );
    } else {
      // Add item to cart
      setCart((prevCart) => [...prevCart, { id: item.id, name: item.name }]);
    }
  };

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    // eslint-disable-next-line
  }, [cart]);

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
          <ProductLines
            toggleCartItem={toggleCartItem}
            cart={cart}
            setCart={setCart}
          />{" "}
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
          <ContactUs
            cart={cart}
            setCart={setCart}
            removeFromCart={removeFromCart}
          />{" "}
        </section>
        <CartIcon
          cart={cart}
          contactUsRef={contactUsRef}
          scrollToSection={scrollToSection}
        />
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
