import {useState} from "react";
import {MapMenu} from "./mapMenu/MapMenu";
import {MapContext} from "./MapContext";
import {IMarker} from "./mapContent/marker/IMarker";
import {ItemDescription} from "./itemDescription/ItemDescription";
import {MapLeaflet} from "./mapLeaflet/MapLeaflet";
import styles from "./Map.module.scss";

export interface MarkerProps {
  markers: IMarker[];
}

export const Map: React.FC<MarkerProps> = (props: MarkerProps) => {
  const [menuItem, setMenuItem] = useState<IMarker | null>(null);

  const menuItemHandler = (marker: IMarker) => {
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