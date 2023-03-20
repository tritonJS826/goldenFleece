import {Price} from "src/model/Price";
import {Apartments} from "src/model/Room/Apartments";
import {ApartmentServices} from "src/model/Room/ApartmentServices";

export class NewRoom {

  /**
     * Url to promo image;
     */
  public promoImgUrl: string;

  /**
    * Apartment's type
    */
  public apartmentsType: Apartments;

  /**
    * Available services for room
    */
  public services: ApartmentServices[];

  /**
    * Description about room
    */
  public description: string;

  /**
    * Long room description
    */
  public descriptionLong: string;

  /**
    * Room price
    */
  public price: Price;

  /**
    * Array of paths to images of room
    */
  public images: string[];

  /**
    * Max adults amount in room
    */
  public adults: number;

  /**
    * Room's square in m^2
    */
  public square: number;

  /**
    * Room's rating from 1 to 10
    */
  public rating: number;

  // eslint-disable-next-line max-params
  constructor(arg: NewRoom) {
    this.adults = arg.adults;
    this.apartmentsType = arg.apartmentsType;
    this.description = arg.description;
    this.descriptionLong = arg.descriptionLong;
    this.images = arg.images;
    this.price = arg.price;
    this.promoImgUrl = arg.promoImgUrl;
    this.rating = arg.rating;
    this.services = arg.services;
    this.square = arg.square;
  }

}