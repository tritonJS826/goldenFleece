import {ApartmentServices} from "src/model/Room/ApartmentServices";

export const changeRoomServices = (
  roomServices: ApartmentServices[],
  selectedService: ApartmentServices,
) => {
  if (roomServices.includes(selectedService)) {
    return roomServices.filter(roomService => roomService !== selectedService);
  }

  return [...roomServices, selectedService];
};