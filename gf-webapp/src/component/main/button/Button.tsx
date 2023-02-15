import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./button.module.scss";

export const Button = () => {
  return (
    <div className={styles.wrap}>
      <NavLink to="/book"
        className={styles.button}
      >
        Book now
      </NavLink>
    </div>
  );
};