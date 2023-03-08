import React from "react";
import {useDictionaryContext} from "../../context/Context";
import {NavLink} from "react-router-dom";
import styles from "./bookingBlock.module.scss";


export const BookingBlock = () => {
  const {dictionary} = useDictionaryContext();
  const glossary = dictionary.bookingBlock;

  return (
    <div className={styles.book}>
      <div className={styles.leftSide}>
        <p className={styles.textLeft}>
          <span className={styles.span}>
            {glossary.subTitle}
          </span>
        </p>
        <h2 className={styles.titleLeft}>
          {glossary.description}
        </h2>
        <p className={styles.textLeft}>
          {glossary.text}
        </p>
        <span className={styles.spanLink}>
          {glossary.buttonText}
        </span>
      </div>
      <div className={styles.rightSide}>
        <h3 className={styles.titleBook}>
          {glossary.bookingTitle}
        </h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h4>
              {glossary.bestPriceGuarantee}
            </h4>
            <p className={styles.text}>
              {glossary.bestPriceGuaranteeDescription}
            </p>
          </li>
          <li className={styles.listItem}>
            <h4>
              {glossary.exclusiveOffers}
            </h4>
            <p className={styles.text}>
              {glossary.exclusiveOffersDescription}
            </p>
          </li>
          <li className={styles.listItem}>
            <h4>
              {glossary.noHiddenFees}
            </h4>
            <p className={styles.text}>
              {glossary.noHiddenFeesDescription}
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