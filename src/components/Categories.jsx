import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories-section">
      <h1>Categories</h1>
      <div className="categories">
        <Link to="/category/burgers" className="categories-card">
          <div className="food-group">
            <img
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="burgers  "
            />

            <h3>Burgers</h3>
          </div>
        </Link>
        <Link to="/category/breads" className="categories-card">
          <div className="food-group">
            <img
              src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325351/whole-grain-artisan-bread-on-chopping-board.jpg"
              alt="breads"
            />

            <h3>Breads</h3>
          </div>
        </Link>
        <Link to="/category/chocolates" className="categories-card">
          <div className="food-group">
            <img
              src="https://media.istockphoto.com/photos/chocolates-and-love-picture-id183269671"
              alt="chocolates"
            />

            <h3>Chocolates</h3>
          </div>
        </Link>
        <Link to="/category/desserts" className="categories-card">
          <div className="food-group">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YvdWlYbIriTJ0bAjIyQaP7YS1suCUTqCOA&usqp=CAU"
              alt="desserts"
            />

            <h3>Desserts</h3>
          </div>
        </Link>
        <Link to="/category/drinks" className="categories-card">
          <div className="food-group">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzTdRw9Reuq51eN-mWDQA9_8RNG4t5Jud1Uw&usqp=CAU"
              alt="drinks"
            />

            <h3>Drinks</h3>
          </div>
        </Link>
        <Link to="/category/fried-chicken" className="categories-card">
          <div className="food-group">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTxHPLiT6INYTi6G0541NKQuL9P4zHFpgZQ&usqp=CAU"
              alt="chickens"
            />

            <h3>Fried Chicken</h3>
          </div>
        </Link>
        <Link to="/category/ice-cream" className="categories-card">
          <div className="food-group">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuktw7wuVxxQAx4V-HvTqtdUx4VAF7A6ujKA&usqp=CAU"
              alt="ice-cream"
            />

            <h3>Ice-cream</h3>
          </div>
        </Link>
        <Link to="/category/pizzas" className="categories-card">
          <div className="food-group">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOHm6ZLB4bWNtBV9iLvfaVcFZa6vgHtVEsQ&usqp=CAU"
              alt="pizza"
            />

            <h3>Pizzas</h3>
          </div>
        </Link>
        <Link to="/category/steaks" className="categories-card">
          <div className="food-group">
            <img
              src="https://www.simplyrecipes.com/thmb/1hmyUkys-A0e4AHYAtd1bYQVHEc=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__06__Grilled-Flank-Steak-LEAD-1-93743d42c7cc48fca120140a0da38673.jpg"
              alt="steak"
            />

            <h3>Steak</h3>
          </div>
        </Link>
        <Link to="/category/sausages" className="categories-card">
          <div className="food-group">
            <img
              src="https://static.toiimg.com/photo/75698037.cms"
              alt="sausages"
            />

            <h3>Sausages</h3>
          </div>
        </Link>
        <Link to="/category/bbqs" className="categories-card">
          <div className="food-group">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22czksoaVmA8vN7pWQ_RqvT6kXUsfEWC1mw&usqp=CAU"
              alt="bbq"
            />

            <h3>Bbqs</h3>
          </div>
        </Link>
        <Link to="/category/sandwiches" className="categories-card">
          <div className="food-group">
            <img
              src="https://insanelygoodrecipes.com/wp-content/uploads/2021/03/Homemade-Grilled-Cheese-Sandwich-with-Tomatoes.png"
              alt="sandwiches"
            />

            <h3>Sandwiches</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
