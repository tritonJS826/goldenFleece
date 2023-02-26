import {createContext} from "react";
import {IAddRoom} from "../../../model/room";

interface IAddRoomContext {
  room: IAddRoom;
  errors: {[keyof: string]: string};
}

export const AddRoomContext = createContext<IAddRoomContext>({} as IAddRoomContext);