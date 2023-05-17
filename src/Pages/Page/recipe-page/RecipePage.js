import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../Components/header/header";
import Footer from "../../../Components/footer/footer";
import { searchById } from "../../../utils";
import { useParams } from "react-router-dom";
import RecipeDirections from "../../../Components/recipes-individual/RecipeDirections";

function RecipePage(setBreakfast, setCalories, setLunch, setDinner, setSnack) {
  const [recipesData, setRecipesData] = useState();
  const recipeId = useParams();

  useEffect(() => {
    axios
      .get(`${searchById}${recipeId.id}`)
      .then((result) => {
        setRecipesData(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [recipeId]);

  if (!recipesData) {
    return "Loading";
  } else {
    return (
      <>
        <Header />
        <RecipeDirections
          data={recipesData}
          setBreakfast={setBreakfast}
          setCalories={setCalories}
          setLunch={setLunch}
          setDinner={setDinner}
          setSnack={setSnack}
        />
        <Footer />
      </>
    );
  }
}

export default RecipePage;
