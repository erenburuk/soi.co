import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";
import styles from "./Navbar.module.css";

const translations = {
  EN: {
    home: "Home",
    menu: "Menu",
    contact: "Contact",
    franchise: "Franchise",
    suggestions: "Suggestions",
  },
  TR: {
    home: "Anasayfa",
    menu: "Menü",
    contact: "İletişim",
    franchise: "Franchise",
    suggestions: "Öneriler",
  },
};

function Navbar({ language, setLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const t = translations[language];

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.innerNav}>
          <Logo />
          <div className={styles.mainList}>
            <p>{t.home}</p>
            <ScrollLink to="menu" smooth={true} duration={500}>
              {t.menu}
            </ScrollLink>
            <p>{t.contact}</p>
            <div className={styles.optionalMenu}>
              <p>{t.franchise}</p>
              <p>{t.suggestions}</p>
            </div>
          </div>
          <div className={styles.hamburgerContainer}>
            <div className={styles.hamburger} onClick={toggleMenu}>
              <img
                src="./assets/menu-outline.svg"
                className={styles.hamburgerIcon}
                alt="Menu Icon"
              />
            </div>
            <div className={styles.languageMenu}>
              <button
                onClick={() => setLanguage("TR")}
                className={`${styles.language} ${
                  language === "TR" ? styles.active : ""
                }`}
              >
                TR
              </button>
              <span>|</span>
              <button
                onClick={() => setLanguage("EN")}
                className={`${styles.language} ${
                  language === "EN" ? styles.active : ""
                }`}
              >
                EN
              </button>
            </div>
          </div>
          <div
            className={`${styles.leftList} ${isMenuOpen ? styles.show : ""}`}
          >
            <a>{t.franchise}</a>
            <a>{t.suggestions}</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
