import React from "react";
import styles from "./PageBorder.module.scss";
import logo from "../../resources/icons/logo.svg";
import {Slider} from "../sliderImage/Slider";
import {SliderVideo} from "../sliderVideo/SliderVideo";

export function PageBorder() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
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
            <li>
              EN
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
      <footer className={styles.footer} />
    </div>
  );
}