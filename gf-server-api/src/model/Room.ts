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
   * Number of the roosm's adults
   */
  adults: number,
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

