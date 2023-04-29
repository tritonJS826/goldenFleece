import {useEffect, useState} from "react";
import {Room} from "src/model/Room/Room";
import {RoomItem} from "src/logic/rooms/roomsPage/roomBlock/roomItem/RoomItem";
import {RoomApiService} from "src/service/RoomApi/RoomApi";
import {RoomsList} from "src/logic/rooms/roomPage/roomsBlock/roomsList/RoomsList";
import {useFilterRooms} from "src/component/filter/FilterContext";

interface RoomsBlockProps {
  setIsNavigationBlockInitializedFalse: () => void;
}

export const RoomsBlock = (props: RoomsBlockProps) => {
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
      || new Date(dateInValue).getTime() < new Date().getTime()
      || new Date(dateOutValue).getTime() < new Date().getTime()) {
      console.log("Wrong dates!!!");
      return null;
    }
    if (dateInValue !== "yyyy-MM-dd" && dateOutValue !== "yyyy-MM-dd") {
      return (new Date(roomFiltering.booked[0].period.dateOut).getTime() < new Date(dateInValue).getTime()
        && new Date(roomFiltering.booked[0].period.dateOut).getTime() < new Date(dateOutValue).getTime()) ||
        (new Date(roomFiltering.booked[0].period.dateIn).getTime() > new Date(dateInValue).getTime()
        && new Date(roomFiltering.booked[0].period.dateIn).getTime() > new Date(dateOutValue).getTime());
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
