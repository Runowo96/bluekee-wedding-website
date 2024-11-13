import React, { useState } from "react";
import "./Products.scss";
import ProductInfo from "../ProductInfo/ProductInfo";
import addIcon from "../../assets/icons/add-icon.svg";

function Products({ data, name, icon, cart, setCart }) {
  const [activeProductId, setActiveProductId] = useState(null); // Track the active product by ID

  const openProductInfo = (id) => {
    setActiveProductId(id); // Open ProductInfo for this specific product
  };

  const closeProductInfo = () => {
    setActiveProductId(null); // Close the currently open ProductInfo
  };

  const nextProduct = () => {
    const currentIndex = data.findIndex((item) => item.id === activeProductId);
    const nextIndex = (currentIndex + 1) % data.length;
    setActiveProductId(data[nextIndex].id);
  };
  const lastProduct = () => {
    const currentIndex = data.findIndex((item) => item.id === activeProductId);
    const lastIndex = (currentIndex - 1 + data.length) % data.length;
    setActiveProductId(data[lastIndex].id);
  };

  // Function to add an item to the cart
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { name: item.name, quantity: 1 }]);
    }
  };


  return (
    <div className="products__outer-cont">
      <div className="products__header-cont">
        <img className="products__icon-img" src={icon} alt="icon" />
        <h3 className="products__header">{name}</h3>
      </div>
      <p className="click-info">click on a product for more info</p>

      <div className="products">
        {data.map((item) => (
          <div key={item.id} className="products__cont">
            <img
              className="products__image"
              src={item.image}
              alt={item.name}
              onClick={() => openProductInfo(item.id)} // Open on image click
            />
            <h4 className="products__name">{item.name}</h4>
            <button onClick={()=>addToCart(item)} className="products__add">
              <img src={addIcon} alt="add icon" />
              <p>Add to Quote</p>
            </button>
            {activeProductId === item.id && (
              <section>
                <ProductInfo
                  data={item}
                  onNext={nextProduct}
                  onPrev={lastProduct}
                  onClose={closeProductInfo}
                  cart={cart}
                  setCart={setCart}
                  addToCart={addToCart}
                  addIcon={addIcon} // Only close when X button is clicked
                />
              </section>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
