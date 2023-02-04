import React, {useState} from "react";
import styles from "./PageBorder.module.scss";
import logo from "../../resources/icons/logo.svg";
import {Slider} from "../sliderImage/Slider";
import {SliderVideo} from "../sliderVideo/SliderVideo";
import footerImage from "../../resources/sliderImages/landscape_mountains_sun_140434_1920x1080.jpg";
import {useScrollPosition} from "../../hooks/useScrollPosition";
import githubLogo from "../../resources/icons/githubLogo.svg";
import rsSchoolLogo from "../../resources/icons/rsSchool.svg";

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
              <div className={styles.logo}>
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
        <div className={styles.footer_container}>
          <ul>
            <li>
              dfghj
            </li>
            <li>
              lkjhgv
            </li>
            <li>
              kjhn
            </li>
            <li>
              mnvb
            </li>
            <li>
              mmnbvb
            </li>
            <li>
              jkhghb
            </li>
          </ul>
          <ul>
            <li>
              dfghj
            </li>
            <li>
              lkjhgv
            </li>
            <li>
              kjhn
            </li>
            <li>
              mnvb
            </li>
            <li>
              mmnbvb
            </li>
            <li>
              jkhghb
            </li>
          </ul>
          <ul>
            <li>
              dfghj
            </li>
            <li>
              lkjhgv
            </li>
            <li>
              kjhn
            </li>
            <li>
              mnvb
            </li>
            <li>
              mmnbvb
            </li>
            <li>
              jkhghb
            </li>
          </ul>

          <ul>
            <li>
              dfghj
            </li>
            <li>
              lkjhgv
            </li>
            <li>
              kjhn
            </li>
            <li>
              mnvb
            </li>
            <li>
              mmnbvb
            </li>
            <li>
              jkhghb
            </li>
          </ul>

          <ul>
            <li>
              dfghj
            </li>
            <li>
              lkjhgv
            </li>
            <li>
              kjhn
            </li>
            <li>
              mnvb
            </li>
            <li>
              mmnbvb
            </li>
            <li>
              jkhghb
            </li>
          </ul>
          <ul>
            <li>
              dfghj
            </li>
            <li>
              lkjhgv
            </li>
            <li>
              kjhn
            </li>
            <li>
              mnvb
            </li>
            <li>
              mmnbvb
            </li>
            <li>
              jkhghb
            </li>
          </ul>
          <ul>
            <li>
              dfghj
            </li>
            <li>
              lkjhgv
            </li>
            <li>
              kjhn
            </li>
            <li>
              mnvb
            </li>
            <li>
              mmnbvb
            </li>
            <li>
              jkhghb
            </li>
          </ul>
          <ul>
            <li>
              dfghj
            </li>
            <li>
              lkjhgv
            </li>
            <li>
              kjhn
            </li>
            <li>
              mnvb
            </li>
            <li>
              mmnbvb
            </li>
            <li>
              jkhghb
            </li>
          </ul>
          <ul>
            <li>
              dfghj
            </li>
            <li>
              lkjhgv
            </li>
            <li>
              kjhn
            </li>
            <li>
              mnvb
            </li>
            <li>
              mmnbvb
            </li>
            <li>
              jkhghb
            </li>
          </ul>
        </div>
        <div className={styles.line} />
        <div className={styles.creators}>
          <a
            href="https://github.com/Ekaterina1994"
            className={styles.github}
            target="_blank"
            rel="noreferrer"
          >
            Ekaterina1994
            <img
              className={styles.githubLogo}
              src={githubLogo}
              alt="GitHub"
            />
          </a>
          <a
            href="https://github.com/scorpigg"
            className={styles.github}
            target="_blank"
            rel="noreferrer"
          >
            scorpigg
            <img
              className={styles.githubLogo}
              src={githubLogo}
              alt="GitHub"
            />
          </a>
          <a
            href="https://github.com/SergioAJS"
            className={styles.github}
            target="_blank"
            rel="noreferrer"
          >
            SergioAJS
            <img
              className={styles.githubLogo}
              src={githubLogo}
              alt="GitHub"
            />
          </a>
          <div className={styles.year}>
            © 2022
          </div>
          <a
            href="https://rs.school/js/"
            className={styles.course}
            target="_blank"
            rel="noreferrer"
          >
            <img src={rsSchoolLogo}
              alt="rsSchool"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}