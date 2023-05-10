import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import RecipeCard from "../recipecard/RecipeCard";
import "./RecipesList.scss";

function RecipesList(data) {
  const recipeData = data.data.meals;

  return (
    <section className="recipe-list">
      <Link to={`/country`}>
        <div className="recipe-directions__back-arrow">
          <AiOutlineArrowLeft className="" />
        </div>
      </Link>
      <div className="recipe-list__container">
        {recipeData.map((recipeData) => (
          <Link to={`${recipeData.idMeal}`}>
            <RecipeCard
              key={recipeData.idMeal}
              title={recipeData.strMeal}
              thumbnail={recipeData.strMealThumb}
              id={recipeData.idMeal}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RecipesList;
