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

  constructor(arg: Customer) {
    this.id = arg.id;
    this.name = arg.name;
    this.email = arg.email;
    this.phone = arg.phone;
  }

}