import styles from "src/logic/rooms/roomsPage/roomBlock/roomItem/RoomItem.module.scss";

interface PromoImageProps {
  promoImageUrl: string;
}

export const PromoImage = (props: PromoImageProps) => {
  return(
    <div className={styles.backImageWrap}>
      <img
        className={styles.backImage}
        src={props.promoImageUrl}
        alt="room"
      />
    </div>
  );
};