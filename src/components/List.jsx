import { useState } from "react";
import Card from "./Card";
import styles from "./List.module.css";

function List({ products, language, categories }) {
  const [category, setCategory] = useState("");
  console.log(products);

  return (
    <div>
      {Object.keys(products).map((key) => {
        const categoryTitle =
          categories.find((category) => category.type === key)?.title || key;

        return (
          <div key={key} className={styles.productGroup}>
            <h2 className={styles.productGroupTitle}>{categoryTitle}</h2>
            <ul className={styles.listLayout}>
              {products[key].map((product) => (
                <li key={product.id}>
                  <Card
                    name={language === "TR" ? product.name_tr : product.name_en}
                    price={product.price}
                  />
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      {/* <ul className={styles.listLayout}>
        <h2>{category}</h2>
        {products.map((product) => (
          <li key={product.id}>
            <Card
              name={language === "TR" ? product.name_tr : product.name_en}
              price={product.price}
            />
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default List;
