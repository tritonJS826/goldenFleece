import React, {useState} from "react";
import styles from "./PageBorder.module.scss";
import logo from "../../resources/icons/logo.svg";
import {Slider} from "../sliderImage/Slider";
import {SliderVideo} from "../sliderVideo/SliderVideo";
import footerImage from "../../resources/sliderImages/landscape_mountains_sun_140434_1920x1080.jpg";
import {useScrollPosition} from "../../hooks/useScrollPosition";

export function PageBorder() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const scrollPosition = useScrollPosition();

  return (
    <div className={styles.wrapper}>
      <header className={scrollPosition > 100 ? styles.header_scroll : styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <div />
              <div />
              <div />
            </li>
            <li>
              Contact
            </li>
            <li>
              <div>
                Golden Fleece
              </div>
              <img src={logo}
                alt="Golden Fleece logo"
              />
            </li>
            <li className={styles.languages}
              onClick={handleOpen}
            >
              <p className={styles.english}>
                EN
              </p>
              {open ? (<p className={`${styles.hidden} ${styles.russian}`}>
                RU
              </p>) : null}
            </li>
            <li>
              Book now
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Slider />
        <SliderVideo />
      </main>
      <footer className={styles.footer}>
        <div>
          Footer
        </div>
        <img src={footerImage}
          alt="footer image"
        />
      </footer>
    </div>
  );
}