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
      <div className={styles.bannerContainer}>
        <div className={styles.iconContainer}>
          <img
            src="/assets/cafe-outline.svg"
            className={styles.icon}
            alt="Self Service Icon"
          />
          <h2 className={styles.text}>
            {language === "EN" ? "Self Service" : "Self Servis"}
          </h2>
        </div>
        <div className={styles.iconContainer}>
          <img
            src="/assets/wifi-outline.svg"
            className={styles.icon}
            alt="Wifi Icon"
          />
          <h2 className={styles.text}>
            {language === "EN" ? "Free Wi-Fi" : " Ücretsiz Wi-Fi"}
          </h2>
        </div>
      </div>
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
