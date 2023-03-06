import React from "react";
import {useCurrentDictionaryContext} from "../../../../context/Context";
import {NavLink} from "react-router-dom";
import imgPromo from "../../../../resources/rooms/rooms.jpg";
import {motion} from "framer-motion";
import styles from "./roomBlock.module.scss";


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
  const {dictionary} = useCurrentDictionaryContext();

  return (
    <div>
      <div
        className={styles.wrap}
        id={"single"}
      >
        <div className={styles.backImageWrap}>
          <img
            className={styles.backImage}
            src={imgPromo}
            alt="Single room"
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
            01
          </span>
          <h3 className={styles.titleBook}>
            {dictionary.roomInfo.singleRoomTitle}
          </h3>
          <div className={styles.settingsRoom}>
            30
            {" "}
            {dictionary.roomInfo.dimension}
            <span className={styles.sub}>
              2
            </span>
            {" "}
            / 1
            {" "}
            {dictionary.roomInfo.adults}
          </div>
          <div className={styles.description}>
            {dictionary.roomInfo.singleRoomDescription}
          </div>
          <NavLink
            to="/rooms/0"
            className={styles.roomLink}
          >
            <span className={styles.linkText}>
              {dictionary.roomsPage.moreButtonText}
            </span>
          </NavLink>
        </motion.div>
      </div>
      <div
        className={styles.wrap}
        id={"double"}
      >
        <div className={styles.backImageWrap}>
          <img
            className={styles.backImage}
            src={imgPromo}
            alt="Double room"
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
            02
          </span>
          <h3 className={styles.titleBook}>
            {dictionary.roomInfo.doubleRoomTitle}
          </h3>
          <div className={styles.settingsRoom}>
            40
            {" "}
            {dictionary.roomInfo.dimension}
            <span className={styles.sub}>
              2
            </span>
            {" "}
            / 2
            {" "}
            {dictionary.roomInfo.adults}
          </div>
          <div className={styles.description}>
            {dictionary.roomInfo.doubleRoomDescription}
          </div>
          <NavLink
            to="/rooms/1"
            className={styles.roomLink}
          >
            <span className={styles.linkText}>
              {dictionary.roomsPage.moreButtonText}
            </span>
          </NavLink>
        </motion.div>
      </div>
      <div
        className={styles.wrap}
        id={"twin"}
      >
        <div className={styles.backImageWrap}>
          <img
            className={styles.backImage}
            src={imgPromo}
            alt="Twin room"
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
            03
          </span>
          <h3 className={styles.titleBook}>
            {dictionary.roomInfo.twinRoomTitle}
          </h3>
          <div className={styles.settingsRoom}>
            35
            {" "}
            {dictionary.roomInfo.dimension}
            <span className={styles.sub}>
              2
            </span>
            {" "}
            / 2
            {" "}
            {dictionary.roomInfo.adults}
          </div>
          <div className={styles.description}>
            {dictionary.roomInfo.twinRoomDescription}
          </div>
          <NavLink
            to="/rooms/2"
            className={styles.roomLink}
          >
            <span className={styles.linkText}>
              {dictionary.roomsPage.moreButtonText}
            </span>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

