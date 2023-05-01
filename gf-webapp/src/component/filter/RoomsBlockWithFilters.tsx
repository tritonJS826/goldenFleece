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

  const adultsFilterCondition = (roomFiltering: Room) => {
    if (adultsValue !== 0) {
      return roomFiltering.adults === adultsValue;
    } else {
      return roomFiltering;
    }
  };

  const childrenFilterCondition = (roomFiltering: Room) => {
    if (childrenValue !== 0) {
      return roomFiltering.children === childrenValue;
    } else {
      return roomFiltering;
    }
  };

  const searchFilterCondition = (roomFiltering: Room) => {
    return Object.values(roomFiltering)
      .join()
      .toString()
      .toLowerCase()
      .includes(searchValue);
  };

  const dateFilterCondition = (roomFiltering: Room) => {
    if (new Date(dateInValue).getTime() >= new Date(dateOutValue).getTime()
      || new Date(dateInValue).getTime() < (new Date().getTime() - 100000000)
      || new Date(dateOutValue).getTime() < new Date().getTime()) {
      alert("Wrong dates!!!");
      return null;
    } else if (dateInValue !== "yyyy-MM-dd" && dateOutValue !== "yyyy-MM-dd") {
      const filteredRooms = roomFiltering.booked
        .filter(room =>
          (new Date(room.period.dateOut).getTime() < new Date(dateInValue).getTime()
        && new Date(room.period.dateOut).getTime() < new Date(dateOutValue).getTime()) ||
        (new Date(room.period.dateIn).getTime() > new Date(dateInValue).getTime()
            && new Date(room.period.dateIn).getTime() > new Date(dateOutValue).getTime()));

      if (filteredRooms.length === roomFiltering.booked.length) {
        return filteredRooms;
      }
    } else {
      return roomFiltering;
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
