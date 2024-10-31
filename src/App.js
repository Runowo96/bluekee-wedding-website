import "./App.scss";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/Navbar/NavBar";
import Packages from "./Components/Packages/Packages";
import ProductLines from "./Components/ProductLines/ProductLines";

function App() {
  return (
    <div>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main>
        <Hero />
        <Packages />
        <ProductLines />
      </main>
    </div>
  );
}

export default App;
