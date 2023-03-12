import {createContext} from "react";
import {IRoom} from "../../../model/room";

interface IAddRoomContext {
  roomStartState: IRoom;
}

export const AddRoomContext = createContext<IAddRoomContext>({} as IAddRoomContext);