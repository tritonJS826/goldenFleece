import {createContext} from "react";
import {IMapContext} from "./map.interfaces";

export const MapContext = createContext<IMapContext>({} as IMapContext);