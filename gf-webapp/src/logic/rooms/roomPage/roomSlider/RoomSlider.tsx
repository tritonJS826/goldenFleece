import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Keyboard} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./RoomSlider.module.scss";

interface RoomSlider {
  slider: string[]
}

export const RoomSlider = ({slider}: RoomSlider) => {
  return (
    <Swiper
      className={styles.swiper}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      grabCursor={true}
      keyboard={{enabled: true}}
      modules={[Autoplay, Keyboard]}
    >
      {slider.map((slide, index) => (
        <SwiperSlide
          key={index}
          className={styles.wrap}
        >
          <img
            className={styles.slide}
            src={slide}
            alt="Slider image"
          />
          <p className={styles.number}>
            <span className={styles.span}>
              {`0${index + 1}`}
            </span>
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};