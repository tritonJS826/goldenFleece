import {Currency} from "src/model/Currency";
import {Price} from "src/model/Price";
import {Apartments} from "src/model/Room/Apartments";
import {NewRoom} from "src/model/Room/NewRoom";


const defaultPrice = new Price(Currency.GEL, 0);
export const defaultRoom = new NewRoom({
  adults: 1,
  apartmentsType: Apartments.Single,
  description: "",
  descriptionLong: "",
  images: [],
  price: defaultPrice,
  promoImgUrl: "",
  rating: 0,
  services: [],
  square: 30,
});