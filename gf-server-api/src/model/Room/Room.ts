import {NewRoom} from "src/model/Room/NewRoom";

type RoomWithId = NewRoom & { id: string };

/**
 * Room model
 * @swagger
 *   components:
 *     schemas:
 *       Room:
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
 *           - id
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
export class Room extends NewRoom {

  /**
    * Room id
    */
  public id: string;

  constructor(roomWithIdData: RoomWithId) {
    super(roomWithIdData);
    this.id = roomWithIdData.id;
  }

}