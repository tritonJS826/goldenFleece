import React, {useState} from "react";
import {MapContent} from "./mapContent/MapContent";
import styles from "./map.module.scss";
import {MapMenu} from "./mapMenu/MapMenu";
import {MapContext} from "./MapContext";
import {IMarker} from "./map.interfaces";

export const Map = () => {
  const markers = [
    {
      id: 1,
      name: "Golden fleece",
      x: 523,
      y: 613,
      markerType: "main",
    },
    {
      id: 2,
      name: "Cake club",
      x: 645,
      y: 690,
      markerType: "food",
    },
    {
      id: 3,
      name: "Shedevri",
      x: 680,
      y: 370,
      markerType: "food",
    },
    {
      id: 4,
      name: "Green yard",
      x: 840,
      y: 450,
      markerType: "food",
    },
    {
      id: 5,
      name: "Youth park",
      x: 580,
      y: 460,
      markerType: "park",
    },
    {
      id: 6,
      name: "Tennis cort",
      x: 724,
      y: 189,
      markerType: "park",
    },
    {
      id: 7,
      name: "Ramaz Shengelia Stadium",
      x: 680,
      y: 110,
      markerType: "park",
    },
  ];
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

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

  const [menuItem, setMenuItem] = useState<IMarker | null>(null);

  const menuItemHandler = (marker: IMarker) => {
    setMenuItem(marker);
  };

  return (
    <MapContext.Provider value={{markers, menuItem}}>
      <div onMouseMove={(e) => mouseMoveHandler(e)}
        onMouseUp={mouseUpHandler}
        className={styles.map}
      >
        <MapContent mouseDownHandler={mouseDownHandler} />
        <MapMenu menuItemHandler={menuItemHandler} />
      </div>
    </MapContext.Provider>

  );
};
