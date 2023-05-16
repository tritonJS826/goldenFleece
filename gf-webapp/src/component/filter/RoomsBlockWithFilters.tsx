import {useEffect, useState} from "react";
import {Room} from "src/model/Room/Room";
import {RoomApiService} from "src/service/RoomApi/RoomApi";
import {useFilterRooms} from "src/component/filter/FilterContext";
import {RoomItem} from "src/logic/rooms/roomsPage/roomBlock/roomItem/RoomItem";
import {getDateValue} from "src/utils/getDateValue";

interface RoomsBlockProps {
  setIsNavigationBlockInitializedFalse: () => void;
}

export const RoomsBlockWithFilters = (props: RoomsBlockProps) => {
  const {searchValue, adultsValue, childrenValue, dateInValue, dateOutValue} = useFilterRooms();

  const [rooms, setRooms] = useState<Room[] | null>(null);

  const initRooms = async () => {
    const roomsList = await RoomApiService.getAllRooms();
    setRooms(roomsList);
  };

  useEffect(() => {
    async function onRoomsInitialized() {
      await initRooms();
      props.setIsNavigationBlockInitializedFalse();
    }
    onRoomsInitialized();
  }, []);

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
      <RoomItem
        key={room.id}
        room={room}
      />
    ));
  };

  // if data not initialized yet
  if (!rooms) {
    return null;
  }

  // when data initialized
  return (
    <div>
      {renderRoomItem(rooms)}
    </div>
  );
};
