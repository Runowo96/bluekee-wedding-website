import React from "react";
import "./CartIcon.scss";
import cartIcon from "../../assets/icons/cart-icon.svg";

function CartIcon({ cart, contactUsRef, scrollToSection }) {
  // Count the number of unique items in the cart
  const totalItems = cart.length;

  const handleItemClick = (sectionRef) => {
    scrollToSection(sectionRef);
  };

  return (
    <div onClick={() => handleItemClick(contactUsRef)} className="cart-icon__container">
      <img className="cart-icon__image" src={cartIcon} alt="Cart Icon" />
      {totalItems > 0 && <div className="cart-icon__count">{totalItems}</div>}
    </div>
  );
}

export default CartIcon;
