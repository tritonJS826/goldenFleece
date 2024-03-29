import {Fragment} from "react";
import {Room} from "src/model/Room/Room";
import {useRooms} from "src/component/rooms/useRooms";

export function Rooms() {
  const {rooms} = useRooms();

  const renderRooms = (roomsList: Room[]) => {
    return roomsList.map((room) => (
      <Fragment key={room.id}>
        <>
          Price:
          {" "}
          {room.price}
        </>
      </Fragment>
    ));
  };

  return (
    <>
      {renderRooms(rooms)}
    </>
  );
}