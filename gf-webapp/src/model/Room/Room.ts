import {RoomServices} from "src/model/Room/RoomServices";
import {Price} from "src/model/Price/Price";
import {RoomBooked} from "src/model/Room/RoomBooked";
import {RoomPaid} from "src/model/Room/RoomPaid";
import {Dictionary} from "src/model/Dictionary/Dictionary";

/**
 * Room with ID
 */
export class Room {

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

  /**
   * Room id
   */
  public id: string;

  /**
   * Dictionary with all possible languages on site
   */
  public dictionary: Dictionary;

  constructor(roomData: Room) {
    this.id = roomData.id;
    this.adults = roomData.adults;
    this.children = roomData.children;
    this.description = roomData.description;
    this.descriptionLong = roomData.descriptionLong;
    this.images = roomData.images;
    this.price = roomData.price;
    this.promoImgUrl = roomData.promoImgUrl;
    this.rating = roomData.rating;
    this.services = roomData.services;
    this.square = roomData.square;
    this.roomNumber = roomData.roomNumber;
    this.booked = roomData.booked;
    this.paid = roomData.paid;
    this.dictionary = roomData.dictionary;
  }

}