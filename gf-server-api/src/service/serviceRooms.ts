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

  public async postRoom(req: Request, res: Response): Promise<Room> {
    const allRooms = await roomsRepository.getRooms();
    const room: Room = {
      id: (allRooms.length) + "",
      apartments: req.body.apartments,
      services: req.body.services,
      description: req.body.description,
      images: req.body.images,
      price: req.body.price,
      rating: req.body.rating,
    };
    await roomsRepository.postRooms(room);
    res.send(room);
    return room;
  }

}


export const roomsService = new RoomsService();
