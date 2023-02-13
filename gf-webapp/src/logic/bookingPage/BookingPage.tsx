import React, {useState} from "react";
import styles from "./BookingPage.module.scss";
import {Form} from "./form/Form";
import {Modal} from "./Modal";
import {ModalVisibilityContext} from "./context/Context";

export const BookingPage = () => {
  const [modalActive, setModalActive] = useState(false);

  const isBooking = (event: React.MouseEvent): void => {
    const element = event.target as HTMLElement;
    if (element.className.includes("block")) {
      event.preventDefault();
      console.log(element.classList);
      element.setAttribute("disabled", "");
      setModalActive(true);
    }
  };

  return (
    <div>
      <ModalVisibilityContext.Provider
        value={{modalActive, setModalActive}}
      >
        <h1>
          Booking
        </h1>
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
        <div className={styles.wrapper}
          onClick={isBooking}
        >
          <button className={styles.block}>
            Room 1
          </button>
          <button className={styles.block}>
            Room 2
          </button>
          <button className={styles.block}>
            Room 3
          </button>
          <button className={styles.block}>
            Room 4
          </button>
        </div>
      </ModalVisibilityContext.Provider>
    </div>
  );
};