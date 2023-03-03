import React from "react";
import styles from "./zoomMap.module.scss";

export function ZoomMap() {
  return (
    <div className={styles.zoom}>
      <div className={styles.zoom_in}>
        +
      </div>
      <div className={styles.zoom_out}>
        -
      </div>
    </div>
  );
}