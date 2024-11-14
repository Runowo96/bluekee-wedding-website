import React, { useEffect, useState } from "react";
import "./Products.scss";
import ProductInfo from "../ProductInfo/ProductInfo";
import addIcon from "../../assets/icons/add-icon.svg";
import deleteIcon from "../../assets/icons/delete-btn.svg";

function Products({
  data,
  name,
  icon,
  cart,
  setCart,
  removeFromCart,
  toggleCartItem,
}) {
  const [activeProductId, setActiveProductId] = useState(null);

  // UseEffect to sync cart state with localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const openProductInfo = (id) => {
    setActiveProductId(id);
  };

  const closeProductInfo = () => {
    setActiveProductId(null);
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

  // Function to add or remove an item from the cart
  // const toggleCartItem = (item) => {
  //   const itemInCart = cart.find((cartItem) => cartItem.name === item.name);
  //   const storedItems = JSON.parse(localStorage.getItem("cart")) || [];

  //   if (itemInCart) {
  //     // Remove item from cart
  //     removeFromCart(item);
  //     const updatedItems = storedItems.filter((id) => id !== item.id);
  //     setcart(updatedItems);
  //     localStorage.setItem("cart", JSON.stringify(updatedItems));
  //   } else {
  //     // Add item to cart
  //     setCart([...cart, { name: item.name, quantity: 1 }]);
  //     const updatedItems = [...storedItems, item.id];
  //     setcart(updatedItems);
  //     localStorage.setItem("cart", JSON.stringify(updatedItems));
  //   }
  // };

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
              onClick={() => openProductInfo(item.id)}
            />
            <h4 className="products__name">{item.name}</h4>

            <button
              onClick={() => toggleCartItem(item)}
              className={`products__add ${
                cart.some((cartItem) => cartItem.id === item.id) ? "added" : ""
              }`}
            >
              {cart.some((cartItem) => cartItem.id === item.id) ? (
                <img src={deleteIcon} alt="remove icon" />
              ) : (
                <img src={addIcon} alt="add icon" />
              )}
              <p>
                {cart.some((cartItem) => cartItem.id === item.id)
                  ? "Remove"
                  : "Add to Quote"}
              </p>
            </button>

            {activeProductId === item.id && (
              <section>
                <ProductInfo
                  cart={cart}
                  data={item}
                  onNext={nextProduct}
                  onPrev={lastProduct}
                  onClose={closeProductInfo}
                  setCart={setCart}
                  addIcon={addIcon}
                  deleteIcon={deleteIcon}
                  toggleCartItem={toggleCartItem}
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
