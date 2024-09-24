import { Element } from "react-scroll";
import styles from "./Footer.module.css";

function Footer({ language }) {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className={styles.footer}>
      <Element name="contact">
        <div className={styles.innerContainer}>
          <div className={styles.leftContainer}>
            <h1 className={styles.title}>SOI.CO</h1>
            <h2 className={styles.subTitle}>
              Coffee | Coffee style | Dessert | Art | Lifestyle
            </h2>
          </div>
          <div className={styles.rightContainer}>
            <a
              href="https://maps.app.goo.gl/wPGsiXemYCP9Z2yF7"
              target="_blank"
              rel="noreferrer"
              className={styles.social}
            >
              <img
                src="./assets/location-outline.svg"
                className={styles.icon}
                alt="Location"
              />
              Meşrutiyet, Olgunlar Cd. No:3 D:B, 06420 Çankaya/Ankara, Ankara,
              Turkey, 06530, Ankara, Turkey 06420
            </a>
            <a
              href="https://www.instagram.com/soicoffeeco/"
              className={styles.social}
            >
              <img
                src="./assets/logo-instagram.svg"
                className={styles.icon}
                alt="Social"
              />
              <span>@soicoffeeco</span>
            </a>
          </div>
        </div>
        <p className={styles.copyright}>
          &copy; {year}{" "}
          {language === "TR"
            ? "SoiCo. Tüm hakları saklıdır."
            : "SoiCo. All rights reserved."}
        </p>
      </Element>
    </footer>
  );
}

export default Footer;
