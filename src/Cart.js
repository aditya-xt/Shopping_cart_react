import { connect } from "react-redux";
import CartData from "./CartData";
import { removeAllItems } from "./Redux";
import { getProduct } from "./Inventory";

const Cart = (prop) => {
  return (
    <div>
      <div className="allProducts">
        {prop.cartItem.map((prd, index) => {
          const val = getProduct(prd);
          return (
            <CartData
              key={index}
              id={val.id}
              emoji={val.emoji}
              name={val.name}
              price={val.price}
            />
          );
        })}
      </div>
      {prop.cartItem.length > 0 ? (
        <button className="btn btn-rm-all" onClick={prop.removeAll}>
          Remove All
        </button>
      ) : (
        <h2 className="item-center">Cart is Empty</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItem: state.items
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeAll: () => dispatch(removeAllItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
