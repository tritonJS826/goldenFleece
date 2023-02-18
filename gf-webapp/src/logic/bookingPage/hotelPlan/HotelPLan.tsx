import React from "react";
import {useTranslation} from "react-i18next";
import styles from "./HotelPlan.module.scss";
import hotelPlan from "../../../resources/hotelPlan/hotelPlan.jpg";

export const HotelPlan = () => {
  const {t} = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.single}>
        <button className={`${styles.block} ${styles.block1}`}>
          {t("singleRoom")}
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          {t("doubleRoom")}
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          {t("twinRoom")}
        </button>
      </div>
      <img className={styles.plan}
        src={hotelPlan}
        alt="Hotel plan"
      />
    </div>
  );
};