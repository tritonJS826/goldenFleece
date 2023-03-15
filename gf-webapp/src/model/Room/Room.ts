import {Apartments} from "src/model/Room/Apartments";
import {ApartmentServices} from "src/model/Room/ApartmentServices";
import {Price} from "src/model/Price";

export interface Room {
  /**
   * Url to promo image;
   */
  promoImgUrl: string;
  /**
   * Apartment's type
   */
  apartmentsType: Apartments,
  /**
   * Available services for room
   */
  services: ApartmentServices[],
  /**
   * Room's ID
   */
  id: string,
  /**
   * Description about room
   */
  description: string,

  /**
   * Long room description
   */
  descriptionLong: string,
  /**
   * Room price
   */
  price: Price,
  /**
   * Array of paths to images of room
   */
  images: string[],

  /**
   * Max adults amount in room
   */
  adults: number

  /**
   * Room's square in m^2
   */
  square: number;

}


