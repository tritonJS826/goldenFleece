import {ApartmentServices} from "src/model/Room/ApartmentServices";

export const changeRoomServices = (
  roomServices: ApartmentServices[],

  selectedService: ApartmentServices,

) => {
  return roomServices.includes(selectedService) ?
    roomServices.filter(value => value !== selectedService)
    :
    [...roomServices, selectedService];
};