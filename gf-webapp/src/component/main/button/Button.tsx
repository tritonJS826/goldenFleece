import React from "react";
import {useCurrentDictionaryContext} from "../../../context/Context";
import {NavLink} from "react-router-dom";
import styles from "./button.module.scss";


export const Button = () => {
  const {dictionary} = useCurrentDictionaryContext();

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