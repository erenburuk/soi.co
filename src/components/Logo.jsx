import styles from "./Logo.module.css";

function Logo() {
  return (
    <div>
      <img
        src="./assets/soico_logo.png"
        className={styles.logo}
        alt="Soico Logo"
      ></img>
    </div>
  );
}

export default Logo;
