import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

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

function Navbar({ language, setLanguage, hideOptionalMenu }) {
  const t = translations[language];

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.innerNav}>
          <Logo />
          <div className={styles.mainList}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              {t.home}
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              {t.menu}
            </NavLink>
            <ScrollLink
              className={styles.scrollLink}
              to="contact"
              smooth={true}
              duration={1000}
            >
              {t.contact}
            </ScrollLink>
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
      </nav>
    </header>
  );
}

export default Navbar;
