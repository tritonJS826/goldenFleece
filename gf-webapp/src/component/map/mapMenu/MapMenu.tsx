import React, {useContext} from "react";
import {useCurrentDictionaryContext} from "../../../context/Context";
import {IMapMenuProps} from "../mapInterfaces";
import {MapContext} from "../MapContext";
import styles from "./mapMenu.module.scss";

import {MapMarkers} from "../mapMarkersList";

export const MapMenu = (props: IMapMenuProps) => {
  const {dictionary} = useCurrentDictionaryContext();
  const {markers, menuItem} = useContext(MapContext);
  const markerTypes = Array.from(new Set(markers.map(marker => marker.markerType)));


  return (<ul className={styles.menu}>
    {markerTypes.map((markerType, index) => (
      <li key={index}>
        <p className={styles.groupName}>
          {markerType !== "main" && markerType}
        </p>
        {markers.map((marker, i) => (
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
    ))}
  </ul>);
};