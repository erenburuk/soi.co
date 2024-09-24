import React from "react";
import styles from "./Slider.module.css"; // CSS modülünü içe aktar
import { NavLink } from "react-router-dom";

const images = [
  "slider-1.jpg",
  "slider-2.jpg",
  "slider-3.jpg",
  "slider-4.jpg",
  "slider-5.jpg",
  "slider-6.jpg",
];
const delay = 5000;

const translations = {
  EN: {
    title: "Welcome",
    franchise: "Franchise",
    suggestions: "Suggestions",
    menu: "Menu",
  },
  TR: {
    title: "Hoş Geldiniz",
    menu: "Menü",
    franchise: "Franchise",
    suggestions: "Öneriler",
  },
};

export default function Slideshow({ language }) {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  const t = translations[language];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={styles.slideshow}>
      <div className={styles.heroContainer}>
        <h1 className={styles.title}>{t.title}</h1>
        <div className={styles.buttonGroup}>
          <NavLink to="/menu" className={styles.btn}>
            {t.menu}
          </NavLink>
          <a className={styles.btn}>{t.franchise}</a>
          <a className={styles.btn}>{t.suggestions}</a>
        </div>
      </div>
      <div
        className={styles.slideshowSlider}
        style={{ transform: `translateX(${-index * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className={styles.slide} key={index}>
            <img src={`/assets/slider/${image}`} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
