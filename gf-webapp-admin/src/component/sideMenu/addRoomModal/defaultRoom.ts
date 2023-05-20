import {Currency} from "src/model/Price/Currency";
import {Price} from "src/model/Price/Price";
import {RoomType} from "src/model/Room/RoomType";
import {NewRoom} from "src/model/Room/NewRoom";
import {RoomServices} from "src/model/Room/RoomServices";

const DEFAULT_STRING_VALUE = "";
const DEFAULT_NUMBER_VALUE = 0;
const DEFAULT_PRICE = new Price(Currency.GEL, 0);
const DEFAULT_IMAGES: Array<string> = [];
const DEFAULT_SERVICES: Array<RoomServices> = [];
const DEFAULT_TYPE = RoomType.Single;
const DEFAULT_DATE = new Date();

export const defaultRoom = new NewRoom({
  adults: DEFAULT_NUMBER_VALUE,
  children: DEFAULT_NUMBER_VALUE,
  type: DEFAULT_TYPE,
  description: DEFAULT_STRING_VALUE,
  descriptionLong: DEFAULT_STRING_VALUE,
  images: DEFAULT_IMAGES,
  price: DEFAULT_PRICE,
  promoImgUrl: DEFAULT_STRING_VALUE,
  rating: DEFAULT_NUMBER_VALUE,
  services: DEFAULT_SERVICES,
  square: DEFAULT_NUMBER_VALUE,
  roomNumber: DEFAULT_NUMBER_VALUE,
  booked: [
    {
      customer: {
        id: DEFAULT_STRING_VALUE,
        name: DEFAULT_STRING_VALUE,
        email: DEFAULT_STRING_VALUE,
        phone: DEFAULT_STRING_VALUE,
      },
      period: {
        dateIn: DEFAULT_DATE,
        dateOut: DEFAULT_DATE,
      },
    },
  ],
  paid: [
    {
      customer: {
        id: DEFAULT_STRING_VALUE,
        name: DEFAULT_STRING_VALUE,
        email: DEFAULT_STRING_VALUE,
        phone: DEFAULT_STRING_VALUE,
      },
      period: {
        dateIn: DEFAULT_DATE,
        dateOut: DEFAULT_DATE,
      },
    },
  ],
  dictionary: {
    en: {
      title: DEFAULT_STRING_VALUE,
      description: DEFAULT_STRING_VALUE,
      descriptionLong: DEFAULT_STRING_VALUE,
    },
    ru: {
      title: DEFAULT_STRING_VALUE,
      description: DEFAULT_STRING_VALUE,
      descriptionLong: DEFAULT_STRING_VALUE,
    },
    ge: {
      title: DEFAULT_STRING_VALUE,
      description: DEFAULT_STRING_VALUE,
      descriptionLong: DEFAULT_STRING_VALUE,
    },
  },
});