import {useState} from "react";
import {useDictionaryContext, ModalVisibilityContext} from "src/context/Context";
import {Modal} from "src/logic/bookingPage/modal/Modal";
import {Form} from "src/logic/bookingPage/form/Form";
import {RoomsPlan} from "src/logic/bookingPage/hotelPlan/roomsPlan/RoomsPlan";
import hotelPlan from "src/resources/hotelPlan/hotelPlan.jpg";
import styles from "src/logic/bookingPage/hotelPlan/HotelPlan.module.scss";


export const HotelPlan = () => {
  const {bookingPage} = useDictionaryContext().dictionary;

  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [roomNumber, setRoomNumber] = useState<string | null>(null);

  const isBooking = (event: React.MouseEvent): void => {
    const element = event.target as HTMLElement;
    if (element.className.includes("planRoom")) {
      if (element.className.includes("disabled")) {
        event.stopPropagation();
      } else {
        event.preventDefault();
        setRoomNumber(element.id);
        setIsModalActive(true);
      }
    }
  };


  return (
    <ModalVisibilityContext.Provider
      value={{isModalActive, setIsModalActive}}
    >
      <div className={styles.wrapper}>
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
              <Form roomNumber={roomNumber} />
            </div>
          </div>
        </Modal>
        <img
          className={styles.hotelPlan}
          src={hotelPlan}
          alt="Hotel plan"
        />
        <div
          className={styles.divs}
          onClick={isBooking}
        >
          <RoomsPlan />
        </div>
      </div>
    </ModalVisibilityContext.Provider>
  );
};
