import * as React from "react";
import styles from "./mapContent.module.scss";

type mouseDown = {
  mouseDownHandler: (e: React.MouseEvent) => void
}

export const MapContent = (props: mouseDown) => {
  return (
    <div data-name='map-content'
      onMouseDown={(e) => props.mouseDownHandler(e)}
      className={styles.content}
    />
  );
};
