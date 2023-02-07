import {createContext} from "react";
import {IMapContext} from "./mapInterfaces";

export const MapContext = createContext<IMapContext>({} as IMapContext);