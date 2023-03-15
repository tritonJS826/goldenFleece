import {NavLink} from "react-router-dom";
import {useDictionaryContext} from "src/context/Context";
import styles from "src/logic/rooms/roomPage/roomsBlock/RoomsBlock.module.scss";

interface RoomItemProps {
  roomId: string;
  promoImgUrl: string;
}

export const RoomItem = (props: RoomItemProps) => {
  const {roomPage} = useDictionaryContext().dictionary;
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
          TODO: render right apartmentsType for specific room
        </h3>
        <span className={styles.spanLink}>
          {roomPage.buttonText}
        </span>
      </NavLink>
    </div>
  );
};