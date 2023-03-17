import {createContext} from "react";
import {AddRoom} from "../../../model/Room/Room";

interface IAddRoomContext {
  roomStartState: AddRoom;
}

export const AddRoomContext = createContext<IAddRoomContext>({} as IAddRoomContext);