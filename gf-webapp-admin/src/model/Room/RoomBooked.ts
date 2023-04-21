import {Customer} from "src/model/Customer/Customer";
import {Period} from "src/model/Room/Period";

/**
 * Info about whom and for what dates the room is booked
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