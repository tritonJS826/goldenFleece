import {ApartmentServices} from "./ApartmentServices";
import {Price} from "../Price";
import {Apartments} from "./Apartments";

export interface AddRoom {
  /**
   * Url to promo image;
   */
  promoImgUrl: string;
  /**
   * Apartment's type
   */
  apartmentsType: Apartments;
  /**
   * Available services for room
   */
  services: ApartmentServices[];
  /**
   * Description about room
   */
  description: string;

  /**
   * Long room description
   */
  descriptionLong: string;
  /**
   * Room price
   */
  price: Price;
  /**
   * Array of paths to images of room
   */
  images: string[];

  /**
   * Max adults amount in room
   */
  adults: number;

  /**
   * Room's square in m^2
   */
  square: number;

  /**
   * Room's rating from 1 to 10
   */
  rating: number;

}

export interface Room extends AddRoom {
  /**
   * Room's ID
   */
  id: string,
}