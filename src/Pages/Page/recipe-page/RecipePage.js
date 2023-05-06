import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../Components/header/header";
import Footer from "../../../Components/footer/footer";
import { searchById } from "../../../utils";
import { useParams } from "react-router-dom";

function RecipePage() {
  const [recipes, setRecipes] = useState();
  const recipeId = useParams();

  useEffect(() => {
    axios
      .get(`${searchById}${recipeId.id}`)
      .then((result) => {
        console.log(result.data);
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

        <Footer />
      </>
    );
  }
}

export default RecipePage;
