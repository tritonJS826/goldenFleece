import React from "react";
import styles from "./ModalOverlay.module.scss";

export const ModalOverlay = ({showModal}: {showModal: () => void}) => {
  return (
    <div onClick={showModal}
      className={styles.modalOverlay}
    />);
};