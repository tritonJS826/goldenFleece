import {Customer} from "src/model/Customer/Customer";
import {Period} from "src/model/Room/Period";

/**
 * Info about whom and for what dates the room is booked
 * @swagger
 *   components:
 *     schemas:
 *       RoomBooked:
 *         properties:
 *           customer:
 *             type: object
 *             $ref: '#/components/schemas/Customer'
 *           period:
 *             type: object
 *             $ref: '#/components/schemas/Period'
 *         required:
 *           - customer
 *           - period
 */
export class RoomBooked {

  /**
   * Info about customer
   */
  public customer: Customer;

  /**
   * Period for which the room is booked
   */
  public period: Period;

  constructor(roomBookedData: RoomBooked) {
    this.customer = roomBookedData.customer;
    this.period = roomBookedData.period;
  }

}