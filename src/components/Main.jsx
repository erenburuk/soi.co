import React from "react";
import styles from "./Main.module.css";
import List from "./List";
import Categories from "./Categories";

const Main = ({ data, language, selectedCategory, setSelectedCategory }) => {
  const { categories, products } = data;

  const categoriesList =
    language === "TR" ? categories.categories_tr : categories.categories_en;

  return (
    <main>
      <Categories
        categories={categoriesList}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <List
        selectedCategory={selectedCategory}
        products={products}
        language={language}
        categories={categoriesList}
      />
    </main>
  );
};

export default Main;
