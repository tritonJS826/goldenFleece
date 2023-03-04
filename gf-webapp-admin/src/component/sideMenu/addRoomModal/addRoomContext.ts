import {createContext} from "react";
import {IRoom} from "../../../model/room";

interface IAddRoomContext {
  room: IRoom;
  errors: {[keyof: string]: string};
}

export const AddRoomContext = createContext<IAddRoomContext>({} as IAddRoomContext);