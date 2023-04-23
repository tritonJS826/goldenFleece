import {createContext, useContext} from "react";
import {NewRoom} from "src/model/Room/NewRoom";

interface IAddRoomContext {
  room: NewRoom;
  setRoom: (room: NewRoom) => void;
}

export const AddRoomContext = createContext<IAddRoomContext | null>(null);

export const useAddRoomContext = () => {
  const addRoomContext = useContext(AddRoomContext);
  if (!addRoomContext) {
    throw new Error(
      "useAddRoomContext has to be used within <AddRoomContext.Provider>",
    );
  }
  return addRoomContext;
};