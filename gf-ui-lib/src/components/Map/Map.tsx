import {useState} from "react";
import {MapMenu} from "./mapMenu/MapMenu";
import {MapContext} from "./MapContext";
import {Marker} from "./mapContent/marker/Marker";
import {ItemDescription} from "./itemDescription/ItemDescription";
import {MapLeaflet} from "./mapLeaflet/MapLeaflet";
import styles from "./Map.module.scss";

export interface MarkerProps {
  markers: Marker[];
}

export const Map: React.FC<MarkerProps> = (props: MarkerProps) => {
  const [menuItem, setMenuItem] = useState<Marker | null>(null);

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