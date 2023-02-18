import React from "react";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import styles from "./button.module.scss";

export const Button = () => {
  const {t} = useTranslation();
  return (
    <div className={styles.wrap}>
      <NavLink to="/booking"
        className={styles.button}
      >
        {t("book-now")}
      </NavLink>
    </div>
  );
};