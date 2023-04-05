import {useState} from "react";
import {Apartments} from "src/model/Room/Apartments";
import {ApartmentsList} from "src/component/rooms/room/apartmentType/apartmentsList/ApartmentsList";
import {useRoomContext} from "src/component/rooms/room/roomContext";
import {SmallTitle} from "gf-ui-lib/components/SmallTitle/SmallTitle";


export const ApartmentsType = () => {
  const {room, setRoom} = useRoomContext();

  const [apartmentType, setApartmentType] = useState<Apartments>(room.apartmentsType);

  const onChangeValue = (apartment: Apartments) => {
    setApartmentType(apartment);
    room.apartmentsType = apartment;
    setRoom(room);
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