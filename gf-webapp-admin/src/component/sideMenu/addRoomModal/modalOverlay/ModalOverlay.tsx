import React from "react";
import styles from "./modalOverlay.module.scss";

export const ModalOverlay = ({showModal}: {showModal: () => void}) => {
  return (
    <div onClick={showModal}
      className={styles.modalOverlay}
    />);
};