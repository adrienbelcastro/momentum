import Header from "../../../Components/header/header";
import Footer from "../../../Components/footer/footer";

import axios from "axios";
import { searchByCategory } from "../../../utils";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import RecipesList from "../../../Components/recipesList/RecipesList";

function CategoriesPage() {
  const [recipes, setRecipes] = useState();

  const ingredients = useParams();
  const categoryDetails = useLocation();
  const heroTitle = categoryDetails.state.state.strCategory;
  const heroThumb = categoryDetails.state.state.strCategoryThumb;

  useEffect(() => {
    axios
      .get(`${searchByCategory}${ingredients.ingredients}`)
      .then((result) => {
        setRecipes(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!recipes) {
    return "Loading";
  } else {
    return (
      <>
        <Header />
        <RecipesList recipes={recipes} title={heroTitle} thumb={heroThumb} />
        <Footer />
      </>
    );
  }
}

export default CategoriesPage;
