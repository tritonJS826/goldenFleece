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
  WiFi = "WiFi",
  Laundry = "Laundry",
  TeaCoffeeMaker = "TeaCoffeeMaker",
  Heating = "Heating",
  AirportShuttle = "AirportShuttle",
}
