import { useSelector, useDispatch } from "react-redux";

const CheckOutModal = () => {
  const cartIsEmpty = useSelector((state) => state.checkOut.flags.cartEmpty);
  const itemInCart = useSelector((state) => state.checkOut.flags.checkOutItems);
  console.log(cartIsEmpty);
  console.log(itemInCart);

  return (
    <div className="checkout">
      <div className="checkout-header">
        <h2>Checkout Details</h2>
      </div>
      <div className="one-product">
        <div className="checkout-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8py0vG304xVLQUwG5z6awMI-PXSKxbv6GTQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className="product-name">Beautiful Cake from customs place</div>
        <div className="product-price">$25.00</div>
        <div className="quantity">
          Quantity:{" "}
          <span>
            <input type="number" min="1" />
          </span>
        </div>
        <div className="trash">
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
      <div className="one-product">
        <div className="checkout-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8py0vG304xVLQUwG5z6awMI-PXSKxbv6GTQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className="product-name">Beautiful Cake from customs place</div>
        <div className="product-price">$25.00</div>
        <div className="quantity">
          Quantity:{" "}
          <span>
            {" "}
            <input type="number" />
          </span>
        </div>
        <div className="trash">
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
      <div className="one-product">
        <div className="checkout-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8py0vG304xVLQUwG5z6awMI-PXSKxbv6GTQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className="product-name">Beautiful Cake from customs place</div>
        <div className="product-price">$25.00</div>
        <div className="quantity">
          Quantity:{" "}
          <span>
            {" "}
            <input type="number" />
          </span>
        </div>
        <div className="trash">
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
      <div className="one-product">
        <div className="checkout-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8py0vG304xVLQUwG5z6awMI-PXSKxbv6GTQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className="product-name">Beautiful Cake from customs place</div>
        <div className="product-price">$25.00</div>
        <div className="quantity">
          Quantity:{" "}
          <span>
            {" "}
            <input type="number" />
          </span>
        </div>
        <div className="trash">
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
      <div className="one-product">
        <div className="checkout-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8py0vG304xVLQUwG5z6awMI-PXSKxbv6GTQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className="product-name">Beautiful Cake from customs place</div>
        <div className="product-price">$25.00</div>
        <div className="quantity">
          Quantity:{" "}
          <span>
            {" "}
            <input type="number" />
          </span>
        </div>
        <div className="trash">
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
      {false ? (
        <div className="payment-tab">
          <h3>Total Amount of items on Cart </h3>{" "}
          <span className="total-payable"> $0.00</span>
          <button>Checkout</button>
        </div>
      ) : (
        <h2 className="empty">Your Cart is Empty!</h2>
      )}
    </div>
  );
};

export default CheckOutModal;
