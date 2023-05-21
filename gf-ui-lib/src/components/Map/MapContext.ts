import {createContext} from "react";
import {Marker} from "./mapContent/marker/Marker";

export interface MapContext {
  markers: Marker[];
  menuItem: Marker | null;
  setMenuItem: React.Dispatch<React.SetStateAction<Marker | null>>;
}

export const MapContext = createContext<MapContext>({} as MapContext);