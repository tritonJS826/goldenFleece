import {Room} from "src/model/Room/Room";
import {useFilterRooms} from "src/component/filter/FilterContext";
import {RoomSimplified} from "src/component/rooms/roomSimplified/RoomSimplified";
import {getDateValue} from "src/utils/getDateValue";
import styles from "src/component/filter/Filters.module.scss";

interface RoomsListProps {
  rooms:Room[]
}

export const RoomsBlockWithFilters = (props: RoomsListProps) => {
  const {searchValue, adultsValue, childrenValue, dateInValue, dateOutValue} = useFilterRooms();

  const filterAdults = (room: Room) => {
    if (adultsValue !== 0) {
      return room.adults === adultsValue;
    } else {
      return room;
    }
  };

  const filterChildren = (room: Room) => {
    if (childrenValue !== 0) {
      return room.children === childrenValue;
    } else {
      return room;
    }
  };

  const filterSearch = (room: Room) => {
    return Object.values(room)
      .join()
      .toString()
      .toLowerCase()
      .includes(searchValue);
  };

  const filterRoomsNotBooked = (room: Room) => {
    return room.booked
      .filter(roomBooked =>
        (getDateValue(roomBooked.period.dateOut) < getDateValue(dateInValue)
    && getDateValue(roomBooked.period.dateOut) < getDateValue(dateOutValue)) ||
    (getDateValue(roomBooked.period.dateIn) > getDateValue(dateInValue)
        && getDateValue(roomBooked.period.dateIn) > getDateValue(dateOutValue)));
  };

  const filterDate = (room: Room) => {
    const filteredRoom = filterRoomsNotBooked(room);
    if (filteredRoom.length === room.booked.length) {
      return filteredRoom;
    } else if (dateInValue === "") {
      return room;
    }
  };

  const filterRooms = (roomsList: Room[]) => {
    return roomsList
      .filter(filterAdults)
      .filter(filterChildren)
      .filter(filterSearch)
      .filter(filterDate);
  };

  const renderRoomItem = (roomsList: Room[]) => {
    return filterRooms(roomsList).map(room => (
      <RoomSimplified
        key={room.id}
        room={room}
      />
    ));
  };

  // if data not initialized yet
  if (!props.rooms) {
    return null;
  }

  // when data initialized
  return (
    <div className={styles.container}>
      {renderRoomItem(props.rooms)}
    </div>
  );
};