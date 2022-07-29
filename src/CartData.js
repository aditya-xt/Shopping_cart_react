import { connect } from "react-redux";
import { removeItems, removeAllSame } from "./Redux";

const CartData = (prop) => {
  return (
    <div className="box">
      <span role="img" className="productInfo" aria-label="product">
        {prop.emoji}
      </span>
      <div className="content">
        <p>Product name: {prop.name}</p>
        <p>Product price: {prop.price}</p>

        <button
          className="btn btn-products"
          onClick={() => prop.removeItem(prop.id, prop.price)}
        >
          Remove
        </button>
        <button
          className="btn btn-red"
          onClick={() => prop.removeSame(prop.id, prop.price)}
        >
          Remove All {prop.name}s
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id, price) => dispatch(removeItems(id, price)),
    removeSame: (id, price) => dispatch(removeAllSame(id, price))
  };
};

export default connect(null, mapDispatchToProps)(CartData);
