import React from "react";
import "./Products.scss";

function Products({ data, name }) {
  return (
    <div className="products__outer-cont">
          <h3 className="products__header">{name}</h3>

            <div className="products">
      {data.map((data) => (
        <div key={data.id} className="products__cont">
          <img className="products__image" src={data.image} alt={data.name} />
          <h4 className="products__name">{data.name}</h4>
        </div>
      ))}
    </div>
    </div>

  );
}

export default Products;
