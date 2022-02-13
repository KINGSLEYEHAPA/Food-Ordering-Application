import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Search from "./Search";

const Menu = () => {
  const data = useSelector((state) => state.product.data);
  const loadingState = useSelector((state) => state.product.isloading);
  console.log(data);
  return (
    <div className="menu">
      {" "}
      <h1>Menu</h1>
      <Search />
      <div className="food-container">
        {loadingState ? (
          <h2 className="load-state">Loading Menu....</h2>
        ) : (
          data.map((item) => {
            return (
              <Link to={`/menu/${item.id}`} className="foodie">
                <div className="food" key={item.id}>
                  <img src={item.img} alt="" />
                  <p className="state"> Available</p>
                  <h3>{item.dsc}</h3>
                  <div className="food-info">
                    <p className="price">{`$${item.price}.00`}</p>
                    <button>Add to Cart</button>{" "}
                  </div>
                  <p className="descrip">{item.name}</p>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Menu;
