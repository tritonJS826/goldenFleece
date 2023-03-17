import {Currency} from "../../../model/Currency";
import {Price} from "../../../model/Price";
import {ApartmentServices} from "../../../model/Room/ApartmentServices";
import {AddRoom} from "../../../model/Room/Room";

const addRoomPrice = new Price(Currency.GEL, 0);

export class Room implements AddRoom {

  public adults: number;

  public apartmentsType: string;

  public description: string;

  public descriptionLong: string;

  public images: string[];

  public price: Price;

  public promoImgUrl: string;

  public rating: number;

  public services: ApartmentServices[];

  public square: number;

  // eslint-disable-next-line max-params
  constructor(
    adults: number,
    apartmentsType: string,
    description: string,
    descriptionLong: string,
    images: string[],
    price: Price,
    promoImgUrl: string,
    rating: number,
    services: ApartmentServices[],
    square: number,
  ) {
    this.adults = adults;
    this.apartmentsType = apartmentsType;
    this.description = description;
    this.descriptionLong = descriptionLong;
    this.images = images;
    this.price = price;
    this.promoImgUrl = promoImgUrl;
    this.rating = rating;
    this.services = services;
    this.square = square;
  }

}

export const roomStartState = new Room(1, "Single", "", "", [], addRoomPrice, "", 0, [], 30);