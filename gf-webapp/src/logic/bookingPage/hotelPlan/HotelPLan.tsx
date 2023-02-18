import React from "react";
import {useTranslation} from "react-i18next";
import styles from "./HotelPlan.module.scss";

export const HotelPlan = () => {
  const {t} = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.single}>
        <button className={`${styles.block} ${styles.block1}`}>
          {t("doubleRoom")}
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          {t("doubleRoom")}
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          {t("doubleRoom")}
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          {t("doubleRoom")}
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          {t("doubleRoom")}
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          {t("doubleRoom")}
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          {t("doubleRoom")}
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          {t("doubleRoom")}
        </button>
        <button className={`${styles.block} ${styles.block1}`}>
          {t("doubleRoom")}
        </button>
      </div>
      <div className={styles.double}>
        <button className={`${styles.block} ${styles.block2}`}>
          {t("singleRoom")}
        </button>
        <button className={`${styles.block} ${styles.block2}`}>
          {t("singleRoom")}
        </button>
        <button className={`${styles.block} ${styles.block2}`}>
          {t("singleRoom")}
        </button>
        <button className={`${styles.block} ${styles.block2}`}>
          {t("singleRoom")}
        </button>
        <button className={`${styles.block} ${styles.block2}`}>
          {t("singleRoom")}
        </button>
        <button className={`${styles.block} ${styles.block2}`}>
          {t("singleRoom")}
        </button>
        <div className={styles.pool}>
          {t("swimmingPool")}
        </div>
        <button className={`${styles.block} ${styles.block3}`}>
          {t("twinRoom")}
        </button>
        <button className={`${styles.block} ${styles.block3}`}>
          {t("twinRoom")}
        </button>
      </div>
    </div>
  );
};