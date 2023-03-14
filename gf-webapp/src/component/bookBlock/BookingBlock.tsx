import React from "react";
import {useDictionaryContext} from "../../context/Context";
import {NavLink} from "react-router-dom";
import styles from "./BookingBlock.module.scss";


export const BookingBlock = () => {
  const {bookingBlock} = useDictionaryContext().dictionary;

  return (
    <div className={styles.book}>
      <div className={styles.leftSide}>
        <p className={styles.textLeft}>
          <span className={styles.span}>
            {bookingBlock.subTitle}
          </span>
        </p>
        <h2 className={styles.titleLeft}>
          {bookingBlock.description}
        </h2>
        <p className={styles.textLeft}>
          {bookingBlock.text}
        </p>
        <span className={styles.spanLink}>
          {bookingBlock.buttonText}
        </span>
      </div>
      <div className={styles.rightSide}>
        <h3 className={styles.titleBook}>
          {bookingBlock.bookingTitle}
        </h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h4>
              {bookingBlock.bestPriceGuarantee}
            </h4>
            <p className={styles.text}>
              {bookingBlock.bestPriceGuaranteeDescription}
            </p>
          </li>
          <li className={styles.listItem}>
            <h4>
              {bookingBlock.exclusiveOffers}
            </h4>
            <p className={styles.text}>
              {bookingBlock.exclusiveOffersDescription}
            </p>
          </li>
          <li className={styles.listItem}>
            <h4>
              {bookingBlock.noHiddenFees}
            </h4>
            <p className={styles.text}>
              {bookingBlock.noHiddenFeesDescription}
            </p>
          </li>
        </ul>
        <NavLink
          to="/booking"
          className={styles.bookLink}
        >
          <span className={styles.linkText}>
            {bookingBlock.bookButtonText}
          </span>
        </NavLink>
      </div>
    </div>
  );
};