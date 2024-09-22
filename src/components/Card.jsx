import styles from "./Card.module.css";

function Card({ name, price, image }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src="./assets/1.jpg" />
        </div>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.price}>{price} ₺</p>
      </div>
    </div>
  );
}

export default Card;
