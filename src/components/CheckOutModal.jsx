import { useDispatch } from "react-redux";
import { actionTypes } from "../redux/action/actiontype";

const CheckOutModal = ({ cartIsEmpty, itemInCartState }) => {
  const itemInCart = itemInCartState.checkoutItems;
  console.log(itemInCart, itemInCartState);

  const dispatch = useDispatch();
  const totalAmountForEachItem = itemInCart.map((item) => {
    return item.itemQuantity * item.itemPrice;
  });

  const namesOfItemICart = itemInCart.map((item) => {
    return item.name;
  });
  let finalAmount = 0;
  totalAmountForEachItem.forEach((item) => {
    finalAmount += item;
  });

  console.log(totalAmountForEachItem, finalAmount, namesOfItemICart);

  return (
    <div className="checkout">
      <div className="checkout-header">
        <h2>Checkout Details</h2>
      </div>

      {itemInCart &&
        itemInCart.map((item, index) => {
          return (
            <div className="one-product" key={index}>
              <div className="checkout-image">
                <img src={item.image} alt="Product" />
              </div>
              <div className="product-name">{item.name}</div>
              <div className="product-price">${item.itemPrice.toFixed(2)}</div>
              <div className="quantity">
                Quantity:{" "}
                <span>
                  <input
                    type="number"
                    onChange={(event) => {
                      dispatch({
                        type: actionTypes.UPDATE_QUANTITY,
                        payload: {
                          value: event.target.value,
                          productId: item.productId,
                        },
                      });
                    }}
                    min="1"
                  />
                </span>
              </div>
              <div
                className="trash"
                onClick={(event) => {
                  dispatch({
                    type: actionTypes.DELETE_AN_ITEM_FROM_CART,
                    payload: {
                      value: event.target.value,
                      deleteId: item.productId,
                    },
                  });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          );
        })}

      {!cartIsEmpty && itemInCart.length > 0 ? (
        <div className="payment-tab">
          <h3>Total Amount of items on Cart </h3>{" "}
          <span className="total-payable"> ${finalAmount.toFixed(2)}</span>
          <button>Checkout</button>
        </div>
      ) : (
        <h2 className="empty">Your Cart is Empty!</h2>
      )}
    </div>
  );
};

export default CheckOutModal;
