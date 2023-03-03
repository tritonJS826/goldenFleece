import React from "react";
import {useCurrentLanguageContext} from "../../context/Context";
import {NavLink} from "react-router-dom";
import styles from "./bookingBlock.module.scss";


export const BookingBlock = () => {
  const {language} = useCurrentLanguageContext();
  return (
    <div className={styles.book}>
      <div className={styles.leftSide}>
        <p className={styles.textLeft}>
          <span className={styles.span}>
            {language.component.bookingBlock.subTitle}
          </span>
        </p>
        <h2 className={styles.titleLeft}>
          {language.component.bookingBlock.description}
        </h2>
        <p className={styles.textLeft}>
          {language.component.bookingBlock.text}
        </p>
        <span className={styles.spanLink}>
          {language.component.bookingBlock.buttonText}
        </span>
      </div>
      <div className={styles.rightSide}>
        <h3 className={styles.titleBook}>
          {language.component.bookingBlock.bookingTitle}
        </h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h4>
              {language.component.bookingBlock.bestPriceGuarantee}
            </h4>
            <p className={styles.text}>
              {language.component.bookingBlock.bestPriceGuaranteeDescription}
            </p>
          </li>
          <li className={styles.listItem}>
            <h4>
              {language.component.bookingBlock.exclusiveOffers}
            </h4>
            <p className={styles.text}>
              {language.component.bookingBlock.exclusiveOffersDescription}
            </p>
          </li>
          <li className={styles.listItem}>
            <h4>
              {language.component.bookingBlock.noHiddenFees}
            </h4>
            <p className={styles.text}>
              {language.component.bookingBlock.noHiddenFeesDescription}
            </p>
          </li>
        </ul>
        <NavLink to="/booking"
          className={styles.bookLink}
        >
          <span className={styles.linkText}>
            {language.component.bookButtonText}
          </span>
        </NavLink>
      </div>
    </div>
  );
};