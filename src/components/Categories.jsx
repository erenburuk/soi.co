import styles from "./Categories.module.css";

function Categories({ categories, selectedCategory, setSelectedCategory }) {
  const handleCategoryClick = (type) => {
    if (selectedCategory === type) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(type);
    }
  };

  return (
    <div>
      <div className={styles.categories}>
        {categories.map((category) => (
          <button
            key={category.type}
            onClick={() => handleCategoryClick(category.type)}
            className={styles.item}
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
