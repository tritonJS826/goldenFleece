import {useContext} from "react";
import {MapContext} from "../MapContext";
import {Marker} from "../mapLeaflet/mapMarkers/mapMarker/Marker";
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

/**
 * Menu with locations marked with markers on the map
 */
export const MapMenu = (props: MapMenuProps) => {
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
            <div
              onClick={() => props.menuItemHandler(marker)}
              className={`${styles.menuItem} ${menuItem && marker.id === menuItem.id ? styles.checked : ""}`}
              key={marker.id}
            >
              <div className={styles.title}>
                {marker.name}
              </div>
              <img
                className={styles.image}
                src={marker.imgUrl}
                alt={marker.name}
              />
              <div>
                {marker.description}
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