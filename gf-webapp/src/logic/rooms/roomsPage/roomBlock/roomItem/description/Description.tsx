import {useState} from "react";
import {motion} from "framer-motion";
import {RoomLink} from "src/logic/rooms/roomsPage/roomBlock/roomItem/roomLink/RoomLink";
import {Information} from "src/logic/rooms/roomsPage/roomBlock/roomItem/information/Information";
import {RoomType} from "src/model/Room/RoomType";
import {useDictionary, ModalVisibilityContext} from "src/logic/DictionaryContext/useDictionary";
import {Button} from "gf-ui-lib/src/components/Button/Button";
import {useFilterRooms} from "src/component/filter/FilterContext";
import {Modal} from "src/logic/bookingPage/modal/Modal";
import {Form} from "src/logic/bookingPage/form/Form";
import {Title} from "gf-ui-lib/src/components/Title/Title";
import {TitleLevel} from "gf-ui-lib/src/components/Title/TitleLevel";
import styles from "src/logic/rooms/roomsPage/roomBlock/roomItem/RoomItem.module.scss";

interface DescriptionProps {
  roomNumber: number;
  roomId: string;
  roomSquare: number;
  adults: number;
  childrenValue: number;
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

const EMPTY_INPUT_STRING = "";

export const Description = (props: DescriptionProps) => {
  const dictionary = useDictionary().dictionary;
  const {bookButtonText, closeButtonText, bookingPage} = useDictionary().dictionary;
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [isModalCheckMailActive, setIsModalCheckMailActive] = useState<boolean>(false);
  const [roomNumber, setRoomNumber] = useState<string | null>(null);
  const {setAdultsValue, setChildrenValue} = useFilterRooms();

  const isBooking = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setRoomNumber(props.roomNumber.toString());
    setAdultsValue(props.adults);
    setChildrenValue(props.childrenValue);
    setIsModalActive(true);
  };

  const closeModal = () => {
    setIsModalCheckMailActive(false);
  };

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
          level={TitleLevel.h1}
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
      <Button
        value={bookButtonText}
        onClick={isBooking}
      />
      <ModalVisibilityContext.Provider
        value={{isModalActive, setIsModalActive, isModalCheckMailActive, setIsModalCheckMailActive}}
      >
        <Modal
          active={isModalActive}
          setActive={setIsModalActive}
        >
          <div className={styles.book}>
            <div className={styles.leftSide}>
              <h1 className={styles.titleLeft}>
                {bookingPage.bookingText}
              </h1>
            </div>
            <div className={styles.rightSide}>
              <Form
                roomNumber={roomNumber ?? EMPTY_INPUT_STRING}
              />
              <Button
                value={closeButtonText}
                onClick={closeModal}
              />
            </div>
          </div>
        </Modal>
        <Modal
          active={isModalCheckMailActive}
          setActive={setIsModalCheckMailActive}
        >
          <div className={styles.modalContainer}>
            <h1 className={styles.titleLeft}>
              Please check your email to make sure you have booked a room
            </h1>
            <Button
              value={closeButtonText}
              onClick={closeModal}
            />
          </div>
        </Modal>
      </ModalVisibilityContext.Provider>
    </motion.div>
  );
};

