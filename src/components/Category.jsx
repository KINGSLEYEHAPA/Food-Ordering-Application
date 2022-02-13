import { Link, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const Category = () => {
  let params = useParams();
  const catLink = params.categoryId;
  console.log(catLink);

  const [data, loading, error] = useFetch(
    `https://ig-food-menus.herokuapp.com/${catLink}`
  );

  return (
    <div className="category-section">
      <h1>{catLink}</h1>
      <div className="category">
        {loading ? (
          <h2 className="category-load">Loading your Food...</h2>
        ) : (
          data &&
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
      {error && <h2 className="error">Network Error:{error}</h2>}
    </div>
  );
};

export default Category;
