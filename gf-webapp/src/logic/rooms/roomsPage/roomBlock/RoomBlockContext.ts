
import {createContext} from "react";
import {Room} from "../../../../model/Room";

interface IRoomBlockContext {
  rooms:Room[];
}

export const RoomBlockContext = createContext<IRoomBlockContext>({} as IRoomBlockContext);