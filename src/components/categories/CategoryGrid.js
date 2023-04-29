import CategoryCard from "./CategoryCard";

function CategoryGrid(details) {
  const categoryList = details.categories.categories;
  console.log(categoryList);
  return (
    <section className="category-list">
      <h4 className="category-list__title">Categories</h4>
      {categoryList.map((categoryList) => (
        <CategoryCard
          key={categoryList.idCategory}
          title={categoryList.strCategory}
          thumbnail={categoryList.strCategoryThumb}
          description={categoryList.strCategorydescription}
          id={categoryList.idCategory}
        />
      ))}
    </section>
  );
}

export default CategoryGrid;
