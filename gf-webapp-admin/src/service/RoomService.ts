/* eslint-disable @typescript-eslint/no-explicit-any */
import {RoomApi} from "../autogenerated/gf-server-api/apis/RoomApi";
import {RoomsApi} from "../autogenerated/gf-server-api/apis/RoomsApi";
import {Room} from "../model/Room/Room";
import {NewRoom} from "../model/Room/NewRoom";
import {Price} from "../model/Price";

/**
 * Temporary function. Will be deleted after receiving a correct response from the server
 * @param roomRaw
 * @returns
 */
const roomDTOToBusinessConverter = (roomRaw: any) => new Room({
  ...roomRaw,
  promoImgUrl: roomRaw.promo,
  images: roomRaw.slider,
  price: new Price(roomRaw.price.currency, roomRaw.price.amount),
});

export const saveRoom = async (room: Room) => {
  const roomApi = new RoomApi;
  try {
    // TODO remove branch if-else with check id,
    if (room.id) {
      await roomApi.apiRoomsRoomIdPut({
        roomId: room.id,
        body: room,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getRooms = async () => {
  const roomsApi = new RoomsApi;
  const roomsRaw: any = await roomsApi.apiRoomsGet();

  // Converting types TODO: remove converter after back adjusting
  const rooms = roomsRaw.map(roomDTOToBusinessConverter);
  return rooms;
};

export const getRoom = async (id:string) => {
  const roomApi = new RoomApi;
  const roomRaw: any = await roomApi.apiRoomsRoomIdGet({roomId: id});

  // Converting types TODO: remove converter after back adjusting
  const room = roomDTOToBusinessConverter(roomRaw);
  return room;
};

export const deleteRoom = async (id: string) => {
  const roomApi = new RoomApi;
  await roomApi.apiRoomsRoomIdDelete({roomId: id});
};

export const postRoom = async (room: NewRoom) => {
  const roomsApi = new RoomsApi;
  await roomsApi.apiRoomsPost({body: room});
};