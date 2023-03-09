/**
 * Room model
 * @swagger
 *   components:
 *     schema:
 *       Room:
 *         type: object
 *         properties:
 *           apartmentsType:
 *             type: string
 *             enum:
 *               - Single
 *               - Double
 *               - Twin
 *             required: true
 *             description: The room's type.
 *             example: Single
 *           services:
 *             type: string
 *             enum:
 *               - WiFi
 *               - Laundry
 *               - TeaCoffeeMaker
 *               - Heating
 *               - AirportShuttle
 *             required: true
 *             description: The room's services.
 *             example: WiFi, TeaCoffeeMaker
 *           id:
 *             type: string
 *             required: true
 *             description: The room's ID.
 *             example: 0
 *           description:
 *             type: string
 *             required: true
 *             description: Short room's description.
 *             example: A small room
 *           descriptionLong:
 *             type: string
 *             required: true
 *             description: The room's description.
 *             example: Dressed in soothing natural colour palettes with designs inspired by the natural landscape, our garden view suites are a warm and relaxing oasis overlooking the Grand Forest Metsovo garden and surrounding pine forest.
 *           price:
 *             type: number
 *             required: true
 *             description: The room's price.
 *             example: 300
 *           square:
 *             type: number
 *             required: true
 *             description: The room's square.
 *             example: 30
 *           adultsAmount:
 *             type: number
 *             required: true
 *             description: The room's audits number.
 *             example: 1
 *           promo:
 *             type: string
 *             required: true
 *             description: The room's promo image URL.
 *             example: https://uploads-ssl.webflow.com/5e38379f9141a20d42ea7ab3/618177a1165e33f6ca935321_506.jpg
 *           slider:
 *             type: array
 *             items:
 *              type:string
 *             example: [
 *               https://uploads-ssl.webflow.com/5e38379f9141a20d42ea7ab3/618177a1165e33f6ca935321_506.jpg,
 *               https://uploads-ssl.webflow.com/5e38379f9141a20d42ea7ab3/618177a1165e33f6ca935321_506.jpg,
 *               https://uploads-ssl.webflow.com/5e38379f9141a20d42ea7ab3/618177a1165e33f6ca935321_506.jpg,
 *               https://uploads-ssl.webflow.com/5e38379f9141a20d42ea7ab3/618177a1165e33f6ca935321_506.jpg,
 *               https://uploads-ssl.webflow.com/5e38379f9141a20d42ea7ab3/618177a1165e33f6ca935321_506.jpg,
 *             ]
 *             required: true
 *             description: The rooms slider images URL.
 *           rating:
 *             type: number
 *             required: true
 *             description: The room's rating.
 *             example: 10
 */

export interface Room {
  /**
   * Apartment's type
   */
  apartmentsType: Apartments,
  /**
   * Available services for room
   */
  services: Set<Services>,
  /**
   * Room's ID
   */
  id: string,
  /**
   * Short description about room
   */
  description: string,
  /**
   * Description about room
   */
  descriptionLong: string,
  /**
   * Price
   */
  price: number,
  /**
   * Room's square in meters
   */
  square: number,
  /**
   * Amount of adults who can stay in the room
   */
  adultsAmount: number,
  /**
   * Promo image URL of the room
   */
  promo: string,
  /**
   * slider images URL of the rooms
   */
  slider: string[],
  /**
   * Rating can be from 1 to 10
   */
  rating: number;

}

enum Apartments {
  Single,
  Double,
  Twin
}

enum Services {
  WiFi,
  Laundry,
  TeaCoffeeMaker,
  Heating,
  AirportShuttle
}

