import { mealsByCountryUrl } from "../../../utils";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../../Components/header/header";
import Footer from "../../../Components/footer/footer";
import { useParams } from "react-router-dom";
import RecipeList from "../../../Components/recipesList/RecipesList";

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
  }, []);

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
