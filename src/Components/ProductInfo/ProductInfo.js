import React from "react";
import "./ProductInfo.scss";
import backIcon from "../../assets/icons/close-icon.svg";
import prevIcon from "../../assets/icons/prev-icon.svg";
import nextIcon from "../../assets/icons/next-icon.svg";

function ProductInfo({ data, onNext, onClose, onPrev, addToCart, addIcon }) {
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
          <img className="info__close-icon" src={backIcon} alt="back arrow" />
     
        </button>
        <div className="info__outer-sub-cont">
          <img
            className="info__image"
            src={currentItem.image}
            alt={currentItem.name}
          />
          <div className="info__right-desktop-comp">
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
            <button onClick={()=>addToCart(currentItem)} className="products__add">
              <img src={addIcon} alt="add icon" />
              <p>Add to Quote</p>
            </button>
          </div>
        </div>

        <div className="info__button-cont">
          <button className="info__button info__btn-left" onClick={onPrev}>
            <img
              className="info__toggle-icons"
              src={prevIcon}
              alt="previous button icon"
            />
          </button>
          <button className="info__button info__btn-right" onClick={onNext}>
            <img
              className="info__toggle-icons"
              src={nextIcon}
              alt="next button icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
