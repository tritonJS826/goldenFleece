import {roomsRepository} from "src/repository/RoomRepository";
import {Room} from "src/model/Room/Room";
import {Response, Request} from "express";

class RoomsService {

  /**
   * Get add rooms
   */
  public async getRooms(req: Request, res: Response): Promise<void> {
    const allRooms = await roomsRepository.getRooms();
    res.status(200).send(allRooms);
  }

  /**
   * Get room by Id
   */
  public async getRoom(req: Request, res: Response): Promise<void> {
    const roomId: string = req.params.roomId;
    const room = await roomsRepository.getRoom(roomId);
    res.status(200).send(room);
  }

  /**
   * Delete room
   */
  public async deleteRoom(req: Request, res: Response): Promise<void> {
    const roomId: string = req.params.roomId;
    const rooms = await roomsRepository.deleteRoom(roomId);
    res.status(200).send(rooms);
  }

  /**
   * Create new room
   */
  public async postRoom(req: Request, res: Response): Promise<void> {
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

    const room = new Room({
      id: parseInt(sortedRoomsId[sortedRoomsId.length - 1].id) + 1 + "",
      apartmentsType: req.body.apartmentsType,
      services: req.body.services,
      description: req.body.description,
      descriptionLong: req.body.descriptionLong,
      price: req.body.price,
      square: req.body.square,
      adults: req.body.adults,
      promoImgUrl: req.body.promoImgUrl,
      images: req.body.images,
      rating: req.body.rating,
    });
    await roomsRepository.postRoom(room);
    res.send(room);
  }

  /**
   * Update room data
   */
  public async putRoom(req: Request, res: Response): Promise<void> {
    const roomId: string = req.params.roomId;
    const updatedRoom = new Room({
      id: roomId,
      apartmentsType: req.body.apartmentsType,
      services: req.body.services,
      description: req.body.description,
      descriptionLong: req.body.descriptionLong,
      price: req.body.price,
      square: req.body.square,
      adults: req.body.adults,
      promoImgUrl: req.body.promoImgUrl,
      images: req.body.images,
      rating: req.body.rating,
    });
    const room = await roomsRepository.putRoom(updatedRoom, roomId);
    res.status(200).send(room);
  }

}

export const roomsService = new RoomsService();
