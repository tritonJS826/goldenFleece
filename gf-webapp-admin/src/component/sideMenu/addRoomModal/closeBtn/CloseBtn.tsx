import React from "react";
import styles from "./closeBtn.module.scss";

export interface CloseBtnProps {
  showModal: () => void
}

export const CloseBtn = (props: CloseBtnProps) => {
  return (
    <div onClick={props.showModal}
      className={styles.closeBtn}
    />
  );
};