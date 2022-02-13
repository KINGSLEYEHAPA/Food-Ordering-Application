import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionTypes } from "../redux/action/actiontype";
import Search from "./Search";

const Menu = () => {
  const data = useSelector((state) => state.product.data);
  const loadingState = useSelector((state) => state.product.isloading);
  const [cartItem, setCartItem] = useState([]);
  console.log(data);
  console.log(cartItem);
  const dispatch = useDispatch();
  cartItem && dispatch({ type: actionTypes.ADD_TO_CART, payload: cartItem });

  return (
    <div className="menu">
      {" "}
      <h1>Menu</h1>
      <Search />
      <div className="food-container">
        {loadingState ? (
          <h2 className="load-state">Loading Menu....</h2>
        ) : (
          data.map((item, index) => {
            return (
              <div key={index} className="food">
                <Link to={`/menu/${item.id}`} className="foodie">
                  <div>
                    <img src={item.img} alt="" />
                    <p className="state"> Available</p>
                    <h3>{item.dsc}</h3>
                    <div className="food-info">
                      <p className="price">{`$${item.price}.00`}</p>
                    </div>

                    <p className="descrip">{item.name}</p>
                  </div>
                </Link>
                <button
                  onClick={() => {
                    setCartItem((prev) => [
                      ...prev,
                      {
                        name: item.dsc,
                        image: item.img,
                        itemPrice: item.price,
                      },
                    ]);
                  }}
                >
                  Add to Cart
                </button>{" "}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Menu;
