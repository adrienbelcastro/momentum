import Header from "../../../Components/header/header";
import Footer from "../../../Components/footer/footer";

import axios from "axios";
import { searchByCategory } from "../../../utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipesList from "../../../Components/recipesList/RecipesList";
import "./CategoriesPage.scss";

function CategoriesPage() {
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
  }, []);

  if (!recipes || !categoryDetails) {
    return "Loading";
  } else {
    return (
      <>
        <Header recipes={recipes} />
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
