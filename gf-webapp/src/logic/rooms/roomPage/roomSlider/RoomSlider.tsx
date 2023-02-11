import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from "./roomSlider.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import {Keyboard} from "swiper";

interface RoomSlider {
  promo: string,
  slider: string,
  slider2: string,
  slider3: string,
  slider4: string,
}

export const RoomSlider = (props: RoomSlider) => {
  return (
    <Swiper className={styles.swiper}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      keyboard={{enabled: true}}
      modules={[Keyboard]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className={styles.wrap}>
        <img className={styles.slide}
          src={props?.slider}
          alt="Slider image"
        />
        <p className={styles.number}>
          <span className={styles.span}>
            01
          </span>
        </p>
      </SwiperSlide>
      <SwiperSlide className={styles.wrap}>
        <img className={styles.slide}
          src={props?.promo}
          alt="Slider image"
        />
        <p className={styles.number}>
          <span className={styles.span}>
            02
          </span>
        </p>
      </SwiperSlide>
      <SwiperSlide className={styles.wrap}>
        <img className={styles.slide}
          src={props?.slider2}
          alt="Slider image"
        />
        <p className={styles.number}>
          <span className={styles.span}>
            03
          </span>
        </p>
      </SwiperSlide>
      <SwiperSlide className={styles.wrap}>
        <img className={styles.slide}
          src={props?.slider3}
          alt="Slider image"
        />
        <p className={styles.number}>
          <span className={styles.span}>
            04
          </span>
        </p>
      </SwiperSlide>
      <SwiperSlide className={styles.wrap}>
        <img className={styles.slide}
          src={props?.slider4}
          alt="Slider image"
        />
        <p className={styles.number}>
          <span className={styles.span}>
            05
          </span>
        </p>
      </SwiperSlide>
    </Swiper>
  );
};