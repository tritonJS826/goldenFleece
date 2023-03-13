import React from "react";
import {useDictionaryContext} from "../../../context/Context";
import {NavLink} from "react-router-dom";
import styles from "./Button.module.scss";


export const Button = () => {
  const {dictionary} = useDictionaryContext();

  return (
    <div className={styles.wrap}>
      <NavLink
        to="/booking"
        className={styles.button}
      >
        {dictionary.bookButtonText}
      </NavLink>
    </div>
  );
};