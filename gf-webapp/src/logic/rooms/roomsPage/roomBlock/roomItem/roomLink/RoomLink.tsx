import React from "react";
import {NavLink} from "react-router-dom";
import {useDictionary} from "../../../../../DictionaryContext/useDictionary";
import {Room} from "../../../../../../model/Room/Room";
import styles from "../RoomItem.module.scss";

interface RoomLinkProps {
  roomId: string;
}

export const RoomLink = (props: RoomLinkProps) => {
  const dictionary = useDictionary().dictionary;
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