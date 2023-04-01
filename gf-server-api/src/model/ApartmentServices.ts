/**
 * Apartment services
 * @swagger
 *   components:
 *     schemas:
 *       ApartmentServices:
 *         type: string
 *         enum:
 *           - WiFi
 *           - Laundry
 *           - TeaCoffeeMaker
 *           - Heating
 *           - AirportShuttle
 *       example: WiFi
 */
export enum ApartmentServices {
  /**
   * The hotel provides WiFi
   */
  WiFi = "WiFi",
  /**
 * The hotel provides laundry facilities
 */
  Laundry = "Laundry",
  /**
   * Room's service includes place to make tea and coffee
   */
  TeaCoffeeMaker = "TeaCoffeeMaker",
  /**
   * Room's service includes heating
   */
  Heating = "Heating",
  /**
   * The hotel provides an airport shuttle
   */
  AirportShuttle = "AirportShuttle",
}
