import {Apartments} from "./Apartments";
import {ApartmentServices} from "./ApartmentServices";
import {Price} from "../Price";

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
  services: ApartmentServices,
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
}


