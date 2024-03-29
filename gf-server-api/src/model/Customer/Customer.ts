/**
 *  Customer who was or will be in hotel
 * @swagger
 *   components:
 *     schemas:
 *       Customer:
 *         properties:
 *           id:
 *             type: string
 *             description: Customer's ID.
 *             example: 0
 *           name:
 *             type: string
 *             description: Customer's name.
 *             example: John
 *           email:
 *             type: string
 *             description: Customer's email.
 *             example: something@gmail.com
 *           phone:
 *             type: string
 *             description: Customer's phone.
 *             example: +12312312312
 *         required:
 *           - id
 *           - name
 *           - email
 *           - phone
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