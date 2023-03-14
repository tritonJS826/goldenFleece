import React from "react";
import {useDictionaryContext} from "../../../../../../context/Context";
import {getRoomNumber} from "../../../../../../service/rooms";
import styles from "../RoomItem.module.scss";

interface TitleProps {
  roomId: string;
}

export const Title = (props: TitleProps) => {
  const dictionary = useDictionaryContext().dictionary;
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