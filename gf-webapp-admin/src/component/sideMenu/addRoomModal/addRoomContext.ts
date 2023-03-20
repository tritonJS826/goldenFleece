import {createContext} from "react";
import {NewRoom} from "src/model/Room/NewRoom";

interface IAddRoomContext {
  roomStartState: NewRoom;
}

export const AddRoomContext = createContext<IAddRoomContext>({} as IAddRoomContext);