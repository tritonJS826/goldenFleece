/**
 * Period (date range)
 * @swagger
 *   components:
 *     schemas:
 *       Period:
 *         properties:
 *           dateIn:
 *             type: string
 *             format: date
 *             description: Day of arrival.
 *             example: '2023-04-12'
 *           dateOut:
 *             type: string
 *             format: date
 *             description: Departure day.
 *             example: '2023-04-15'
 *         required:
 *           - dateIn
 *           - dateOut
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

  constructor(arg: Period) {
    this.dateIn = arg.dateIn;
    this.dateOut = arg.dateOut;
  }

}