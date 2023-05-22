import {Price} from "src/model/Price/Price";
import {RoomServices} from "src/model/Room/RoomServices";
import {NewRoom as NewRoomDTO} from "src/autogenerated/gf-server-api/models/NewRoom";
import {RoomBooked} from "src/model/Room/RoomBooked";
import {RoomPaid} from "src/model/Room/RoomPaid";
import {Dictionary} from "src/model/Dictionary/Dictionary";

/**
 * Room without ID
 */
export class NewRoom {

  /**
   * Url to promo image;
   */
  public promoImgUrl: string;

  /**
   * Available services for room
   */
  public services: RoomServices[];

  /**
   * Description about room
   */
  public description: string;

  /**
   * Long room description
   */
  public descriptionLong: string;

  /**
   * Room price
   */
  public price: Price;

  /**
   * Array of paths to images of room
   */
  public images: string[];

  /**
   * Max adults amount in room
   */
  public adults: number;

  /**
  * Max adults amount in room
  */
  public children: number;

  /**
   * Room's square in m^2
   */
  public square: number;

  /**
   * Room's rating from 1 to 10
   */
  public rating: number;

  /**
   * Room's number (from 1 to infinity)
   */
  public roomNumber: number;

  /**
   * Info about whom and for what dates the room is booked
   */
  public booked: RoomBooked[];

  /**
   * Info about whom and for what dates the room is paid
   */
  public paid: RoomPaid[];

  public dictionary: Dictionary;

  constructor(newRoomData: NewRoom) {
    this.adults = newRoomData.adults;
    this.children = newRoomData.children;
    this.description = newRoomData.description;
    this.descriptionLong = newRoomData.descriptionLong;
    this.images = newRoomData.images;
    this.price = newRoomData.price;
    this.promoImgUrl = newRoomData.promoImgUrl;
    this.rating = newRoomData.rating;
    this.services = newRoomData.services;
    this.square = newRoomData.square;
    this.roomNumber = newRoomData.roomNumber;
    this.booked = newRoomData.booked;
    this.paid = newRoomData.paid;
    this.dictionary = newRoomData.dictionary;
  }

  /**
   * Convert class NewRoom to NewRoomDTO object
   * @returns BewRoomDTO object
   */
  public toNewRoomDTO?(): NewRoomDTO {
    return {
      services: this.services,
      description: this.description,
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