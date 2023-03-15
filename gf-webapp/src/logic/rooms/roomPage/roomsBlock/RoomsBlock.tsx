import {RoomsList} from "src/logic/rooms/roomPage/roomsBlock/roomsList/RoomsList";
import {useDictionaryContext} from "src/context/Context";
import styles from "src/logic/rooms/roomPage/roomsBlock/RoomsBlock.module.scss";


export const RoomsBlock = () => {
  const {roomInfo} = useDictionaryContext().dictionary;

  return (
    <div className={styles.roomsWrap}>
      <h2 className={styles.title2}>
        {roomInfo.roomsList}
      </h2>
      <RoomsList />
    </div>
  );
};