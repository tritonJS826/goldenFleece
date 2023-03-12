import React, {useContext} from "react";
import {mapContent} from "../mapInterfaces";
import {MapContext} from "../MapContext";
import styles from "./mapContent.module.scss";
import {Marker} from "./marker/marker";
import {useZoom} from "../useZoom";

export const MapContent = (props: mapContent) => {
  const {markers} = useContext(MapContext);
  const {scale, zoomInHandler, zoomOutHandler} = useZoom();
  const {menuItem} = useContext(MapContext);

  return (
    <>
      <div data-name='map-content'
        onMouseDown={(e) => props.mouseDownHandler(e)}
        className={styles.content}
        style={{
          scale: `${scale}`,
          transform: `translate(${(menuItem ? -menuItem.x / 1.75 : null)}px, ${menuItem ? menuItem.y / 2 : null}px)`,
        }}
      >
        {markers.map((marker) => (
          <Marker {...marker}
            key={marker.id}
          />
        ))}
      </div>
      <div className={styles.zoom}>
        <div className={styles.zoom_in}
          onClick={zoomInHandler}
        >
          +
        </div>
        <div className={styles.zoom_out}
          onClick={zoomOutHandler}
        >
          -
        </div>
      </div>
    </>
  );
};
