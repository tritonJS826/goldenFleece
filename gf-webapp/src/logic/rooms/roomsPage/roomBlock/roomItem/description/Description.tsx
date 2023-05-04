import {motion} from "framer-motion";
import {RoomLink} from "src/logic/rooms/roomsPage/roomBlock/roomItem/roomLink/RoomLink";
import {Information} from "src/logic/rooms/roomsPage/roomBlock/roomItem/information/Information";
import {Title} from "src/logic/rooms/roomsPage/roomBlock/roomItem/title/Title";
import {RoomType} from "src/model/Room/RoomType";
import styles from "src/logic/rooms/roomsPage/roomBlock/roomItem/RoomItem.module.scss";

interface DescriptionProps {
  roomNumber: number;
  roomId: string;
  roomSquare: number;
  adults: number;
  type: RoomType;
  roomDescription: string;
}

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {duration: 0.6, delay: 0.1},
  },
};

export const Description = (props: DescriptionProps) => {

  return (
    <motion.div
      variants={textAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.1, once: true}}
      className={styles.roomAbout}
    >
      {// TODO: Title shouldn't have props. Task # 121
      }
      <Title
        roomNumber={props.roomNumber}
        type={props.type}
      />
      <Information
        adults={props.adults}
        roomSquare={props.roomSquare}
        roomDescription={props.roomDescription}
        type={props.type}
      />
      <RoomLink roomId={props.roomId} />
    </motion.div>
  );
};