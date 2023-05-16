import {createContext} from "react";
import {IMarker} from "gf-ui-lib/src/components/Map/mapContent/marker/IMarker";

export interface IMapContext {
  markers: IMarker[];
  menuItem: IMarker | null;
  setMenuItem: React.Dispatch<React.SetStateAction<IMarker | null>>;
}

export const MapContext = createContext<IMapContext>({} as IMapContext);