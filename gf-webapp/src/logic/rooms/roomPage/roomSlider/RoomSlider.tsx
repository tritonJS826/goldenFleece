import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Keyboard} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./roomSlider.module.scss";

interface RoomSlider {
  images: string[]
}

export const RoomSlider = (props: RoomSlider) => {
  console.log(props.images, "!!!!!!1");
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
      {props.images.map((slideURL, index) => (
        <SwiperSlide
          key={slideURL}
          className={styles.wrap}
        >
          <img
            className={styles.slide}
            src={slideURL}
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