import React, { useState } from "react";
import "./Products.scss";
import ProductInfo from "../ProductInfo/ProductInfo";

function Products({ data, name }) {
  const [activeProductId, setActiveProductId] = useState(null); // Track the active product by ID

  const openProductInfo = (id) => {
    setActiveProductId(id); // Open ProductInfo for this specific product
  };

  const closeProductInfo = () => {
    setActiveProductId(null); // Close the currently open ProductInfo
  };

  const nextProduct = () => {
    const currentIndex = data.findIndex(item => item.id === activeProductId);
    const nextIndex = (currentIndex + 1) % data.length;
    setActiveProductId(data[nextIndex].id);
  };
  const lastProduct = () => {
    const currentIndex = data.findIndex(item => item.id === activeProductId);
    const lastIndex = (currentIndex - 1 + data.length) % data.length;
    setActiveProductId(data[lastIndex].id);
  };


  return (
    <div className="products__outer-cont">
      <h3 className="products__header">{name}</h3>
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
            {activeProductId === item.id && (
              <section>
                <ProductInfo 
                  data={item} 
                  onNext={nextProduct} 
                  onPrev={lastProduct}
                  onClose={closeProductInfo} // Only close when X button is clicked
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