import {RoomServices} from "src/model/Room/RoomServices";

export const changeRoomServices = (
  roomServices: RoomServices[],

  selectedService: RoomServices,

) => {
  return roomServices.indexOf(selectedService) === -1 ?
    [...roomServices, selectedService]
    :
    roomServices.filter(value => value !== selectedService);
};