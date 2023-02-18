import React from "react";
import styles from "./HotelPlan.module.scss";
import hotelPlan from "../../../resources/hotelPlan/hotelPlan.jpg";

export const HotelPlan = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.single}>
        <button className={`${styles.block} ${styles.block1}`}>
          Single room
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          Double room
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          Twin room
        </button>
      </div>
      <img className={styles.plan}
        src={hotelPlan}
        alt="Hotel plan"
      />
    </div>
  );
};