import {Room} from "../model/Room";
import {readFile} from "../utils/readFile";
import {writeFile} from "../utils/writeFile";

const PATH_TO_FILE_WITH_ROOMS = "./DTO/roomsDTO.json";

class RoomsRepository {

  /**
   *
   * @returns all rooms
   */
  public async getRooms(): Promise<Room[]> {
    const rawRooms: string = await readFile(PATH_TO_FILE_WITH_ROOMS);
    const rooms: Room[] = await JSON.parse(rawRooms);
    return rooms;
  }

  /**
   *
   * @returns room by ID
   */
  public async getRoom(roomId: string): Promise<Room> {
    const rawRooms: string = await readFile(PATH_TO_FILE_WITH_ROOMS);
    const rooms: Room[] = await JSON.parse(rawRooms);
    const receivedRoom: Room[] = rooms.filter((room) => parseInt(room.id) === parseInt(roomId));
    return receivedRoom[0];
  }

  /**
   *
   * @returns rooms without deleted room
   */
  public async deleteRoom(roomId: string): Promise<Room[]> {
    const rawRooms: string = await readFile(PATH_TO_FILE_WITH_ROOMS);
    const rooms: Room[] = await JSON.parse(rawRooms);
    const filterDeletedRoom = rooms.filter(room => parseInt(room.id) !== parseInt(roomId));
    const postRoomsRaw = JSON.stringify(filterDeletedRoom);
    await writeFile(PATH_TO_FILE_WITH_ROOMS, postRoomsRaw);
    return filterDeletedRoom;
  }

  /**
   *
   * @returns all rooms with a new room
   */
  public async postRoom(room: Room): Promise<Room[]> {
    const rawRooms: string = await readFile(PATH_TO_FILE_WITH_ROOMS);
    const rooms: Room[] = await JSON.parse(rawRooms);
    rooms.push(room);
    const postRoomsRaw = JSON.stringify(rooms);
    await writeFile(PATH_TO_FILE_WITH_ROOMS, postRoomsRaw);
    return rooms;
  }

  /**
   *
   * @returns all rooms with updated room
   */
  public async putRoom(updatedRoom: Room, roomId: string): Promise<Room[]> {
    const rawRooms: string = await readFile(PATH_TO_FILE_WITH_ROOMS);
    const rooms: Room[] = await JSON.parse(rawRooms);
    const updatedRooms = rooms.map((room) => {
      if (parseInt(room.id) === parseInt(roomId)) {
        return room = updatedRoom;
      } else {
        return room;
      }
    });
    const postRoomsRaw = JSON.stringify(updatedRooms);
    await writeFile(PATH_TO_FILE_WITH_ROOMS, postRoomsRaw);
    return updatedRooms;
  }

}


export const roomsRepository = new RoomsRepository();