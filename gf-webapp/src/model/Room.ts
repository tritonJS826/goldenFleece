export interface Room {
  /**
   * Apartment's type
   */
  apartments?: Apartments,
  /**
   * Available services for room
   */
  services?: Services,
  /**
   * Room's ID
   */
  id?: string,
  /**
   * Description about room
   */
  description?: string,
  /**
   * Price
   */
  price?: number,
  /**
   * Array of paths to images of room
   */
  images?: string[],
  /**
   * Rating can be from 1 to 10
   */
  rating?: number;

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
