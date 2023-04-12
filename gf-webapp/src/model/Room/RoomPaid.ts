import {Customer} from "src/model/Room/Customer";
import {Period} from "src/model/Room/Period";

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