import React from "react";
import {useDictionaryContext} from "../../../../../../context/Context";
import styles from "../RoomItem.module.scss";

interface InformationProps {
  roomSquare: number;
  adults: number;
}

export const Information = (props: InformationProps) => {
  const UPPER_INDEX = 2;
  const dictionary = useDictionaryContext().dictionary;
  return (
    <div>
      <div className={styles.settingsRoom}>
        {props.roomSquare}
        {dictionary.roomInfo.dimension}
        <span className={styles.sub}>
          {`${UPPER_INDEX}`}
        </span>
        <span>
          {` / ${props.adults} `}
        </span>
        {dictionary.roomInfo.adults}
      </div>
      <div className={styles.description}>
        TODO: add room dynamic description from dictionary
      </div>
    </div>

  );
};