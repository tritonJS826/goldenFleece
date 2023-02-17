import React from "react";
import styles from "./Spinner.module.scss";

export const Spinner = () => {
  return (
    <div>
      <div className={styles.stub}>
        <div className={styles.title}>
          Golden Fleece
        </div>
        <div className={styles.spinner}>
          <div className={styles.loading} />
        </div>
      </div>
    </div>
  );
};