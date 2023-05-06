import "./RecipeCard.scss";

function RecipeCard({ id, title, thumbnail }) {
  return (
    <div className="recipe-card">
      <div id={id} className="recipe-card__container">
        <div className="recipe-card__thumbnail-container">
          <img className="recipe-card__thumbnail" src={thumbnail}></img>
        </div>
        <div className="recipe-card__content-container">
          <h4 className="recipe-card__category"></h4>
          <h4 className="recipe-card__title">{title}</h4>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
