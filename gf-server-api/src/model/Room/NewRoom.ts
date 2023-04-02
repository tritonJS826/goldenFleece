import {Price} from "src/model/Room/Price";
import {Apartments} from "src/model/Room/Apartments";
import {ApartmentServices} from "src/model/Room/ApartmentServices";

/**
 * NewRoom model
 * @swagger
 *   components:
 *     schemas:
 *       NewRoom:
 *         type: object
 *         properties:
 *           apartmentsType:
 *             $ref: '#/components/schemas/Apartments'
 *           services:
 *             type: string[]
 *             items:
 *               $ref: '#/components/schemas/ApartmentServices'
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
 *         required:
 *           - promoImgUrl
 *           - apartmentsType
 *           - services
 *           - description
 *           - descriptionLong
 *           - price
 *           - images
 *           - square
 *           - adults
 *           - rating
 */
export class NewRoom {

  /**
     * Url to promo image;
     */
  public promoImgUrl: string;

  /**
    * Apartment's type
    */
  public apartmentsType: Apartments;

  /**
    * Available services for room
    */
  public services: ApartmentServices[];

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
    * Room's square in m^2
    */
  public square: number;

  /**
    * Room's rating from 1 to 10
    */
  public rating: number;

  // eslint-disable-next-line max-params
  constructor(arg: NewRoom) {
    this.adults = arg.adults;
    this.apartmentsType = arg.apartmentsType;
    this.description = arg.description;
    this.descriptionLong = arg.descriptionLong;
    this.images = arg.images;
    this.price = arg.price;
    this.promoImgUrl = arg.promoImgUrl;
    this.rating = arg.rating;
    this.services = arg.services;
    this.square = arg.square;
  }

}