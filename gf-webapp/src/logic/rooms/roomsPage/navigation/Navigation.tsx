import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {RoomsBlock} from "src/logic/rooms/roomsPage/roomBlock/RoomBlock";
import styles from "src/logic/rooms/roomsPage/navigation/Navigation.module.scss";

interface NavigationProps {
  setIsNavigationBlockInitializedFalse: () => void;
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
              {roomInfo.Single}
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
              {roomInfo.Double}
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
              {roomInfo.Twin}
            </a>
          </li>
        </ul>
      </nav>
      <RoomsBlock
        setIsNavigationBlockInitializedFalse={props.setIsNavigationBlockInitializedFalse}
      />
    </div>
  );
};

