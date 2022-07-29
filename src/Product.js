import React from "react";
import { useNavigate } from "react-router-dom";

const ProductInfo = (prop) => {
  const navigate = useNavigate();

  const handleAdd = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="box">
      <span role="img" className="productInfo" aria-label="product">
        {prop.emoji}
      </span>
      <div className="content">
        <p>Product name: {prop.name}</p>
        <p>Product price: {prop.price}</p>

        <button className="btn btn-add" onClick={() => handleAdd(prop.id)}>
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
