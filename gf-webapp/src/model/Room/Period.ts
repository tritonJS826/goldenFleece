/**
 * Period (date range)
 */
export class Period {

  /**
   * Day of customer's arrival in format yyyy-mm-dd
   */
  public dateIn: Date;

  /**
   * Day of customer's departure in format yyyy-mm-dd
   */
  public dateOut: Date;

  constructor(periodData: Period) {
    this.dateIn = periodData.dateIn;
    this.dateOut = periodData.dateOut;
  }

}