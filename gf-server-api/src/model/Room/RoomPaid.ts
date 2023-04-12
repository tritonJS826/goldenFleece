import {Customer} from "src/model/Room/Customer";
import {Period} from "src/model/Room/Period";

/**
 * Info about whom and for what dates the room is paid
 * @swagger
 *   components:
 *     schemas:
 *       RoomPaid:
 *         properties:
 *           customer:
 *             type: object[]
 *             $ref: '#/components/schemas/Customer'
 *           period:
 *             type: object[]
 *             $ref: '#/components/schemas/Period'
 *         required:
 *           - customer
 *           - period
 */
export class RoomPaid {

  /**
   * Info about customer
   */
  public customer: Customer;

  /**
   *  Period for which the room is paid
   */
  public period: Period;

  constructor(arg: RoomPaid) {
    this.customer = arg.customer;
    this.period = arg.period;
  }

}