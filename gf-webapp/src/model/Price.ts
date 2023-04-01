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

}