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

  /**
   *
   * @returns room by ID
   */
  public async getRoom(req: Request, res: Response): Promise<Room> {
    const roomId: string = req.params.roomId;
    const room = await roomsRepository.getRoom(roomId);
    res.status(200).send(room);
    return room;
  }

  /**
   *
   * @returns all available rooms without deleted room
   */
  public async deleteRoom(req: Request, res: Response): Promise<Room[]> {
    const roomId: string = req.params.roomId;
    const rooms = await roomsRepository.deleteRoom(roomId);
    res.status(200).send(rooms);
    return rooms;
  }

  /**
   *
   * @returns new room
   */
  public async postRoom(req: Request, res: Response): Promise<Room> {
    const allRooms = await roomsRepository.getRooms();
    const sortedRoomsId = allRooms.sort((a, b) => {
      if (parseInt(a.id) > parseInt(b.id)) {
        return 1;
      }
      if (parseInt(a.id) < parseInt(b.id)) {
        return -1;
      }
      return 0;
    });
    const room: Room = {
      id: parseInt(sortedRoomsId[sortedRoomsId.length - 1].id) + 1 + "",
      apartmentsType: req.body.apartmentsType,
      services: req.body.services,
      description: req.body.description,
      descriptionLong: req.body.descriptionLong,
      price: req.body.price,
      promo: req.body.promo,
      slider: req.body.slider,
      rating: req.body.rating,
    };
    await roomsRepository.postRoom(room);
    res.send(room);
    return room;
  }

  /**
   *
   * @returns all available rooms with updated room
   */
  public async putRoom(req: Request, res: Response): Promise<Room[]> {
    const roomId: string = req.params.roomId;
    const updatedRoom: Room = {
      id: roomId,
      apartmentsType: req.body.apartmentsType,
      services: req.body.services,
      description: req.body.description,
      descriptionLong: req.body.descriptionLong,
      price: req.body.price,
      promo: req.body.promo,
      slider: req.body.slider,
      rating: req.body.rating,
    };
    const rooms = await roomsRepository.putRoom(updatedRoom, roomId);
    res.status(200).send(rooms);
    return rooms;
  }

}


export const roomsService = new RoomsService();
