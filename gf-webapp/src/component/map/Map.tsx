import React, {useState} from "react";
import {MapContent} from "./mapContent/MapContent";
import styles from "./map.module.scss";
import {MapMenu} from "./mapMenu/MapMenu";

export const Map = () => {
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  console.log("startX", startX);
  const [startY, setStartY] = useState(0);
  console.log("startY", startY);

  const mouseDownHandler = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    setDragging(true);
    setStartX(e.pageX - Number.parseInt(target.style.left || "0"));
    setStartY(e.pageY - Number.parseInt(target.style.top || "0"));
  };

  const mouseMoveHandler = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!dragging) {
      return;
    }

    if (target.dataset.name === "map-content") {
      target.style.top = `${e.pageY - startY}px`;
      target.style.left = `${e.pageX - startX}px`;
    }
  };

  const mouseUpHandler = () => {
    setDragging(false);
  };

  return (
    <div onMouseMove={(e) => mouseMoveHandler(e)}
      onMouseUp={mouseUpHandler}
      className={styles.map}
    >
      <MapContent mouseDownHandler={mouseDownHandler} />
      <MapMenu />
    </div>
  );
};
