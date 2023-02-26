import {IAddRoom} from "../../../model/room";

export const room: IAddRoom = {
  apartmentsType: "Single",
  description: "",
  descriptionLong: "",
  price: 0,
  promo: "",
  rating: 0,
  services: "",
  slider: [],
};

export const errors:{[keyof: string]: string} = {};