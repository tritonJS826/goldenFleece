import {NavLink} from "react-router-dom";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {RoomType} from "src/model/Room/RoomType";
import styles from "src/logic/rooms/roomPage/roomsBlock/RoomsBlock.module.scss";

interface RoomItemProps {
  roomId: string;
  promoImgUrl: string;
  type: RoomType;
}

export const RoomItem = (props: RoomItemProps) => {
  const {roomPage} = useDictionary().dictionary;
  return (
    <div
      key={props.roomId}
      className={styles.room}
    >
      <NavLink
        to={`/rooms/${props.roomId}`}
        className={({isActive}) =>
          isActive ? styles.link : undefined}
      >
        <img
          className={styles.roomImage}
          src={props.promoImgUrl}
          alt="room"
        />
        <h3 className={styles.title3}>
          {props.type}
        </h3>
        <span className={styles.spanLink}>
          {roomPage.buttonText}
        </span>
      </NavLink>
    </div>
  );
};