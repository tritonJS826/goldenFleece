export const changeRoomServices = (
  roomServices: string[] | undefined,
  selectedService: string,
) => {
  return roomServices?.indexOf(selectedService) === -1 ?
    [...roomServices, selectedService]
    :
    roomServices?.filter(value => value !== selectedService);
};