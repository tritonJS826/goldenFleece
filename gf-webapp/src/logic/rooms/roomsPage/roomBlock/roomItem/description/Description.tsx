import {motion} from "framer-motion";
import {RoomLink} from "src/logic/rooms/roomsPage/roomBlock/roomItem/roomLink/RoomLink";
import {Information} from "src/logic/rooms/roomsPage/roomBlock/roomItem/information/Information";
import {RoomType} from "src/model/Room/RoomType";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {Title} from "gf-ui-lib/src/components/Title/Title";
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
  const dictionary = useDictionary().dictionary;

  return (
    <motion.div
      variants={textAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.1, once: true}}
      className={styles.roomAbout}
    >
      <div className={styles.titleContainer}>
        <span className={styles.span}>
          {props.roomNumber}
        </span>
        <Title
          size="h1"
          text={dictionary.roomInfo[props.type]}
        />
      </div>
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