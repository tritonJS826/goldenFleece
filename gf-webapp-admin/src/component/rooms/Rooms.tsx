import {useEffect, useState} from "react";
import {Room} from "src/model/Room/Room";
import {getRooms} from "src/service/RoomService";
import {Loader} from "gf-ui-lib/src/components/Loader/Loader";
import {RoomsBlockWithFilters} from "src/component/filter/RoomsBlockWithFilters";
import {
  Filters,
  defaultAdultsValue,
  defaultChildrenValue,
  MIN_DATE_IN,
  MIN_DATE_OUT,
  defaultServiceValue,
} from "src/component/filter/Filters";
import {FilterRoomsContext} from "src/component/filter/FilterContext";
import styles from "src/component/rooms/Rooms.module.scss";

export const Rooms = () => {
  const [dateInValue, setDateInValue] = useState(MIN_DATE_IN);
  const [dateOutValue, setDateOutValue] = useState(MIN_DATE_OUT);
  const [adultsValue, setAdultsValue] = useState(defaultAdultsValue);
  const [childrenValue, setChildrenValue] = useState(defaultChildrenValue);
  const [serviceValues, setServiceValues] = useState<string[]>(defaultServiceValue);

  const [rooms, setRooms] = useState<Room[] | null>(null);

  const roomsInit = async () => {
    const roomsList = await getRooms();
    setRooms(roomsList);
  };

  useEffect(() => {
    roomsInit();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Rooms
      </h2>
      <FilterRoomsContext.Provider
        value={{
          dateInValue,
          setDateInValue,
          dateOutValue,
          setDateOutValue,
          adultsValue,
          setAdultsValue,
          childrenValue,
          setChildrenValue,
          serviceValues,
          setServiceValues,
        }}
      >
        <Filters />
        {
          rooms ?
            <RoomsBlockWithFilters rooms={rooms} />
            :
            <Loader />
        }
      </FilterRoomsContext.Provider>
    </div>
  );
};