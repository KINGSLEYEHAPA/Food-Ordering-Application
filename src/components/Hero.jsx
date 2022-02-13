import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero">
        <div className="main-title">
          <h1 className="">
            <span className="logo logo-title">
              Kay-<span>Foods</span>
            </span>{" "}
            is Home to Delicious Meals.
          </h1>
          <p>
            Hungry? Check out our Menu and place your{" "}
            <Link to="/menu" className="title-order ">
              {" "}
              Order Now!
            </Link>
          </p>
        </div>
      </div>
      <div>
        <img
          className="main-image"
          src="https://source.unsplash.com/1600x900/?food"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
