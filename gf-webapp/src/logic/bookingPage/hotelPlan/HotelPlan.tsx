import React, {useState} from "react";
import styles from "./HotelPlan.module.scss";
import {Modal} from "../modal/Modal";
import {ModalVisibilityContext} from "../../../context/Context";
import {Form} from "../form/Form";
import {useTranslation} from "react-i18next";

import hotelPlan from "../../../resources/hotelPlan/hotelPlan.jpg";

export const HotelPlan = () => {
  const {t} = useTranslation();

  const [modalActive, setModalActive] = useState(false);
  const [roomNumber, setRoomNumber] = useState<string>("");

  const isBooking = (event: React.MouseEvent): void => {
    const element = event.target as HTMLElement;
    if (element.className.includes("planRoom")) {
      event.preventDefault();
      element.setAttribute("disabled", "");
      setRoomNumber(element.id);
      setModalActive(true);
    }

  };

  return (
    <ModalVisibilityContext.Provider
      value={{modalActive, setModalActive}}
    >
      <div className={styles.wrapper}>

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
              <Form roomNumber={roomNumber} />
            </div>
          </div>
        </Modal>
        <img className={styles.hotelPlan}
          src={hotelPlan}
          alt="Hotel plan"
        />
        <div className={styles.divs}
          onClick={isBooking}
        >
          <div id="1"
            className={`${styles.planRoom} ${styles.one}`}
          >
            Single room №1
          </div>
          <div id="2"
            className={`${styles.planRoom} ${styles.two}`}
          >
            Single room №2
          </div>
          <div id="3"
            className={`${styles.planRoom} ${styles.three}`}
          >
            Double room №3
          </div>
          <div id="4"
            className={`${styles.planRoom} ${styles.four}`}
          >
            Twin room №4
          </div>
          <div id="5"
            className={`${styles.planRoom} ${styles.five}`}
          >
            Double room №5
          </div>
          <div id="6"
            className={`${styles.planRoom} ${styles.six}`}
          >
            Double room №6
          </div>
        </div>
      </div>
    </ModalVisibilityContext.Provider>
  );
};
