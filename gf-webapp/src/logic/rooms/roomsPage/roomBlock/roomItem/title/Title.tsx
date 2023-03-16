import React from "react";
import {useDictionary} from "../../../../../DictionaryContext/useDictionary";
import {getRoomNumber} from "../../../../../../service/rooms";
import styles from "../RoomItem.module.scss";

interface TitleProps {
  roomId: string;
}

export const Title = (props: TitleProps) => {
  const dictionary = useDictionary().dictionary;
  return (
    <div>
      <span className={styles.span}>
        TODO: ID is not roomNumber, add room Number to Room model
        {getRoomNumber(props.roomId)}
      </span>
      <h3 className={styles.titleBook}>
        TODO: render right apartmentsType for specific room
      </h3>
    </div>
  );
};