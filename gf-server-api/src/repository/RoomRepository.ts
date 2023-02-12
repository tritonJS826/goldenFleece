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
    const rooms = await JSON.parse(rawRooms);
    return rooms;
  }

  public async postRooms(room: object): Promise<Room[]> {
    const rawRooms: string = await readFile(PATH_TO_FILE_WITH_ROOMS);
    const rooms = await JSON.parse(rawRooms);
    await rooms.push(room);
    const postRoomsRaw = await JSON.stringify(rooms);
    await writeFile(PATH_TO_FILE_WITH_ROOMS, postRoomsRaw);
    return rooms;
  }


}


export const roomsRepository = new RoomsRepository();