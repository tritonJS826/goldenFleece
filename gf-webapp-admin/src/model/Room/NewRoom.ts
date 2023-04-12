import {Price} from "src/model/Room/Price";
import {RoomType} from "src/model/Room/RoomType";
import {RoomServices} from "src/model/Room/RoomServices";
import {NewRoom as NewRoomDTO} from "src/autogenerated/gf-server-api/models/NewRoom";
import {RoomBooked} from "src/model/Room/RoomBooked";
import {RoomPaid} from "src/model/Room/RoomPaid";

export class NewRoom {

  /**
     * Url to promo image;
     */
  public promoImgUrl: string;

  /**
    * Apartment's type
    */
  public type: RoomType;

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

  constructor(arg: NewRoom) {
    this.adults = arg.adults;
    this.children = arg.children;
    this.type = arg.type;
    this.description = arg.description;
    this.descriptionLong = arg.descriptionLong;
    this.images = arg.images;
    this.price = arg.price;
    this.promoImgUrl = arg.promoImgUrl;
    this.rating = arg.rating;
    this.services = arg.services;
    this.square = arg.square;
    this.roomNumber = arg.roomNumber;
    this.booked = arg.booked;
    this.paid = arg.paid;
  }

  /**
   * Convert class NewRoom to NewRoomDTO object
   * @returns BewRoomDTO object
   */
  public toNewRoomDTO?(): NewRoomDTO {
    return {
      type: this.type,
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
    };
  }

}