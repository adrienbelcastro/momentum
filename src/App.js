import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/Page/SignUp";
import HomePage from "./Pages/Page/homepage/HomePage";
import CategoryPage from "./Pages/Page/categorypage/CategoriesPage";
import RecipePage from "./Pages/Page/recipe-page/RecipePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:categories" element={<CategoryPage />} />
          <Route path=":categories/:id" element={<RecipePage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
