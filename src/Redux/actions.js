import { actionNames as an } from "./actionNames";

export const addItem = (id, price) => {
  return {
    type: an.ADD_ITME,
    payload: id,
    price: price
  };
};

export const removeItems = (id, price) => {
  return {
    type: an.REMOVE_ITEM,
    payload: id,
    price: price
  };
};

export const removeAllItems = () => {
  return {
    type: an.REMOVE_ALL
  };
};

export const removeAllSame = (id, price) => {
  return {
    type: an.REMOVE_SAME,
    payload: id,
    price: price
  };
};

export const fetchAllProduct = () => {
  return {
    type: "FETCH_ALL"
  };
};
