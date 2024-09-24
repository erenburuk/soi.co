import Slider from "./Slider";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      {/* <h1 className={styles.title}>Hoşgeldiniz!</h1>
      <p style={{ fontWeight: 400, fontSize: "64px" }}>Hello</p>
      <div className={styles.buttonGroup}>
        <button className={styles.btn}>Menü</button>
        <button className={styles.btn}>Franchise</button>
        <button className={styles.btn}>Öneriler</button>
      </div> */}
      <Slider />
    </div>
  );
}

export default Hero;
