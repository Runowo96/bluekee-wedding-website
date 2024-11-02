import React, { useState } from "react";
import "./Packages.scss";
import guest from "../../assets/icons/guest-icon-white.svg";
import table from "../../assets/icons/table-icon-white.svg";
import room from "../../assets/icons/room-icon-white.svg";
import PackageInfo from "../PackageInfo/PackageInfo";

function Packages() {
  const [ruby, setRuby] = useState(false);
  const [sapphire, setSapphire] = useState(false);
  const [emerald, setEmerald] = useState(false);

  function ActSapphire() {
    setSapphire(!sapphire);
    setRuby(false);
    setEmerald(false);
  }
  function ActRuby() {
    setRuby(!ruby);
    setSapphire(false);
    setEmerald(false);
  }

  function ActEmerald() {
    setEmerald(!emerald);
    setRuby(false);
    setSapphire(false);
  }

  return (
    <div className="shadow-box">
      <h2 className="packs__header">OUR PACKAGES</h2>
      <div className="packs">
        <article
          onClick={() => ActSapphire()}
          className="packs__sub-cont sapphire"
        >
          <div className="packs__sub-head-cont">
            <h3 className="packs__sub-header">
            SAPPHIRE</h3>
            <h4 className="packs__discount">5% OFF</h4>
          </div>
          <div className="packs__sub-para-cont2">
            <div className="packs__inner-cata">
              <img className="packs__icons" src={guest} alt="icon of a guest" />
              <p className="packs__sub-sub-text">
                Select One <br /> (1)
              </p>
            </div>
            <div className="packs__inner-cata">
              <img className="packs__icons" src={table} alt="icon of a guest" />
              <p className="packs__sub-sub-text">
                Select One <br /> (1)
              </p>
            </div>
          </div>

          <p className="packs__tap-info">Tap for more info</p>
          <p className="packs__click-info">Click for more info</p>

        </article>
        <div className="package-info__mobile">
          {sapphire && <PackageInfo sapphire={sapphire} />}
        </div>
        <article onClick={() => ActRuby()} className="packs__sub-cont ruby">
          <div className="packs__sub-head-cont">
            <h3 className="packs__sub-header">RUBY</h3>
            <h4 className="packs__discount">10% OFF</h4>
          </div>
          <div className="packs__sub-para-cont2">
            <div className="packs__inner-cata">
              <img className="packs__icons" src={guest} alt="icon of a guest" />
              <p className="packs__sub-sub-text">
                Select Two <br /> (2)
              </p>
            </div>
            <div className="packs__inner-cata">
              <img className="packs__icons" src={table} alt="icon of a guest" />
              <p className="packs__sub-sub-text">
                Select Two <br /> (2)
              </p>
            </div>
            <div className="packs__inner-cata">
              <img className="packs__icons" src={room} alt="icon of a guest" />
              <p className="packs__sub-sub-text">
                Select One <br /> (1)
              </p>
            </div>
          </div>

          <p className="packs__tap-info">Tap for more info</p>
          <p className="packs__click-info">Click for more info</p>
        </article>
        <div className="package-info__mobile">
          {ruby && <PackageInfo ruby={ruby} />}
        </div>

        <article
          onClick={() => ActEmerald()}
          className="packs__sub-cont emerald"
        >
          <div className="packs__sub-head-cont">
            <h3 className="packs__sub-header">EMERALD</h3>
            <h4 className="packs__discount">15% OFF</h4>
          </div>
          <div className="packs__sub-para-cont2">
            <div className="packs__inner-cata">
              <img className="packs__icons" src={guest} alt="icon of a guest" />
              <p className="packs__sub-sub-text">
                Select Three <br /> (3)
              </p>
            </div>
            <div className="packs__inner-cata">
              <img className="packs__icons" src={table} alt="icon of a guest" />
              <p className="packs__sub-sub-text">
                Select Three <br /> (3)
              </p>
            </div>
            <div className="packs__inner-cata">
              <img className="packs__icons" src={room} alt="icon of a guest" />
              <p className="packs__sub-sub-text">
                Select Two <br /> (2)
              </p>
            </div>
          </div>
          
          <p className="packs__tap-info">Tap for more info</p>
          <p className="packs__click-info">Click for more info</p>

        </article>
        <div className="package-info__mobile">
          {emerald && <PackageInfo emerald={emerald} />}
        </div>

        <div className="package-info__tablet">
          {sapphire && <PackageInfo sapphire={sapphire} />}
          {ruby && <PackageInfo ruby={ruby} />}
          {emerald && <PackageInfo emerald={emerald} />}
        </div>

        <article className="packs__sub-cont diamond">
          <div className="packs__sub-head-cont">
            <h3 className="packs__sub-header">DIAMOND</h3>
            <h4 className="packs__discount">
              FULL CUSTOM <br /> DESIGN
            </h4>
          </div>
          <p className="packs__sub-para packs__sub-para--diamond">
            Bespoke package offering a fully customized experience. It includes
            three meetings: an initial consultation (in-person or virtual) to
            determine theme and products, a virtual meeting to review initial
            designs, and a in-person final virtual meeting for proof approval.{" "}
          </p>
        </article>
      </div>
    </div>
  );
}

export default Packages;
