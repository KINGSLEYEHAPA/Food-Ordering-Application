import { actionTypes } from "../action/actiontype";

const checkoutData = {
  checkoutItems: [],
  itemSold: [],

  checkOutModalIsOpen: false,
  cartEmpty: true,
  orderPlaced: false,
  checkOutButtonClicked: false,
  available: true,
  receiptButtonClicked: false,
};

const checkOutReducer = (state = checkoutData, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.PLACE_ORDER:
      return { ...state, checkoutItems: payload };
    case actionTypes.TOGGLE_CHECKOUT_MODAL:
      return {
        ...state,
        checkOutModalIsOpen: true,
      };
    case actionTypes.TOGGLE_CHECKOUT_MODAL_CLOSE:
      return {
        ...state,
        checkOutModalIsOpen: false,
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        checkoutItems: payload,
        cartEmpty: false,
      };

    default:
      return state;
  }
};
export default checkOutReducer;
