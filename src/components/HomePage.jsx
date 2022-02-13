import Banner from "./Banner";
import Categories from "./Categories";
import Hero from "./Hero";
import Search from "./Search";

const HomePage = () => {
  return (
    <div>
      <Search />
      <Hero />
      <Banner />
      <Categories />
    </div>
  );
};

export default HomePage;
