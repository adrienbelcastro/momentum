import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./RecipeDirections.scss";
function RecipeDirections({ data }) {
  const recipeData = data.meals[0];
  const { strIngredient1, strIngredient2, ...strIngredient20 } = recipeData;

  return (
    <div className="recipe-directions">
      <Link to={`/${recipeData.strCategory}`}>
        <div className="recipe-directions__back-arrow">
          <AiOutlineArrowLeft className="" />
        </div>
      </Link>
      <div className="recipe-directions__container">
        <h4 className="recipe-directions__category">
          {recipeData.strCategory}
        </h4>
        <h1 className="recipe-directions__title">{recipeData.strMeal}</h1>
        <img
          className="recipe-directions__thumbnail"
          src={recipeData.strMealThumb}
          alt="Thumbnail Image"
        ></img>
        <h3 className="recipe-directions__ingredients-title">Ingredients</h3>
        <div className="recipe-directions__ingredients-container">
          <div className="recipe-directions__ingredients-content">
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient1}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient2}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient3}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient4}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient5}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient6}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient7}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient8}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient9}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient10}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient11}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient12}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient13}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient14}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient15}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient16}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient17}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient18}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient19}
            </h4>
            <h4 className="recipe-directions__ingredients">
              {recipeData.strIngredient20}
            </h4>
          </div>
          <div className="recipe-directions__measurements-container">
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure1}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure2}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure3}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure4}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure5}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure6}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure7}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure8}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure9}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure10}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure11}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure12}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure13}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure14}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure15}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure16}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure17}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure18}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure19}
            </h4>
            <h4 className="recipe-directions__measurements">
              {recipeData.strMeasure20}
            </h4>
          </div>
        </div>
        <div className="recipe-directions__instructions-container">
          <h4 className="recipe-directions__instructions-title">
            Instructions
          </h4>
          <p className="recipe-directions__instructions">
            {recipeData.strInstructions}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDirections;
