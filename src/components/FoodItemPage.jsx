import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionTypes } from "../redux/action/actiontype";

const FoodItemPage = () => {
  const params = useParams();
  const [cartItem, setCartItem] = useState([]);

  const data = useSelector((state) => state.product.data);

  let getFood = (no) => {
    return data && data.find((item) => item.id === no);
  };

  const oneFoodItem = getFood(params.foodId);

  const dispatch = useDispatch();
  cartItem && dispatch({ type: actionTypes.ADD_TO_CART, payload: cartItem });
  return (
    <div className="fooditem-section">
      <div className="fooditem">
        <div className="fooditem-image">
          {" "}
          <img src={oneFoodItem.img} alt="" />{" "}
        </div>
        <div className="fooditem-details">
          {" "}
          <h2>{oneFoodItem.dsc}</h2>
          <div className="food-info2">
            <p className="price2">{`$${oneFoodItem.price}.00`}</p>
            <button
              onClick={() => {
                setCartItem((prev) => [
                  ...prev,
                  {
                    name: oneFoodItem.dsc,
                    image: oneFoodItem.img,
                    itemPrice: oneFoodItem.price,
                    itemQuantity: 1,
                    productId: oneFoodItem.id,
                  },
                ]);
              }}
            >
              Add to Cart
            </button>{" "}
          </div>
          <p className="descrip2">{oneFoodItem.name}</p>
          <p className="details">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
            necessitatibus? Non corporis ea iusto rem modi. Amet velit quia
            incidunt dolor placeat. Provident, magni numquam?
          </p>
        </div>
      </div>
      <div className="cta1 color-change-3x">
        <h1>Fast Delivery</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>{" "}
      </div>
    </div>
  );
};

export default FoodItemPage;
