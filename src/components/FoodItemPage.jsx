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
                const filteredItems =
                  cartItem.length !== 0 &&
                  cartItem.filter((it) => {
                    return oneFoodItem.id === it.itemId;
                  });
                console.log(filteredItems);

                filteredItems.length > 0
                  ? setCartItem([...cartItem])
                  : setCartItem((prev) => [
                      ...prev,
                      {
                        name: oneFoodItem.dsc,
                        image: oneFoodItem.img,
                        itemPrice: oneFoodItem.price,
                        itemQuantity: 0,
                        productId: 0,
                        itemId: oneFoodItem.id,
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
    </div>
  );
};

export default FoodItemPage;
