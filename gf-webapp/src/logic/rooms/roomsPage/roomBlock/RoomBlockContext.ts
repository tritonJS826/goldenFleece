
import {createContext} from "react";
import {Room} from "../../../../model/Room";

// interface IRoom {
//   apartmentsType: string,
//   description: string,
//   descriptionLong: string,
//   id: string,
//   price: number,
//   promo: string,
//   rating: number
//   services: string,
//   slider: string[],
// }

interface IRoomBlockContext {
  rooms:Room[];
}

export const RoomBlockContext = createContext<IRoomBlockContext>({} as IRoomBlockContext);