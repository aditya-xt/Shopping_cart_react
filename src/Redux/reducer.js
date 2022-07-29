import { actionNames as an } from "./actionNames";
import { cartItems } from "./cartState";

export const storeReducer = (state = cartItems, action) => {
  switch (action.type) {
    case an.ADD_ITME:
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.price
      };

    case an.REMOVE_ITEM:
      const index = state.items.indexOf(action.payload);
      const newArr = [...state.items];
      newArr.splice(index, 1);
      const price = parseInt(action.price);
      return {
        ...state,
        items: [...newArr],
        total: state.total - price
      };

    case an.REMOVE_SAME:
      const newArr1 = state.items.filter(
        (data) => data != parseInt(action.payload)
      );
      const price1 =
        parseInt(action.price) * (state.items.length - newArr1.length);
      return {
        ...state,
        items: [...newArr1],
        total: state.total - price1
      };

    case an.REMOVE_ALL:
      return {
        ...state,
        items: [],
        total: 0
      };

    default:
      return state;
  }
};
