import React from "react";
import {useRef} from "react";
import styles from "./SliderVideo.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import video1 from "../../resources/sliderVideos/sample_1280x720.mp4";
import video2 from "../../resources/sliderVideos/SampleVideo_1280x720_5mb.mp4";
import video3 from "../../resources/sliderVideos/SampleVideo_1280x720_10mb.mp4";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, Pagination, Navigation, Keyboard} from "swiper";

// TODO: pause video on slide change
// TODO: render any quantity of videos

export function SliderVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 15000,
        disableOnInteraction: false,
      }}
      pagination={{clickable: true}}
      navigation={true}
      keyboard={{enabled: true}}
      modules={[Autoplay, Pagination, Navigation, Keyboard]}
      className={styles.swiper}
    >
      <SwiperSlide className={styles.swiperSlide}>
        <video src="https://file-examples.com/storage/feeb72b10363daaeba4c0c9/2017/04/file_example_MP4_1280_10MG.mp4"
          ref={videoRef}
          autoPlay={true}
          controls={true}
          muted={true}
          loop={true}
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <video src={video1}
          ref={videoRef}
          autoPlay={true}
          controls={true}
          muted={true}
          loop={true}
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <video src={video2}
          ref={videoRef}
          autoPlay={true}
          controls={true}
          muted={true}
          loop={true}
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <video src={video3}
          ref={videoRef}
          autoPlay={true}
          controls={true}
          muted={true}
          loop={true}
        />
      </SwiperSlide>
    </Swiper>
  );
}
