import {Apartments} from "src/model/Apartments";
import {ApartmentServices} from "src/model/ApartmentServices";
import {Price} from "src/model/Price";

/**
 * Room model
 * @swagger
 *   components:
 *     schemas:
 *       Room:
 *         type: object
 *         properties:
 *           apartmentsType:
 *             $ref: '#/components/schemas/Apartments'
 *           services:
 *             type: string[]
 *             items:
 *               $ref: '#/components/schemas/ApartmentServices'
 *             example: [WiFi, Laundry]
 *           id:
 *             type: string
 *             description: The room's ID.
 *             example: 0
 *           description:
 *             type: string
 *             description: Short room's description.
 *             example: A small room
 *           descriptionLong:
 *             type: string
 *             description: The room's description.
 *             example: Dressed in soothing natural colour palettes with designs inspired by the natural landscape...
 *           price:
 *             type: Price
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
 *           - id
 *           - description
 *           - descriptionLong
 *           - price
 *           - images
 *           - square
 *           - adults
 *           - rating
 */

export interface Room {
  /**
  * Url to promo image;
  */
  promoImgUrl: string;
  /**
   * Apartment's type
   */
  apartmentsType: Apartments,
  /**
   * Available services for room
   */
  services: ApartmentServices[],
  /**
   * Room's ID
   */
  id: string,
  /**
   * Short description about room
   */
  description: string,
  /**
   * Description about room
   */
  descriptionLong: string,
  /**
   * Price
   */
  price: Price,
  /**
  * Array of paths to images of room
  */
  images: string[],
  /**
   * Room's square in meters
   */
  square: number,
  /**
   * Amount of adults who can stay in the room
   */
  adults: number,
  /**
   * Rating can be from 1 to 10
   */
  rating: number;

}