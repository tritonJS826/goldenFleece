import {createContext, useContext} from "react";
import {Room} from "src/model/Room/Room";

interface IRoomContext {
  room: Room;
}

export const RoomContext = createContext<IRoomContext | null>(null);

export const useRoomContext = () => {
  const roomContext = useContext(RoomContext);
  if (!roomContext) {
    throw new Error(
      "useRoomContext has to be used within <RoomContext.Provider>",
    );
  }
  return roomContext;
};
