import React from "react";
import "./Artists.scss";
import blue from "../../assets/images/blue-closeup.avif";
import kee from "../../assets/images/kee-closeup.avif";

function Artists() {
  return (
    <div className="artists">
      <h2 className="artists__header">THE ARTISTS</h2>
      <div className="artists__outer-cont">
        <div className="artists__cont">
          <div className="artists__img-cont">
            <img className="artists__img" src={blue} alt="Artist Blue" />
            <h3 className="artists__name">BLUE</h3>
          </div>
          <div className="artists__info-cont">
            <h3 className="artists__name-tablet">BLUE</h3>
            <p className="artists__bio">
              Blue combines years of expertise in the wedding and events
              industry with his technical skills as a software engineer and a
              deep passion for crafting with 3D printers, CNC machines, and
              laser cutters. His work blends creativity with precision,
              delivering custom, high-quality pieces for clients who value
              artistry and innovation.
            </p>
          </div>
        </div>
        <div className="order-fix artists__cont">
          <div className="artists__img-cont">
            <img className="artists__img" src={kee} alt="Artist Kee" />
            <h3 className="artists__name">KEE</h3>
          </div>
          <div className="artists__info-cont">
            <h3 className="artists__name-tablet">KEE</h3>
            <p className="artists__bio">
              Kee holds a double major in fashion and textiles and has honed her
              styling expertise working with brands like Indigo, Bombay Gin, and
              Carter's Oshkosh. Beyond her professional work, Kee finds joy in
              creating fine artwork, crocheting intricate designs, and crafting
              unique stickers that showcase her artistic flair.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artists;
