import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Categories from "./Categories";
import Category from "./Category";
import FoodItemPage from "./FoodItemPage";
import HomePage from "./HomePage";
import Menu from "./Menu";
import store from "../redux/store";

const ApplicationsRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:foodId" element={<FoodItemPage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:categoryId" element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default ApplicationsRoutes;
