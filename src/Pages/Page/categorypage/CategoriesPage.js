import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";

import axios from "axios";
import { searchByCategory } from "../../../utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipesList from "../../../components/recipesList/RecipesList";
import "./CategoriesPage.scss";

function CategoriesPage({ isLoggedIn }) {
  const [recipes, setRecipes] = useState();

  const categories = useParams();

  useEffect(() => {
    axios
      .get(`${searchByCategory}${categories.categories}`)
      .then((result) => {
        setRecipes(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categories.categories]);

  if (!recipes) {
    return "Loading";
  } else {
    return (
      <>
        <Header isLoggedIn={isLoggedIn} />
        <section className="page">
          <h1 className="page__title">{categories.categories} Recipes</h1>
        </section>
        <RecipesList data={recipes} />
        <Footer />
      </>
    );
  }
}

export default CategoriesPage;
