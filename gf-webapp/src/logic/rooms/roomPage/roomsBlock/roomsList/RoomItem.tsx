import {NavLink} from "react-router-dom";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {Dictionary} from "src/model/Dictionary/Dictionary";
import {languageService} from "src/service/Language/LanguageService";
import styles from "src/logic/rooms/roomPage/roomsBlock/RoomsBlock.module.scss";

interface RoomItemProps {
  roomId: string;
  promoImgUrl: string;
  roomDescription: Dictionary;
}

export const RoomItem = (props: RoomItemProps) => {
  const {roomPage} = useDictionary().dictionary;

  return (
    <div
      key={props.roomId}
      className={styles.room}
    >
      <NavLink
        to={`/rooms/${props.roomId}`}
        className={({isActive}) =>
          isActive ? styles.link : undefined}
      >
        <img
          className={styles.roomImage}
          src={props.promoImgUrl}
          alt="room"
        />
        <h3 className={styles.title3}>
          {props.roomDescription[languageService.getCurrentLanguage()].title}
        </h3>
        <span className={styles.spanLink}>
          {roomPage.buttonText}
        </span>
      </NavLink>
    </div>
  );
};