export interface IRoom {
  apartmentsType?: string,
  description?: string,
  descriptionLong?: string,
  id?: string,
  price?: number,
  promo?: string,
  rating?: number
  services?: string,
  slider?: string[],
}

export type RoomType = {
  room:IRoom;
}

export type RoomsType = {
  rooms:IRoom[]
}

export interface IAddRoom {
  apartmentsType: string,
  description: string,
  descriptionLong: string,
  price: number,
  promo: string,
  rating: number
  services: string,
  slider: string[],
}