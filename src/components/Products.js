import { Outlet, useNavigate } from "react-router-dom";
import { products } from "../Inventory";
import ProductInfo from "../Product";

const Products = (prop) => {
  const navigate = useNavigate();

  const handleAdd = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="allProducts">
      {products.map((prd) => (
        <ProductInfo
          key={prd.id}
          id={prd.id}
          emoji={prd.emoji}
          name={prd.name}
          price={prd.price}
        />
      ))}
      <Outlet />
    </div>
  );
};

export default Products;
