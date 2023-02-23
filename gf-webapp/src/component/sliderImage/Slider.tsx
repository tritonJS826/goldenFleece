import React from "react";
import styles from "./Slider.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import image1 from "../../resources/sliderImages/Promo1.jpg";
import image2 from "../../resources/sliderImages/Promo2.jpg";
import image3 from "../../resources/sliderImages/Promo3.jpg";
import image4 from "../../resources/sliderImages/Promo4.jpg";
import image5 from "../../resources/sliderImages/Promo5.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation, Keyboard} from "swiper";

// TODO: render any quantity of images

export function Slider() {
  return (
    <Swiper
      observer={true}
      observeParents={true}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      // pagination={{clickable: true}}
      // navigation={true}
      keyboard={{enabled: true}}
      modules={[Autoplay, Pagination, Navigation, Keyboard]}
      className={styles.swiper}
    >
      <SwiperSlide>
        <img className={styles.image}
          src={image1}
          alt="image1"
        />
        <p className={styles.number}>
          <span className={styles.span}>
            01
          </span>
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.image}
          src={image2}
          alt="image2"
        />
        <p className={styles.number}>
          <span className={styles.span}>
            02
          </span>
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.image}
          src={image3}
          alt="image3"
        />
        <p className={styles.number}>
          <span className={styles.span}>
            03
          </span>
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.image}
          src={image4}
          alt="image4"
        />
        <p className={styles.number}>
          <span className={styles.span}>
            04
          </span>
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.image}
          src={image5}
          alt="image5"
        />
        <p className={styles.number}>
          <span className={styles.span}>
            05
          </span>
        </p>
      </SwiperSlide>
    </Swiper>
  );
}
