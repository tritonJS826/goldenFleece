import React, {useState} from "react";
import styles from "./BookingPage.module.scss";
import {Form} from "./form/Form";
import {Modal} from "./modal/Modal";
import {ModalVisibilityContext} from "../../context/Context";
import {PageBorder} from "../../component/pageBorder/PageBorder";
import {BookingPromo} from "./bookingPromo/BookingPromo";
import {HotelPlan} from "./hotelPlan/HotelPLan";

export const BookingPage = () => {
  const [modalActive, setModalActive] = useState(false);

  const isBooking = (event: React.MouseEvent): void => {
    const element = event.target as HTMLElement;
    if (element.className.includes("block")) {
      event.preventDefault();
      element.setAttribute("disabled", "");
      setModalActive(true);
    }
  };

  return (
    <div>
      <PageBorder>
        <BookingPromo />
        <ModalVisibilityContext.Provider
          value={{modalActive, setModalActive}}
        >
          <Modal active={modalActive}
            setActive={setModalActive}
          >
            <div className={styles.book}>
              <div className={styles.leftSide}>
                <h1 className={styles.titleLeft}>
                  Book direct for the best price guaranteed, exclusive offers and no hidden fees.
                </h1>
              </div>
              <div className={styles.rightSide}>
                <Form />
              </div>
            </div>
          </Modal>
          <h2 className={styles.title}>
            Choose one of room
          </h2>
          <div className={styles.wrapper}
            onClick={isBooking}
          >
            <HotelPlan />
          </div>
        </ModalVisibilityContext.Provider>
      </PageBorder>
    </div>
  );
};