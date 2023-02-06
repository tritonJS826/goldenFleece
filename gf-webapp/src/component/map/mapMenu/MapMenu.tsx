import React, {useContext} from "react";
import {IMapMenuProps} from "../../../model/map.interfaces";
import {MapContext} from "../MapContext";
import styles from "./mapMenu.module.scss";

export const MapMenu = (props: IMapMenuProps) => {
  const {markers, menuItem} = useContext(MapContext);
  const markerGroups = Array.from(new Set(markers.map(marker => marker.markerGroup)));

  return (<ul className={styles.menu}>
    {markerGroups.map((markerGroup, index) => (
      <li key={index}>
        <p className={styles.groupName}>
          {markerGroup !== "Main hotel" && markerGroup}
        </p>
        {markers.map(marker => (
          markerGroup === marker.markerGroup &&
          <span onClick={() => props.menuItemHandler(marker)}
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