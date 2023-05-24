import { mealsByCountryUrl } from "../../../utils";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import { useParams } from "react-router-dom";
import RecipeList from "../../../components/recipesList/RecipesList";

function CountryResults() {
  const [recipes, setRecipes] = useState();
  const country = useParams();

  useEffect(() => {
    axios
      .get(`${mealsByCountryUrl}${country.country}`)
      .then((result) => {
        setRecipes(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [country.country]);

  if (!recipes) {
    return "Loading";
  } else {
    return (
      <>
        <Header />
        <RecipeList data={recipes} />
        <Footer />
      </>
    );
  }
}

export default CountryResults;
