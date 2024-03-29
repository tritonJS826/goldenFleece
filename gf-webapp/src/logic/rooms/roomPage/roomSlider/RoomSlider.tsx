import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Keyboard} from "swiper";
import {Room} from "src/model/Room/Room";
import "swiper/css";
import "swiper/css/navigation";
import styles from "src/logic/rooms/roomPage/roomSlider/RoomSlider.module.scss";

interface RoomSlider {
  images: string[]
}

export const RoomSlider = (props: RoomSlider) => {
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