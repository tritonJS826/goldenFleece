import {useEffect, useState} from "react";
import {Room} from "src/model/Room/Room";
import {RoomItem} from "src/logic/rooms/roomsPage/roomBlock/roomItem/RoomItem";
import {RoomApiService} from "src/service/RoomApi/RoomApi";
import {useFilterRooms} from "src/component/filter/FilterContext";

export const RoomsBlockWithFilters = () => {
  const {searchValue, adultsValue, childrenValue, dateInValue, dateOutValue} = useFilterRooms();

  const [rooms, setRooms] = useState<Room[] | null>(null);

  const initRooms = async () => {
    const roomsList = await RoomApiService.getAllRooms();
    setRooms(roomsList);
  };

  useEffect(() => {
    async function onRoomsInitialized() {
      await initRooms();
    }
    onRoomsInitialized();
  }, []);

  const adultsFilterCondition = (room: Room) => {
    if (adultsValue !== 0) {
      return room.adults === adultsValue;
    } else {
      return room;
    }
  };

  const childrenFilterCondition = (room: Room) => {
    if (childrenValue !== 0) {
      return room.children === childrenValue;
    } else {
      return room;
    }
  };

  const searchFilterCondition = (room: Room) => {
    return Object.values(room)
      .join()
      .toString()
      .toLowerCase()
      .includes(searchValue);
  };

  const getDateValue = (value?: string | Date) => {
    if (value) {
      return new Date(value).getTime();
    } else {
      return new Date().getTime();
    }
  };

  const roomsBookedCondition = (room: Room) => {
    return room.booked
      .filter(roomBooked =>
        (getDateValue(roomBooked.period.dateOut) < getDateValue(dateInValue)
    && getDateValue(roomBooked.period.dateOut) < getDateValue(dateOutValue)) ||
    (getDateValue(roomBooked.period.dateIn) > getDateValue(dateInValue)
        && getDateValue(roomBooked.period.dateIn) > getDateValue(dateOutValue)));
  };

  const dateFilterCondition = (room: Room) => {
    if (getDateValue(dateInValue) >= getDateValue(dateOutValue)
      || getDateValue(dateInValue) < (getDateValue() - 100000000)
      || getDateValue(dateOutValue) < getDateValue()) {
      alert("Wrong dates!!!");
      return null;
    } else {
      const filteredRoom = roomsBookedCondition(room);
      if (filteredRoom.length === room.booked.length) {
        return filteredRoom;
      }
    }
  };

  const filterCommonConditions = (roomsList: Room[]) => {
    return roomsList
      .filter((room) => adultsFilterCondition(room))
      .filter((room) => childrenFilterCondition(room))
      .filter((room) => searchFilterCondition(room))
      .filter((room) => dateFilterCondition(room));
  };

  const renderRoomItem = (roomsList: Room[]) => {
    return filterCommonConditions(roomsList).map(room => (
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
