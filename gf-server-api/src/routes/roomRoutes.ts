import express from "express";
import {roomsService} from "src/service/serviceRooms";

export const roomsRouter = express.Router();

/**
 * Room model
 * @swagger
 *   components:
 *     schema:
 *       Room:
 *         type: object
 *         properties:
 *           dateIn:
 *             type: string
 *             description: check in date yyyy-mm-dd
 *           dateOut:
 *             type: string
 *             description: check out date yyyy-mm-dd
 *         required:
 *           - dateIn
 *           - dateOut
 *         example:
 *           dateIn: 2017-01-26
 *           dateOut: 2017-02-12
*/


/**
 * @swagger
 * paths:
 *   /api/rooms:
 *     get:
 *       tags: [Rooms]
 *       summary: Get list of rooms
 *       description: Retrieve a list of all rooms
 *       responses:
 *         200:
 *           description: A list of rooms.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     dateIn:
 *                       type: string
 *                       description: check in date yyyy-mm-dd
 *                     dateOut:
 *                       type: string
 *                       description: check out date yyyy-mm-dd
 *                   required:
 *                     - dateIn
 *                     - dateOut
 *                   example:
 *                     dateIn: 2017-01-26
 *                     dateOut: 2017-02-12
*/

roomsRouter.get("/api/rooms", roomsService.getRooms);

/**
 * @swagger
 * paths:
 *   /api/rooms:
 *     post:
 *       tags: [Test]
 *       summary: Comment or question to admin
 *       description: Comment or question to admin
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 apartmentsType:
 *                   type: string
 *                   description: the room's type
 *                 services:
 *                   type: string
 *                   description: the room's services
 *                 id:
 *                   type: string
 *                   description: the room's ID
 *                 description:
 *                   type: string
 *                   description: short room's description
 *                 descriptionLong:
 *                   type: string
 *                   description: the room's description
 *                 price:
 *                   type: number
 *                   description: the room's price
 *                 square:
 *                   type: number
 *                   description: the room's square
 *                 adults:
 *                   type: number
 *                   description: amount of adults who can stay in the room
 *                 promo:
 *                   type: string
 *                   description: the room's promo image URL
 *                 rating:
 *                   type: number
 *                   description: the room's rating
 *               required:
 *                 - apartmentsType
 *                 - services
 *                 - id
 *                 - description
 *                 - descriptionLong
 *                 - price
 *                 - square
 *                 - adults
 *                 - promo
 *                 - rating
 *               example:
 *                 apartmentsType: Single
 *                 services: WiFi, TeaCoffeeMaker
 *                 id: 1
 *                 description: A small room
 *                 descriptionLong: Dressed in soothing natural colour palettes with designs inspired by the natural landscape...
 *                 price: 300
 *                 square: 25
 *                 adults: 2
 *                 promo: https://uploads-ssl.webflow.com/5e38379f9141a20d42ea7ab3/618177a1165e33f6ca935321_506.jpg
 *                 rating: 10
 *       responses:
 *         200:
 *           description: Mail sent.
 */

roomsRouter.post("/api/rooms", roomsService.postRoom);

/**
 * @swagger
 * paths:
 *   /api/rooms/{room_id}:
 *     get:
 *       tags: [Room]
 *       summary: Get room by ID
 *       description: Retrieve a room by ID
 *       responses:
 *         200:
 *           description: Room.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#components/schema/Room'
*/
roomsRouter.get("/api/rooms/:roomId", roomsService.getRoom);

/**
 * @swagger
 * paths:
 *   /api/rooms/{room_id}:
 *     put:
 *       tags: [Room]
 *       summary: Update room information by ID
 *       description: Update room by ID
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schema/Room'
 *       responses:
 *         200:
 *           description: Room.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#components/schema/Room'
*/
roomsRouter.put("/api/rooms/:roomId", roomsService.putRoom);

/**
 * @swagger
 * paths:
 *   /api/rooms/{room_id}:
 *     delete:
 *       tags: [Room]
 *       summary: Delete room by ID
 *       description: Delete a room by ID
 *       responses:
 *         200:
 *           description: Successful room delete.
 *           content:
 *             application/json: {}
*/
roomsRouter.delete("/api/rooms/:roomId", roomsService.deleteRoom);
