import React from "react";
import "./ProductLines.scss";
import Products from "../Products/Products";
import guestData from "../../data/guest-product-data.json";
import tableData from "../../data/table-product-data.json";
import roomData from "../../data/room-product-data.json";
import guestIcon from "../../assets/icons/guest-icon-black.svg";
import tableIcon from "../../assets/icons/table-icon-black.svg";
import roomIcon from "../../assets/icons/room-icon-black.svg";

function ProductLines({
  cart,
  setCart,
  addedItems,
  setAddedItems,
  removeFromCart,
  toggleCartItem,
}) {
  const guest = "FOR THE GUESTS";
  const table = "FOR THE TABLE";
  const room = "FOR THE ROOM";
  return (
    <div className="product-line-cont">
      <h2 className="header">A LA CARTE</h2>
      <Products
        toggleCartItem={toggleCartItem}
        cart={cart}
        setCart={setCart}
        data={guestData}
        name={guest}
        icon={guestIcon}
      />{" "}
      <Products
        toggleCartItem={toggleCartItem}
        cart={cart}
        setCart={setCart}
        data={tableData}
        name={table}
        icon={tableIcon}
      />
      <Products
        toggleCartItem={toggleCartItem}
        cart={cart}
        setCart={setCart}
        data={roomData}
        name={room}
        icon={roomIcon}
      />
    </div>
  );
}

export default ProductLines;
