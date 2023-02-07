import React, {useContext} from "react";
import {mapContent} from "../mapInterfaces";
import {MapContext} from "../MapContext";
import styles from "./mapContent.module.scss";
import {Marker} from "./marker/marker";


export const MapContent = (props: mapContent) => {
  const {markers} = useContext(MapContext);

  return (
    <div data-name='map-content'
      onMouseDown={(e) => props.mouseDownHandler(e)}
      className={styles.content}
    >
      {markers.map((marker) => (<Marker {...marker}
        key={marker.id}
      // eslint-disable-next-line react/jsx-closing-bracket-location
      />))}
    </div>
  );
};
