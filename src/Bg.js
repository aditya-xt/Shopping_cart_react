import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "./Inventory";
import { addItem } from "./Redux";

const Bg = (prop) => {
  const id = useParams();
  const prod = getProduct(parseInt(id.productId));
  let mount = false;

  useEffect(() => {
    if (!mount) {
      prop.addItem(prod.id, prod.price);
      console.log("i fire once");
      mount = true;
    }
  });

  return <div></div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (id, price) => dispatch(addItem(id, price))
  };
};

export default connect(null, mapDispatchToProps)(Bg);
