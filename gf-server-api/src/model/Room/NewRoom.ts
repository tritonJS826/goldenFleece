import {Price} from "src/model/Price/Price";
import {RoomServices} from "src/model/Room/RoomServices";
import {RoomBooked} from "src/model/Room/RoomBooked";
import {RoomPaid} from "src/model/Room/RoomPaid";
import {Dictionary} from "src/model/Dictionary/Dictionary";

/**
 * NewRoom model
 * @swagger
 *   components:
 *     schemas:
 *       NewRoom:
 *         type: object
 *         properties:
 *           services:
 *             type: string[]
 *             items:
 *               $ref: '#/components/schemas/RoomServices'
 *             example: [WiFi, Laundry]
 *           description:
 *             type: string
 *             description: Short room's description.
 *             example: A small room
 *           descriptionLong:
 *             type: string
 *             description: The room's description.
 *             example: Dressed in soothing natural colour palettes with designs inspired by the natural landscape...
 *           price:
 *             $ref: '#/components/schemas/Price'
 *             description: The room's price.
 *             example: 300 GEL
 *           square:
 *             type: number
 *             description: The room's square.
 *             example: 30
 *           adults:
 *             type: number
 *             description: Amount of adults who can stay in the room.
 *             example: 1
 *           children:
 *             type: number
 *             description: Amount of children who can stay in the room.
 *             example: 2
 *           promoImgUrl:
 *             type: string
 *             description: The room's promo image URL.
 *             example: https://uploads-ssl.webflow.com/5e38379f9141a20d42ea7ab3/618177a1165e33f6ca935321_506.jpg
 *           images:
 *             type: string[]
 *             items:
 *              type: string
 *             example: [
 *               https://uploads-ssl.webflow.com/5e38379f9141a20d42ea7ab3/618177a1165e33f6ca935321_506.jpg,
 *               https://uploads-ssl.webflow.com/5e38379f9141a20d42ea7ab3/618177a1165e33f6ca935321_506.jpg,
 *               https://uploads-ssl.webflow.com/5e38379f9141a20d42ea7ab3/618177a1165e33f6ca935321_506.jpg,
 *               https://uploads-ssl.webflow.com/5e38379f9141a20d42ea7ab3/618177a1165e33f6ca935321_506.jpg,
 *               https://uploads-ssl.webflow.com/5e38379f9141a20d42ea7ab3/618177a1165e33f6ca935321_506.jpg,
 *             ]
 *             description: The rooms slider images URL.
 *           rating:
 *             type: number
 *             description: The room's rating.
 *             example: 10
 *           roomNumber:
 *             type: number
 *             description: The room's number.
 *             example: 215
 *           booked:
 *             type: object[]
 *             items:
 *               $ref: '#/components/schemas/RoomBooked'
 *           paid:
 *             type: object[]
 *             items:
 *               $ref: '#/components/schemas/RoomPaid'
 *           dictionary:
 *             $ref: '#/components/schemas/Dictionary'
 *         required:
 *           - promoImgUrl
 *           - services
 *           - description
 *           - descriptionLong
 *           - price
 *           - images
 *           - square
 *           - adults
 *           - children
 *           - rating
 *           - roomNumber
 *           - booked
 *           - paid
 *           - dictionary
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
   * Max children amount in room
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
   * Dictionary with all possible languages on site
   */
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

}