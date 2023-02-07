import {Room} from "../model/Room";
import {readFile} from "../utils/readFile";

const PATH_TO_FILE_WITH_ROOMS = "./static/roomsDTO.json";

class RoomsRepository {

  /**
   *
   * @returns all rooms
   */
  public async getRooms(): Promise<Room[]> {
    const rawRooms: string = await readFile(PATH_TO_FILE_WITH_ROOMS);
    const rooms = JSON.parse(rawRooms);
    return rooms;
  }

}


export const roomsRepository = new RoomsRepository();