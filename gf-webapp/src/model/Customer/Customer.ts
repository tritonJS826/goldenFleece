/**
 * Customer who was or will be in hotel
 */
export class Customer {

  /**
   * Customer's ID
   */
  public id: string;

  /**
   * Customer's name
   */
  public name: string;

  /**
   * Customer's email
   */
  public email: string;

  /**
   * Customer's phone
   */
  public phone: string;

  constructor(customerData: Customer) {
    this.id = customerData.id;
    this.name = customerData.name;
    this.email = customerData.email;
    this.phone = customerData.phone;
  }

}