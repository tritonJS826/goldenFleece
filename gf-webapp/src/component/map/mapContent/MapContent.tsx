import * as React from "react";
import styles from "./mapContent.module.scss";
import styleMarker from "./marker.module.scss";

type mouseDown = {
  mouseDownHandler: (e: React.MouseEvent) => void
}

export const MapContent = (props: mouseDown) => {
  const markers = [
    {
      id: 1,
      x: 523,
      y: 613,
      markerType: "main",
    },
    {
      id: 2,
      x: 645,
      y: 690,
      markerType: "food",
    },
    {
      id: 3,
      x: 680,
      y: 370,
      markerType: "food",
    },
    {
      id: 4,
      x: 840,
      y: 450,
      markerType: "food",
    },
    {
      id: 5,
      x: 580,
      y: 460,
      markerType: "park",
    },
    {
      id: 6,
      x: 724,
      y: 189,
      markerType: "park",
    },
    {
      id: 7,
      x: 680,
      y: 110,
      markerType: "park",
    },
  ];
  return (
    <div data-name='map-content'
      onMouseDown={(e) => props.mouseDownHandler(e)}
      className={styles.content}
    >
      {markers.map(marker => (
        <div className={styleMarker[marker.markerType]}
          style={{top: `${marker.y}px`, left: `${marker.x}px`}}
          key={marker.id}
        />
      ))}
    </div>
  );
};
