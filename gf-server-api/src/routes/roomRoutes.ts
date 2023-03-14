import express from "express";
import {roomsService} from "../service/serviceRooms";

export const roomsRouter = express.Router();

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
 *                   $ref: '#components/schema/Room'
 *     post:
 *       tags: [Rooms]
 *       summary: Add new room
 *       description: Add new room
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#components/schema/Room'
 *       responses:
 *         200:
 *           description: New room.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 $ref: '#components/schema/Room'
 *   /api/rooms/{room_id}:
 *     get:
 *       tags: [Room]
 *       summary: Get room by ID
 *       description: Retrieve a room by ID
 *       parameters:
 *       - name: room_id
 *         in: path
 *         required: true
 *         description: room ID
 *         schema:
 *           type: string
 *         example: 0
 *       responses:
 *         200:
 *           description: Room.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 $ref: '#components/schema/Room'
 *     put:
 *       tags: [Room]
 *       summary: Update room information by ID
 *       description: Update room by ID
 *       parameters:
 *       - name: room_id
 *         in: path
 *         required: true
 *         description: room ID
 *         schema:
 *           type: string
 *         example: 0
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#components/schema/Room'
 *       responses:
 *         200:
 *           description: Room.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 $ref: '#components/schema/Room'
 *     delete:
 *       tags: [Room]
 *       summary: Delete room by ID
 *       description: Delete a room by ID
 *       parameters:
 *       - name: room_id
 *         in: path
 *         required: true
 *         description: room ID
 *         schema:
 *           type: string
 *         example: 0
 *       responses:
 *         200:
 *           description: Successful room delete.
 *           content:
 *             application/json: {}
*/
roomsRouter.get("/api/rooms", roomsService.getRooms);
roomsRouter.post("/api/rooms", roomsService.postRoom);
roomsRouter.get("/api/rooms/:roomId", roomsService.getRoom);
roomsRouter.put("/api/rooms/:roomId", roomsService.putRoom);
roomsRouter.delete("/api/rooms/:roomId", roomsService.deleteRoom);