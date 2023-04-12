import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {RoomsBlock} from "src/logic/rooms/roomsPage/roomBlock/RoomBlock";
import styles from "src/logic/rooms/roomsPage/navigation/Navigation.module.scss";

interface NavigationProps {
  setIsNavigationBlockInitTrue : () => void;
}

export const Navigation = (props: NavigationProps) => {
  const {roomInfo} = useDictionary().dictionary;

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
      <RoomsBlock
        setIsNavigationBlockInitTrue={props.setIsNavigationBlockInitTrue}
      />
    </div>
  );
};

