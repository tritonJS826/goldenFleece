import {Currency} from "src/model/Currency";
import {Price} from "src/model/Price";
import {Room} from "src/model/Room/Room";
import {roomApi, roomsApi} from "src/service/ApiInitialization";

//TODO: remove after adding roomDTO into swagger
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RoomDTO = Room & any;

export class RoomApiService {

  public static async getAllRooms() {
    // TODO: create Swagger RoomDTO an use instead of as unknown as Room
    const roomsRaw: RoomDTO[] = await roomsApi.apiRoomsGet() as unknown as Room[];

    const rooms: Room[] = roomsRaw.map(room => ({
      ...room,
      price: new Price(Currency.GEL, room.price),
      images: room.slider,
      promoImgUrl: room.promo,
    }));


    return rooms;
  }

  public static async getRoomById(roomId: string) {
    // TODO: create Swagger RoomDTO an use instead of as unknown as Room
    const roomDTO: RoomDTO = await roomApi.apiRoomsRoomIdGet({roomId}) as unknown as Room;

    const room: Room = {
      ...roomDTO,
      price: new Price(Currency.GEL, roomDTO.price),
      images: roomDTO.slider,
      promoImgUrl: roomDTO.promo,
    };

    return room;
  }

}