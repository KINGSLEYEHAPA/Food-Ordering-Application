import { actionTypes } from "../action/actiontype";

const checkoutData = {
  data: [],
  flags: {
    isLoading: false,
    checkOutModalIsOpen: false,
    cartEmpty: true,
    orderPlaced: false,
    checkOut: false,
    available: true,
  },
};

const checkOutReducer = (state = checkoutData, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.PLACE_ORDER:
      return { ...state, data: payload };
    case actionTypes.TOGGLE_CHECKOUT_MODAL:
      return {
        ...state,
        flags: { checkOutModalIsOpen: true },
      };
    case actionTypes.TOGGLE_CHECKOUT_MODAL_CLOSE:
      return {
        ...state,
        flags: { checkOutModalIsOpen: false },
      };

    default:
      return state;
  }
};
export default checkOutReducer;
