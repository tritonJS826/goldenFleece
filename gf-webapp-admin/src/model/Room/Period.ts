export class Period {

  /**
   * Day of customer's arrival in format yyyy-mm-dd
   */
  public dateIn: Date;

  /**
   * Day of customer's departure in format yyyy-mm-dd
   */
  public dateOut: Date;

  constructor(arg: Period) {
    this.dateIn = arg.dateIn;
    this.dateOut = arg.dateOut;
  }

}