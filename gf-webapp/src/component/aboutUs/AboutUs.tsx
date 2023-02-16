import React from "react";
import styles from "./aboutUs.module.scss";
import frontImg from "../../resources/about-us/kutaisi.jpg";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

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
  const {t} = useTranslation();

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
          {t("about-us-title")}
        </h2>
        <p className={styles.text}>
          {t("about-us-text")}
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