import {useState} from "react";
import {MapMenu} from "./mapMenu/MapMenu";
import {MapContext} from "./MapContext";
import {Marker} from "./mapLeaflet/mapMarkers/mapMarker/Marker";
import {ItemDescription} from "./itemDescription/ItemDescription";
import {MapLeaflet} from "./mapLeaflet/MapLeaflet";
import styles from "./Map.module.scss";

/**
 * Marker props
 */
export interface MarkerProps {
  /**
   * List of markers
   */
  markers: Marker[];
}

/**
 * Map component
 */
export const Map: React.FC<MarkerProps> = (props: MarkerProps) => {
  const [menuItem, setMenuItem] = useState<Marker | null>(null);

  /**
   * Sets the selected menu item
   */
  const menuItemHandler = (marker: Marker) => {
    setMenuItem(marker);
  };

  return (
    <MapContext.Provider
      value={{
        markers: props.markers,
        menuItem,
        setMenuItem,
      }}
    >
      <MapMenu menuItemHandler={menuItemHandler} />
      <ItemDescription />
      <div className={styles.map}>
        <MapLeaflet />
      </div>
    </MapContext.Provider>
  );
};