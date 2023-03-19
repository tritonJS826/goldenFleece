import {useDictionary} from "../../../DictionaryContext/useDictionary";
import {RoomsBlock} from "../roomBlock/RoomBlock";
import styles from "./Navigation.module.scss";


export const Navigation = () => {
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
      <RoomsBlock />
    </div>
  );
};

