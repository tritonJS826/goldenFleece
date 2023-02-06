import {createContext} from "react";
import {IMapContext} from "../../model/map.interfaces";

export const MapContext = createContext<IMapContext>({} as IMapContext);