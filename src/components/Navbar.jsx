import React, { useState } from "react";
import Logo from "./Logo";
import styles from "./Navbar.module.css";

function Navbar({ language, setLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.innerNav}>
          <Logo />
          <div className={styles.hamburger} onClick={toggleMenu}>
            <img
              src="./assets/menu-outline.svg"
              className={styles.hamburgerIcon}
              alt="Menu Icon"
            />
          </div>
          <div
            className={`${styles.leftList} ${isMenuOpen ? styles.show : ""}`}
          >
            <p>Anasayfa</p>
            <p>Menü</p>
            <p>İletişim</p>
            <div className={styles.rightList}>
              <button
                onClick={() => setLanguage("TR")}
                disabled={language === "TR"}
                className={styles.language}
              >
                TR
              </button>
              <span>|</span>
              <button
                onClick={() => setLanguage("EN")}
                disabled={language === "EN"}
                className={styles.language}
              >
                EN
              </button>
            </div>
          </div>
          {!styles.show && (
            <div className={styles.rightList}>
              <button
                onClick={() => setLanguage("TR")}
                disabled={language === "TR"}
                className={styles.language}
              >
                TR
              </button>
              <span>|</span>
              <button
                onClick={() => setLanguage("EN")}
                disabled={language === "EN"}
                className={styles.language}
              >
                EN
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
