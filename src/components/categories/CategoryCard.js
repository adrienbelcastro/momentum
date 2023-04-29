const CategoryCard = ({ title, description, thumbnail, id }) => {
  return (
    <div className="category-card">
      <div id={id} className="category-card__container">
        <div>
          <img className="category-card__thumbnail" src={thumbnail}></img>
          <h4 className="category-card__title">{title}</h4>
          <p className="category-card__description">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default CategoryCard;
