import {Currency} from "src/model/Room/Currency";

/**
 * Price
 * @swagger
 *   components:
 *     schemas:
 *       Price:
 *         properties:
 *           currency:
 *             type: string
 *             $ref: '#/components/schemas/Currency'
 *           amount:
 *             type: number
 *         example: 300 GEL
 *         required:
 *           - currency
 *           - amount
 */
export class Price {

  /**
   * Price currency
   */
  private currency: Currency;

  /**
   * Price amount
   */
  private amount: number;

  constructor(currency: Currency, amount: number) {
    this.currency = currency;
    this.amount = amount;
  }

  /**
   * Get formatted price
   */
  public getFullPrice() {
    return `${this.amount} ${this.currency}`;
  }

}