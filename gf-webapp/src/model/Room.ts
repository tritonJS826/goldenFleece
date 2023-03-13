export interface Room {
  /**
   * Room's apartments type
   */
  apartmentsType: string,
  /**
   * Short description about room
   */
  description: string,
  /**
   * Description about room
   */
  descriptionLong: string,
  /**
   * Room's ID
   */
  id: string,
  /**
   * Room's price
   */
  price: number,
  /**
   * Room's square in meters
   */
  square: number,
  /**
   * Amount of adults who can stay in the room
   */
  adults: number,
  /**
   * Promo image URL of the room
   */
  promo: string,
  /**
   * Rating can be from 1 to 10
   */
  rating: number
  /**
   * Available services for room
   */
  services: string,
  /**
   * slider images URL of the rooms
   */
  slider: string[],
}