import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation, Keyboard} from "swiper";
import image1 from "../../resources/sliderImages/Promo1.jpg";
import image2 from "../../resources/sliderImages/Promo2.jpg";
import image3 from "../../resources/sliderImages/Promo3.jpg";
import image4 from "../../resources/sliderImages/Promo4.jpg";
import image5 from "../../resources/sliderImages/Promo5.jpg";
import styles from "./Slider.module.scss";

export function Slider() {

  const sliderArray = [
    {
      src: image1,
      alt: "image1",
      text: "01",
    },
    {
      src: image2,
      alt: "image1",
      text: "02",
    },
    {
      src: image3,
      alt: "image1",
      text: "03",
    },
    {
      src: image4,
      alt: "image1",
      text: "04",
    },
    {
      src: image5,
      alt: "image1",
      text: "05",
    },
  ];

  /**
   * SwiperSlide can't be import outside Swiper.
   * If it's then images parsing one after one not ad one slider
   */

  const renderSlides = () => {
    return sliderArray.map((slider) => (
      <SwiperSlide key={slider.text}>
        <img
          className={styles.image}
          src={slider.src}
          alt={slider.alt}
        />
        <p className={styles.number}>
          <span className={styles.span}>
            {slider.text}
          </span>
        </p>
      </SwiperSlide>
    ));
  };

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
      keyboard={{enabled: true}}
      modules={[Autoplay, Pagination, Navigation, Keyboard]}
      className={styles.swiper}
    >
      {renderSlides()}
    </Swiper>
  );
}
