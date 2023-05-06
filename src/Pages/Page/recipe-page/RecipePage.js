import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../Components/header/header";
import Footer from "../../../Components/footer/footer";
import { searchById } from "../../../utils";
import { useParams } from "react-router-dom";
import RecipeDirections from "../../../Components/recipes-individual/RecipeDirections";

function RecipePage() {
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
  }, []);

  if (!recipesData) {
    return "Loading";
  } else {
    return (
      <>
        <Header />
        <RecipeDirections data={recipesData} />
        <Footer />
      </>
    );
  }
}

export default RecipePage;
