import React from "react";
import {useCurrentLanguageContext} from "../../../context/Context";
import {NavLink} from "react-router-dom";
import styles from "./button.module.scss";


export const Button = () => {
  const {language} = useCurrentLanguageContext();

  return (
    <div className={styles.wrap}>
      <NavLink to="/booking"
        className={styles.button}
      >
        {language.component.bookButtonText}
      </NavLink>
    </div>
  );
};