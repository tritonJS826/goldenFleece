import React from "react";
import {motion} from "framer-motion";
import styles from "../roomItem.module.scss";
import {RoomType} from "../../../../../../model/Room";
import {RoomLink} from "../roomLink/RoomLink";
import {Information} from "../information/Information";
import {Title} from "../title/Title";

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

export const Description = ({room}: RoomType) => {

  return (
    <motion.div
      variants={textAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.1, once: true}}
      className={styles.roomAbout}
    >
      <Title room={room} />
      <Information room={room} />
      <RoomLink room={room} />
    </motion.div>
  );
};