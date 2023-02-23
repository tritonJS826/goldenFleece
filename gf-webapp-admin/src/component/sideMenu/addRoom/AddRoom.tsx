import React from "react";
import styles from "./addRoom.module.scss";

export const AddRoom = () => {
  return (
    <div className={styles.addRoom}>
      <span className={styles.cross} />
      <span>
        AddRoom
      </span>
    </div>
  );
};