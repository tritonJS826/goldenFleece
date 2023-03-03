import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./roomBlock.module.scss";
import imgPromo from "../../../../resources/rooms/rooms.jpg";
import {motion} from "framer-motion";
import {useCurrentLanguageContext} from "../../../../context/Context";

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
  const {language} = useCurrentLanguageContext();

  return (
    <div>
      <div className={styles.wrap}
        id={"single"}
      >
        <div className={styles.backImageWrap}>
          <img className={styles.backImage}
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
            {language.roomInfo.singleRoomTitle}
          </h3>
          <div className={styles.settingsRoom}>
            30
            {" "}
            {language.roomInfo.dimension}
            <span className={styles.sub}>
              2
            </span>
            {" "}
            / 1
            {" "}
            {language.roomInfo.adults}
          </div>
          <div className={styles.description}>
            {language.roomInfo.singleRoomDescription}
          </div>
          <NavLink to="/rooms/0"
            className={styles.roomLink}
          >
            <span className={styles.linkText}>
              {language.roomsPage.moreButtonText}
            </span>
          </NavLink>
        </motion.div>
      </div>
      <div className={styles.wrap}
        id={"double"}
      >
        <div className={styles.backImageWrap}>
          <img className={styles.backImage}
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
            {language.roomInfo.doubleRoomTitle}
          </h3>
          <div className={styles.settingsRoom}>
            40
            {" "}
            {language.roomInfo.dimension}
            <span className={styles.sub}>
              2
            </span>
            {" "}
            / 2
            {" "}
            {language.roomInfo.adults}
          </div>
          <div className={styles.description}>
            {language.roomInfo.doubleRoomDescription}
          </div>
          <NavLink to="/rooms/1"
            className={styles.roomLink}
          >
            <span className={styles.linkText}>
              {language.roomsPage.moreButtonText}
            </span>
          </NavLink>
        </motion.div>
      </div>
      <div className={styles.wrap}
        id={"twin"}
      >
        <div className={styles.backImageWrap}>
          <img className={styles.backImage}
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
            {language.roomInfo.twinRoomTitle}
          </h3>
          <div className={styles.settingsRoom}>
            35
            {" "}
            {language.roomInfo.dimension}
            <span className={styles.sub}>
              2
            </span>
            {" "}
            / 2
            {" "}
            {language.roomInfo.adults}
          </div>
          <div className={styles.description}>
            {language.roomInfo.twinRoomDescription}
          </div>
          <NavLink to="/rooms/2"
            className={styles.roomLink}
          >
            <span className={styles.linkText}>
              {language.roomsPage.moreButtonText}
            </span>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

