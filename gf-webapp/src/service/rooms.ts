import {Room} from "src/model/Room/Room";
import {RoomApiService} from "src/service/RoomApi/RoomApi";

export const getRoomNumber = (id:string | undefined) => {
  return id && +id < 10 ? `0${Number(id) + 1}` : id;
};

const shuffleArray = (array:Room[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const getShuffledRooms = async(displayedRoomsCount: number, currentRoomId: string) => {
  const rooms = await RoomApiService.getAllRooms();
  const shuffleRooms = shuffleArray(rooms);
  return shuffleRooms.filter((room, index) => room.id !== currentRoomId && index <= displayedRoomsCount);
};