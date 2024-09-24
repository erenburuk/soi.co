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
  "slider-7.jpg",
  "slider-8.jpg",
  "slider-9.jpg",
  "slider-10.jpg",
  "slider-11.jpg",
  "slider-12.jpg",
];
const delay = 4000;

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
  const [isTransitioning, setIsTransitioning] = React.useState(true);
  const timeoutRef = React.useRef(null);

  const t = translations[language];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(() => {
      if (index === images.length) {
        setIsTransitioning(false);
        setIndex(0);
      } else {
        setIsTransitioning(true);
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, delay);

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
        style={{
          transform: `translateX(${-index * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease" : "none",
        }}
      >
        {images.concat(images[0]).map((image, idx) => (
          <div className={styles.slide} key={idx}>
            <img src={`/assets/slider/${image}`} alt={`Slide ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
