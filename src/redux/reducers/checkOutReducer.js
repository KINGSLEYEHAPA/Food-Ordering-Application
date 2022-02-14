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

  const searchItem = checkoutData.checkoutItems.find((item) => {
    return payload.productId === item.productId;
  });
  console.log(searchItem);

  switch (type) {
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
    case actionTypes.UPDATE_QUANTITY:
      const { productId, value } = payload;
      const index = state.checkoutItems.findIndex(
        (item) => item.productId === productId
      );
      const newArray = [...state.checkoutItems];
      newArray[index].itemQuantity = value;
      console.log(index);

      return { ...state, checkoutItems: newArray };

    default:
      return state;
  }
};
export default checkOutReducer;
