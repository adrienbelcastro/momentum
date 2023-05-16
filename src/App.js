import "./App.scss";
import MealPlanner from "./Pages/Page/mealplanner/MealPlanner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/Page/signuppage/SignUp";
import HomePage from "./Pages/Page/homepage/HomePage";
import CategoryPage from "./Pages/Page/categorypage/CategoriesPage";
import RecipePage from "./Pages/Page/recipe-page/RecipePage";
import SearchByCountry from "./Pages/Page/filterbycountry/SearchByCountry";
import LoginPage from "./Pages/Page/loginpage/LoginPage";
import CountryMeals from "./Pages/Page/countrymeals/CountryMeals";
import RandomRecipe from "./Pages/Page/randomrecipe/RandomRecipe";

function App() {
  const planner = JSON.parse(sessionStorage.getItem("planner"));
  const totalCalories = JSON.parse(sessionStorage.getItem("planner.calories"));

  const data = JSON.stringify({
    calories: {
      current: 0,
      total: 3000,
    },
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
  });

  !planner && sessionStorage.setItem("planner", data);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country" element={<SearchByCountry />} />
          <Route path="/country/:country" element={<CountryMeals />} />
          <Route path="/country/:country/:id" element={<RecipePage />} />
          <Route path="/:categories" element={<CategoryPage />} />
          <Route path=":categories/:id" element={<RecipePage />} />
          <Route path="/random" element={<RandomRecipe />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/planner" element={<MealPlanner planner={planner} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
