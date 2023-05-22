import {createContext} from "react";
import {Marker} from "./mapLeaflet/mapMarkers/mapMarker/Marker";

/**
 * Map context
 */
export interface MapContext {
  /**
  * Markers list
  */
  markers: Marker[];
  /**
  * Selected menu item
  */
  menuItem: Marker | null;
  /**
  * Sets the selected menu item
  */
  setMenuItem: React.Dispatch<React.SetStateAction<Marker | null>>;
}

export const MapContext = createContext<MapContext>({} as MapContext);