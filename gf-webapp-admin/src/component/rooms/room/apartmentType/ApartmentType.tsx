import {useState} from "react";
import {Apartments} from "src/model/Room/Apartments";
import {ApartmentsList} from "src/component/rooms/room/apartmentType/apartmentsList/ApartmentsList";
import {useRoomContext} from "src/component/rooms/room/roomContext";
import {SmallTitle} from "gf-ui-lib/src/components/SmallTitle/SmallTitle";

export const ApartmentsType = () => {
  const {room, setRoom} = useRoomContext();

  const [apartmentType, setApartmentType] = useState<Apartments>(room.apartmentsType);
  const validApartments: string[] = Object.values(Apartments);

  const isValidApartment = (inputApartment: string): inputApartment is Apartments => {
    return validApartments.indexOf(inputApartment) !== -1;
  };

  const onChangeValue = (value: string) => {
    if (isValidApartment(value)) {
      setApartmentType(value);
      room.apartmentsType = value;
      setRoom(room);
    }
  };


  return (
    <div>
      <SmallTitle
        text="Room type"
      />
      <ApartmentsList
        apartmentsType={apartmentType}
        onChangeValue={onChangeValue}
      />
    </div>
  );
};