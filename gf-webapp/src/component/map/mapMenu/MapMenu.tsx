import React, {useContext} from "react";
import {IMapMenuProps} from "../map.interfaces";
import {MapContext} from "../MapContext";
import styles from "./mapMenu.module.scss";

export const MapMenu = (props: IMapMenuProps) => {
  const {markers, menuItem} = useContext(MapContext);

  return (<ul className={styles.menu}>
    {markers.map(marker => (
      <li onClick={() => props.menuItemHandler(marker)}
        className={`${styles.menuItem} ${marker.id === menuItem?.id ? styles.checked : ""}`}
        key={marker.id}
      >
        {marker.name}
      </li>
    ))}
  </ul>);
};