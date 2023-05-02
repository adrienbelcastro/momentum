import CategoryCard from "./CategoryCard";
import "./CategoryGrid.scss";

function CategoryGrid(details) {
  const categoryList = details.categories.categories;

  return (
    <section className="category-list">
      <h1 className="category-list__title">DINE BY CATEGORIES</h1>
      <div className="category-list__container">
        {categoryList.map((categoryList) => (
          <CategoryCard
            key={categoryList.idCategory}
            title={categoryList.strCategory}
            thumbnail={categoryList.strCategoryThumb}
            id={categoryList.idCategory}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;
