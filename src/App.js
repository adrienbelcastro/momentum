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
import { useState } from "react";

//So When trying to update the state from the App.js. I am able to get the the state to update when I switch to the meal planner

function App() {
  // const [calories, setCalories] = useState();
  // const [breakfast, setBreakfast] = useState({});
  // const [lunch, setLunch] = useState({});
  // const [dinner, setDinner] = useState({});
  // const [snack, setSnack] = useState({});
  // const planner = JSON.parse(sessionStorage.getItem("planner"));
  // const totalCalories = JSON.parse(sessionStorage.getItem("planner.calories"));

  // planner={planner} - prop that needs to be passed down
  // const data = JSON.stringify({
  //   calories: {
  //     current: 0,
  //     total: 3000,
  //   },
  //   breakfast: [],
  //   lunch: [],
  //   dinner: [],
  //   snack: [],
  // });
  console.log(1);

  // !planner && sessionStorage.setItem("planner", data);
  console.log(breakfast);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country" element={<SearchByCountry />} />
          <Route path="/country/:country" element={<CountryMeals />} />
          <Route path="/country/:country/:id" element={<RecipePage />} />
          <Route path="/:categories" element={<CategoryPage />} />
          <Route
            path=":categories/:id"
            // element={
            //   <RecipePage
            //     setCalories={setCalories}
            //     setBreakfast={setBreakfast}
            //     setLunch={setLunch}
            //     setDinner={setDinner}
            //     setSnack={setSnack}
            //   />
            // }
          />
          <Route
            path="/random"
            // element={
            //   <RandomRecipe
            //     setCalories={setCalories}
            //     setBreakfast={setBreakfast}
            //     setLunch={setLunch}
            //     setDinner={setDinner}
            //     setSnack={setSnack}
            //   />
            // }
          />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route
            path="/planner"
            element={
              <MealPlanner
                breakfast={breakfast}
                lunch={lunch}
                dinner={dinner}
                snack={snack}
              />
          } /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
