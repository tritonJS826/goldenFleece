import {useDictionaryContext} from "src/context/Context";
import {RoomsBlock} from "src/logic/rooms/roomsPage/roomBlock/RoomBlock";
import styles from "src/logic/rooms/roomsPage/navigation/Navigation.module.scss";


export const Navigation = () => {
  const {roomInfo} = useDictionaryContext().dictionary;

  return (
    <div>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a
              href="#single"
              className={styles.link}
            >
              {roomInfo.singleRoomTitle}
            </a>
          </li>
          <p className={styles.line}>
            |
          </p>
          <li className={styles.listItem}>
            <a
              href="#double"
              className={styles.link}
            >
              {roomInfo.doubleRoomTitle}
            </a>
          </li>
          <p className={styles.line}>
            |
          </p>
          <li className={styles.listItem}>
            <a
              href="#twin"
              className={styles.link}
            >
              {roomInfo.twinRoomTitle}
            </a>
          </li>
        </ul>
      </nav>
      <RoomsBlock />
    </div>
  );
};

