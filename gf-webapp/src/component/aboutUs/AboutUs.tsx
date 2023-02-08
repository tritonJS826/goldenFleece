import React from "react";
import styles from "./aboutUs.module.scss";
import frontImg from "../../resources/about-us/kutaisi.jpg";
import {motion} from "framer-motion";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.6, delay: 0.1},
  },
};

const imageAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.6, delay: 0.1},
  },
};

export const AboutUs = () => {
  return (
    <div className={styles.wrapper}>
      <motion.div
        variants={textAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.1, once: true}}
        className={styles.container}
      >
        <h2 className={styles.title}>
          We always welcome new guests
        </h2>
        <p className={styles.text}>
          This property features a restaurant, free private parking, a seasonal
          outdoor pool and a bar. It offers family rooms and a terrace. It offers
          a 24-hour front desk, a shuttle service, a shared kitchen and free Wi-Fi.
        </p>
      </motion.div>
      <motion.div
        variants={imageAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.1, once: true}}
        className={styles.imgContainer}
      >
        <img className={styles.frontImg}
          src={frontImg}
          alt="kutaisi"
        />
      </motion.div>
    </div>
  );
};