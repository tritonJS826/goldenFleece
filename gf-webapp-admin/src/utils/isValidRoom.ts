import {RoomServices} from "src/model/Room/RoomServices";

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