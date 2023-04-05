import {NewRoom} from "src/model/Room/NewRoom";
import {Room as RoomDTO} from "src/autogenerated/gf-server-api/models/Room";

type RoomArgs = NewRoom & {id: string};

export class Room extends NewRoom {

  /**
   * Room id
   */
  public id: string;

  constructor(args: RoomArgs) {
    super(args);
    this.id = args.id;
  }

  public toRoomDTO(): RoomDTO {
    return {
      apartmentsType: this.apartmentsType,
      services: this.services,
      description: this.description,
      id: this.id,
      descriptionLong: this.descriptionLong,
      price: this.price.toJSON(),
      square: this.square,
      adults: this.adults,
      promoImgUrl: this.promoImgUrl,
      images: this.images,
      rating: this.rating,
    };
  }

}