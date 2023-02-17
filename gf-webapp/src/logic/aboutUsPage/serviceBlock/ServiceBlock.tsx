import React from "react";
import styles from "./ServiceBlock.module.scss";
import image from "../../../resources/sliderImages/Promo3.jpg";

export const ServiceBlock = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <img className={styles.promo}
          src={image}
          alt="Promo image"
        />
        <div className={styles.about}>
          <div className={styles.over}>
            <p className={styles.textLeft}>
              <span className={styles.span}>
                Services
              </span>
            </p>
            <h2 className={styles.title}>
              Gastronomy
            </h2>
            <div className={styles.description}>
              Experience modern local dishes and breathtaking
              views at our signature restaurant, Metsovo 1350m, where the menu is created by executive consultant chef Gikas Xenakis.
            </div>
            <h2 className={styles.title}>
              Expierence
            </h2>
            <div className={styles.description}>
              All of our experiences are tailored to each individual guest –
              ensuring you’ll remember them for a lifetime. From skiing to wild truffle hunting,
              the surrounding landscape offers an array of activities for all four seasons.
            </div>
            <h3 className={styles.title}>
              SPA
            </h3>
            <div className={styles.description}>
              Discover tranquillity beyond compare at the Fountus Spa,
              where wellness is generously offered in an elegant environment.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};