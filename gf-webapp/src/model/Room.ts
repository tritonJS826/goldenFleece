export interface Room {
  apartmentsType: string,
  description: string,
  descriptionLong: string,
  id: string,
  price: number,
  square: number,
  adults: number,
  promo: string,
  rating: number
  services: string,
  slider: string[],
}

export type RoomType = {
  room: Room
}