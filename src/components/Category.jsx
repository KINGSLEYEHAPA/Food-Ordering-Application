import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { actionTypes } from "../redux/action/actiontype";
import useFetch from "../useFetch";

const Category = () => {
  let params = useParams();
  const catLink = params.categoryId;
  console.log(catLink);
  const itemInCart = useSelector((state) => state.checkOut.checkOutItems);
  console.log(itemInCart);
  const [cartItem, setCartItem] = useState([]);
  console.log(cartItem);

  const [data, loading, error] = useFetch(
    `https://ig-food-menus.herokuapp.com/${catLink}`
  );

  const dispatch = useDispatch();
  cartItem && dispatch({ type: actionTypes.ADD_TO_CART, payload: cartItem });

  return (
    <div className="category-section">
      <h1>{catLink}</h1>
      <div className="category">
        {loading ? (
          <h2 className="category-load">Loading your Food...</h2>
        ) : (
          data &&
          data.map((item, index) => {
            return (
              <div className="food" key={index}>
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
                        itemQuantity: 1,
                        productId: index,
                      },
                    ]);
                  }}
                >
                  {" "}
                  Add to Cart
                </button>{" "}
              </div>
            );
          })
        )}
      </div>
      {error && <h2 className="error">Network Error:{error}</h2>}
    </div>
  );
};

export default Category;
