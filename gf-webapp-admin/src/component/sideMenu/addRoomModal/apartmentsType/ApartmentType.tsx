import {useState} from "react";
import {Apartments} from "src/model/Room/Apartments";
import {ApartmentsList} from "src/component/sideMenu/addRoomModal/apartmentsType/apartmentsList/ApartmentsList";
import {useAddRoomContext} from "src/component/sideMenu/addRoomModal/addRoomContext";
import {SmallTitle} from "gf-ui-lib/src/components/SmallTitle/SmallTitle";

export const ApartmentsType = () => {
  const {room, setRoom} = useAddRoomContext();

  const [apartmentType, setApartmentType] = useState<Apartments>(room.apartmentsType);
  const validApartments: string[] = Object.values(Apartments);

  const isValidApartment = (inputApartment: string): inputApartment is Apartments => {
    return validApartments.includes(inputApartment);
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