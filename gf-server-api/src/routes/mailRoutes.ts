import express from "express";
import {mailService} from "../service/mailService/mailService";

export const mailRouter = express.Router();

/**
 * @swagger
 * paths:
 *   /api/ask-admin:
 *     post:
 *       tags: [Mail]
 *       summary: Comment or question to admin
 *       description: Comment or question to admin
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: customers name
 *                 email:
 *                   type: string
 *                   description: customers email
 *                 phone:
 *                   type: string
 *                   description: customers phone
 *                 message:
 *                   type: string
 *                   description: customers comment or question addressed to admin
 *               required:
 *                 - email
 *                 - name
 *                 - message
 *               example:
 *                 email: example@gmail.com
 *                 name: Ivan
 *                 phone: +379221233209
 *                 message: Could you help me to bring my baggage
 *       responses:
 *         200:
 *           description: Mail sent.
 */
mailRouter.post("/api/ask-admin", mailService.askAdminMail);

/**
 * @swagger
 * paths:
 *   /api/booking-request:
 *     post:
 *       tags: [Mail]
 *       summary: Customer trying to book room
 *       description: Customer trying to book room
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   description: customers email
 *                 name:
 *                   type: string
 *                   description: customers name
 *                 dateIn:
 *                   type: string
 *                   description: check in date yyyy-mm-dd
 *                 dateOut:
 *                   type: string
 *                   description: check out date yyyy-mm-dd
 *                 roomNumber:
 *                   type: number
 *                   description: room number
 *                 adultsAmount:
 *                   type: number
 *                   description: adults amount
 *                 childrenAmount:
 *                   type: number
 *                   description: children amount
 *                 phone:
 *                   type: string
 *                   description: customers phone
 *                 message:
 *                   type: string
 *                   description: customers comment or question addressed to admin
 *               required:
 *                 - email
 *                 - name
 *                 - dateIn
 *                 - dateOut
 *                 - roomNumber
 *                 - adultsAmount
 *                 - childrenAmount
 *               example:
 *                 email: example@gmail.com
 *                 name: Ivan
 *                 dateIn: 2017-01-26
 *                 dateOut: 2017-02-12
 *                 roomNumber: 12
 *                 adultsAmount: 2
 *                 childrenAmount: 1
 *                 phone: +379221233209
 *                 message: Could you help me to bring my baggage?
 *       responses:
 *         200:
 *           description: Message sent
 */
mailRouter.post("/api/booking-request", mailService.bookingRequestMail);