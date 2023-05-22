import {useContext, useEffect} from "react";
import {useMap} from "react-leaflet";
import {MapContext} from "../../MapContext";

/**
 * The component that centers the map on the selected location
 */
export const CenterOnMarker = () => {
  const map = useMap();
  const {menuItem} = useContext(MapContext);

  /**
   * Centers the map on the selected location
   */
  useEffect(() => {
    setTimeout(() => {
      if (menuItem) {
        map.setView([menuItem.x, menuItem.y]);
      }
    }, 10);
  }, [menuItem?.x, menuItem?.y]);

  return null;
};
