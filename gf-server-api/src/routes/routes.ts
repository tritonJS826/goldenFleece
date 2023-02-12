import express from "express";
import {roomsService} from "../service/serviceRooms";

const router = express.Router();

/**
 * @swagger
 * /api/rooms:
 *   get:
 *     tags: [Rooms]
 *     summary: List of rooms
 *     description: Retrieve a list of all rooms
 *     responses:
 *       200:
 *         description: A list of rooms.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/schema/Room'
 *   post:
 *     tags: [Rooms]
 *     summary: List of rooms
 *     description: Retrieve a list of all rooms
 *     responses:
 *       200:
 *         description: A list of rooms.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/schema/Room'
*/
router.get("/api/rooms", roomsService.getRooms);
router.post("/api/rooms", roomsService.postRoom);

export {router};
