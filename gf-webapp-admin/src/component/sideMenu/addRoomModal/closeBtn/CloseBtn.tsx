import React from "react";
import {IShowModal} from "../showModal";
import styles from "./CloseBtn.module.scss";

export const CloseBtn = ({showModal}: IShowModal) => {
  return (
    <div onClick={showModal}
      className={styles.closeBtn}
    />
  );
};