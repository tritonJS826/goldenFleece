import {NavLink} from "react-router-dom";
import {useDictionaryContext} from "src/context/Context";
import {Room} from "src/model/Room/Room";
import styles from "src/logic/rooms/roomsPage/roomBlock/roomItem/RoomItem.module.scss";

interface RoomLinkProps {
  roomId: string;
}

export const RoomLink = (props: RoomLinkProps) => {
  const dictionary = useDictionaryContext().dictionary;
  return (
    <NavLink
      to={`/rooms/${props.roomId}`}
      className={styles.roomLink}
    >
      <span className={styles.linkText}>
        {dictionary.roomInfo.moreButtonText}
      </span>
    </NavLink>
  );
};