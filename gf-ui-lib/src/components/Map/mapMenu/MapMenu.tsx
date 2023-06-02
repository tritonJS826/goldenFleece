import {useContext, useEffect, useState} from "react";
import {MapContext} from "../MapContext";
import {Marker} from "../mapLeaflet/mapMarkers/mapMarker/Marker";
import {Title} from "../../Title/Title";
import {TitleLevel} from "../../Title/TitleLevel";
import styles from "./MapMenu.module.scss";

/**
 * Map Menu props
 */
interface MapMenuProps {
  /**
   * Callback triggered on map menu item click, sets which item was clicked on
   */
  menuItemHandler: (marker: Marker) => void;
}

const defaultIndex = -1;

/**
 * Menu with locations marked with markers on the map
 */
export const MapMenu = (props: MapMenuProps) => {
  const {markers, menuItem} = useContext(MapContext);
  const markerTypes = Array.from(new Set(markers.map(marker => marker.markerType)));

  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const [isMenuItemOpen, setIsMenuItemOpen] = useState(false);

  const menuItemOnClick = (id: number) => {
    setCurrentIndex(id ? id : defaultIndex);
    setIsMenuItemOpen(true);
    if (id === currentIndex) {
      if (isMenuItemOpen === false) {
        setIsMenuItemOpen(true);
      } else {
        setIsMenuItemOpen(false);
      }
    }
  };

  const renderMarkersList = () => {
    return markerTypes.map((markerType) => (
      <li key={markerType}>
        <p className={styles.groupName}>
          {markerType !== "main" && markerType}
        </p>
        {markers.map((marker) => (
          markerType === marker.markerType &&
            <div
              onClick={() => props.menuItemHandler(marker)}
              className={`${styles.menuItem} ${menuItem && marker.id === menuItem.id && isMenuItemOpen === true ? styles.checked : ""}`}
              key={marker.id}
            >
              <div
                onClick={() => menuItemOnClick(marker.id)}
                className={styles.accordion}
              >
                <Title
                  text={marker.name}
                  level={TitleLevel.h3}
                  style={styles.title}
                />
                <div
                  className={`${menuItem && marker.id === menuItem.id && isMenuItemOpen === true ? styles.panelChecked : styles.panel}`}
                >
                  <img
                    className={styles.image}
                    src={marker.imgUrl}
                    alt={marker.name}
                  />
                  <div>
                    {marker.description}
                  </div>
                </div>
              </div>
            </div>
        ))}
      </li>
    ));
  };

  return (
    <ul className={styles.menu}>
      {renderMarkersList()}
    </ul>
  );
};