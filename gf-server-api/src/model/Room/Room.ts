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
 *           description:
 *             type: string
 *             description: Short room's description.
 *             example: A small room
 *           id:
 *             type: string
 *             description: The room's ID.
 *             example: 0
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
 *           - id
 *           - description
 *           - descriptionLong
 *           - price
 *           - images
 *           - square
 *           - adults
 *           - rating
 */
import {NewRoom} from "src/model/Room/NewRoom";

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

}