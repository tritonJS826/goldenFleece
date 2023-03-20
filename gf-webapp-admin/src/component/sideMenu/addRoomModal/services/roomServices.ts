import {ApartmentServices} from "src/model/Room/ApartmentServices";

export const changeRoomServices = (
  roomServices: ApartmentServices[],
  selectedService: ApartmentServices,
) => {
  return roomServices.indexOf(selectedService) === -1 ?
    [...roomServices, selectedService]
    :
    roomServices?.filter(value => value !== selectedService);
};