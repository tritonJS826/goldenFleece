import {NewRoom} from "src/model/Room/NewRoom";
import {Room as RoomDTO} from "src/autogenerated/gf-server-api/models/Room";

type RoomWithId = NewRoom & {id: string};

/**
 * Room with ID
 */
export class Room extends NewRoom {

  /**
   * Room id
   */
  public id: string;

  constructor(roomWithIdData: RoomWithId) {
    super(roomWithIdData);
    this.id = roomWithIdData.id;
  }

  /**
   * Convert class Room to RoomDTO object
   * @returns RoomDTO object
   */
  public toRoomDTO(): RoomDTO {
    return {
      type: this.type,
      services: this.services,
      description: this.description,
      id: this.id,
      descriptionLong: this.descriptionLong,
      price: this.price.toJSON(),
      square: this.square,
      adults: this.adults,
      children: this.children,
      promoImgUrl: this.promoImgUrl,
      images: this.images,
      rating: this.rating,
      roomNumber: this.roomNumber,
      booked: this.booked,
      paid: this.paid,
      dictionary: this.dictionary,
    };
  }

}