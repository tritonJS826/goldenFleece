import {Customer} from "src/model/Room/Customer";
import {Period} from "src/model/Room/Period";

export class RoomBooked {

  /**
   * Info about customer
   */
  public customer: Customer;

  /**
   * Period for which the room is booked
   */
  public period: Period;

  constructor(arg: RoomBooked) {
    this.customer = arg.customer;
    this.period = arg.period;
  }

}