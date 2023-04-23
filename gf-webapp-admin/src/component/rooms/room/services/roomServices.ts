import {RoomServices} from "src/model/Room/RoomServices";

export const changeRoomServices = (
  roomServices: RoomServices[],
  selectedService: RoomServices,
) => {
  if (roomServices.includes(selectedService)) {
    return roomServices.filter(roomService => roomService !== selectedService);
  }

  return [...roomServices, selectedService];
};