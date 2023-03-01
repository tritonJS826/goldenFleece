import {RoomApi} from "../../autogenerated/gf-server-api/apis/RoomApi";
import {RoomsApi} from "../../autogenerated/gf-server-api/apis/RoomsApi";
import {IRoom} from "../model/room";

export const saveRoom = async (room: IRoom) => {
  const roomApi = new RoomApi;
  try {
    if (room.id) {
      await roomApi.apiRoomsRoomIdPut({roomId: room.id, body: room});
    }
  } catch (error) {
    console.log(error);
  }
};

export const getRooms = async () => {
  const roomsApi = new RoomsApi;
  const res = await roomsApi.apiRoomsGet();
  return res;
};

export const getRoom = async (id:string) => {
  const roomApi = new RoomApi;
  const res = await roomApi.apiRoomsRoomIdGet({roomId: id});
  return res;
};

export const deleteRoom = async (id: string) => {
  const roomApi = new RoomApi;
  const res = await roomApi.apiRoomsRoomIdDelete({roomId: id});
  return res;
};

export const postRoom = async (room: IRoom) => {
  const roomsApi = new RoomsApi;
  const res = await roomsApi.apiRoomsPost({body: room});
  return res;
};