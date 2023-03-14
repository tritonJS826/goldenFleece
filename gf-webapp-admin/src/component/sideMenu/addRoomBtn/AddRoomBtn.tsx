import React from "react";
import styles from "./AddRoomBtn.module.scss";

export const AddRoomBtn = ({showModal}: {showModal:() => void}) => {
  return (
    <div onClick={showModal}
      className={styles.addRoomBtn}
    >
      <span className={styles.cross} />
      <span>
        Add room
      </span>
    </div>
  );
};