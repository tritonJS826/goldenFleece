import {Price} from "src/model/Room/Price";
import {RoomType} from "src/model/Room/RoomType";
import {RoomServices} from "src/model/Room/RoomServices";
import {RoomBooked} from "src/model/Room/RoomBooked";
import {RoomPaid} from "src/model/Room/RoomPaid";

/**
 * NewRoom model
 * @swagger
 *   components:
 *     schemas:
 *       NewRoom:
 *         type: object
 *         properties:
 *           type:
 *             $ref: '#/components/schemas/RoomType'
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
 *         required:
 *           - promoImgUrl
 *           - type
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
 */
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

}