import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/Page/signuppage/SignUp";
import HomePage from "./Pages/Page/homepage/HomePage";
import CategoryPage from "./Pages/Page/categorypage/CategoriesPage";
import RecipePage from "./Pages/Page/recipe-page/RecipePage";
import SearchByCountry from "./Pages/Page/filterbycountry/SearchByCountry";
import LoginPage from "./Pages/Page/loginpage/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country" element={<SearchByCountry />} />
          <Route path="/:categories" element={<CategoryPage />} />
          <Route path=":categories/:id" element={<RecipePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
