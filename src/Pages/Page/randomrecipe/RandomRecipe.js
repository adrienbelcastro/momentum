import { randomMealUrl } from "../../../utils";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import RecipeDirections from "../../../components/recipes-individual/RecipeDirections";
import Loading from "../../../components/loading/Loading";

function RandomRecipe({ isLoggedIn }) {
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
    return <Loading />;
  } else {
    return (
      <>
        <Header isLoggedIn={isLoggedIn} />
        <RecipeDirections data={randomRecipe} />
        <Footer />
      </>
    );
  }
}

export default RandomRecipe;
