import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Loading from "../loading/Loading";
import RecipeCard from "../recipeCard/RecipeCard";
import "./RecipesList.scss";

function RecipesList(data) {
  const recipeData = data.data.meals;

  if (!recipeData) {
    return <Loading />;
  } else {
    return (
      <section className="recipe-list">
        <div className="recipe-list__flex">
          <div className="recipe-list__container">
            {recipeData.map((recipeData) => (
              <Link to={`${recipeData.idMeal}`} key={recipeData.idMeal}>
                <RecipeCard
                  title={recipeData.strMeal}
                  thumbnail={recipeData.strMealThumb}
                  id={recipeData.idMeal}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default RecipesList;
