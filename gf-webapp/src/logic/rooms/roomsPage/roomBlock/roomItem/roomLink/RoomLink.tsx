import {NavLink} from "react-router-dom";
import {useDictionaryContext} from "../../../../../../context/Context";
import {Room} from "../../../../../../model/Room/Room";
import styles from "../RoomItem.module.scss";

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