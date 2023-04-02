import express from "express";
import {roomsService} from "src/service/serviceRooms";

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
 *                   $ref: '#/components/schemas/Room'
*/
roomsRouter.get("/api/rooms", roomsService.getRooms);

/**
 * @swagger
 * paths:
 *   /api/rooms:
*     post:
 *       tags: [Rooms]
 *       summary: Add new room
 *       description: Add new room
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NewRoom'
 *       responses:
 *         200:
 *           description: New room.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/NewRoom'
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
 *       parameters:
 *         - name: room_id
 *           in: path
 *           description: room ID
 *           schema:
 *             type: string
 *           required: true
 *           example: 0
 *       responses:
 *         200:
 *           description: Room.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Room'
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
 *       parameters:
 *         - name: room_id
 *           in: path
 *           description: room ID
 *           schema:
 *             type: string
 *           required: true
 *           example: 0
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Room'
 *       responses:
 *         200:
 *           description: Room.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Room'
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
roomsRouter.delete("/api/rooms/:roomId", roomsService.deleteRoom);
