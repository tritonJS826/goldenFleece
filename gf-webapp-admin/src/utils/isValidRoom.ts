import {RoomServices} from "src/model/Room/RoomServices";
import {RoomType} from "src/model/Room/RoomType";

/**
 * @description - checks if the given type exists in the RoomType
 * @param inputRoom - value from select field
 * @returns boolean
 */
export const isValidRoomType = (inputRoom: string): inputRoom is RoomType => {
  const itemsList: string[] = Object.values(RoomType);
  return itemsList.includes(inputRoom);
};

/**
 * @description - checks if the given service exists in the RoomServices
 * @param inputServices - value from checkbox field
 * @returns boolean
 */
export const isValidRoomService = (inputServices: string): inputServices is RoomServices => {
  const validServices: string[] = Object.values(RoomServices);
  return validServices.includes(inputServices);
};

/**
 * @description -update array of RoomServices
 * @param roomServices - array of RoomServices
 * @returns updated array of RoomServices
 */
export const changeRoomServices = (
  roomServices: RoomServices[],
  selectedService: RoomServices,
) => {
  if (roomServices.includes(selectedService)) {
    return roomServices.filter(roomService => roomService !== selectedService);
  }

  return [...roomServices, selectedService];
};