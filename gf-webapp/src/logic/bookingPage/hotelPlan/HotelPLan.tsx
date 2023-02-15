import React from "react";
import styles from "./HotelPlan.module.scss";

export const HotelPlan = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.single}>
        <button className={`${styles.block} ${styles.block1}`}>
          Double room
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          Double room
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          Double room
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          Double room
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          Double room
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          Double room
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          Double room
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          Double room
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          Double room
        </button>
      </div>
      <div className={styles.double}>
        <button className={`${styles.block} ${styles.block2}`}>
          Single room
        </button>
        <button className={`${styles.block} ${styles.block2}`}>
          Single room
        </button>
        <button className={`${styles.block} ${styles.block2}`}>
          Single room
        </button>
        <button className={`${styles.block} ${styles.block2}`}>
          Single room
        </button>
        <button className={`${styles.block} ${styles.block2}`}>
          Single room
        </button>
        <button className={`${styles.block} ${styles.block2}`}>
          Single room
        </button>
        <div className={styles.pool}>
          Swimming pool
        </div>
        <button className={`${styles.block} ${styles.block3}`}>
          Twin room
        </button>
        <button className={`${styles.block} ${styles.block3}`}>
          Twin room
        </button>
      </div>
    </div>
  );
};