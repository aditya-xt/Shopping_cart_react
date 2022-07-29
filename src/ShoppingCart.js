import "./styles.css";
import { Outlet, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

function ShoppingCart(props) {
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="box flex">
        <h1 className="display">Demo for Shopping Cart</h1>
        <div className="display align-r">
          <p>Total items in the cart: {props.cartLength}</p>
          <p>Total price: {props.cartTotal}</p>
        </div>
      </div>

      <div>
        <button
          className="btn btn-products"
          onClick={() => {
            navigate("/products");
          }}
        >
          Products
        </button>
        <button className="btn btn-cart" onClick={() => navigate("/cart")}>
          Cart
        </button>
      </div>
      <Outlet />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartLength: state.items.length,
    cartTotal: state.total
  };
};

export default connect(mapStateToProps)(ShoppingCart);
