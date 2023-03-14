import React, {useContext} from "react";
import {MapContext} from "../MapContext";
import {Marker} from "./marker/Marker";
import {useZoom} from "../useZoom";
import styles from "./MapContent.module.scss";

type MapContentProps = {
  mouseDownHandler: (e: React.MouseEvent) => void;
}

export const MapContent = (props: MapContentProps) => {
  const {markers} = useContext(MapContext);
  const {scale, zoomInHandler, zoomOutHandler} = useZoom();

  const renderMarkers = () => {
    return markers.map((marker) => (
      <Marker
        id={marker.id}
        name={marker.name}
        x={marker.x}
        y={marker.y}
        imgUrl={marker.imgUrl}
        description={marker.description}
        markerType={marker.markerType}
        key={marker.id}
      />));
  };

  return (
    <>
      <div
        data-name='map-content'
        onMouseDown={props.mouseDownHandler}
        className={styles.content}
        style={{scale: `${scale}`}}
      >
        {renderMarkers()}
      </div>
      <div className={styles.zoom}>
        <button
          className={styles.zoom_button}
          onClick={zoomInHandler}
        >
          +
        </button>
        <button
          className={styles.zoom_button}
          onClick={zoomOutHandler}
        >
          -
        </button>
      </div>
    </>
  );
};
