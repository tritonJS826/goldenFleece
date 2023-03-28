import {createContext} from "react";
import {Room} from "src/model/Room/Room";

interface IRoomContext {
  room: Room;
}

export const RoomContext = createContext<IRoomContext | null>(null);