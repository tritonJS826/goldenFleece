import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./roomBlock.module.scss";
import imgPromo from "../../../../resources/rooms/rooms.jpg";
import {motion} from "framer-motion";

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
            Single room
          </h3>
          <div className={styles.settingsRoom}>
            30 m
            <span className={styles.sub}>
              2
            </span>
            {" "}
            / 1 adults
          </div>
          <div className={styles.description}>
            Wake up to the breathtaking beauty of the Pindus mountians.
          </div>
          <NavLink to="/rooms/0"
            className={styles.roomLink}
          >
            <span className={styles.linkText}>
              Read more
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
            Double room
          </h3>
          <div className={styles.settingsRoom}>
            40 m
            <span className={styles.sub}>
              2
            </span>
            {" "}
            / 2 adults
          </div>
          <div className={styles.description}>
            Wake up to the breathtaking beauty of the Pindus mountians.
          </div>
          <NavLink to="/rooms/1"
            className={styles.roomLink}
          >
            <span className={styles.linkText}>
              Read more
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
            Twin room
          </h3>
          <div className={styles.settingsRoom}>
            35 m
            <span className={styles.sub}>
              2
            </span>
            {" "}
            / 2 adults
          </div>
          <div className={styles.description}>
            Wake up to the breathtaking beauty of the Pindus mountians.
          </div>
          <NavLink to="/rooms/2"
            className={styles.roomLink}
          >
            <span className={styles.linkText}>
              Read more
            </span>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

