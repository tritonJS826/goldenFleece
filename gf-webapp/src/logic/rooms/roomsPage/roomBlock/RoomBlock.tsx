import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import styles from "./roomBlock.module.scss";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";
import {RoomBlockContext} from "./RoomBlockContext";
import {getRoomNumber, getRooms} from "../../../../service/rooms";
import {Room} from "../../../../model/Room";
import {Loader} from "../../../../component/loader/Loader";

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

export const RoomBlock = () => {
  const {t} = useTranslation();

  const [rooms, setRooms] = useState<Room[]>([]);
  console.log("rooms", rooms);
  const UPPER_INDEX = 2;

  useEffect(() => {
    (async () => {
      const roomsList = await getRooms();
      setRooms(roomsList);
    })();
  }, []);

  if(!rooms.length) {
    return <Loader />;
  }

  return (
    <RoomBlockContext.Provider value={{rooms}}>
      <div>
        {rooms.map(room => (
          <div className={styles.wrap}
            id={room.apartmentsType?.toLocaleLowerCase()}
            key={room.id}
          >
            <div className={styles.backImageWrap}>
              <img className={styles.backImage}
                src={room.promo}
                alt="room"
              />
            </div>
            <motion.div
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{amount: 0.1, once: true}}
              className={styles.roomAbout}
            >
              <span className={styles.span}>
                {getRoomNumber(room.id)}
              </span>
              <h3 className={styles.titleBook}>
                {t(`${room.apartmentsType?.toLocaleLowerCase()}Room`)}
              </h3>
              <div className={styles.settingsRoom}>
                {room.square}
                {t("dimension")}
                <span className={styles.sub}>
                  {`${UPPER_INDEX}`}
                </span>
                <span>
                  {` / ${room.adults} `}
                </span>
                {t("adults1")}
              </div>
              <div className={styles.description}>
                {t("wakeUp")}
              </div>
              <NavLink to={`/rooms/${room.id}`}
                className={styles.roomLink}
              >
                <span className={styles.linkText}>
                  {t("readMore")}
                </span>
              </NavLink>
            </motion.div>
          </div>
        ))}
      </div>
    </RoomBlockContext.Provider>
  );
};

