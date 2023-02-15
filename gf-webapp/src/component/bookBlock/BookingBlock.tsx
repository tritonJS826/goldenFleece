import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./bookingBlock.module.scss";


export const BookingBlock = () => {
  return (
    <div className={styles.book}>
      <div className={styles.leftSide}>
        <p className={styles.textLeft}>
          <span className={styles.span}>
            Reservations
          </span>
        </p>
        <h2 className={styles.titleLeft}>
          Book your escape to Grand Forest Metsovo today
        </h2>
        <p className={styles.textLeft}>
          Book direct for the best price, exclusive offers and no hidden fees.
        </p>
        <span className={styles.spanLink}>
          More
        </span>
      </div>
      <div className={styles.rightSide}>
        <h3 className={styles.titleBook}>
          Why book direct?
        </h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h4>
              Best price guarantee
            </h4>
            <p className={styles.text}>
              Book direct and enjoy the lowest rates available!
            </p>
          </li>
          <li className={styles.listItem}>
            <h4>
              Exclusive offers
            </h4>
            <p className={styles.text}>
              Book direct and enjoy exclusive offers
            </p>
          </li>
          <li className={styles.listItem}>
            <h4>
              No hidden fees
            </h4>
            <p className={styles.text}>
              Many websites charge extra fees for bookings; we do not.
            </p>
          </li>
        </ul>
        <NavLink to="/booking"
          className={styles.bookLink}
        >
          <span className={styles.linkText}>
            Book now
          </span>
        </NavLink>
      </div>
    </div>
  );
};