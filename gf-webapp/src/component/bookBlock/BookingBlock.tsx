import React from "react";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import styles from "./bookingBlock.module.scss";


export const BookingBlock = () => {
  const {t} = useTranslation();
  return (
    <div className={styles.book}>
      <div className={styles.leftSide}>
        <p className={styles.textLeft}>
          <span className={styles.span}>
            {t("reservations")}
          </span>
        </p>
        <h2 className={styles.titleLeft}>
          {t("bookToday")}
        </h2>
        <p className={styles.textLeft}>
          {t("bookDirect")}
        </p>
        <span className={styles.spanLink}>
          {t("More")}
        </span>
      </div>
      <div className={styles.rightSide}>
        <h3 className={styles.titleBook}>
          {t("whyBookDirect")}
        </h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h4>
              {t("bestPrice")}
            </h4>
            <p className={styles.text}>
              {t("enjoy")}
            </p>
          </li>
          <li className={styles.listItem}>
            <h4>
              {t("exclusiveOffers")}
            </h4>
            <p className={styles.text}>
              {t("bookEnjoy")}
            </p>
          </li>
          <li className={styles.listItem}>
            <h4>
              {t("fees")}
            </h4>
            <p className={styles.text}>
              {t("extraFees")}
            </p>
          </li>
        </ul>
        <NavLink to="/booking"
          className={styles.bookLink}
        >
          <span className={styles.linkText}>
            {t("book-now")}
          </span>
        </NavLink>
      </div>
    </div>
  );
};