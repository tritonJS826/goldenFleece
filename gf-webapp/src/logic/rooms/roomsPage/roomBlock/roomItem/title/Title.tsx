import {useDictionaryContext} from "src/context/Context";
import {getRoomNumber} from "src/service/rooms";
import styles from "src/logic/rooms/roomsPage/roomBlock/roomItem/RoomItem.module.scss";

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