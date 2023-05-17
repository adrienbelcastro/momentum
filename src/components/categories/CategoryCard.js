import "./CategoryCard.scss";

const CategoryCard = ({ title, description, thumbnail, id }) => {
  return (
    <div className="category-card">
      <div id={id} className="category-card__container">
        <div className="category-card__thumbnail-container">
          <img className="category-card__thumbnail" src={thumbnail}></img>
        </div>
        <h4 className="category-card__title">{title}</h4>
      </div>
    </div>
  );
};
export default CategoryCard;
