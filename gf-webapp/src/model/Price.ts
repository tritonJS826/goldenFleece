import {Currency} from "src/model/Currency";

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