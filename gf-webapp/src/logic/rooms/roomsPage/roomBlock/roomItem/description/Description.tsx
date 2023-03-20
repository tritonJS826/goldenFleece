import {motion} from "framer-motion";
import {RoomLink} from "src/logic/rooms/roomsPage/roomBlock/roomItem/roomLink/RoomLink";
import {Information} from "src/logic/rooms/roomsPage/roomBlock/roomItem/information/Information";
import {Title} from "src/logic/rooms/roomsPage/roomBlock/roomItem/title/Title";
import styles from "src/logic/rooms/roomsPage/roomBlock/roomItem/RoomItem.module.scss";

interface DescriptionProps {
  roomId: string;
  roomSquare: number;
  adults: number;
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
      <Title roomId={props.roomId} />
      <Information
        adults={props.adults}
        roomSquare={props.roomSquare}
      />
      <RoomLink roomId={props.roomId} />
    </motion.div>
  );
};