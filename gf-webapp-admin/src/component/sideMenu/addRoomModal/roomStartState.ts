import {IRoom} from "../../../model/room";

export const roomStartState: IRoom = {
  apartmentsType: "Single",
  description: "",
  descriptionLong: "",
  price: 0,
  square: 30,
  adultsAmount: 1,
  promo: "",
  rating: 0,
  services: "",
  slider: [],
};

export const errors:{[keyof: string]: string} = {};