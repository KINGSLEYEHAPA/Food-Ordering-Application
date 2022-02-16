import Banner from "./Banner";
import Categories from "./Categories";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Banner />
      <Categories />
    </div>
  );
};

export default HomePage;
