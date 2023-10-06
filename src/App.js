import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/Page/signuppage/SignUp";
import HomePage from "./Pages/Page/homepage/HomePage";
import CategoryPage from "./Pages/Page/categorypage/CategoriesPage";
import RecipePage from "./Pages/Page/recipe-page/RecipePage";
import SearchByCountry from "./Pages/Page/filterbycountry/SearchByCountry";
import Login from "./Pages/Page/login/Login";
import CountryMeals from "./Pages/Page/countrymeals/CountryMeals";
import RandomRecipe from "./Pages/Page/randomrecipe/RandomRecipe";
import MealPlanner from "./Pages/Page/mealplanner/MealPlanner";
import Article from "./Pages/Page/articlepage/Article";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
          <Route
            path="/country"
            element={<SearchByCountry isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/country/:country"
            element={<CountryMeals isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/country/:country/:id"
            element={<RecipePage isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/:categories"
            element={<CategoryPage isLoggedIn={isLoggedIn} />}
          />
          <Route path=":categories/:id" element={<RecipePage />} />
          <Route
            path="/random"
            element={<RandomRecipe isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/planner"
            element={<MealPlanner isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/signup"
            element={<SignUpPage />}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
          <Route
            path="/login"
            element={
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />

          <Route
            path="/article/:id"
            element={<Article isLoggedIn={isLoggedIn} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
