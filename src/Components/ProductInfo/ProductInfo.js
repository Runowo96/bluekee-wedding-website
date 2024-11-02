import React from "react";
import "./ProductInfo.scss";
import backIcon from "../../assets/icons/back-icon.svg";
import prevIcon from "../../assets/icons/prev-icon.svg";
import nextIcon from "../../assets/icons/next-icon.svg";

function ProductInfo({ data, onNext, onClose, onPrev }) {
  let currentItem = data;
  return (
    <div className="info">
      <div className="info__cont">
        <button
          className="info__close-button"
          onClick={(e) => {
            e.stopPropagation(); // Prevent click from reaching parent
            onClose();
          }}
        >
       
          <img src={backIcon} alt="back arrow" />
        </button>

        <div>
          <img className="info__image" src={currentItem.image} alt={currentItem.name} />
        </div>
        <h3 className="info__product-name">{currentItem.name}</h3>
        <div className="info__sub-cont">
          <p className="info__sub-header">Materials:</p>
          <p className="info__sub-info">{currentItem.material}</p>
        </div>
        <div className="info__sub-cont">
          <p className="info__sub-header">Stains:</p>
          <p className="info__sub-info">{currentItem.stains}</p>
        </div>
        <div className="info__sub-cont">
          <p className="info__sub-header">Starting at:</p>
          <p className="info__sub-info">{currentItem.Starting_at}</p>
        </div>
        <div className="info__button-cont">
        <button className="info__button" onClick={onPrev}>
          <img src={prevIcon} alt="previous button icon" />
        </button>
        <button className="info__button" onClick={onNext}>
          <img src={nextIcon} alt="next button icon" />
        </button>

        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
