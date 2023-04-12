import {Currency} from "src/model/Currency";
import {Price} from "src/model/Price";
import {RoomType} from "src/model/Room/RoomType";
import {NewRoom} from "src/model/Room/NewRoom";


const defaultPrice = new Price(Currency.GEL, 0);
export const defaultRoom = new NewRoom({
  adults: 1,
  children: 0,
  type: RoomType.Single,
  description: "",
  descriptionLong: "",
  images: [],
  price: defaultPrice,
  promoImgUrl: "",
  rating: 0,
  services: [],
  square: 30,
  roomNumber: 1,
  booked: [
    {
      customer: {
        id: "1",
        name: "Victor",
        email: "345@gmail.com",
        phone: "+34343434",
      },
      period: {
        dateIn: new Date(),
        dateOut: new Date(),
      },
    },
  ],
  paid: [
    {
      customer: {
        id: "1",
        name: "Victor",
        email: "345@gmail.com",
        phone: "+34343434",
      },
      period: {
        dateIn: new Date(),
        dateOut: new Date(),
      },
    },
  ],
});