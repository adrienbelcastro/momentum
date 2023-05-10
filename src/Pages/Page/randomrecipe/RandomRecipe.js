import { randomMealUrl } from "../../../utils";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../../Components/header/header";
import Footer from "../../../Components/footer/footer";
import RecipeDirections from "../../../Components/recipes-individual/RecipeDirections";

function RandomRecipe() {
  const [randomRecipe, setRandomRecipe] = useState();

  useEffect(() => {
    axios
      .get(`${randomMealUrl}`)
      .then((result) => {
        setRandomRecipe(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!randomRecipe) {
    return "Loading";
  } else {
    return (
      <>
        <Header />
        <RecipeDirections data={randomRecipe} />
        <Footer />
      </>
    );
  }
}

export default RandomRecipe;
