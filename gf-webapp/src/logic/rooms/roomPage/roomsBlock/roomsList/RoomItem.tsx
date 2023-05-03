import {NavLink} from "react-router-dom";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import styles from "src/logic/rooms/roomPage/roomsBlock/RoomsBlock.module.scss";
import {RoomType} from "src/model/Room/RoomType";

interface RoomItemProps {
  roomId: string;
  promoImgUrl: string;
  roomTitle: RoomType;
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
          {props.roomTitle}
          {/* TODO: render right apartmentsType for specific room */}
        </h3>
        <span className={styles.spanLink}>
          {roomPage.buttonText}
        </span>
      </NavLink>
    </div>
  );
};