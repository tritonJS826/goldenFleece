import {NavLink} from "react-router-dom";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {pages} from "src/pages";
import styles from "src/logic/rooms/roomsPage/roomBlock/roomItem/RoomItem.module.scss";

interface RoomLinkProps {
  roomId: string;
}

export const RoomLink = (props: RoomLinkProps) => {
  const dictionary = useDictionary().dictionary;
  return (
    <NavLink
      to={pages.room.path(props.roomId)}
      className={styles.roomLink}
    >
      <span className={styles.linkText}>
        {dictionary.roomInfo.moreButtonText}
      </span>
    </NavLink>
  );
};