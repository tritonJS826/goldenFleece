import React, {useContext} from "react";
import {IMapMenuProps} from "./IMapMenuProps";
import {MapContext} from "../MapContext";
import styles from "./mapMenu.module.scss";


export const MapMenu = (props: IMapMenuProps) => {
  const {markers, menuItem} = useContext(MapContext);
  const markerTypes = Array.from(new Set(markers.map(marker => marker.markerType)));

  const renderMarkersList = () => {
    return markerTypes.map((markerType) => (
      <li key={markerType}>
        <p className={styles.groupName}>
          {markerType !== "main" && markerType}
        </p>
        {markers.map((marker) => (
          markerType === marker.markerType &&
          <span
            onClick={() => props.menuItemHandler(marker)}
            className={`${styles.menuItem} ${marker.id === menuItem?.id ? styles.checked : ""}`}
            key={marker.id}
          >
            {marker.name}
          </span>
        ))}
      </li>
    ));
  };

  return (<ul className={styles.menu}>
    {renderMarkersList()}
  </ul>);
};