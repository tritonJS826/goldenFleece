import {useState} from "react";
import {RoomType} from "src/model/Room/RoomType";
import {ApartmentsList} from "src/component/rooms/room/apartmentType/apartmentsList/ApartmentsList";
import {useRoomContext} from "src/component/rooms/room/roomContext";
import {SmallTitle} from "gf-ui-lib/components/SmallTitle/SmallTitle";

export const ApartmentsType = () => {
  const {room, setRoom} = useRoomContext();

  const [apartmentType, setApartmentType] = useState<RoomType>(room.type);
  const validApartments: string[] = Object.values(RoomType);

  const isValidApartment = (inputApartment: string): inputApartment is RoomType => {
    return validApartments.indexOf(inputApartment) !== -1;
  };

  const onChangeValue = (value: string) => {
    if (isValidApartment(value)) {
      setApartmentType(value);
      room.type = value;
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