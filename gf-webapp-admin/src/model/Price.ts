import {Currency} from "src/model/Currency";

export class Price {

  /**
   * Price currency
   */
  public currency: Currency;

  /**
   * Price amount
   */
  public amount: number;

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

  /**
   * Get price amount
   */

  public getPriceAmount() {
    return this.amount;
  }

  /**
   * Set new price amount
   */

  public setNewPrice(amount: number) {
    return this.amount = amount;
  }

}