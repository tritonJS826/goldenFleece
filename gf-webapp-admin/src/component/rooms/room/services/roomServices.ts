import {RoomServices} from "src/model/Room/RoomServices";

export const changeRoomServices = (
  roomServices: RoomServices[],

  selectedService: RoomServices,

) => {
  return roomServices.includes(selectedService) === false ?
    [...roomServices, selectedService]
    :
    roomServices.filter(value => value !== selectedService);
};