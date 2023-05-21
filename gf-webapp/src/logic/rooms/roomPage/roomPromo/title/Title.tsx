import {languageService} from "src/service/Language/LanguageService";
import {Dictionary} from "src/model/Dictionary/Dictionary";
import styles from "src/logic/rooms/roomPage/roomPromo/RoomPromo.module.scss";

interface TitleProps {
  promoImgUrl: string;
  roomDescription: Dictionary;
}

export const Title = (props: TitleProps) => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.promo}
        src={props.promoImgUrl}
        alt="Promo image"
      />
      <h1 className={styles.title}>
        {props.roomDescription[languageService.getCurrentLanguage()].title}
      </h1>
    </div>
  );
};