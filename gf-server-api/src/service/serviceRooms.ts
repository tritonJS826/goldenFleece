import {roomsRepository} from "../repository/RoomRepository";
import {Room} from "../model/Room";
import {Response, Request} from "express";


class RoomsService {

  /**
   *
   * @returns all available rooms
   */
  public async getRooms(req: Request, res: Response): Promise<Room[]> {
    const allRooms = await roomsRepository.getRooms();
    res.status(200).send(allRooms);
    return allRooms;
  }

}


export const roomsService = new RoomsService();
