import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img
        src="./assets/soico_logo.png"
        className={styles.logo}
        alt="Soico Logo"
      />
    </Link>
  );
}

export default Logo;
