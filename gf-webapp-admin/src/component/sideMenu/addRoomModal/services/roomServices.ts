export const changeRoomServices = (
  roomServices: string[],
  selectedService: string,
) => {
  return roomServices?.indexOf(selectedService) === -1 ?
    [...roomServices, selectedService]
    :
    roomServices?.filter(value => value !== selectedService);
};