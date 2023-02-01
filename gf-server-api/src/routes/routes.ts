import express from "express";
import {roomsService} from "../service/serviceRooms";

const router = express.Router();

router.get("/api/rooms", roomsService.getRooms);

export {router};
// roomsRoutes