import React from "react";
import {useRef, useState} from "react";
import styles from "./SliderVideo.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import video1 from "../../resources/swiperVideos/sample_1280x720.mp4";
import video2 from "../../resources/swiperVideos/SampleVideo_1280x720_5mb.mp4";
import video3 from "../../resources/swiperVideos/SampleVideo_1280x720_10mb.mp4";
// import ReactPlayer from "react-player/lazy";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, Pagination, Navigation, Keyboard} from "swiper";

// TODO: pause video on slide change

export function SliderVideo() {
  // const videoData = [
  //   {
  //     id: 0,
  //     name: "video0",
  //     url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  //   },
  //   {
  //     id: 1,
  //     name: "video1",
  //     url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  //   },
  //   {
  //     id: 2,
  //     name: "video2",
  //     url: "'https://www.youtube.com/watch?v=ysz5S6PUM-U",
  //   },
  // ];
  // const [isPlaying, setIsPlaying] = useState(NaN);
  const videoRef = useRef<HTMLVideoElement>(null);
  // const handlePlayVideo = () => {
  //   if (isPlaying) {
  //     videoRef.current?.pause();
  //   } else {
  //     videoRef.current?.play();
  //   }
  //   setIsPlaying(!isPlaying);
  // };
  return (
    <>
      <Swiper
        // onSlideChange={() => {
        //   setIsPlaying(NaN);
        // }}
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
        {/* {videoData.map((data) => (
          <SwiperSlide key={data.id}>
            <ReactPlayer key={data.id}
              url={data.url}
              controls={true}
              volume={1}
              muted={true}
              onPlay={() => {
                setIsPlaying(data.id);
              }}
              playing={isPlaying === data.id}
            />
          </SwiperSlide>
        ))} */}
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
    </>
  );
}
