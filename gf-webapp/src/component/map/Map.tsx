import React, {useState} from "react";
import {MapContent} from "./mapContent/MapContent";
import styles from "./map.module.scss";
import {MapMenu} from "./mapMenu/MapMenu";
import {MapContext} from "./MapContext";
import {IMarker} from "./mapInterfaces";
import {ItemDescription} from "./itemDescription/ItemDescription";
import {markers} from "./mapMarkersList";

export const Map = () => {
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const mouseDownHandler = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.dataset.name === "map-content") {
      setDragging(true);
    }
    const style = window.getComputedStyle(target);
    const transform = new DOMMatrixReadOnly(style.transform);
    const translateX = transform.m41;
    const translateY = transform.m42;
    setStartX(e.pageX - translateX);
    setStartY(e.pageY - translateY);
  };


  const mouseMoveHandler = (e: React.MouseEvent) => {
    if (!dragging) {
      return;
    }
    const target = e.target as HTMLElement;
    const LEFT = 0;
    const BOTTOM = 0;
    const TOP = target.offsetHeight - (target.parentElement?.offsetHeight || 0);
    const RIGTH = ((target.parentElement?.offsetWidth || 0) - target.offsetWidth);

    if (target.dataset.name === "map-content") {
      let x = e.pageX - startX;
      let y = e.pageY - startY;

      if (y < BOTTOM) {
        y = 0;
      }
      if (x > LEFT) {
        x = 0;
      }
      if (y > TOP) {
        y = TOP;
      }
      if (x < RIGTH) {
        x = RIGTH;
      }
      target.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  const mouseUpHandler = () => {
    setDragging(false);
  };

  const [menuItem, setMenuItem] = useState<IMarker | null>(null);

  const menuItemHandler = (marker: IMarker) => {
    setMenuItem(marker);
  };

  return (
    <MapContext.Provider value={{markers, menuItem, setMenuItem}}>
      <MapMenu menuItemHandler={menuItemHandler} />
      <ItemDescription />
      <div
        onMouseMove={(e) => mouseMoveHandler(e)}
        onMouseUp={mouseUpHandler}
        className={styles.map}
      >
        <MapContent mouseDownHandler={mouseDownHandler} />
      </div>
    </MapContext.Provider>
  );
};
