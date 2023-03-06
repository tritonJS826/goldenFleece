import React from "react";
import {useCurrentDictionaryContext} from "../../context/Context";
import {NavLink} from "react-router-dom";
import styles from "./bookingBlock.module.scss";


export const BookingBlock = () => {
  const {dictionary} = useCurrentDictionaryContext();
  // const dictionary = language.bookingBlock;

  return (
    <div className={styles.book}>
      <div className={styles.leftSide}>
        <p className={styles.textLeft}>
          <span className={styles.span}>
            {dictionary.bookingBlock.subTitle}
          </span>
        </p>
        <h2 className={styles.titleLeft}>
          {dictionary.bookingBlock.description}
        </h2>
        <p className={styles.textLeft}>
          {dictionary.bookingBlock.text}
        </p>
        <span className={styles.spanLink}>
          {dictionary.bookingBlock.buttonText}
        </span>
      </div>
      <div className={styles.rightSide}>
        <h3 className={styles.titleBook}>
          {dictionary.bookingBlock.bookingTitle}
        </h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h4>
              {dictionary.bookingBlock.bestPriceGuarantee}
            </h4>
            <p className={styles.text}>
              {dictionary.bookingBlock.bestPriceGuaranteeDescription}
            </p>
          </li>
          <li className={styles.listItem}>
            <h4>
              {dictionary.bookingBlock.exclusiveOffers}
            </h4>
            <p className={styles.text}>
              {dictionary.bookingBlock.exclusiveOffersDescription}
            </p>
          </li>
          <li className={styles.listItem}>
            <h4>
              {dictionary.bookingBlock.noHiddenFees}
            </h4>
            <p className={styles.text}>
              {dictionary.bookingBlock.noHiddenFeesDescription}
            </p>
          </li>
        </ul>
        <NavLink
          to="/booking"
          className={styles.bookLink}
        >
          <span className={styles.linkText}>
            {dictionary.bookButtonText}
          </span>
        </NavLink>
      </div>
    </div>
  );
};