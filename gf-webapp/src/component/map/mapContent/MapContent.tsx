import React, {useContext} from "react";
import {mapContent} from "../mapInterfaces";
import {MapContext} from "../MapContext";
import {Marker} from "./marker/marker";
import styles from "./mapContent.module.scss";


export const MapContent = (props: mapContent) => {
  const {markers} = useContext(MapContext);

  const renderMarkers = () => {
    return markers.map((marker) => (
      <Marker
        {...marker}
        key={marker.id}
      />));
  };

  return (
    <div
      data-name='map-content'
      onMouseDown={(e) => props.mouseDownHandler(e)}
      className={styles.content}
    >
      {renderMarkers()}
    </div>
  );
};
