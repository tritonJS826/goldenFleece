import React, {useContext} from "react";
import {MapContext} from "../MapContext";
import {Marker} from "./marker/marker";
import styles from "./mapContent.module.scss";


type MapContentProps = {
  mouseDownHandler: (e: React.MouseEvent) => void;
}

export const MapContent = (props: MapContentProps) => {
  const {markers} = useContext(MapContext);

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
    <div
      data-name='map-content'
      onMouseDown={props.mouseDownHandler}
      className={styles.content}
    >
      {renderMarkers()}
    </div>
  );
};
