import React from "react";
import "./Hero.scss";

function Hero({ productLinesRef, scrollToSection }) {
  return (
    <section className="hero">
      <article className="hero__text-bg">
        {/* <h1 className='hero__header'>
        BLUE KEE DESIGN CO.
      </h1> */}
        <h1 className="hero__h2-text">
          Custom Laser-Cut Designs for Weddings and Events in Toronto
        </h1>
        <h2 className="hero__h3-text">
          Crafting Memories, One Detail at a Time
        </h2>
        <button
          onClick={() => scrollToSection(productLinesRef)}
          className="hero__btn"
        >
          <h3 className="hero__btn-text">Browse Our Menu</h3>
        </button>
      </article>
    </section>
  );
}

export default Hero;
