import React, {useState} from "react";
import styles from "./BookingPage.module.scss";
import {Form} from "./form/Form";
import {Modal} from "./modal/Modal";
import {ModalVisibilityContext} from "../../context/Context";
import {PageBorder} from "../../component/pageBorder/PageBorder";
import {BookingPromo} from "./bookingPromo/BookingPromo";
import {HotelPlan} from "./hotelPlan/HotelPLan";
import {useTranslation} from "react-i18next";

export const BookingPage = () => {
  const {t} = useTranslation();
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
                  {t("bookDirect")}
                </h1>
              </div>
              <div className={styles.rightSide}>
                <Form />
              </div>
            </div>
          </Modal>
          <h2 className={styles.title}>
            {t("chooseRoom")}
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