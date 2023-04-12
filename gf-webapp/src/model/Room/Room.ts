import {RoomType} from "src/model/Room/RoomType";
import {RoomServices} from "src/model/Room/RoomServices";
import {Price} from "src/model/Price";
import {RoomBooked} from "src/model/Room/RoomBooked";
import {RoomPaid} from "src/model/Room/RoomPaid";

export class Room {

  /**
   * Url to promo image;
   */
  public promoImgUrl: string;

  /**
   * Room's type
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

  /**
   * Room id
   */
  public id: string;

  constructor(arg: Room) {
    this.id = arg.id;
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

}